import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const FILLOUT_FORM_ID = "t5gEJM6xFDus";
const FILLOUT_API_URL = `https://api.fillout.com/v1/api/forms/${FILLOUT_FORM_ID}`;

// In-memory rate limiting (per isolate instance)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const MAX_REQUESTS = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  // Cleanup old entries if map grows large
  if (rateLimitMap.size > 500) {
    for (const [key, val] of rateLimitMap.entries()) {
      if (now > val.resetAt) rateLimitMap.delete(key);
    }
  }
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }
  entry.count++;
  return entry.count <= MAX_REQUESTS;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limit by IP
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") || "unknown";
    if (!checkRateLimit(clientIp)) {
      return new Response(JSON.stringify({ error: "Too many requests. Please try again later." }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const apiKey = Deno.env.get("FILLOUT_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Missing API key" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const url = new URL(req.url);

    // GET /submit-to-fillout?meta=true — return form field IDs for debugging
    if (req.method === "GET" && url.searchParams.get("meta") === "true") {
      const metaRes = await fetch(FILLOUT_API_URL, {
        headers: { Authorization: `Bearer ${apiKey}` },
      });
      const metaBody = await metaRes.text();
      return new Response(metaBody, {
        status: metaRes.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // POST — submit form data
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const preferredDatetime = typeof body.preferredDatetime === "string" ? body.preferredDatetime.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const language = typeof body.language === "string" ? body.language.trim() : "";
    const honeypot = body._hp;
    const submitTime = typeof body._t === "number" ? body._t : 0;

    // Bot protection: reject if honeypot filled or submitted too fast (<3s)
    if (honeypot) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (submitTime && Date.now() - submitTime < 3000) {
      return new Response(JSON.stringify({ error: "Please wait before submitting" }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Input validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || name.length > 100) {
      return new Response(JSON.stringify({ error: "Invalid name" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!email || !emailRegex.test(email) || email.length > 254) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (phone && phone.length > 30) {
      return new Response(JSON.stringify({ error: "Invalid phone" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!message || message.length > 5000) {
      return new Response(JSON.stringify({ error: "Invalid message" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (preferredDatetime && preferredDatetime.length > 100) {
      return new Response(JSON.stringify({ error: "Invalid date/time" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const validLangs = ["hu", "en", "pt", "es", ""];
    if (!validLangs.includes(language)) {
      return new Response(JSON.stringify({ error: "Invalid language" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // First, fetch form metadata to get field IDs dynamically
    const metaRes = await fetch(FILLOUT_API_URL, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });

    if (!metaRes.ok) {
      const errText = await metaRes.text();
      console.error("Failed to fetch form metadata:", errText);
      return new Response(JSON.stringify({ error: "Failed to reach Fillout" }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const formMeta = await metaRes.json();
    const questions = formMeta.questions || [];

    // Map field names to Fillout question IDs (case-insensitive match on name)
    const findId = (namePattern: string) => {
      const q = questions.find((q: any) =>
        q.name?.toLowerCase().includes(namePattern.toLowerCase())
      );
      return q?.id;
    };

    const submissionQuestions: { id: string; value: string }[] = [];
    const nameId = findId("name");
    const emailId = findId("email");
    const phoneId = findId("phone");
    const dateTimeId = findId("date") || findId("time") || findId("preferred");
    const messageId = findId("message");

    if (nameId) submissionQuestions.push({ id: nameId, value: name });
    if (emailId) submissionQuestions.push({ id: emailId, value: email });
    if (phoneId && phone) submissionQuestions.push({ id: phoneId, value: phone });
    if (dateTimeId && preferredDatetime) submissionQuestions.push({ id: dateTimeId, value: preferredDatetime });
    if (messageId) submissionQuestions.push({ id: messageId, value: message });

    // Add language as a hidden/extra field if there's one, otherwise skip
    const langId = findId("language") || findId("lang");
    if (langId && language) submissionQuestions.push({ id: langId, value: language });

    console.log("Submitting to Fillout:", JSON.stringify(submissionQuestions));

    const submitRes = await fetch(`${FILLOUT_API_URL}/submissions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        submissions: [{ questions: submissionQuestions }],
      }),
    });

    const submitBody = await submitRes.text();
    console.log("Fillout response:", submitRes.status, submitBody);

    if (!submitRes.ok) {
      return new Response(JSON.stringify({ error: "Fillout submission failed" }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
