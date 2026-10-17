# Gabriel Mundt · Portfólio

Código-fonte do meu portfólio pessoal.

> 🌐 Acesse o site: [https://munardt.github.io/site](https://munardt.github.io/site)

---

## 👨‍💻 Sobre

Portfólio de **Gabriel Arthur Mundt**, desenvolvedor de software na Senior Sistemas. **Munardt** é o nome que uso desde 2018 nos meus projetos pessoais.

---

## 🛠️ Tecnologias

- [Vite](https://vitejs.dev) + [React](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com) com tokens de cor em `src/styles/globals.css`
- [Motion](https://motion.dev) para animações
- Esfera de partículas própria em canvas 2D (`src/components/particle-sphere`)

---

## 🗂️ Onde editar

| O quê | Arquivo |
| --- | --- |
| Paleta de cores (tema escuro e claro) | `src/styles/globals.css` |
| Textos em português, inglês e espanhol | `src/i18n/locales/{pt,en,es}.ts` |
| Projetos (links, tags, ano, situação) | `src/data/projects.ts` |
| Experiência profissional | `src/data/experience.ts` |
| Stack | `src/data/stack.ts` |
| E-mail e redes sociais | `src/data/profile.ts` |

O dicionário em português é a fonte da verdade: se uma chave faltar em `en.ts` ou `es.ts`, o TypeScript acusa erro no build.

---

## 🚀 Como rodar localmente

Clone o projeto:

```bash
git clone https://github.com/munardt/site.git
cd site
```

Instale as dependências e suba o servidor:

```bash
npm ci
npm run dev
```

O site abre em http://localhost:5173/site/.
