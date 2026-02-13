import { motion } from "framer-motion";
import heroImage from "@/assets/hero-massage.jpg";
import { useI18n } from "@/lib/i18n";

const Hero = () => {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt={t("heroImgAlt")} className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-green-dark/75" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-2xl">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            {t("heroTitle")}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-4 text-balance">
            {t("heroSub")}
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-base md:text-lg text-gold-light mb-10">
            {t("heroExtra")}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }} className="flex flex-col sm:flex-row gap-4">
            <a href="#kapcsolat" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-accent text-accent-foreground font-body font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03]">
              {t("heroCta")}
            </a>
            <a href="#szolgaltatasok" className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-body font-medium text-lg hover:bg-primary-foreground/10 transition-all duration-300">
              {t("heroServices")}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
