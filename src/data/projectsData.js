// Proyectos que se muestran en el HOME principal (sección de proyectos con cards animadas)
// No todos los proyectos van aquí, solo los destacados para no sobrecargar la vista principal
export const homeProjectsData = [
    {
        title: "Vitaminas Americanas",
        url: "https://www.vitaminasamericanas.net/",
        contentKey: "projects.contentVA",
        src: "/projects/va/portada.webp",
        tags: [
            { name: "Astro", type: "astro" },
            { name: "Tailwind", type: "tailwind" },
            { name: "Node.js", type: "node" },
            { name: "AWS", type: "aws" }
        ],
        isMain: true
    },
    {
        title: "Novotechn",
        url: "https://www.novotechn.com/",
        contentKey: "projects.contentNovotechn",
        src: "/projects/novotechn.webp",
        tags: [
            { name: "React", type: "react" },
            { name: "Tailwind", type: "tailwind" }
        ],
        isMain: true
    },
    {
        title: "ISG Communications",
        url: "https://www.isghn.net/",
        contentKey: "projects.contentISG",
        src: "/projects/isg2.png",
        tags: [
            { name: "React", type: "react" },
            { name: "Node.js", type: "node" },
            { name: "Sass", type: "sass" }
        ],
        isMain: true
    },
    {
        title: "Plaza Miraflores",
        url: "https://plazamiraflores.hn/",
        contentKey: "projects.contentPlaza",
        src: "/projects/plazamiraflores.webp",
        tags: [
            { name: "React", type: "react" },
            { name: "Tailwind", type: "tailwind" },
            { name: "Node.js", type: "node" }
        ],
        isMain: true
    },
    {
        title: "Cable Color",
        url: "https://cablecolor.hn/",
        contentKey: "projects.contentCC",
        src: "/projects/corpo3.png",
        tags: [
            { name: "React", type: "react" },
            { name: "Node.js", type: "node" },
            { name: "PHP", type: "php" },
            { name: "Sass", type: "sass" }
        ],
        isMain: true
    },
    /* {
        title: "MAXCOM",
        url: "https://www.maxcom.hn/",
        contentKey: "projects.contentMaxcom",
        src: "/projects/maxcom2.webp",
        tags: [
            { name: "React", type: "react" },
            { name: "Tailwind", type: "tailwind" },
            { name: "PHP", type: "php" }
        ],
        isMain: true
    }, */
    {
        title: "Platinum Rent a Car HN",
        url: "https://platinumrentacarhn.com/",
        contentKey: "projects.contentPlatinum",
        src: "/projects/platinum4.png",
        tags: [
            { name: "React", type: "react" },
            { name: "Sass", type: "sass" }
        ],
        isMain: true
    }
];

