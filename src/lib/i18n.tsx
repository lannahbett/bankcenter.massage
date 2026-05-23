import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "hu" | "en" | "pt" | "es";

const translations = {
  hu: {
    // Navbar
    navAbout: "Rólam",
    navServices: "Szolgáltatások",
    navContact: "Kapcsolat",
    navCta: "Időpontfoglalás",
    // Hero
    heroTitle: "Gyógymasszázs a Bank Centerben",
    heroSub: "Akár egy kis kényeztetésre van szüksége egy munkanap után, vagy legyen szó fájdalomcsillapításról, stresszoldásról, regenerációról – egyéni komplex terápiák személyre szabottan.",
    heroExtra: "Könnyen elérhető gyógymasszázs a belváros szívében, a Bank Center földszintjén.",
    heroCta: "Foglalj időpontot!",
    heroServices: "Szolgáltatások",
    heroImgAlt: "Nyugodt masszázs szoba a Bank Centerben",
    // About
    aboutTag: "Bemutatkozás",
    aboutTitle: "Bazsó Zsanett – gyógymasszőr",
    aboutText: "Szenvedélyem, hogy segítsek Önnek visszanyerni a teste egyensúlyát. Célom, hogy ne csupán pillanatnyi könnyebbséget nyújtsak, hanem hosszú távon javítsam a közérzetét. Egyéni, komplex terápiákat állítok össze minden páciensemnek – legyen szó irodai ülőmunkából eredő feszültségekről, sport utáni regenerációról vagy krónikus fájdalmak enyhítéséről.",
    aboutCard1Title: "Személyre szabott kezelés",
    aboutCard1Text: "Minden terápia az Ön egyéni panaszaira épül, nem sablonmasszázst kap.",
    aboutCard2Title: "Szakértő kezekben",
    aboutCard2Text: "Okleveles gyógymasszőrként a leghatékonyabb technikákat alkalmazom.",
    aboutCard3Title: "Hosszú távú eredmény",
    aboutCard3Text: "A fájdalomcsillapítás mellett a megelőzésre és regenerációra is fókuszálok.",
    // Services
    servicesTag: "Amiben segíthetek",
    servicesTitle: "Szolgáltatások és terápiák",
    svc1Title: "Gyógymasszázs",
    svc1Desc: "Fájdalomcsillapítás, stresszoldás és regeneráció ülőmunkából, feszes izmokból vagy krónikus panaszokból eredő problémákra. Hatékonyan lazítja az izmokat és javítja a vérkeringést.",
    svc2Title: "Kinesio tape felhelyezés",
    svc2Desc: "Izom- és ízületi panaszok támogatása speciális ragasztószalaggal. Ideális sport utáni regenerációra és a mindennapi mozgás segítésére.",
    svc3Title: "Trigger pont kezelés",
    svc3Desc: "Célzott izomcsomók oldása a nyak-, váll- és hátfájdalmak enyhítésére. Pontos technikával szüntetem meg a fájdalomforrásokat.",
    svc4Title: "Fascia kés",
    svc4Desc: "Modern fasciakezelés a letapadások oldására és a mozgástartomány javítására. Hatékonyan csökkenti a mélyben lévő feszültségeket.",
    svc5Title: "Flossing terápia",
    svc5Desc: "Kompressziós technika a keringés javítására és a szövetek regenerációjára. Kíméletes, mégis hatékony módszer a mobilitás növelésére.",
    svcCta: "Érdekel a kezelés →",
    // Benefits
    benefitsTag: "Előnyök",
    benefitsTitle: "Miért válassz engem?",
    benefit1: "Belvárosi, könnyen megközelíthető helyszín a Bank Centerben.",
    benefit2: "Személyre szabott, komplex terápiák, nem sablonmasszázs.",
    benefit3: "Fókusz a fájdalomcsillapításon, stresszoldáson és regeneráción.",
    benefit4: "Diszkrét, nyugodt környezet, rugalmas időpontfoglalás.",
    // Contact
    contactTag: "Kapcsolat",
    contactTitle: "Foglalj időpontot!",
    contactSub: "Keressen bizalommal telefonon, e-mailben vagy üzenetben, és egyeztessünk az Önnek legmegfelelőbb időpontról.",
    contactName: "Név",
    contactNamePh: "Az Ön neve",
    contactEmail: "E-mail",
    contactEmailPh: "pelda@email.com",
    contactPhone: "Telefonszám",
    contactPhonePh: "+36 ...",
    contactDateTime: "Kívánt időpont",
    contactDateTimePh: "pl. 2025. február 20., 14:00",
    contactMessage: "Üzenet",
    contactMessagePh: "Miben segíthetek?",
    contactSubmit: "Küldés",
    contactSuccess: "Köszönöm, hamarosan jelentkezem!",
    contactSuccessDesc: "Az üzenetet megkaptam, hamarosan felveszem Önnel a kapcsolatot.",
    contactError: "Hiba történt az üzenet küldésekor. Kérjük, próbálja újra.",
    contactNameReq: "A név megadása kötelező.",
    contactEmailReq: "Érvényes e-mail cím szükséges.",
    contactMessageReq: "Az üzenet megadása kötelező.",
    contactPhoneLabel: "Telefon",
    contactEmailLabel: "E-mail",
    contactAddressLabel: "Cím",
    contactInstagramLabel: "Instagram",
    // Footer
    footerRole: "Gyógymasszázs",
    footerCopyright: "Minden jog fenntartva.",
    footerPrivacy: "Adatkezelési tájékoztató",
  },
  en: {
    navAbout: "About",
    navServices: "Services",
    navContact: "Contact",
    navCta: "Book now",
    heroTitle: "Therapeutic Massage at Bank Center",
    heroSub: "Whether you need a little pampering after a workday, or you're dealing with pain relief, stress management, or recovery — personalized complex therapies tailored to you.",
    heroExtra: "Easily accessible therapeutic massage in the heart of Budapest, on the ground floor of the Bank Center.",
    heroCta: "Book an appointment!",
    heroServices: "Services",
    heroImgAlt: "Calm massage room at the Bank Center",
    aboutTag: "About me",
    aboutTitle: "Zsanett Bazsó – Therapeutic Masseuse",
    aboutText: "My passion is helping you regain your body's balance. My goal is not just to provide temporary relief, but to improve your well-being in the long run. I design individual, complex therapies for each of my patients — whether it's tension from office work, post-sport recovery, or chronic pain management.",
    aboutCard1Title: "Personalized treatment",
    aboutCard1Text: "Every therapy is built around your individual issues, not a one-size-fits-all massage.",
    aboutCard2Title: "Expert hands",
    aboutCard2Text: "As a certified therapeutic masseuse, I apply the most effective techniques.",
    aboutCard3Title: "Long-term results",
    aboutCard3Text: "I focus not only on pain relief but also on prevention and recovery.",
    servicesTag: "How I can help",
    servicesTitle: "Services & Therapies",
    svc1Title: "Therapeutic Massage",
    svc1Desc: "Pain relief, stress management and recovery for problems arising from sedentary work, tense muscles or chronic conditions. Effectively relaxes muscles and improves circulation.",
    svc2Title: "Kinesio Tape Application",
    svc2Desc: "Support for muscle and joint problems with specialized tape. Ideal for post-sport recovery and everyday mobility.",
    svc3Title: "Trigger Point Treatment",
    svc3Desc: "Targeted release of muscle knots to relieve neck, shoulder and back pain. Precise technique to eliminate pain sources.",
    svc4Title: "Fascia Knife",
    svc4Desc: "Modern fascia treatment for releasing adhesions and improving range of motion. Effectively reduces deep-seated tension.",
    svc5Title: "Flossing Therapy",
    svc5Desc: "Compression technique for improving circulation and tissue recovery. Gentle yet effective method for increasing mobility.",
    svcCta: "I'm interested →",
    benefitsTag: "Advantages",
    benefitsTitle: "Why choose me?",
    benefit1: "Downtown location in the Bank Center, easy to reach.",
    benefit2: "Personalized, complex therapies, not template massages.",
    benefit3: "Focus on pain relief, stress management and recovery.",
    benefit4: "Discreet, calm environment with flexible scheduling.",
    contactTag: "Contact",
    contactTitle: "Book an appointment!",
    contactSub: "Feel free to reach out by phone, email or message, and we'll find the best time for you.",
    contactName: "Name",
    contactNamePh: "Your name",
    contactEmail: "Email",
    contactEmailPh: "example@email.com",
    contactPhone: "Phone number",
    contactPhonePh: "+36 ...",
    contactDateTime: "Preferred date/time",
    contactDateTimePh: "e.g. Feb 20, 2025, 2:00 PM",
    contactMessage: "Message",
    contactMessagePh: "How can I help?",
    contactSubmit: "Send",
    contactSuccess: "Thank you, I will get back to you soon!",
    contactSuccessDesc: "Your message has been received. I'll contact you shortly.",
    contactError: "An error occurred while sending the message. Please try again.",
    contactNameReq: "Name is required.",
    contactEmailReq: "A valid email address is required.",
    contactMessageReq: "Message is required.",
    contactPhoneLabel: "Phone",
    contactEmailLabel: "Email",
    contactAddressLabel: "Address",
    contactInstagramLabel: "Instagram",
    footerRole: "Therapeutic Massage",
    footerCopyright: "All rights reserved.",
    footerPrivacy: "Privacy policy",
  },
  pt: {
    navAbout: "Sobre mim",
    navServices: "Serviços",
    navContact: "Contacto",
    navCta: "Agendar",
    heroTitle: "Massagem Terapêutica no Bank Center",
    heroSub: "Seja para relaxar após um dia de trabalho, ou para alívio da dor, gestão do stress e recuperação — terapias complexas e personalizadas para si.",
    heroExtra: "Massagem terapêutica facilmente acessível no coração de Budapeste, no rés-do-chão do Bank Center.",
    heroCta: "Marcar consulta!",
    heroServices: "Serviços",
    heroImgAlt: "Sala de massagem tranquila no Bank Center",
    aboutTag: "Sobre mim",
    aboutTitle: "Zsanett Bazsó – Massoterapeuta",
    aboutText: "A minha paixão é ajudá-lo a recuperar o equilíbrio do seu corpo. O meu objetivo não é apenas proporcionar alívio temporário, mas melhorar o seu bem-estar a longo prazo. Elaboro terapias individuais e complexas para cada paciente — seja tensão do trabalho de escritório, recuperação desportiva ou gestão de dores crónicas.",
    aboutCard1Title: "Tratamento personalizado",
    aboutCard1Text: "Cada terapia é construída em torno das suas queixas individuais.",
    aboutCard2Title: "Mãos especializadas",
    aboutCard2Text: "Como massoterapeuta certificada, aplico as técnicas mais eficazes.",
    aboutCard3Title: "Resultados a longo prazo",
    aboutCard3Text: "Foco não só no alívio da dor, mas também na prevenção e recuperação.",
    servicesTag: "Como posso ajudar",
    servicesTitle: "Serviços e Terapias",
    svc1Title: "Massagem Terapêutica",
    svc1Desc: "Alívio da dor, gestão do stress e recuperação para problemas de trabalho sedentário, músculos tensos ou condições crónicas.",
    svc2Title: "Aplicação de Kinesio Tape",
    svc2Desc: "Suporte para problemas musculares e articulares com fita especializada. Ideal para recuperação desportiva.",
    svc3Title: "Tratamento de Pontos Gatilho",
    svc3Desc: "Libertação direcionada de nós musculares para aliviar dores no pescoço, ombros e costas.",
    svc4Title: "Faca de Fáscia",
    svc4Desc: "Tratamento moderno de fáscia para libertar aderências e melhorar a amplitude de movimento.",
    svc5Title: "Terapia Flossing",
    svc5Desc: "Técnica de compressão para melhorar a circulação e regeneração dos tecidos.",
    svcCta: "Tenho interesse →",
    benefitsTag: "Vantagens",
    benefitsTitle: "Porquê escolher-me?",
    benefit1: "Localização central no Bank Center, fácil acesso.",
    benefit2: "Terapias personalizadas e complexas, não massagens padronizadas.",
    benefit3: "Foco no alívio da dor, gestão do stress e recuperação.",
    benefit4: "Ambiente discreto e tranquilo, horários flexíveis.",
    contactTag: "Contacto",
    contactTitle: "Marque a sua consulta!",
    contactSub: "Contacte-me por telefone, e-mail ou mensagem e encontraremos o melhor horário para si.",
    contactName: "Nome",
    contactNamePh: "O seu nome",
    contactEmail: "E-mail",
    contactEmailPh: "exemplo@email.com",
    contactPhone: "Telefone",
    contactPhonePh: "+36 ...",
    contactDateTime: "Data/hora preferida",
    contactDateTimePh: "ex. 20 fev 2025, 14:00",
    contactMessage: "Mensagem",
    contactMessagePh: "Como posso ajudar?",
    contactSubmit: "Enviar",
    contactSuccess: "Obrigada, entrarei em contacto em breve!",
    contactSuccessDesc: "A sua mensagem foi recebida. Entrarei em contacto brevemente.",
    contactError: "Ocorreu um erro ao enviar a mensagem. Tente novamente.",
    contactNameReq: "O nome é obrigatório.",
    contactEmailReq: "É necessário um e-mail válido.",
    contactMessageReq: "A mensagem é obrigatória.",
    contactPhoneLabel: "Telefone",
    contactEmailLabel: "E-mail",
    contactAddressLabel: "Morada",
    contactInstagramLabel: "Instagram",
    footerRole: "Massagem Terapêutica",
    footerCopyright: "Todos os direitos reservados.",
    footerPrivacy: "Política de privacidade",
  },
  es: {
    navAbout: "Sobre mí",
    navServices: "Servicios",
    navContact: "Contacto",
    navCta: "Reservar",
    heroTitle: "Masaje Terapéutico en el Bank Center",
    heroSub: "Ya sea que necesite un poco de relajación después del trabajo, o se trate de alivio del dolor, gestión del estrés o recuperación — terapias complejas y personalizadas para usted.",
    heroExtra: "Masaje terapéutico fácilmente accesible en el corazón de Budapest, en la planta baja del Bank Center.",
    heroCta: "¡Reserva tu cita!",
    heroServices: "Servicios",
    heroImgAlt: "Sala de masaje tranquila en el Bank Center",
    aboutTag: "Sobre mí",
    aboutTitle: "Zsanett Bazsó – Masajista Terapéutica",
    aboutText: "Mi pasión es ayudarte a recuperar el equilibrio de tu cuerpo. Mi objetivo no es solo brindar alivio temporal, sino mejorar tu bienestar a largo plazo. Diseño terapias individuales y complejas para cada paciente — ya sea tensión del trabajo de oficina, recuperación deportiva o manejo del dolor crónico.",
    aboutCard1Title: "Tratamiento personalizado",
    aboutCard1Text: "Cada terapia se basa en tus molestias individuales, no es un masaje estándar.",
    aboutCard2Title: "En manos expertas",
    aboutCard2Text: "Como masajista terapéutica certificada, aplico las técnicas más efectivas.",
    aboutCard3Title: "Resultados a largo plazo",
    aboutCard3Text: "Me enfoco no solo en el alivio del dolor, sino también en la prevención y recuperación.",
    servicesTag: "Cómo puedo ayudar",
    servicesTitle: "Servicios y Terapias",
    svc1Title: "Masaje Terapéutico",
    svc1Desc: "Alivio del dolor, gestión del estrés y recuperación para problemas de trabajo sedentario, músculos tensos o condiciones crónicas.",
    svc2Title: "Aplicación de Kinesio Tape",
    svc2Desc: "Soporte para problemas musculares y articulares con cinta especializada. Ideal para recuperación deportiva.",
    svc3Title: "Tratamiento de Puntos Gatillo",
    svc3Desc: "Liberación dirigida de nudos musculares para aliviar dolores de cuello, hombros y espalda.",
    svc4Title: "Cuchillo de Fascia",
    svc4Desc: "Tratamiento moderno de fascia para liberar adherencias y mejorar el rango de movimiento.",
    svc5Title: "Terapia Flossing",
    svc5Desc: "Técnica de compresión para mejorar la circulación y regeneración de los tejidos.",
    svcCta: "Me interesa →",
    benefitsTag: "Ventajas",
    benefitsTitle: "¿Por qué elegirme?",
    benefit1: "Ubicación céntrica en el Bank Center, fácil acceso.",
    benefit2: "Terapias personalizadas y complejas, no masajes estándar.",
    benefit3: "Enfoque en alivio del dolor, gestión del estrés y recuperación.",
    benefit4: "Ambiente discreto y tranquilo, horarios flexibles.",
    contactTag: "Contacto",
    contactTitle: "¡Reserva tu cita!",
    contactSub: "Contáctame por teléfono, correo o mensaje y encontraremos el mejor horario para ti.",
    contactName: "Nombre",
    contactNamePh: "Tu nombre",
    contactEmail: "Correo electrónico",
    contactEmailPh: "ejemplo@email.com",
    contactPhone: "Teléfono",
    contactPhonePh: "+36 ...",
    contactDateTime: "Fecha/hora preferida",
    contactDateTimePh: "ej. 20 feb 2025, 14:00",
    contactMessage: "Mensaje",
    contactMessagePh: "¿En qué puedo ayudarte?",
    contactSubmit: "Enviar",
    contactSuccess: "¡Gracias, me pondré en contacto pronto!",
    contactSuccessDesc: "Tu mensaje ha sido recibido. Me pondré en contacto en breve.",
    contactError: "Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.",
    contactNameReq: "El nombre es obligatorio.",
    contactEmailReq: "Se requiere un correo electrónico válido.",
    contactMessageReq: "El mensaje es obligatorio.",
    contactPhoneLabel: "Teléfono",
    contactEmailLabel: "Correo",
    contactAddressLabel: "Dirección",
    contactInstagramLabel: "Instagram",
    footerRole: "Masaje Terapéutico",
    footerCopyright: "Todos los derechos reservados.",
    footerPrivacy: "Política de privacidad",
  },
} as const;

export type TranslationKey = keyof typeof translations.hu;

type I18nContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
};

const I18nContext = createContext<I18nContextType>({
  lang: "hu",
  setLang: () => {},
  t: (key) => key,
});

const STORAGE_KEY = "bcm_lang";
const VALID: Lang[] = ["hu", "en", "pt", "es"];

const getInitialLang = (): Lang => {
  if (typeof window === "undefined") return "hu";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  const initial = stored && VALID.includes(stored) ? stored : "hu";
  if (typeof document !== "undefined") {
    document.documentElement.lang = initial;
  }
  return initial;
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const t = (key: TranslationKey) => translations[lang][key] || translations.hu[key] || key;
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
