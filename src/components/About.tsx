import { motion } from "framer-motion";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="rolam" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent font-body font-semibold tracking-wide uppercase text-sm mb-3">
              Bemutatkozás
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              Bazsó Zsanett – gyógymasszőr
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Szenvedélyem, hogy segítsek Önnek visszanyerni a teste egyensúlyát. Célom, hogy
              ne csupán pillanatnyi könnyebbséget nyújtsak, hanem hosszú távon javítsam a
              közérzetét. Egyéni, komplex terápiákat állítok össze minden páciensemnek –
              legyen szó irodai ülőmunkából eredő feszültségekről, sport utáni regenerációról
              vagy krónikus fájdalmak enyhítéséről.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Heart,
                title: "Személyre szabott kezelés",
                text: "Minden terápia az Ön egyéni panaszaira épül, nem sablonmasszázst kap.",
              },
              {
                icon: ShieldCheck,
                title: "Szakértő kezekben",
                text: "Okleveles gyógymasszőrként a leghatékonyabb technikákat alkalmazom.",
              },
              {
                icon: Sparkles,
                title: "Hosszú távú eredmény",
                text: "A fájdalomcsillapítás mellett a megelőzésre és regenerációra is fókuszálok.",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
