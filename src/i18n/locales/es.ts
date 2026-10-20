import type { Dictionary } from "./pt";

/** Dicionário em espanhol. */
const es: Dictionary = {
  meta: {
    title: "Gabriel Mundt · Desarrollador de Software",
    description:
      "Portafolio de Gabriel Arthur Mundt, desarrollador de software en Senior Sistemas. Productos web con Angular, React, .NET y Java.",
  },
  nav: {
    projects: "Proyectos",
    experience: "Experiencia",
    stack: "Stack",
    about: "Sobre mí",
    contact: "Contacto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
    toLight: "Activar tema claro",
    toDark: "Activar tema oscuro",
    skip: "Saltar al contenido",
  },
  hero: {
    eyebrow: "Desarrollador de software · Senior Sistemas",
    title: "Software bien construido, de la base de datos al último píxel.",
    subtitle:
      "Más de 3 años creando productos web con Angular, React, .NET y Java. Hoy en Senior Sistemas.",
    note: "Abierto a conversaciones y proyectos freelance.",
    cta: "Ver proyectos",
  },
  copy: {
    copy: "Copiar correo",
    copied: "Copiado",
  },
  projects: {
    label: "Proyectos",
    title: "Proyectos seleccionados",
    intro:
      "Sitios y sistemas que construí de principio a fin, solo o en equipo.",
    status: {
      live: "En producción",
      wip: "En construcción",
      code: "Código abierto",
    },
    screenshotAlt: (title: string) => `Vista previa de ${title}`,
    actions: {
      site: "Visitar sitio",
      code: "Ver código",
      soon: "Próximamente",
    },
    items: {
      priscilaneo: {
        kind: "Sitio para streamer",
        summary:
          "Sitio completo de la streamer PriscilaNeo: directo integrado, tutoriales de los directos, lista de comandos del chat y datos en tiempo real desde la API de Twitch. Diseño, desarrollo y publicación hechos por mí.",
      },
      mrfTrocas: {
        kind: "Automatización para empresa",
        summary:
          "Sistema que genera hojas de cálculo automáticamente y las envía por correo, reemplazando un proceso manual. Uso restringido a la empresa cliente; hecho por mí de principio a fin.",
      },
      minhaEtiqueta: {
        kind: "ERP textil",
        summary:
          "ERP construido desde cero para una operación textil: flujo de producción, pedidos, control de acceso por perfil e impresión de etiquetas en impresoras térmicas.",
      },
      lightsOut: {
        kind: "Proyecto personal sobre F1",
        summary:
          "Un proyecto sobre Fórmula 1 con visualizaciones en 3D. MVP en producción, todavía en desarrollo.",
      },
      estoque: {
        kind: "Proyecto en equipo",
        summary:
          "Control de entradas y salidas de stock, registro de pedidos terminados para planificación de producción y calculadora de producción.",
      },
    },
  },
  experience: {
    label: "Experiencia",
    title: "Dónde trabajo y he trabajado",
    current: "Actual",
    present: "actual",
    items: {
      senior: {
        role: "Desarrollador de Software",
        summary:
          "Desarrollo de software de gestión para el sector de la construcción, con back-end en Java.",
      },
      minhaEtiqueta: {
        role: "Desarrollador Front-End",
        summary:
          "Construí el ERP de la empresa desde cero, con foco en el front-end en Angular y participación en el back-end en C# y .NET.",
      },
    },
  },
  stack: {
    label: "Stack",
    title: "Herramientas del día a día",
    intro:
      "Las tecnologías que uso en proyectos reales, agrupadas por su función.",
    groups: {
      frontend: "Front-end",
      backend: "Back-end y datos",
      infra: "Infra y DevOps",
      quality: "Pruebas y herramientas",
    },
  },
  about: {
    label: "Sobre mí",
    title: "Hola, soy Gabriel.",
    paragraphs: [
      "Soy Gabriel Arthur Mundt, desarrollador de software desde hace más de tres años. Desde marzo de 2026 trabajo en Senior Sistemas. Antes, ayudé a construir desde cero el ERP de Minha Etiqueta, encargándome de producción, pedidos, control de acceso e impresión de etiquetas.",
      "Me gustan las interfaces bien acabadas y el trabajo menos visible que mantiene un sistema estable: tipado, pruebas y despliegue automatizado. Fuera del trabajo construyo proyectos propios, como sitios para creadores de contenido y, ahora, Lights Out, sobre Fórmula 1.",
      "Munardt es el nombre que uso desde 2018, una mezcla de Mundt y Arthur. Hoy es la marca de mis proyectos personales.",
    ],
    facts: {
      age: "Edad",
      ageValue: (age: number) => `${age} años`,
      experience: "Experiencia",
      experienceValue: "3+ años",
      since: "Munardt desde",
    },
  },
  contact: {
    label: "Contacto",
    title: "Hablemos",
    text: "¿Tienes un proyecto, una vacante o solo quieres conversar? Envíame un correo o escríbeme en redes.",
    send: "Abrir en la app de correo",
    mailSubject: "Contacto desde el portafolio",
    mailBody: "¡Hola, Gabriel!\n\n",
  },
  footer: {
    source: "Código fuente en GitHub",
    top: "Volver arriba",
  },
};

export default es;
