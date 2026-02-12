import { motion } from "framer-motion";
import { MapPin, User, Target, Clock } from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    text: "Belvárosi, könnyen megközelíthető helyszín a Bank Centerben.",
  },
  {
    icon: User,
    text: "Személyre szabott, komplex terápiák, nem sablonmasszázs.",
  },
  {
    icon: Target,
    text: "Fókusz a fájdalomcsillapításon, stresszoldáson és regeneráción.",
  },
  {
    icon: Clock,
    text: "Diszkrét, nyugodt környezet, rugalmas időpontfoglalás.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-gold font-body font-semibold tracking-wide uppercase text-sm mb-3">
            Előnyök
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Miért válassz engem?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-primary-foreground/5 backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                <b.icon className="w-5 h-5 text-gold" />
              </div>
              <p className="text-primary-foreground/90 leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
