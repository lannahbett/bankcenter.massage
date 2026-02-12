import { motion } from "framer-motion";
import { Hand, Activity, Waves, Zap, Grip } from "lucide-react";

const services = [
  {
    icon: Hand,
    title: "Gyógymasszázs",
    desc: "Fájdalomcsillapítás, stresszoldás és regeneráció ülőmunkából, feszes izmokból vagy krónikus panaszokból eredő problémákra. Hatékonyan lazítja az izmokat és javítja a vérkeringést.",
  },
  {
    icon: Activity,
    title: "Kinesio tape felhelyezés",
    desc: "Izom- és ízületi panaszok támogatása speciális ragasztószalaggal. Ideális sport utáni regenerációra és a mindennapi mozgás segítésére.",
  },
  {
    icon: Zap,
    title: "Trigger pont kezelés",
    desc: "Célzott izomcsomók oldása a nyak-, váll- és hátfájdalmak enyhítésére. Pontos technikával szüntetem meg a fájdalomforrásokat.",
  },
  {
    icon: Grip,
    title: "Fascia kés",
    desc: "Modern fasciakezelés a letapadások oldására és a mozgástartomány javítására. Hatékonyan csökkenti a mélyben lévő feszültségeket.",
  },
  {
    icon: Waves,
    title: "Flossing terápia",
    desc: "Kompressziós technika a keringés javítására és a szövetek regenerációjára. Kíméletes, mégis hatékony módszer a mobilitás növelésére.",
  },
];

const Services = () => {
  return (
    <section id="szolgaltatasok" className="py-20 md:py-28 bg-section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-accent font-body font-semibold tracking-wide uppercase text-sm mb-3">
            Amiben segíthetek
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Szolgáltatások és terápiák
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-xl mb-3">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {s.desc}
              </p>
              <a
                href="#kapcsolat"
                className="mt-5 inline-flex items-center text-primary font-body font-semibold text-sm hover:text-accent transition-colors"
              >
                Érdekel a kezelés →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
