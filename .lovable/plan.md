## Root cause

The site already switches languages correctly in React state. The garbled rendering in the screenshots is caused by Chrome's built-in page translator running on top of our own i18n:

- Hero screenshot (ES): the Spanish copy shows words like "necessitate", "relaxation", "gestion" that are **not** in our `es` dictionary — those are Chrome's machine translation of the English source. The gold "heroExtra" line is even left in English because Chrome translates blocks heuristically. The nav label shows "AND" because Chrome translated the Spanish abbreviation `ES` ("es" = "is") into English, then through another locale into "AND".
- Services screenshot (PT): headings stay in English while one card body is partly in Portuguese — again, Chrome translating selectively because `<html lang>` does not match the rendered language at first paint.

Our own i18n is working; Chrome is fighting it.

## Plan

### 1. Disable Chrome / browser auto-translation

In `index.html`:
- Add `<meta name="google" content="notranslate" />` in `<head>`.
- Add `translate="no"` and `class="notranslate"` on `<body>` so every descendant inherits "do not translate".

This is the documented way to tell Chrome (and other browsers) that the page already handles localization.

### 2. Make initial `<html lang>` correct on first paint

In `src/lib/i18n.tsx`, when `getInitialLang()` resolves the stored / default language, also set `document.documentElement.lang` synchronously (before React renders), so the first paint already has the right `lang` attribute and Chrome never offers to translate.

### 3. Keep the language switcher labels stable

Add `translate="no"` to the language code span in `src/components/Navbar.tsx` (`HU / EN / PT / ES`) as a belt-and-braces guard so the abbreviation can never be re-translated even if a user manually invokes Translate.

### 4. QA in the live preview

- Reload the site, confirm no "Translate this page?" prompt and that:
  - HU → all Hungarian, no English leftovers.
  - EN → all English.
  - PT → all Portuguese (no English headings, no Spanish words).
  - ES → all Spanish (no "relaxation", no "AND" label, gold subline in Spanish).
- Verify the choice still persists across reload and `<html lang>` updates to the chosen code.

## Scope / non-goals

- No backend, RLS, edge function, routing, or design changes.
- No new translations added; existing dictionaries already cover all visible strings.
