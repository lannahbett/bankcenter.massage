# Plan: i18n tests, pt-BR rewrite, legal pages

## 1. Automated language tests
Create `src/lib/i18n.test.tsx` using Vitest + React Testing Library:
- Render `<I18nProvider><Index /></I18nProvider>` for each of `hu`, `en`, `pt`, `es`.
- For each language: pre-seed `localStorage.setItem("bcm_lang", lang)`, render, assert that a representative set of strings from every section (Navbar, Hero, About, Services, Benefits, Contact, Footer) appears in the document. Also assert that strings from *other* languages do NOT appear (catches partial-render bugs).
- Simulate "reload" by unmounting and remounting and verify the language persists from localStorage.
- Assert `document.documentElement.lang` matches the active language.
- Also add a smaller unit test for `setLang` writing to localStorage and updating `<html lang>`.

Test setup (`src/test/setup.ts`, `vitest.config.ts`) is already in place — no infra changes needed.

## 2. Switch Portuguese to Brazilian Portuguese (pt-BR)
In `src/lib/i18n.tsx`, rewrite the entire `pt` dictionary using Brazilian conventions. Key changes:
- "contacto" → "contato", "Morada" → "Endereço", "telemóvel"/"telefone" usage stays "telefone"
- Drop European clitic placement: "ajudá-lo" → "te ajudar"; "Contacte-me" → "Entre em contato comigo"
- "rés-do-chão" → "térreo"
- "stress" → "estresse"
- "facilmente acessível" → "de fácil acesso"
- Verb forms: "Marque a sua consulta" → "Agende sua consulta"; "Tente novamente" → "Tente de novo"
- "Foco" stays; "as suas queixas" → "suas queixas" (drop article before possessive)
- Keep tone warm and professional. Also tag with comment that this is pt-BR.
- Update Navbar full label "Português" → "Português (BR)" so the user sees the variant.
- Set `<html lang>` to `pt-BR` when lang is `pt` (small map in i18n.tsx).

## 3. Grammar / copy pass on all four languages
Scan all dictionaries for errors and fix in place. Known fixes:
- EN: "post-sport recovery" → "post-workout recovery"; "Downtown location" is fine; tighten contact copy.
- ES: "En manos expertas" card title is OK; "¿En qué puedo ayudarte?" OK. Verify accents.
- HU: minor punctuation only; native copy is already user-authored — touch lightly.
- PT-BR: full rewrite per above.

No new translation keys added.

## 4. Privacy Policy & Terms of Use
Create two new routes/pages:
- `src/pages/Privacy.tsx` at route `/privacy`
- `src/pages/Terms.tsx` at route `/terms`

Each page:
- Uses existing Navbar + Footer for consistency.
- Localized in all 4 languages via a new `legal` translations module (`src/lib/legal-i18n.ts`) keyed the same way as `i18n.tsx`, kept separate to avoid bloating the main dictionary.
- Strong, production-grade content covering: data controller identity (Bazsó Zsanett, Bank Center, Budapest), lawful basis under GDPR Art. 6(1)(a)/(b)/(f), categories of data collected (name, email, phone, preferred time, message), purpose, retention (e.g. 12 months for contact requests), third-party processors (Fillout, Supabase/Lovable Cloud as hosting), data subject rights (access, rectification, erasure, portability, objection, complaint to NAIH in Hungary), cookies (none beyond essential localStorage for language), security measures, contact for privacy requests, last-updated date.
- Terms cover: service description, booking & cancellation policy, no-show policy, health disclaimers (not medical treatment, consult physician), client conduct, payment, liability limits, IP, governing law (Hungary), changes to terms.

Add footer links (already shows `footerPrivacy` key) and a new `footerTerms` key pointing to `/terms`.

Register routes in `src/App.tsx`.

## 5. Verification
- Run `vitest run` — all i18n tests must pass.
- Visit `/privacy` and `/terms` in each language; confirm Navbar language switcher still works on these pages.

## Technical notes
- pt-BR: keep `Lang = "pt"` internally to avoid type churn; only change `<html lang>` attribute and display label.
- Tests use `getByText` with exact matches against the dictionary; loop over a curated key list per section to keep the test under ~200 lines.
- Legal pages are static SEO-friendly (single H1, meta description via `<title>` update inside a small `useEffect`).
