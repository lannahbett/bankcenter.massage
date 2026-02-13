import { Phone, Mail, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-green-dark text-primary-foreground py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 text-center md:text-left">
            {/* Portrait placeholder — replace src with actual photo */}
            








            <div>
              <h3 className="font-heading font-bold text-xl mb-1">
              </h3>
              
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm text-primary-foreground/70">
            <a href="tel:+36209249660" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              +36 20 924 96 60
            </a>
            <a href="mailto:bank.center1054@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4" />
              bank.center1054@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              1054 Szabadság tér 7.
            </span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} Bazsó Zsanett – {t("footerRole")}. {t("footerCopyright")}</p>
          <a href="#" className="hover:text-primary-foreground/60 transition-colors">{t("footerPrivacy")}</a>
        </div>
      </div>
    </footer>);
};

export default Footer;