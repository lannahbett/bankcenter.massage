import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Üzenet elküldve!",
      description: "Hamarosan felveszem Önnel a kapcsolatot.",
    });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="kapcsolat" className="py-20 md:py-28 bg-section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-accent font-body font-semibold tracking-wide uppercase text-sm mb-3">
            Kapcsolat
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Foglalj időpontot!
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Keressen bizalommal telefonon, e-mailben vagy üzenetben, és egyeztessünk az
            Önnek legmegfelelőbb időpontról.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="font-heading font-semibold text-foreground text-xl mb-6">
              Bazsó Zsanett
            </h3>

            {[
              {
                icon: Phone,
                label: "Telefon",
                value: "+36 20 924 96 60 / +36 20 507 75 16",
                href: "tel:+36209249660",
              },
              {
                icon: Mail,
                label: "E-mail",
                value: "bank.center1054@gmail.com",
                href: "mailto:bank.center1054@gmail.com",
              },
              {
                icon: MapPin,
                label: "Cím",
                value: "1054 Szabadság tér 7., Bank Center földszint",
                href: "https://maps.google.com/?q=1054+Budapest+Szabadság+tér+7",
              },
              {
                icon: Instagram,
                label: "Instagram",
                value: "@bank_center_massage",
                href: "https://instagram.com/bank_center_massage",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:shadow-sm transition-shadow group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors text-sm">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="space-y-5 bg-card p-8 rounded-xl border border-border shadow-sm"
          >
            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                Név
              </label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition"
                placeholder="Az Ön neve"
              />
            </div>
            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                E-mail
              </label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition"
                placeholder="pelda@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                Telefonszám
              </label>
              <input
                type="tel"
                maxLength={20}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition"
                placeholder="+36 ..."
              />
            </div>
            <div>
              <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                Üzenet
              </label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition resize-none"
                placeholder="Miben segíthetek?"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 rounded-lg bg-accent text-accent-foreground font-body font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Küldés
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
