/**
 * Dicionário em português. É a fonte da verdade dos textos do site: o tipo
 * `Dictionary` é derivado dele, então qualquer chave que faltar (ou sobrar)
 * nos outros idiomas quebra o build.
 */
const pt = {
  meta: {
    title: "Gabriel Mundt · Desenvolvedor de Software",
    description:
      "Portfólio de Gabriel Arthur Mundt, desenvolvedor de software na Senior Sistemas. Projetos web com Angular, React, .NET e Java.",
  },
  nav: {
    projects: "Projetos",
    experience: "Experiência",
    stack: "Stack",
    about: "Sobre",
    contact: "Contato",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    language: "Idioma",
    toLight: "Ativar tema claro",
    toDark: "Ativar tema escuro",
    skip: "Pular para o conteúdo",
  },
  hero: {
    eyebrow: "Desenvolvedor de software · Senior Sistemas",
    title: "Software bem construído, do banco de dados ao último pixel.",
    subtitle:
      "Mais de 3 anos criando produtos web com Angular, React, .NET e Java. Hoje na Senior Sistemas.",
    note: "Aberto a conversas e projetos freelance.",
    cta: "Ver projetos",
  },
  copy: {
    copy: "Copiar e-mail",
    copied: "Copiado",
  },
  projects: {
    label: "Projetos",
    title: "Projetos selecionados",
    intro:
      "Sites e sistemas que construí do início ao fim, sozinho ou em equipe.",
    status: {
      live: "Em produção",
      wip: "Em construção",
      code: "Código aberto",
    },
    screenshotAlt: (title: string) => `Prévia do site ${title}`,
    actions: {
      site: "Visitar site",
      code: "Ver código",
      soon: "Em breve",
    },
    items: {
      priscilaneo: {
        kind: "Site para streamer",
        summary:
          "Site completo da streamer PriscilaNeo: live integrada, tutoriais das lives, lista de comandos do chat e dados em tempo real pela API da Twitch. Design, desenvolvimento e publicação feitos por mim.",
      },
      mrfTrocas: {
        kind: "Automação para empresa",
        summary:
          "Sistema que gera planilhas automaticamente e as envia por e-mail, substituindo um processo manual. Uso restrito à empresa cliente; feito por mim do início ao fim.",
      },
      minhaEtiqueta: {
        kind: "ERP têxtil",
        summary:
          "ERP construído do zero para uma operação têxtil: fluxo de produção, pedidos, controle de acesso por perfil e impressão de etiquetas em impressoras térmicas.",
      },
      lightsOut: {
        kind: "Projeto pessoal sobre F1",
        summary:
          "Um projeto sobre Fórmula 1 com visualizações em 3D. Em desenvolvimento.",
      },
      estoque: {
        kind: "Projeto em equipe",
        summary:
          "Controle de entradas e saídas de estoque, registro de pedidos finalizados para o PCP e calculadora de produção.",
      },
    },
  },
  experience: {
    label: "Experiência",
    title: "Onde trabalho e trabalhei",
    current: "Atual",
    present: "atual",
    items: {
      senior: {
        role: "Desenvolvedor de Software",
        summary:
          "Desenvolvimento de software de gestão para o setor de construção, com back-end em Java.",
      },
      minhaEtiqueta: {
        role: "Desenvolvedor Front-End",
        summary:
          "Construí o ERP da empresa do zero, com foco no front-end em Angular e participação no back-end em C# e .NET.",
      },
    },
  },
  stack: {
    label: "Stack",
    title: "Ferramentas do dia a dia",
    intro:
      "As tecnologias que uso em projetos reais, agrupadas pelo papel de cada uma.",
    groups: {
      frontend: "Front-end",
      backend: "Back-end e dados",
      infra: "Infra e DevOps",
      quality: "Testes e ferramentas",
    },
  },
  about: {
    label: "Sobre",
    title: "Prazer, Gabriel.",
    paragraphs: [
      "Sou Gabriel Arthur Mundt, desenvolvedor de software há mais de três anos. Desde março de 2026 trabalho na Senior Sistemas. Antes disso, ajudei a construir do zero o ERP da Minha Etiqueta, cuidando de produção, pedidos, controle de acesso e impressão de etiquetas.",
      "Gosto de interfaces bem acabadas e do trabalho menos visível que deixa um sistema estável: tipagem, testes e deploy automatizado. Fora do trabalho, construo projetos próprios, como sites para criadores de conteúdo e, agora, o Lights Out, sobre Fórmula 1.",
      "Munardt é o nome que uso desde 2018, juntando Mundt e Arthur. Hoje é a marca dos meus projetos pessoais.",
    ],
    facts: {
      age: "Idade",
      ageValue: (age: number) => `${age} anos`,
      experience: "Experiência",
      experienceValue: "3+ anos",
      since: "Munardt desde",
    },
  },
  contact: {
    label: "Contato",
    title: "Vamos conversar",
    text: "Tem um projeto, uma vaga ou só quer trocar uma ideia? Mande um e-mail ou me chame nas redes.",
    send: "Abrir no app de e-mail",
    mailSubject: "Contato pelo portfólio",
    mailBody: "Olá, Gabriel!\n\n",
  },
  footer: {
    source: "Código-fonte no GitHub",
    top: "Voltar ao topo",
  },
};

export type Dictionary = typeof pt;

export default pt;
