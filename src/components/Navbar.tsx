import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useI18n, Lang } from "@/lib/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const langs: { code: Lang; label: string; full: string }[] = [
  { code: "hu", label: "HU", full: "Magyar" },
  { code: "en", label: "EN", full: "English" },
  { code: "pt", label: "PT", full: "Português" },
  { code: "es", label: "ES", full: "Español" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useI18n();

  const currentLang = langs.find((l) => l.code === lang) ?? langs[0];

  const links = [
    { href: "#rolam", label: t("navAbout") },
    { href: "#szolgaltatasok", label: t("navServices") },
    { href: "#kapcsolat", label: t("navContact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LangDropdown = ({ compact = false }: { compact?: boolean }) => (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-primary-foreground/80 hover:text-primary-foreground font-body text-sm font-medium transition-colors focus:outline-none">
        <Globe className={compact ? "w-4 h-4" : "w-4 h-4"} />
        <span className="text-xs font-semibold">{currentLang.label}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-popover border border-border min-w-[160px]">
        {langs.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`cursor-pointer font-body text-sm ${
              lang === l.code ? "font-bold text-accent-foreground bg-accent" : ""
            }`}
          >
            {l.label} – {l.full}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

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
            {t("navCta")}
          </a>
          <LangDropdown />
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <LangDropdown compact />
          <button
            className="text-primary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
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
              {t("navCta")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
