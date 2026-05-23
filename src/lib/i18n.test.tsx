import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, screen, act, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { I18nProvider, useI18n, type Lang } from "@/lib/i18n";
import Index from "@/pages/Index";

const STORAGE_KEY = "bcm_lang";

// Representative strings per language drawn from every page section.
const samples: Record<Lang, string[]> = {
  hu: [
    "Rólam",
    "Szolgáltatások",
    "Időpontfoglalás",
    "Gyógymasszázs a Bank Centerben",
    "Bazsó Zsanett – gyógymasszőr",
    "Trigger pont kezelés",
    "Miért válassz engem?",
    "Foglalj időpontot!",
    "Minden jog fenntartva.",
  ],
  en: [
    "About",
    "Services",
    "Book now",
    "Therapeutic Massage at Bank Center",
    "Zsanett Bazsó – Therapeutic Masseuse",
    "Trigger Point Treatment",
    "Why choose me?",
    "Book an appointment!",
    "All rights reserved.",
  ],
  pt: [
    "Sobre mim",
    "Serviços",
    "Agendar",
    "Massagem Terapêutica no Bank Center",
    "Zsanett Bazsó – Massoterapeuta",
    "Tratamento de Pontos Gatilho",
    "Por que me escolher?",
    "Agende sua consulta!",
    "Todos os direitos reservados.",
  ],
  es: [
    "Sobre mí",
    "Servicios",
    "Reservar",
    "Masaje Terapéutico en el Bank Center",
    "Zsanett Bazsó – Masajista Terapéutica",
    "Tratamiento de Puntos Gatillo",
    "¿Por qué elegirme?",
    "¡Reserva tu cita!",
    "Todos los derechos reservados.",
  ],
};

// Unique-per-language strings (no collisions across dictionaries) used to
// confirm the OPPOSITE languages are not leaking into the rendered UI.
const uniqueMarkers: Record<Lang, string> = {
  hu: "Miért válassz engem?",
  en: "Why choose me?",
  pt: "Por que me escolher?",
  es: "¿Por qué elegirme?",
};

const renderIndex = () =>
  render(
    <MemoryRouter>
      <I18nProvider>
        <Index />
      </I18nProvider>
    </MemoryRouter>
  );

describe("i18n language switching", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = "";
  });
  afterEach(() => cleanup());

  (Object.keys(samples) as Lang[]).forEach((lang) => {
    it(`renders all UI strings in ${lang} after reload`, () => {
      window.localStorage.setItem(STORAGE_KEY, lang);
      renderIndex();

      // Every sampled string is present (at least once)
      for (const text of samples[lang]) {
        expect(
          screen.getAllByText(text).length,
          `expected "${text}" in ${lang}`
        ).toBeGreaterThan(0);
      }

      // No leakage from other languages
      for (const other of Object.keys(uniqueMarkers) as Lang[]) {
        if (other === lang) continue;
        expect(
          screen.queryByText(uniqueMarkers[other]),
          `${uniqueMarkers[other]} should NOT appear when lang=${lang}`
        ).toBeNull();
      }

      const expectedHtmlLang = lang === "pt" ? "pt-BR" : lang;
      expect(document.documentElement.lang).toBe(expectedHtmlLang);
    });
  });

  it("persists language across remount (simulated reload)", () => {
    window.localStorage.setItem(STORAGE_KEY, "es");
    const { unmount } = renderIndex();
    expect(screen.getAllByText("¿Por qué elegirme?").length).toBeGreaterThan(0);
    unmount();

    // Fresh mount — should still be Spanish
    renderIndex();
    expect(screen.getAllByText("¿Por qué elegirme?").length).toBeGreaterThan(0);
    expect(document.documentElement.lang).toBe("es");
  });
});

describe("setLang", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = "";
  });
  afterEach(() => cleanup());

  const Probe = ({ to }: { to: Lang }) => {
    const { lang, setLang, t } = useI18n();
    return (
      <div>
        <span data-testid="lang">{lang}</span>
        <span data-testid="cta">{t("navCta")}</span>
        <button onClick={() => setLang(to)}>switch</button>
      </div>
    );
  };

  it("writes to localStorage and updates <html lang> (pt → pt-BR)", () => {
    render(
      <I18nProvider>
        <Probe to="pt" />
      </I18nProvider>
    );
    act(() => {
      screen.getByRole("button", { name: "switch" }).click();
    });
    expect(screen.getByTestId("lang").textContent).toBe("pt");
    expect(screen.getByTestId("cta").textContent).toBe("Agendar");
    expect(window.localStorage.getItem(STORAGE_KEY)).toBe("pt");
    expect(document.documentElement.lang).toBe("pt-BR");
  });
});