// Todos los proyectos web (se muestran en la página /all-projects tab Web)
export const allWebProjectsData = [
    {
        title: "Disanca",
        url: "https://www.disancahn.com/",
        contentKey: "projects.contentDisanca",
        src: "/projects/dhn/dhn-1.webp",
        images: [
            "/projects/dhn/dhn-1.webp",
            "/projects/dhn/dhn-2.webp",
            "/projects/dhn/dhn-3.webp",
            "/projects/dhn/dhn-4.webp",
            "/projects/dhn/dhn-5.webp",
            "/projects/dhn/dhn-6.webp"
        ],
        tags: [
            { name: "Astro", type: "astro" },
            { name: "Tailwind", type: "tailwind" },
            { name: "Node.js", type: "node" },
            { name: "AWS", type: "aws" }
        ]
    },
    {
        title: "Vitaminas Americanas",
        url: "https://www.vitaminasamericanas.net/",
        contentKey: "projects.contentVA",
        src: "/projects/va/va-1.webp",
        images: [
            "/projects/va/va-1.webp",
            "/projects/va/va-2.webp",
            "/projects/va/va-3.webp",
            "/projects/va/va-4.webp",
            "/projects/va/va-5.webp",
            "/projects/va/va-6.webp",
            "/projects/va/va-7.webp",
            "/projects/va/va-8.webp",
            "/projects/va/va-9.webp",
            "/projects/va/va-10.webp"
        ],
        tags: [
            { name: "Astro", type: "astro" },
            { name: "Tailwind", type: "tailwind" },
            { name: "Node.js", type: "node" },
            { name: "AWS", type: "aws" }
        ]
    },
    {
        title: "Novosales",
        url: "https://www.novosalescrm.com/",
        contentKey: "projects.contentNovosales",
        src: "/projects/novosales/novosales-1.webp",
        images: [
            "/projects/novosales/novosales-1.webp",
            "/projects/novosales/novosales-2.webp",
            "/projects/novosales/novosales-3.webp",
            "/projects/novosales/novosales-4.webp",
            "/projects/novosales/novosales-5.webp",
            "/projects/novosales/novosales-6.webp"
        ],
        tags: [
            { name: "Astro", type: "astro" },
            { name: "Tailwind", type: "tailwind" },
            { name: "Node.js", type: "node" },
            { name: "AWS", type: "aws" }
        ]
    },
    {
        title: "Novodent",
        url: "https://www.novodentcrm.com/",
        contentKey: "projects.contentNovodent",
        src: "/projects/novodent/novodent-1.webp",
        images: [
            "/projects/novodent/novodent-1.webp",
            "/projects/novodent/novodent-2.webp",
            "/projects/novodent/novodent-3.webp",
            "/projects/novodent/novodent-4.webp",
            "/projects/novodent/novodent-5.webp"
        ],
        tags: [
            { name: "Astro", type: "astro" },
            { name: "Tailwind", type: "tailwind" },
            { name: "Node.js", type: "node" },
            { name: "AWS", type: "aws" }
        ]
    },
    {
        title: "Novoseguros",
        url: "https://www.novosegurocrm.com/",
        contentKey: "projects.contentNovoseguros",
        src: "/projects/novoseguros/novoseguros-1.webp",
        images: [
            "/projects/novoseguros/novoseguros-1.webp",
            "/projects/novoseguros/novoseguros-2.webp",
            "/projects/novoseguros/novoseguros-3.webp",
            "/projects/novoseguros/novoseguros-4.webp",
            "/projects/novoseguros/novoseguros-5.webp"
        ],
        tags: [
            { name: "Astro", type: "astro" },
            { name: "Tailwind", type: "tailwind" },
            { name: "Node.js", type: "node" },
            { name: "AWS", type: "aws" }
        ]
    },
    {
        title: "Novotechn",
        url: "https://www.novotechn.com/",
        contentKey: "projects.contentNovotechn",
        src: "/projects/novo/novo-1.webp",
        images: [
            "/projects/novo/novo-1.webp",
            "/projects/novo/novo-2.webp",
            "/projects/novo/novo-3.webp",
            "/projects/novo/novo-4.webp",
            "/projects/novo/novo-5.webp",
            "/projects/novo/novo-6.webp",
            "/projects/novo/novo-7.webp"
        ],
        tags: [
            { name: "React", type: "react" },
            { name: "Tailwind", type: "tailwind" }
        ]
    },
    {
        title: "ISG Communications",
        url: "https://www.isghn.net/",
        contentKey: "projects.contentISG",
        src: "/projects/isg/isg-1.webp",
        images: [
            "/projects/isg/isg-1.webp",
            "/projects/isg/isg-2.webp",
            "/projects/isg/isg-3.webp",
            "/projects/isg/isg-4.webp",
            "/projects/isg/isg-5.webp",
            "/projects/isg/isg-6.webp"
        ],
        tags: [
            { name: "React", type: "react" },
            { name: "Node.js", type: "node" },
            { name: "Sass", type: "sass" }
        ]
    },
    {
        title: "Plaza Miraflores",
        url: "https://plazamiraflores.hn/",
        contentKey: "projects.contentPlaza",
        src: "/projects/pm/pm-1.webp",
        images: [
            "/projects/pm/pm-1.webp",
            "/projects/pm/pm-2.webp",
            "/projects/pm/pm-3.webp",
            "/projects/pm/pm-4.webp",
            "/projects/pm/pm-5.webp",
            "/projects/pm/pm-6.webp",
            "/projects/pm/pm-7.webp",
            "/projects/pm/pm-8.webp",
            "/projects/pm/pm-9.webp",
            "/projects/pm/pm-10.webp",
            "/projects/pm/pm-11.webp",
            "/projects/pm/pm-12.webp"
        ],
        tags: [
            { name: "React", type: "react" },
            { name: "Tailwind", type: "tailwind" },
            { name: "Node.js", type: "node" }
        ]
    },
    {
        title: "Cable Color",
        url: "https://cablecolor.hn/",
        contentKey: "projects.contentCC",
        src: "/projects/corpo3.png",
        images: [
            "/projects/corpo3.png",
            "/projects/cc/cc-1.webp",
            "/projects/cc/cc-2.webp",
            "/projects/cc/cc-3.webp",
            "/projects/cc/cc-4.webp",
            "/projects/cc/cc-5.webp",
            "/projects/cc/cc-6.webp",
            "/projects/cc/cc-7.webp",
            "/projects/cc/cc-8.webp",
            "/projects/cc/cc-9.webp",
            "/projects/cc/cc-10.webp",
            "/projects/cc/cc-11.webp",
            "/projects/cc/cc-12.webp"
        ],
        tags: [
            { name: "React", type: "react" },
            { name: "Node.js", type: "node" },
            { name: "PHP", type: "php" },
            { name: "Sass", type: "sass" }
        ]
    },
    {
        title: "MAXCOM",
        url: "https://www.maxcom.hn/",
        contentKey: "projects.contentMaxcom",
        src: "/projects/maxcom/maxcom-1.webp",
        images: [
            "/projects/maxcom/maxcom-1.webp",
            "/projects/maxcom/maxcom-2.webp",
            "/projects/maxcom/maxcom-3.webp",
            "/projects/maxcom/maxcom-4.webp",
            "/projects/maxcom/maxcom-5.webp",
            "/projects/maxcom/maxcom-6.webp",
            "/projects/maxcom/maxcom-7.webp",
            "/projects/maxcom/maxcom-8.webp",
            "/projects/maxcom/maxcom-9.webp"
        ],
        tags: [
            { name: "React", type: "react" },
            { name: "Tailwind", type: "tailwind" },
            { name: "PHP", type: "php" }
        ]
    },
    {
        title: "Platinum Rent a Car HN",
        url: "https://platinumrentacarhn.com/",
        contentKey: "projects.contentPlatinum",
        src: "/projects/platinum/platinum-1.webp",
        images: [
            "/projects/platinum/platinum-1.webp",
            "/projects/platinum/platinum-2.webp",
            "/projects/platinum/platinum-3.webp",
            "/projects/platinum/platinum-4.webp",
            "/projects/platinum/platinum-5.webp",
            "/projects/platinum/platinum-6.webp"
        ],
        tags: [
            { name: "React", type: "react" },
            { name: "Sass", type: "sass" }
        ]
    }
];

