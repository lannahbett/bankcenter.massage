## Problem

I tested the site in the browser: clicking HU → EN does change every visible string correctly. The most likely cause of "languages don't show properly" is that:

1. The selected language is kept only in React state, so a page reload (or opening a fresh tab / sharing a link) resets it back to Hungarian.
2. The `<html lang>` attribute always stays `lang="en"` (from `index.html`) regardless of the chosen language, which can confuse browser translation, screen readers, and SEO.

## Plan

### 1. Persist the language choice
In `src/lib/i18n.tsx`:
- Initialize `lang` from `localStorage` (`bcm_lang`) if present and valid, otherwise fall back to `"hu"`.
- On `setLang`, write the value back to `localStorage`.
- Update `<html lang="…">` whenever the language changes (via `useEffect`) so HTML metadata matches the visible language.

### 2. QA all four languages in the live preview
Using the browser tool, switch through HU → EN → PT → ES and verify each language renders correctly across:
- Navbar (links + CTA + language label)
- Hero (title, subtitle, extra line, both CTAs)
- About (tag, title, body, 3 cards)
- Services (tag, title, 5 service cards + CTA)
- Benefits (tag, title, 4 benefit lines)
- Contact (tag, title, sub, all field labels + placeholders, submit button)
- Footer (role + copyright + privacy)

Also verify after the persistence fix:
- Selected language survives a full page reload.
- `<html lang>` updates to the chosen code.

### 3. Light functional QA (no code changes expected)
- Hero "Foglalj időpontot / Book / Marcar / Reservar" anchor scrolls to `#kapcsolat`.
- "Szolgáltatások / Services" anchor scrolls to `#szolgaltatasok`.
- Navbar mobile menu opens/closes at the current 574px viewport.
- Contact form client-side validation triggers required-field toasts when submitted empty.
  (I will NOT submit a real message to the edge function during QA to avoid sending a real lead.)

If any string is missing or mistranslated in a specific language during QA, fix it in `src/lib/i18n.tsx` only.

## Scope / non-goals

- No changes to backend, edge function, RLS, or contact-form business logic.
- No new languages, no routing-based locales, no design changes.
