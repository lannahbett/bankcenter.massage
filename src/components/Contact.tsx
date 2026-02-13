import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useI18n } from "@/lib/i18n";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", phone: "", dateTime: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = t("contactNameReq");
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t("contactEmailReq");
    if (!form.message.trim()) e.message = t("contactMessageReq");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          dateTime: form.dateTime.trim(),
          message: form.message.trim(),
        },
      });
      if (error) throw error;
      toast({ title: t("contactSuccess"), description: t("contactSuccessDesc") });
      setForm({ name: "", email: "", phone: "", dateTime: "", message: "" });
      setErrors({});
    } catch {
      toast({ title: t("contactError"), variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition";

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
                className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover border-2 border-primary/20 shadow-sm"
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

          {/* Form */}
          <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} onSubmit={handleSubmit} className="space-y-5 bg-card p-8 rounded-xl border border-border shadow-sm" noValidate>
            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-1.5">{t("contactName")}</label>
              <input type="text" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder={t("contactNamePh")} />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-1.5">{t("contactEmail")}</label>
              <input type="email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder={t("contactEmailPh")} />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-1.5">{t("contactPhone")}</label>
              <input type="tel" maxLength={20} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder={t("contactPhonePh")} />
            </div>
            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-1.5">{t("contactDateTime")}</label>
              <input type="text" maxLength={100} value={form.dateTime} onChange={(e) => setForm({ ...form, dateTime: e.target.value })} className={inputClass} placeholder={t("contactDateTimePh")} />
            </div>
            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-1.5">{t("contactMessage")}</label>
              <textarea required maxLength={1000} rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} placeholder={t("contactMessagePh")} />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <button type="submit" disabled={submitting} className="w-full px-8 py-4 rounded-lg bg-accent text-accent-foreground font-body font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed">
              {submitting ? "..." : t("contactSubmit")}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
