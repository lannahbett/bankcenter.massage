import { motion } from "framer-motion";
import { Hand, Activity, Waves, Zap, Grip } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const Services = () => {
  const { t } = useI18n();

  const services = [
    { icon: Hand, title: t("svc1Title"), desc: t("svc1Desc") },
    { icon: Activity, title: t("svc2Title"), desc: t("svc2Desc") },
    { icon: Zap, title: t("svc3Title"), desc: t("svc3Desc") },
    { icon: Grip, title: t("svc4Title"), desc: t("svc4Desc") },
    { icon: Waves, title: t("svc5Title"), desc: t("svc5Desc") },
  ];

  return (
    <section id="szolgaltatasok" className="py-20 md:py-28 bg-section-alt">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="text-center mb-14">
          <p className="text-accent font-body font-semibold tracking-wide uppercase text-sm mb-3">{t("servicesTag")}</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{t("servicesTitle")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-card rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{s.desc}</p>
              <a href="#kapcsolat" className="mt-5 inline-flex items-center text-primary font-body font-semibold text-sm hover:text-accent transition-colors">
                {t("svcCta")}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
