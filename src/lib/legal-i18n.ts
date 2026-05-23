import type { Lang } from "@/lib/i18n";

export type LegalSection = { heading: string; body: string[] };
export type LegalDoc = {
  title: string;
  metaDescription: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
  backHome: string;
};

const LAST_UPDATED = "2026-02-13";

const privacy: Record<Lang, LegalDoc> = {
  hu: {
    title: "Adatkezelési tájékoztató",
    metaDescription: "Bazsó Zsanett gyógymasszőr adatkezelési tájékoztatója – GDPR-megfelelő tájékoztatás.",
    lastUpdated: `Utolsó frissítés: ${LAST_UPDATED}`,
    intro: "Jelen tájékoztató ismerteti, hogy Bazsó Zsanett egyéni vállalkozó (a továbbiakban: „Adatkezelő”) miként kezeli az Ön személyes adatait a bankcentermassage.lovable.app weboldal és a kapcsolódó masszázsszolgáltatások igénybevétele során, az (EU) 2016/679 általános adatvédelmi rendelet (GDPR) és a 2011. évi CXII. törvény (Infotv.) szerint.",
    sections: [
      { heading: "Adatkezelő", body: [
        "Név: Bazsó Zsanett egyéni vállalkozó",
        "Cím: 1054 Budapest, Szabadság tér 7. (Bank Center)",
        "E-mail: bank.center1054@gmail.com",
        "Telefon: +36 20 924 96 60",
      ]},
      { heading: "Kezelt adatok köre és célja", body: [
        "Kapcsolatfelvétel és időpontfoglalás: név, e-mail, telefonszám, kívánt időpont, üzenet tartalma.",
        "Cél: a kapcsolatfelvételre adott válasz, időpont-egyeztetés és a szolgáltatás teljesítése.",
        "Jogalap: a GDPR 6. cikk (1) bek. a) pontja (hozzájárulás), b) pontja (szerződés teljesítése) és f) pontja (jogos érdek a kapcsolatfelvétel kezeléséhez).",
      ]},
      { heading: "Megőrzési idő", body: [
        "Kapcsolatfelvételi üzenetek: a kapcsolatfelvételtől számított legfeljebb 12 hónapig, kivéve, ha hosszabb megőrzést jogszabály vagy szerződéses jogviszony indokol.",
        "Számviteli bizonylatok (ha keletkeznek): a számvitelről szóló törvény szerint 8 évig.",
      ]},
      { heading: "Adatfeldolgozók", body: [
        "Fillout (űrlapfeldolgozás) – a kapcsolatfelvételi űrlap továbbítása.",
        "Lovable Cloud (Supabase infrastruktúra) – tárhely- és háttérszolgáltatás.",
        "Google LLC (e-mail kommunikáció a hivatalos címen keresztül).",
      ]},
      { heading: "Adatbiztonság", body: [
        "Az adatok titkosított csatornán (HTTPS) érkeznek; szerveroldali validálás, rate limiting és szigorú hozzáférés-szabályozás (RLS) védi azokat.",
        "Az Adatkezelő észszerű technikai és szervezési intézkedéseket alkalmaz az adatok védelmére.",
      ]},
      { heading: "Sütik", body: [
        "A weboldal kizárólag a kiválasztott nyelv megőrzése érdekében használ helyi tárolást (localStorage). Marketing- vagy követőcookie-kat nem alkalmazunk.",
      ]},
      { heading: "Az Ön jogai", body: [
        "Hozzáférés, helyesbítés, törlés, az adatkezelés korlátozása, adathordozhatóság, tiltakozás, valamint a hozzájárulás bármikor történő visszavonása.",
        "Panasz a Nemzeti Adatvédelmi és Információszabadság Hatóságnál (NAIH, 1055 Budapest, Falk Miksa utca 9–11., naih.hu) tehető.",
      ]},
      { heading: "Kapcsolat adatvédelmi ügyekben", body: [
        "E-mail: bank.center1054@gmail.com",
      ]},
    ],
    backHome: "← Vissza a főoldalra",
  },
  en: {
    title: "Privacy Policy",
    metaDescription: "Privacy policy for Bazsó Zsanett's therapeutic massage practice – GDPR compliant.",
    lastUpdated: `Last updated: ${LAST_UPDATED}`,
    intro: "This Privacy Policy explains how Bazsó Zsanett, sole proprietor (the “Controller”), processes your personal data when you use the bankcentermassage.lovable.app website and related massage services, in accordance with Regulation (EU) 2016/679 (GDPR) and Hungarian Act CXII of 2011.",
    sections: [
      { heading: "Controller", body: [
        "Name: Bazsó Zsanett, sole proprietor",
        "Address: 1054 Budapest, Szabadság tér 7. (Bank Center)",
        "Email: bank.center1054@gmail.com",
        "Phone: +36 20 924 96 60",
      ]},
      { heading: "Data we collect and why", body: [
        "Contact and booking requests: name, email, phone number, preferred date/time, message content.",
        "Purpose: responding to your inquiry, scheduling and delivering the requested service.",
        "Legal basis: GDPR Art. 6(1)(a) consent, (b) performance of a contract, (f) legitimate interest in handling inquiries.",
      ]},
      { heading: "Retention", body: [
        "Contact messages: up to 12 months from the inquiry, unless a longer period is required by law or contract.",
        "Accounting records (where applicable): 8 years, as required by the Hungarian Accounting Act.",
      ]},
      { heading: "Processors", body: [
        "Fillout – form processing for the contact form.",
        "Lovable Cloud (Supabase infrastructure) – hosting and backend services.",
        "Google LLC – email communication via the official mailbox.",
      ]},
      { heading: "Security", body: [
        "Data is transmitted over HTTPS; server-side validation, rate limiting and strict row-level access controls protect it.",
        "The Controller applies reasonable technical and organisational safeguards.",
      ]},
      { heading: "Cookies", body: [
        "The site uses only essential local storage to remember your language preference. No marketing or tracking cookies are set.",
      ]},
      { heading: "Your rights", body: [
        "Access, rectification, erasure, restriction, portability, objection, and withdrawal of consent at any time.",
        "You may lodge a complaint with the Hungarian National Authority for Data Protection (NAIH, 1055 Budapest, Falk Miksa u. 9–11., naih.hu).",
      ]},
      { heading: "Privacy contact", body: [
        "Email: bank.center1054@gmail.com",
      ]},
    ],
    backHome: "← Back to home",
  },
  pt: {
    title: "Política de Privacidade",
    metaDescription: "Política de Privacidade da prática de massagem terapêutica de Bazsó Zsanett – em conformidade com o GDPR.",
    lastUpdated: `Última atualização: ${LAST_UPDATED}`,
    intro: "Esta Política de Privacidade descreve como Bazsó Zsanett, profissional autônoma (o “Controlador”), trata seus dados pessoais quando você utiliza o site bankcentermassage.lovable.app e os serviços de massagem relacionados, em conformidade com o Regulamento (UE) 2016/679 (GDPR) e a Lei húngara CXII de 2011.",
    sections: [
      { heading: "Controlador", body: [
        "Nome: Bazsó Zsanett, profissional autônoma",
        "Endereço: 1054 Budapeste, Szabadság tér 7. (Bank Center)",
        "E-mail: bank.center1054@gmail.com",
        "Telefone: +36 20 924 96 60",
      ]},
      { heading: "Dados coletados e finalidade", body: [
        "Contato e agendamento: nome, e-mail, telefone, data/horário desejado e conteúdo da mensagem.",
        "Finalidade: responder à sua solicitação, agendar e prestar o serviço.",
        "Base legal: GDPR art. 6(1)(a) consentimento, (b) execução de contrato, (f) legítimo interesse no atendimento de solicitações.",
      ]},
      { heading: "Retenção", body: [
        "Mensagens de contato: até 12 meses a partir da solicitação, salvo se um prazo maior for exigido por lei ou contrato.",
        "Documentos contábeis (quando aplicável): 8 anos, conforme a Lei de Contabilidade da Hungria.",
      ]},
      { heading: "Operadores", body: [
        "Fillout – processamento do formulário de contato.",
        "Lovable Cloud (infraestrutura Supabase) – hospedagem e back-end.",
        "Google LLC – comunicação por e-mail pelo endereço oficial.",
      ]},
      { heading: "Segurança", body: [
        "Os dados trafegam por HTTPS; há validação no servidor, limitação de taxa e controle estrito de acesso por linha (RLS).",
        "O Controlador adota medidas técnicas e organizacionais razoáveis.",
      ]},
      { heading: "Cookies", body: [
        "O site usa apenas armazenamento local essencial para lembrar o idioma escolhido. Não utilizamos cookies de marketing ou rastreamento.",
      ]},
      { heading: "Seus direitos", body: [
        "Acesso, retificação, exclusão, limitação, portabilidade, oposição e revogação do consentimento a qualquer momento.",
        "Você pode apresentar reclamação à Autoridade Nacional de Proteção de Dados da Hungria (NAIH, 1055 Budapeste, Falk Miksa u. 9–11., naih.hu).",
      ]},
      { heading: "Contato sobre privacidade", body: [
        "E-mail: bank.center1054@gmail.com",
      ]},
    ],
    backHome: "← Voltar para o início",
  },
  es: {
    title: "Política de Privacidad",
    metaDescription: "Política de Privacidad de la consulta de masaje terapéutico de Bazsó Zsanett – conforme al RGPD.",
    lastUpdated: `Última actualización: ${LAST_UPDATED}`,
    intro: "Esta Política de Privacidad explica cómo Bazsó Zsanett, autónoma (la “Responsable”), trata tus datos personales cuando utilizas el sitio bankcentermassage.lovable.app y los servicios de masaje relacionados, conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley húngara CXII de 2011.",
    sections: [
      { heading: "Responsable del tratamiento", body: [
        "Nombre: Bazsó Zsanett, autónoma",
        "Dirección: 1054 Budapest, Szabadság tér 7. (Bank Center)",
        "Correo: bank.center1054@gmail.com",
        "Teléfono: +36 20 924 96 60",
      ]},
      { heading: "Datos tratados y finalidad", body: [
        "Contacto y reservas: nombre, correo, teléfono, fecha/hora preferida y contenido del mensaje.",
        "Finalidad: responder a tu consulta, gestionar la cita y prestar el servicio.",
        "Base jurídica: RGPD art. 6(1)(a) consentimiento, (b) ejecución de un contrato, (f) interés legítimo en gestionar consultas.",
      ]},
      { heading: "Conservación", body: [
        "Mensajes de contacto: hasta 12 meses desde la consulta, salvo que la ley o el contrato exijan un plazo mayor.",
        "Documentos contables (si procede): 8 años, según la Ley de Contabilidad húngara.",
      ]},
      { heading: "Encargados", body: [
        "Fillout – procesamiento del formulario de contacto.",
        "Lovable Cloud (infraestructura Supabase) – alojamiento y back-end.",
        "Google LLC – comunicación por correo a través del buzón oficial.",
      ]},
      { heading: "Seguridad", body: [
        "Los datos se transmiten por HTTPS; aplicamos validación en servidor, limitación de peticiones y control estricto por filas (RLS).",
        "La Responsable aplica medidas técnicas y organizativas razonables.",
      ]},
      { heading: "Cookies", body: [
        "El sitio solo utiliza almacenamiento local esencial para recordar el idioma elegido. No usamos cookies de marketing ni de seguimiento.",
      ]},
      { heading: "Tus derechos", body: [
        "Acceso, rectificación, supresión, limitación, portabilidad, oposición y retirada del consentimiento en cualquier momento.",
        "Puedes presentar una reclamación ante la Autoridad Nacional de Protección de Datos de Hungría (NAIH, 1055 Budapest, Falk Miksa u. 9–11., naih.hu).",
      ]},
      { heading: "Contacto de privacidad", body: [
        "Correo: bank.center1054@gmail.com",
      ]},
    ],
    backHome: "← Volver al inicio",
  },
};

