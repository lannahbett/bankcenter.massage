import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const FILLOUT_FORM_ID = "t5gEJM6xFDus";
const FILLOUT_API_URL = `https://api.fillout.com/v1/api/forms/${FILLOUT_FORM_ID}`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
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

    const { name, email, phone, preferredDatetime, message, language } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
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
