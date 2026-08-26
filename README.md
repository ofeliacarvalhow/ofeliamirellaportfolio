# Portfólio Ofélia Mirella

Site em Next.js (App Router) + Tailwind. Pronto para publicar na Vercel.

## Rodar local

```bash
pnpm install
pnpm dev
```

Abre em http://localhost:3000

## Publicar na Vercel

1. Suba esta pasta para um repositório no GitHub.
2. Em vercel.com, "Add New" > "Project" e importe o repositório.
3. A Vercel detecta Next.js sozinha. Não precisa mudar nenhuma configuração de build.
4. Clique em Deploy.

## Domínio

No painel do projeto: Settings > Domains > Add.

Sugestões livres no momento da escrita (confirmar disponibilidade na hora):

- ofeliamirella.com
- ofeliamirella.com.br
- ofeliamirellareis.com

Sobre "futuros líderes": é um nome de programa da FGV, não da Ofélia. Um domínio
pessoal envelhece melhor num portfólio e não amarra a identidade dela a um
programa específico. Se ainda quiser algo nessa linha, dá para usar um subdomínio
do domínio pessoal, por exemplo futuroslideres.ofeliamirella.com apontando para a
mesma aplicação.

Enquanto o domínio não for comprado, a Vercel já entrega um endereço grátis do tipo
ofelia-mirella-portfolio.vercel.app.

## Estrutura

- `app/page.tsx` Home
- `app/site.tsx` componentes compartilhados: header, rodapé, cards, trajetória, páginas de projeto
- `app/data.ts` lista de projetos
- `app/trabalhos/` listagem e páginas individuais
- `app/entrevistas/`, `app/trajetoria/`, `app/sobre/`
- `app/globals.css` paleta, tipografia e identidade do jornal O Veterano
- `public/images/`, `public/videos/` imagens e vídeos das entrevistas

Contato não é uma página: o item do menu leva ao rodapé, presente em todas as páginas.
# ofeliamirellaportfolio
