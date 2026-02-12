import { motion } from "framer-motion";
import heroImage from "@/assets/hero-massage.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Nyugodt masszázs szoba a Bank Centerben"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-green-dark/75" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6"
          >
            Gyógymasszázs a Bank Centerben
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-4 text-balance"
          >
            Akár egy kis kényeztetésre van szüksége egy munkanap után, vagy legyen szó
            fájdalomcsillapításról, stresszoldásról, regenerációról – egyéni komplex
            terápiák személyre szabottan.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base md:text-lg text-gold-light mb-10"
          >
            Könnyen elérhető gyógymasszázs a belváros szívében, a Bank Center földszintjén.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#kapcsolat"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-accent text-accent-foreground font-body font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
            >
              Foglalj időpontot!
            </a>
            <a
              href="#szolgaltatasok"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-body font-medium text-lg hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Szolgáltatások
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
