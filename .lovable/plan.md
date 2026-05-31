## Adicionar crédito no rodapé

Adicionar uma linha no `Footer.tsx` com o texto "Feito com propósito por **Lannara Silva**" — com "Lannara Silva" em **negrito**, na cor **roxa**, e como link clicável para `https://lannaraportfolio.lovable.app/` (abre em nova aba).

### Traduções por idioma (chave `footerCredit`)

- **HU**: "Céllal készítette"
- **EN**: "Made with purpose by"
- **PT-BR**: "Feito com propósito por"
- **ES**: "Hecho con propósito por"

O nome "Lannara Silva" permanece igual em todos os idiomas.

### Arquivos a alterar

1. **`src/lib/i18n.tsx`** — adicionar a chave `footerCredit` nos 4 dicionários (hu, en, pt, es).
2. **`src/components/Footer.tsx`** — adicionar abaixo do bloco de copyright/links legais:
   ```tsx
   <p className="text-xs text-primary-foreground/50 text-center mt-4">
     {t("footerCredit")}{" "}
     <a
       href="https://lannaraportfolio.lovable.app/"
       target="_blank"
       rel="noopener noreferrer"
       className="font-bold text-purple-400 hover:text-purple-300 transition-colors"
     >
       Lannara Silva
     </a>
   </p>
   ```

O roxo usa uma classe Tailwind direta (`text-purple-400`) para garantir destaque sobre o fundo verde escuro do rodapé, mantendo bom contraste em ambos os temas.