const terms: Record<Lang, LegalDoc> = {
  hu: {
    title: "Általános Szerződési Feltételek",
    metaDescription: "Bazsó Zsanett gyógymasszőr szolgáltatásainak Általános Szerződési Feltételei.",
    lastUpdated: `Utolsó frissítés: ${LAST_UPDATED}`,
    intro: "Jelen Általános Szerződési Feltételek (ÁSZF) Bazsó Zsanett egyéni vállalkozó (a továbbiakban: „Szolgáltató”) által nyújtott masszázsszolgáltatásokra vonatkoznak, amelyeket a bankcentermassage.lovable.app weboldalon keresztül vagy közvetlen időpontfoglalással lehet igénybe venni.",
    sections: [
      { heading: "1. Szolgáltatás", body: [
        "A Szolgáltató gyógymasszázs, kinesio tape, trigger pont, fascia és flossing terápiát nyújt a 1054 Budapest, Szabadság tér 7. (Bank Center) szám alatt.",
        "A masszázs nem minősül orvosi kezelésnek és nem helyettesíti az orvosi ellátást.",
      ]},
      { heading: "2. Időpontfoglalás és lemondás", body: [
        "Időpontot a weboldalon, e-mailben vagy telefonon lehet foglalni. A foglalás a Szolgáltató visszaigazolásával jön létre.",
        "A foglalt időpont legkésőbb az időpont előtt 24 órával díjmentesen lemondható. A 24 órán belüli lemondás vagy meg nem jelenés esetén a Szolgáltató jogosult a kezelés teljes díját felszámítani.",
      ]},
      { heading: "3. Díjak és fizetés", body: [
        "A mindenkor érvényes árlista a helyszínen és kérésre e-mailben elérhető. A fizetés a kezelés végén készpénzben vagy bankkártyával történik.",
      ]},
      { heading: "4. Az Ügyfél kötelezettségei", body: [
        "Az Ügyfél köteles a kezelés előtt tájékoztatni a Szolgáltatót minden olyan egészségügyi körülményről (pl. terhesség, friss műtét, gyulladás, lázas állapot, fertőző betegség, vérzékenység), amely a masszázs ellenjavallatát képezheti.",
        "A Szolgáltató jogosult a kezelést megtagadni vagy megszakítani, ha az Ügyfél állapota azt indokolja.",
      ]},
      { heading: "5. Felelősség", body: [
        "A Szolgáltató a szakmai szabályok szerint, a lehető legnagyobb gondossággal jár el. A Szolgáltató nem vállal felelősséget olyan károkért, amelyek az Ügyfél hiányos vagy valótlan egészségügyi tájékoztatásából erednek.",
        "A felelősség korlátozása a fogyasztói jogokat nem érinti.",
      ]},
      { heading: "6. Szellemi tulajdon", body: [
        "A weboldal tartalma (szövegek, képek, logó) a Szolgáltató szellemi tulajdona; engedély nélküli felhasználása tilos.",
      ]},
      { heading: "7. Panaszkezelés", body: [
        "Panasz a bank.center1054@gmail.com címen vagy a +36 20 924 96 60 telefonszámon tehető. A Szolgáltató a panaszt 30 napon belül kivizsgálja.",
      ]},
      { heading: "8. Irányadó jog és módosítás", body: [
        "A jelen ÁSZF-re a magyar jog az irányadó. A Szolgáltató fenntartja a jogot az ÁSZF egyoldalú módosítására; a módosítás a weboldalon való közzététellel lép hatályba.",
      ]},
    ],
    backHome: "← Vissza a főoldalra",
  },
  en: {
    title: "Terms of Use",
    metaDescription: "Terms of Use for the therapeutic massage services of Bazsó Zsanett.",
    lastUpdated: `Last updated: ${LAST_UPDATED}`,
    intro: "These Terms of Use govern the massage services provided by Bazsó Zsanett, sole proprietor (the “Provider”), booked via bankcentermassage.lovable.app or directly.",
    sections: [
      { heading: "1. Services", body: [
        "The Provider offers therapeutic massage, kinesio taping, trigger point treatment, fascia work and flossing therapy at 1054 Budapest, Szabadság tér 7. (Bank Center).",
        "Massage is not medical treatment and does not replace medical care.",
      ]},
      { heading: "2. Booking and cancellation", body: [
        "Appointments may be booked via the website, email or phone and become final upon confirmation by the Provider.",
        "Appointments may be cancelled free of charge up to 24 hours in advance. Cancellations within 24 hours or no-shows may be charged at the full session fee.",
      ]},
      { heading: "3. Fees and payment", body: [
        "The current price list is available on site and on request. Payment is due at the end of the session in cash or by card.",
      ]},
      { heading: "4. Client obligations", body: [
        "The client must inform the Provider before the session of any health condition (e.g. pregnancy, recent surgery, inflammation, fever, infectious disease, bleeding disorder) that may contraindicate massage.",
        "The Provider may refuse or end a session if the client's condition requires it.",
      ]},
      { heading: "5. Liability", body: [
        "The Provider acts with professional care and diligence and is not liable for harm resulting from incomplete or inaccurate health information given by the client.",
        "These limitations do not affect statutory consumer rights.",
      ]},
      { heading: "6. Intellectual property", body: [
        "Website content (text, images, logo) is the Provider's intellectual property; unauthorised use is prohibited.",
      ]},
      { heading: "7. Complaints", body: [
        "Complaints may be sent to bank.center1054@gmail.com or +36 20 924 96 60. The Provider responds within 30 days.",
      ]},
      { heading: "8. Governing law and changes", body: [
        "These Terms are governed by Hungarian law. The Provider may amend them unilaterally; changes take effect upon publication on the website.",
      ]},
    ],
    backHome: "← Back to home",
  },
  pt: {
    title: "Termos de Uso",
    metaDescription: "Termos de Uso dos serviços de massagem terapêutica de Bazsó Zsanett.",
    lastUpdated: `Última atualização: ${LAST_UPDATED}`,
    intro: "Estes Termos de Uso regem os serviços de massagem prestados por Bazsó Zsanett, profissional autônoma (a “Prestadora”), agendados pelo site bankcentermassage.lovable.app ou diretamente.",
    sections: [
      { heading: "1. Serviços", body: [
        "A Prestadora oferece massagem terapêutica, kinesio tape, tratamento de pontos-gatilho, trabalho de fáscia e terapia flossing em 1054 Budapeste, Szabadság tér 7. (Bank Center).",
        "A massagem não é tratamento médico e não substitui o cuidado médico.",
      ]},
      { heading: "2. Agendamento e cancelamento", body: [
        "As consultas podem ser agendadas pelo site, por e-mail ou por telefone e se tornam definitivas após a confirmação da Prestadora.",
        "O cancelamento é gratuito até 24 horas antes do horário. Cancelamentos com menos de 24 horas ou ausências podem ser cobrados pelo valor integral da sessão.",
      ]},
      { heading: "3. Valores e pagamento", body: [
        "A tabela de preços vigente está disponível no local e mediante solicitação. O pagamento é feito ao final da sessão, em dinheiro ou cartão.",
      ]},
      { heading: "4. Obrigações do cliente", body: [
        "O cliente deve informar a Prestadora, antes da sessão, sobre qualquer condição de saúde (por exemplo, gravidez, cirurgia recente, inflamação, febre, doença infecciosa, distúrbio de coagulação) que possa contraindicar a massagem.",
        "A Prestadora pode recusar ou interromper a sessão se a condição do cliente exigir.",
      ]},
      { heading: "5. Responsabilidade", body: [
        "A Prestadora atua com cuidado e diligência profissionais e não se responsabiliza por danos decorrentes de informações de saúde incompletas ou imprecisas fornecidas pelo cliente.",
        "Essas limitações não afetam direitos legais do consumidor.",
      ]},
      { heading: "6. Propriedade intelectual", body: [
        "O conteúdo do site (textos, imagens, logotipo) é propriedade intelectual da Prestadora; o uso não autorizado é proibido.",
      ]},
      { heading: "7. Reclamações", body: [
        "Reclamações podem ser enviadas para bank.center1054@gmail.com ou pelo telefone +36 20 924 96 60. A Prestadora responde em até 30 dias.",
      ]},
      { heading: "8. Lei aplicável e alterações", body: [
        "Estes Termos são regidos pela lei húngara. A Prestadora pode alterá-los unilateralmente; as alterações entram em vigor com a publicação no site.",
      ]},
    ],
    backHome: "← Voltar para o início",
  },
  es: {
    title: "Términos de Uso",
    metaDescription: "Términos de Uso de los servicios de masaje terapéutico de Bazsó Zsanett.",
    lastUpdated: `Última actualización: ${LAST_UPDATED}`,
    intro: "Estos Términos de Uso regulan los servicios de masaje prestados por Bazsó Zsanett, autónoma (la “Prestadora”), reservados a través de bankcentermassage.lovable.app o directamente.",
    sections: [
      { heading: "1. Servicios", body: [
        "La Prestadora ofrece masaje terapéutico, kinesio tape, tratamiento de puntos gatillo, trabajo de fascia y terapia flossing en 1054 Budapest, Szabadság tér 7. (Bank Center).",
        "El masaje no es un tratamiento médico y no sustituye la atención médica.",
      ]},
      { heading: "2. Reservas y cancelación", body: [
        "Las citas pueden reservarse por el sitio, por correo o por teléfono y son firmes tras la confirmación de la Prestadora.",
        "Las cancelaciones son gratuitas hasta 24 horas antes. Cancelaciones con menos de 24 horas o ausencias pueden facturarse al precio íntegro de la sesión.",
      ]},
      { heading: "3. Tarifas y pago", body: [
        "La lista de precios vigente está disponible en el centro y previa solicitud. El pago se efectúa al final de la sesión, en efectivo o con tarjeta.",
      ]},
      { heading: "4. Obligaciones del cliente", body: [
        "El cliente debe informar a la Prestadora, antes de la sesión, de cualquier condición de salud (p. ej. embarazo, cirugía reciente, inflamación, fiebre, enfermedad infecciosa, trastorno hemorrágico) que pueda contraindicar el masaje.",
        "La Prestadora puede rechazar o interrumpir la sesión si la condición del cliente lo requiere.",
      ]},
      { heading: "5. Responsabilidad", body: [
        "La Prestadora actúa con cuidado y diligencia profesionales y no responde por daños derivados de información de salud incompleta o inexacta facilitada por el cliente.",
        "Estas limitaciones no afectan a los derechos del consumidor.",
      ]},
      { heading: "6. Propiedad intelectual", body: [
        "El contenido del sitio (textos, imágenes, logotipo) es propiedad intelectual de la Prestadora; su uso no autorizado está prohibido.",
      ]},
      { heading: "7. Reclamaciones", body: [
        "Las reclamaciones pueden enviarse a bank.center1054@gmail.com o al +36 20 924 96 60. La Prestadora responde en un plazo de 30 días.",
      ]},
      { heading: "8. Ley aplicable y modificaciones", body: [
        "Estos Términos se rigen por la ley húngara. La Prestadora puede modificarlos unilateralmente; las modificaciones entran en vigor con su publicación en el sitio.",
      ]},
    ],
    backHome: "← Volver al inicio",
  },
};

export const getPrivacy = (lang: Lang): LegalDoc => privacy[lang] ?? privacy.hu;
export const getTerms = (lang: Lang): LegalDoc => terms[lang] ?? terms.hu;