import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const Contact = () => {
  const { t } = useI18n();

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

          {/* Fillout embedded form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
            <iframe
              src="https://forms.fillout.com/t/t5gEJM6xFDus"
              title="Contact Form"
              className="w-full border-0"
              style={{ height: 600 }}
              allow="clipboard-write"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
