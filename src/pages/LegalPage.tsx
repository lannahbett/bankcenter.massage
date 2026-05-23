import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/lib/i18n";
import { getPrivacy, getTerms, type LegalDoc } from "@/lib/legal-i18n";

type Props = { variant: "privacy" | "terms" };

const LegalPage = ({ variant }: Props) => {
  const { lang } = useI18n();
  const doc: LegalDoc = variant === "privacy" ? getPrivacy(lang) : getTerms(lang);

  useEffect(() => {
    document.title = `${doc.title} – Bazsó Zsanett`;
    const meta =
      document.querySelector('meta[name="description"]') ??
      (() => {
        const m = document.createElement("meta");
        m.setAttribute("name", "description");
        document.head.appendChild(m);
        return m;
      })();
    meta.setAttribute("content", doc.metaDescription);
  }, [doc]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <article className="container max-w-3xl pt-32 pb-16">
        <Link
          to="/"
          className="inline-block mb-6 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {doc.backHome}
        </Link>
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-3">{doc.title}</h1>
        <p className="text-sm text-muted-foreground mb-8">{doc.lastUpdated}</p>
        <p className="text-base leading-relaxed mb-10">{doc.intro}</p>
        <div className="space-y-8">
          {doc.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-heading text-xl font-semibold mb-3">{s.heading}</h2>
              <div className="space-y-2 text-base leading-relaxed">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
      <Footer />
    </main>
  );
};

export default LegalPage;