// Proyectos de Sistemas de Gestión (se muestran en /all-projects tab Sistemas de Gestión)
export const crmProjectsData = [
    {
        title: "Metal Tecnicentro",
        contentKey: "crm.contentMetal",
        src: "/projects/crm/metal.webp",
        tags: [
            { name: "React", type: "react" },
            { name: "Python", type: "python" },
            { name: "Tailwind", type: "tailwind" },
            { name: "AWS", type: "aws" }
        ],
        badge: "CRM"
    },
    {
        title: "Proyecta",
        contentKey: "crm.contentProyecta",
        src: "/projects/crm/proyecta.webp",
        tags: [
            { name: "React", type: "react" },
            { name: "Node.js", type: "node" },
            { name: "Tailwind", type: "tailwind" },
            { name: "AWS", type: "aws" }
        ],
        badge: "CRM"
    },
    {
        title: "NovosalesCRM",
        contentKey: "crm.contentNovosalesCRM",
        src: "/projects/crm/novosalescrm.webp",
        tags: [
            { name: "React", type: "react" },
            { name: "Node.js", type: "node" },
            { name: "Tailwind", type: "tailwind" },
            { name: "AWS", type: "aws" }
        ],
        badge: "CRM"
    },
    {
        title: "Reportes Bot",
        contentKey: "crm.contentReportesBot",
        src: "/projects/crm/reportesbot.webp",
        tags: [
            { name: "React", type: "react" },
            { name: "Node.js", type: "node" },
            { name: "Tailwind", type: "tailwind" },
            { name: "AWS", type: "aws" }
        ],
        badge: null
    },
    {
        title: "Grillas",
        contentKey: "crm.contentGrillas",
        src: "/projects/crm/grillas.webp",
        tags: [
            { name: "React", type: "react" },
            { name: "Node.js", type: "node" },
            { name: "Tailwind", type: "tailwind" },
            { name: "AWS", type: "aws" }
        ],
        badge: null
    },
    {
        title: "Central Corporativa",
        contentKey: "crm.contentCentral",
        src: "/projects/crm/central.webp",
        tags: [
            { name: "React", type: "react" },
            { name: "Node.js", type: "node" },
            { name: "Tailwind", type: "tailwind" }
        ],
        badge: "CRM",
        evolution: ["APEX / PL/SQL", "Angular / Node.js", "React / Node.js"]
    },
    {
        title: "Plaza Admin",
        contentKey: "crm.contentPlazaAdmin",
        src: "/projects/crm/adminplaza.webp",
        tags: [
            { name: "React", type: "react" },
            { name: "Node.js", type: "node" },
            { name: "Tailwind", type: "tailwind" }
        ],
        badge: null
    },
    {
        title: "Sistema Talento Humano",
        titleKey: "otherProjects.nameTH",
        contentKey: "crm.contentTH",
        src: "/projects/crm/asdth.webp",
        tags: [
            { name: "React", type: "react" },
            { name: "Node.js", type: "node" },
            { name: "Tailwind", type: "tailwind" }
        ],
        badge: null,
        evolution: ["APEX / PL/SQL", "Angular / Node.js", "React / Node.js"]
    },
    {
        title: "Portal de Empleados",
        titleKey: "otherProjects.namePortal",
        contentKey: "crm.contentPortal",
        src: "/projects/crm/cc-portal.webp",
        tags: [
            { name: "PHP", type: "php" }
        ],
        badge: null
    },
    {
        title: "Sistema Dispatch",
        titleKey: "otherProjects.nameDispatch",
        contentKey: "crm.contentDispatch",
        src: "/projects/crm/dispatch.webp",
        tags: [
            { name: "React", type: "react" },
            { name: "Node.js", type: "node" },
            { name: "Tailwind", type: "tailwind" }
        ],
        badge: null
    },
    {
        title: "DMS",
        titleKey: "otherProjects.nameDMS",
        contentKey: "crm.contentDMS",
        src: "/projects/crm/dms.webp",
        tags: [
            { name: "React", type: "react" },
            { name: "Node.js", type: "node" }
        ],
        badge: null,
        evolution: ["APEX / PL/SQL", "Angular / Node.js", "React / Node.js"]
    },
    {
        title: "Gestor Web",
        titleKey: "otherProjects.nameGestor",
        contentKey: "crm.contentGestor",
        src: "/projects/crm/gestor.webp",
        tags: [
            { name: "PHP", type: "php" }
        ],
        badge: null
    }
];
