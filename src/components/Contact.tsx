import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

const Contact = () => {
  const { t, lang } = useI18n();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", dateTime: "", message: "" });
  const [honeypot, setHoneypot] = useState("");
  const [formLoadTime] = useState(Date.now());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) { toast({ title: t("contactNameReq"), variant: "destructive" }); return; }
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) { toast({ title: t("contactEmailReq"), variant: "destructive" }); return; }
    if (!form.message.trim()) { toast({ title: t("contactMessageReq"), variant: "destructive" }); return; }

    setLoading(true);
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/submit-to-fillout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
        },
         body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || null,
          preferredDatetime: form.dateTime.trim() || null,
          message: form.message.trim(),
          language: lang,
          _hp: honeypot,
          _t: formLoadTime,
        }),
      });

      if (!res.ok) throw new Error("Submit failed");

      toast({ title: t("contactSuccess"), description: t("contactSuccessDesc") });
      setForm({ name: "", email: "", phone: "", dateTime: "", message: "" });
    } catch {
      toast({ title: t("contactError"), variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kapcsolat" className="py-20 md:py-28 bg-section-alt">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="text-center mb-14">
          <p className="text-accent font-body font-semibold tracking-wide uppercase text-sm mb-3">{t("contactTag")}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{t("contactTitle")}</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">{t("contactSub")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="space-y-6">
            <div className="flex flex-col items-center sm:items-start gap-4 mb-6">
              <img
                src="/portrait-zsanett.jpg"
                alt="Bazsó Zsanett"
                className="w-28 h-28 md:w-32 md:h-32 rounded-xl object-cover border-2 border-primary/20 shadow-sm"
              />
              <h3 className="font-heading font-semibold text-foreground text-xl">Bazsó Zsanett</h3>
            </div>
            {[
              { icon: Phone, label: t("contactPhoneLabel"), value: "+36 20 924 96 60 / +36 20 507 75 16", href: "tel:+36209249660" },
              { icon: Mail, label: t("contactEmailLabel"), value: "bank.center1054@gmail.com", href: "mailto:bank.center1054@gmail.com" },
              { icon: MapPin, label: t("contactAddressLabel"), value: "1054 Szabadság tér 7., Bank Center földszint", href: "https://maps.google.com/?q=1054+Budapest+Szabadság+tér+7" },
              { icon: Instagram, label: t("contactInstagramLabel"), value: "@bank_center_massage", href: "https://instagram.com/bank_center_massage" },
            ].map((item, i) => (
              <a key={i} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-sm transition-shadow group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors text-sm">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
            <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border shadow-sm p-6 md:p-8 space-y-5">
              {/* Honeypot field - hidden from real users */}
              <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" tabIndex={-1}>
                <input type="text" name="_hp" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contactName")} *</label>
                <Input name="name" value={form.name} onChange={handleChange} placeholder={t("contactNamePh")} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contactEmail")} *</label>
                <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder={t("contactEmailPh")} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contactPhone")}</label>
                <Input name="phone" value={form.phone} onChange={handleChange} placeholder={t("contactPhonePh")} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contactDateTime")}</label>
                <Input name="dateTime" value={form.dateTime} onChange={handleChange} placeholder={t("contactDateTimePh")} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contactMessage")} *</label>
                <Textarea name="message" value={form.message} onChange={handleChange} placeholder={t("contactMessagePh")} rows={4} />
              </div>
              <Button type="submit" disabled={loading} className="w-full gap-2">
                <Send className="w-4 h-4" />
                {loading ? "..." : t("contactSubmit")}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
