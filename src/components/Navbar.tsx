import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#rolam", label: "Rólam" },
  { href: "#szolgaltatasok", label: "Szolgáltatások" },
  { href: "#kapcsolat", label: "Kapcsolat" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-green-dark/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="font-heading font-bold text-primary-foreground text-xl">
          Bazsó Zsanett
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-primary-foreground/80 hover:text-gold font-body text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kapcsolat"
            className="px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-body font-semibold text-sm shadow hover:shadow-md transition-all"
          >
            Időpontfoglalás
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-green-dark/98 backdrop-blur-md border-t border-primary-foreground/10 mt-2">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-primary-foreground/80 hover:text-gold font-body text-base font-medium transition-colors py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kapcsolat"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-5 py-3 rounded-lg bg-accent text-accent-foreground font-body font-semibold text-center"
            >
              Időpontfoglalás
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
