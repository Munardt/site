import type { Dictionary } from "./pt";

/** Dicionário em inglês. */
const en: Dictionary = {
  meta: {
    title: "Gabriel Mundt · Software Developer",
    description:
      "Portfolio of Gabriel Arthur Mundt, software developer at Senior Sistemas. Web products built with Angular, React, .NET and Java.",
  },
  nav: {
    projects: "Projects",
    experience: "Experience",
    stack: "Stack",
    about: "About",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
    skip: "Skip to content",
  },
  hero: {
    eyebrow: "Software developer · Senior Sistemas",
    title: "Well-built software, from the database to the last pixel.",
    subtitle:
      "3+ years building web products with Angular, React, .NET and Java. Currently at Senior Sistemas.",
    note: "Open to conversations and freelance work.",
    cta: "See projects",
  },
  copy: {
    copy: "Copy email",
    copied: "Copied",
  },
  projects: {
    label: "Projects",
    title: "Selected work",
    intro: "Sites and systems I built end to end, on my own or with a team.",
    status: {
      live: "Live",
      wip: "In progress",
      code: "Open source",
    },
    screenshotAlt: (title: string) => `Preview of ${title}`,
    actions: {
      site: "Visit site",
      code: "View code",
      soon: "Coming soon",
    },
    items: {
      priscilaneo: {
        kind: "Streamer website",
        summary:
          "Full website for the streamer PriscilaNeo: embedded live stream, stream tutorials, chat command list and real-time data from the Twitch API. Designed, built and shipped by me.",
      },
      mrfTrocas: {
        kind: "Business automation",
        summary:
          "A system that generates spreadsheets automatically and sends them by email, replacing a manual process. Restricted to the client company; built by me end to end.",
      },
      minhaEtiqueta: {
        kind: "Textile ERP",
        summary:
          "An ERP built from scratch for a textile operation: production flow, orders, role-based access control and label printing on thermal printers.",
      },
      lightsOut: {
        kind: "Personal F1 project",
        summary:
          "A Formula 1 project with 3D visualizations. MVP live, still in development.",
      },
      estoque: {
        kind: "Team project",
        summary:
          "Stock in/out tracking, finished-order records for production planning and a production calculator.",
      },
    },
  },
  experience: {
    label: "Experience",
    title: "Where I work and have worked",
    current: "Current",
    present: "present",
    items: {
      senior: {
        role: "Software Developer",
        summary:
          "Building management software for the construction industry, with a Java back end.",
      },
      minhaEtiqueta: {
        role: "Front-End Developer",
        summary:
          "Built the company's ERP from scratch, focused on the Angular front end and contributing to the C# and .NET back end.",
      },
    },
  },
  stack: {
    label: "Stack",
    title: "Everyday tools",
    intro: "Technologies I use in real projects, grouped by what they do.",
    groups: {
      frontend: "Front end",
      backend: "Back end and data",
      infra: "Infra and DevOps",
      quality: "Testing and tools",
    },
  },
  about: {
    label: "About",
    title: "Hi, I'm Gabriel.",
    paragraphs: [
      "I'm Gabriel Arthur Mundt, a software developer with more than three years of experience. Since March 2026 I've been working at Senior Sistemas. Before that, I helped build Minha Etiqueta's ERP from scratch, covering production, orders, access control and label printing.",
      "I like polished interfaces and the less visible work that keeps a system stable: typing, tests and automated deploys. Outside work I build my own projects, like websites for content creators and, now, Lights Out, about Formula 1.",
      "Munardt is the name I've used since 2018, a blend of Mundt and Arthur. Today it's the brand for my personal projects.",
    ],
    facts: {
      age: "Age",
      ageValue: (age: number) => `${age}`,
      experience: "Experience",
      experienceValue: "3+ years",
      since: "Munardt since",
    },
  },
  contact: {
    label: "Contact",
    title: "Let's talk",
    text: "Have a project, a role or just want to chat? Send me an email or reach out on social media.",
    send: "Open in email app",
    mailSubject: "Hello from your portfolio",
    mailBody: "Hi Gabriel,\n\n",
  },
  footer: {
    source: "Source code on GitHub",
    top: "Back to top",
  },
};

export default en;
