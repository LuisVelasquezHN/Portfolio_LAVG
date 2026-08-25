import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: {
          navbar: {
            home: "Inicio",
            experiencia: "Experiencia",
            projects: "Proyectos",
            skills: "Habilidades",
            about: "Sobre mí",
          },
          button: "Cambiar idioma",
          portada: {
            greeting: "Hey, ",
            name: "soy Luis Velasquez",
            welcome: "Bienvenido a mi Portafolio.",
            explorar: "Explorar"
          },
          home: {
            greeting: "Hey, soy",
            name: "Luis Velasquez",
            job_title: "Full Stack Engineer",
            experience: "con más de 4 años de experiencia",
            experience2: "en el diseño y desarrollo de sitios y aplicaciones web,",
            experience3: "enfocado en rendimiento, accesibilidad y experiencia de usuario.",
            download_cv: "Descargar CV",
            contact_me: "Contáctame",
            about_me: "Sobre mí",
            CV: "CV_LuisVelasquez_ES.pdf"
          },
          projects: {
            contentPlatinum: "Plataforma web para una rentadora de vehículos en Honduras. Catálogo de autos disponibles con contacto directo a WhatsApp. Desarrollado desde cero con React y Sass.",
            contentISG: "Plataforma web para una empresa de telecomunicaciones, donde los clientes pueden explorar planes residenciales, conocer servicios y ubicar agencias de contacto. Desarrollado con React, SASS y WebServices con Node.js",
            contentCC: "Plataforma web multisitio para una empresa de telecomunicaciones, con dos líneas diferenciadas: residencial y corporativo. Los usuarios pueden explorar planes, servicios, pagos en línea y ubicar agencias de contacto según su segmento. Desarrollado con React, SASS, backend en Node.js y php.",
            contentMaxcom: "Plataforma web para una empresa de telecomunicaciones, donde los clientes pueden explorar productos y servicios, ubicar agencias de contacto y diversas formas de contacto. Desarrollado con React, Tailwind e integración de correos con php",
            contentProjects: "Explora otros proyectos en los que he trabajado, plataformas empresariales y aplicaciones interactivas. Desarrollo soluciones a medida utilizando tecnologías modernas como React, Angular, Node.js y más.",
            buttonPreview: "Ver sitio web",
            buttonOthers: "Ver más",
            titleOtherProject: "Otros Proyectos",
            contentNovotechn: "Plataforma web para empresa de tecnología con servicios de Inteligencia Artificial, Automatizaciones, Desarrollos a medida y Asesorias especializadas. Desarrollado con React y Tailwind.",
            contentPlaza: "Sitio web oficial de Plaza Miraflores, uno de los centros comerciales más emblemáticos de Honduras. Explora comercios, promociones, eventos y servicios. Desarrollado con React, Tailwind y Node.js.",
            contentVA: "Landing page para Vitaminas Americanas, tienda de suplementos y vitaminas. Diseño moderno y atractivo con catálogo de productos, información nutricional y contacto directo. Desarrollado con Astro y Tailwind, desplegado en infraestructura AWS.",
            contentDisanca: "Sitio web para Disanca, empresa distribuidora en Honduras. Diseño moderno con catálogo de productos y servicios, información corporativa y contacto directo. Desarrollado con Astro y Tailwind, desplegado en infraestructura AWS.",
            contentNovosales: "Landing page para Novosales, plataforma CRM de gestión de ventas. Diseño moderno con presentación de funcionalidades, planes y beneficios del sistema. Desarrollado con Astro y Tailwind, desplegado en infraestructura AWS.",
            contentNovodent: "Landing page para Novodent, software de gestión para clínicas dentales. Presentación de módulos, funcionalidades y planes del sistema orientado al sector odontológico. Desarrollado con Astro y Tailwind, desplegado en infraestructura AWS.",
            contentNovoseguros: "Landing page para Novoseguros, plataforma de gestión para corredurías de seguros. Presentación de funcionalidades, módulos y planes del sistema especializado en el sector asegurador. Desarrollado con Astro y Tailwind, desplegado en infraestructura AWS.",
            viewAll: "Ver todos los proyectos",
            viewAllHint: "¿Quieres ver más?"
          },
          allProjects: {
            title: "Todos los Proyectos",
            subtitle: "Una vista completa de mis proyectos web y sistemas de gestión",
            tabWeb: "Páginas Web",
            tabCRM: "Sistemas de Gestión",
            seeMore: "Ver más",
            seeLess: "Ver menos"
          },
          crm: {
            contentMetal: "CRM de taller automotriz enfocado en la recepción y flujo de vehículos de clientes, cotización y facturación de productos y servicios. Gestión completa del ciclo de atención vehicular.",
            contentProyecta: "CRM de proyectos de construcción con tracking en tiempo real, ubicación georreferenciada, bitácora de ingresos/egresos del presupuesto, solicitudes y órdenes de compra. Incluye portal de cliente para visualizar el estado del proyecto.",
            contentNovosalesCRM: "CRM enfocado en inventario, control de caja chica, órdenes y seguimiento de clientes. Integrado con landing page ecommerce para gestión de ventas en línea.",
            contentReportesBot: "Sistema de tracking de llamadas realizadas por un bot de dispatch. Incluye histórico de llamadas, audios, evaluaciones de calidad y control de gastos operativos.",
            contentGrillas: "Sistema de gestión de guías de canales a nivel regional. Administración centralizada de la programación y parrillas de contenido televisivo.",
            contentCentral: "CRM de gestión de leads, solicitudes de servicios, control de personal y asignación de tickets. Seguimiento de KPIs y métricas de rendimiento del equipo corporativo.",
            contentPlazaAdmin: "Sistema administrador del sitio web de Plaza Miraflores. Gestión dinámica de contenido, comercios, promociones, eventos y servicios del centro comercial.",
            contentTH: "Plataforma integral de gestión de vacantes con tablero Kanban interactivo. Publicación de ofertas laborales, referencia de candidatos y módulo de documentación con carga de archivos vía enlace público.",
            contentPortal: "Portal interno para colaboradores con acceso a sistemas empresariales, directorio de empleados, galería de eventos corporativos, buzón de sugerencias y generador automatizado de firmas de correo.",
            contentDispatch: "Sistema de organización de grupos y técnicos de campo para instalaciones. Gestión y asignación eficiente de órdenes de trabajo con extracción y generación automatizada de órdenes.",
            contentDMS: "Sistema de Gestión Documental para documentos confidenciales. Tablero Kanban para solicitudes, aprobación de documentos mediante tickets y generación automatizada de versiones.",
            contentGestor: "Herramienta de administración de contenido para gestionar dinámicamente secciones de sitios web a nivel regional. Modificación de imágenes, textos, íconos, servicios e información de agencias. Desarrollado en APEX y PL/SQL."
          },
          experience: {
            puestoCC: 'Full Stack Developer',
            empresaCC: 'Cable Color',
            tiempoCC: 'Febrero 2022 - Agosto 2026',
            descripcionCC: `Desarrollo Regional & Plataformas Web: Liderazgo en la arquitectura, diseño y mantenimiento continuo de los sitios web corporativos oficiales a nivel regional, garantizando una arquitectura de alta disponibilidad, carga optimizada y continuidad del negocio. Sistemas de Gestión Empresarial (ERP/CRM): Diseño e implementación de software empresarial (Talento Humano, Logística/Dispatch, Negocios Corporativos, Gestión Documental DMS, Portal Corporativo, Contratos, Requerimientos, Grillas de Canales y CMS a medida), optimizando procesos operativos clave. Integraciones & Web Services: Construcción y consumo de APIs RESTful y servicios web orientados a la interoperabilidad de sistemas. Seguridad, Auditoría & Prácticas DAST: Ejecución de auditorías de software validando consistencia e integridad de UI, esquemas de autenticación robustos (tokens JWT/OAuth2), análisis OSINT para evaluación de exposición de activos y pruebas de seguridad dinámica (DAST) para mitigar vulnerabilidades pre-despliegue. Ecosistema Cloud (AWS): Gestión de infraestructura Nube; despliegue de arquitectura monolítica contenedorizada (Docker en EC2) administrada mediante proxies Nginx y SSL (Certbot). Automatización de entregas mediante pipelines CI/CD (GitHub Actions), gestión de variables/secretos en Parameter Store, servicios de correo con SES, almacenamiento en S3 y control de accesos granular con AWS IAM. Datos y Automatización: Implementación de flujos ETL y rutinas automatizadas para la extracción y manipulación de bases de datos, asegurando la actualización diaria de reportes críticos para la toma de decisiones. Estandarización: Elaboración y mantenimiento de documentación técnica detallada para asegurar la escalabilidad y el soporte de los sistemas desarrollados.`,
            puestoFree: 'Desarrollador Full Stack & Consultor Tecnológico (Freelance)',
            empresaFree: '',
            tiempoFree: 'Enero 2023 - Actualidad',
            descripcionFree: `Desarrollo a la Medida: Diseño, arquitectura y mantenimiento de sitios web y aplicaciones web escalables utilizando frameworks modernos. Sistemas CRM & Gestión: Creación de sistemas CRM personalizados con visualización de procesos mediante tableros Kanban y gestión dinámica de leads. Integraciones & Automatización: Implementación de flujos de trabajo automatizados con n8n e Inteligencia Artificial (OpenAI) para la optimización de procesos de negocio. Análisis de Datos: Desarrollo de dashboards interactivos con actualización de datos en tiempo real para la toma de decisiones estratégicas. Ecosistema Cloud (AWS): Administración de infraestructura, gestión de identidades (IAM), almacenamiento en S3, despliegue en instancias EC2, configuraciones de CloudFront, pipelines CI/CD (GitHub Actions) y servicios de correo con SES. Conectividad: Integración de landing pages con sistemas CRM y servicios de terceros a través de APIs REST y automatización de notificaciones por correo electrónico.`,
            puestoD: 'Auxiliar de Soporte IT (Pasante)',
            empresaD: 'DIUNSA',
            tiempoD: 'Agosto 2016 - Noviembre 2016',
            descripcionD: `Responsable de dar mantenimiento a equipos de computo, realizar formateos e instalación de sistemas operativos.
                           Hacer un puente de red para área de bodega. Configuración de impresoras para la conexión mediante IP y lograr la ejecución de impresión desde diferentes áreas
                          mejorando la productividad en los requerimientos de la empresa.`
          },
          skills: {
            titleToltip: "Ver habilidades"
          },
          about: {
            titleAbout: "Sobre mí",
            titleEducation: "Educación",
            titleContact: "Contáctame",
            centro: "Universidad Católica de Honduras",
            centro2: "Instituto San Francisco",
            titulo: "Ingeniería en Ciencias de la Computación",
            titulo2: "Bachillerato Técnico Profesional en Informática",
            courseIngles: "Ingles (Básico, Intermedio, Medio)",
            courseTecnico: "Técnico en instalación y reparación de equipo de cómputo",
            aboutFirst: "¡Hola! Me llamo",
            aboutSecond: ", soy ingeniero en sistemas con",
            aboutThird: "más de 4 años de experiencia en desarrollo web",
            aboutFour: `Desde siempre, la tecnología ha sido mi pasión y, a lo largo de mi carrera, he perfeccionado mis habilidades para construir aplicaciones dinámicas,
                escalables y centradas en la experiencia del usuario.`,
            aboutFive: `Me especializo en desarrollo frontend y backend, trabajando con tecnologías
                modernas para crear soluciones eficientes e innovadoras.
                Disfruto enfrentar nuevos desafíos y aprender constantemente para seguir mejorando mis habilidades.`,
            aboutSix: `Una de mis mayores fortalezas es mi capacidad para trabajar en equipo,
                comunicarme efectivamente y aportar soluciones innovadoras a cada proyecto en el que participo.`,
            aboutSeven: `Si estás buscando a alguien con un enfoque proactivo,
                detallista y orientado a resultados, estaré encantado de colaborar contigo.`,
            projectContact: "¿Tienes un Proyecto en mente?",
            projectContact2: "¡Contáctame!",
            findMe: "¿Dónde encontrarme?",
            location: "Ubicación",
            certificado: "Certificados",
            buttonSend: "Enviando...",
            buttonSend2: "Enviar Mensaje",
            formName: "Nombre Completo",
            formEmail: "Correo Electrónico",
            formMessage: "Mensaje",
            formErrorName: "Nombre es requerido.",
            formErrorEmail: "Correo Inválido",
            formErrorEmail2: "Correo Electrónico es requerido.",
            formErrorMessage: "El mensaje no puede estar vacío.",
            toastSuccess: "¡Mensaje enviado exitosamente!",
            toastError: "Fallo en el envío. Intenta de nuevo más tarde.",
            courseAWS: "AWS (S3, CloudFront, EC2)",
            languages: "Idiomas",
            langSpanish: "Español (Nativo)",
            langEnglish: "Inglés (Intermedio)"
          },
          errorPage: {
            title: "Página no encontrada",
            description: "Parece que el camino que buscas no existe o ha sido movido a otra dimensión.",
            goHome: "Ir al Inicio",
            retry: "Reintentar"
          },
          lastVisit: {
            previousVisit: "Visita anterior desde",
            lastVisit: "Última visita desde",
            loading: "Cargando ubicación..."
          },
          otherProjects: {
            namePortal: "Portal de Empleados",
            descripcionPortal: "El Portal de Empleados es una plataforma interna diseñada para optimizar el acceso a información y recursos clave dentro de la empresa Cable Color. Permite a los colaboradores explorar enlaces directos a distintos sistemas empresariales, acceder al directorio de empleados para encontrar información de contacto, visualizar fotografías de eventos corporativos, enviar sugerencias a la empresa y generar firmas de correo electrónico de manera automatizada. Desarrollado con PHP y servicios API en Oracle APEX, este portal mejora la comunicación y eficiencia dentro de la organización.",
            nameGestor: "Gestor Web",
            descripcionGestor: "El Gestor Web es una herramienta de administración de contenido que permite gestionar dinámicamente diversas secciones de sitios web a nivel regional, incluyendo el Portal de Colaboradores. A través de esta plataforma, es posible modificar imágenes, textos, íconos, títulos y secciones de servicios, tanto residenciales como corporativos, además de gestionar información de agencias. Desarrollado íntegramente en Oracle APEX, este sistema ofrece una solución eficiente y centralizada para la gestión web empresarial.",
            nameDMS: "DMS (Sistema de Gestión Documental)",
            descripcionDMS: "El Sistema de Gestión Documental (DMS) es una plataforma diseñada para el manejo de documentos confidenciales dentro del área de Procesos. Facilita la administración de políticas empresariales, la aprobación de documentos mediante un sistema de tickets y la comunicación entre áreas clave, como gerencia y jefaturas. Mi aporte en este proyecto incluyó el desarrollo de un tablero Kanban interactivo para gestionar solicitudes, facilitando la trazabilidad de documentos y la colaboración en tiempo real. Además, implementé la funcionalidad de mantenimiento y aprobación de documentos, automatizando la generación de versiones. Proyecto desarrollado con Angular y Node.js.",
            nameTH: "Sistema Talento Humano",
            descripcionTH: "El Sistema de Talento Humano es una plataforma integral para la gestión de vacantes, tanto nuevas como de reemplazo. Conectado con sitios web externos y el Portal de Empleados, permite la publicación de ofertas laborales y la referencia de candidatos. Implementé un tablero Kanban que facilita la colaboración entre los jefes que solicitan personal y los especialistas encargados del proceso de selección. También desarrollé un módulo de documentación para candidatos, que permite la carga de documentos a través de un enlace público. Proyecto desarrollado con React y Node.js para el área de Recursos Humanos.",
            nameDispatch: "Sistema Dispatch",
            descripcionDispatch: "El Sistema Dispatch permite la organización eficiente de grupos y técnicos encargados de instalaciones en diferentes ubicaciones del país. Facilita la gestión y asignación de órdenes generadas en el sistema, optimizando el trabajo de los gestores y técnicos de campo. Mi aporte incluyó el desarrollo de una sección para la extracción y generación de órdenes de trabajo, asegurando una asignación eficiente de recursos. Proyecto desarrollado con React y Node.js para el área de Dispatch.",
            title: "Proyectos y Colaboraciones.",
            button: "Más Información",
            tecnologias: "Tecnologías",
            descripcion: "Descripción",
            descripcionNoModalPortal: "Plataforma interna diseñada para optimizar el acceso a información y recursos clave dentro de la empresa Cable Color.",
            descripcionNoModalGestor: "Herramienta de administración de contenido que permite gestionar dinámicamente diversas secciones de sitios web a nivel regional.",
            descripcionNoModalDMS: "Plataforma diseñada para el manejo de documentos confidenciales dentro del área de Procesos.",
            descripcionNoModalTH: "Plataforma integral para la gestión de vacantes, tanto nuevas como de reemplazo. Conectado con sitios web externos y Portal de Empleados.",
            descripcionNoModalDispatch: "Herramienta que permite la organización eficiente de grupos y técnicos encargados de instalaciones en diferentes ubicaciones del país.",

          }
        },
      },
      en: {
        translation: {
          navbar: {
            home: "Home",
            experiencia: "Experience",
            projects: "Projects",
            skills: "Skills",
            about: "About Me",
          },
          button: "Change Language",
          portada: {
            greeting: "Hey, ",
            name: "I'm Luis Velasquez",
            welcome: "Welcome to my Portfolio.",
            explorar: "Explore"
          },
          home: {
            greeting: "Hey, I'm",
            name: "Luis Velasquez",
            job_title: "Full Stack Engineer",
            experience: "with more than 4 years of experience",
            experience2: "in designing and developing websites and web applications,",
            experience3: "focused on performance, accessibility, and user experience.",
            download_cv: "Download CV",
            contact_me: "Contact Me",
            about_me: "About Me",
            CV: "CV_LuisVelasquez_EN.pdf"
          },
          projects: {
            contentPlatinum: "Web platform for a car rental company in Honduras. Catalog of available cars with direct contact to WhatsApp. Developed from scratch with React and Sass.",
            contentISG: "Web platform for a telecommunications company, where customers can explore residential plans, learn about services, and locate contact agencies. Developed with React, SASS, and WebServices using Node.js.",
            contentCC: "Multi-site web platform for a telecommunications company with two distinct segments: residential and corporate. Users can explore plans, services, make online payments, and locate contact agencies based on their segment. Developed with React, SASS, backend in Node.js and PHP.",
            contentMaxcom: "Web platform for a telecommunications company, where customers can explore products and services, locate contact agencies, and access various contact methods. Developed with React, Tailwind, and email integration using PHP.",
            contentProjects: "Explore other projects I have worked on, including business platforms and interactive applications. I develop custom solutions using modern technologies such as React, Angular, Node.js, and more.",
            buttonPreview: "Live website",
            buttonOthers: "Explore more",
            titleOtherProject: "Other Projects",
            contentNovotechn: "Web platform for a technology company with Artificial Intelligence, Automatizations, Custom Developments and specialized consulting services. Developed with React and Tailwind.",
            contentPlaza: "Official website of Plaza Miraflores, one of the most emblematic shopping malls in Honduras. Explore stores, promotions, events, and services. Developed with React, Tailwind, and Node.js.",
            contentVA: "Landing page for Vitaminas Americanas, a supplements and vitamins store. Modern and attractive design with product catalog, nutritional information, and direct contact. Developed with Astro and Tailwind, deployed on AWS infrastructure.",
            contentDisanca: "Website for Disanca, a distribution company in Honduras. Modern design with product and services catalog, corporate information, and direct contact. Developed with Astro and Tailwind, deployed on AWS infrastructure.",
            contentNovosales: "Landing page for Novosales, a sales management CRM platform. Modern design showcasing features, plans, and system benefits. Developed with Astro and Tailwind, deployed on AWS infrastructure.",
            contentNovodent: "Landing page for Novodent, dental clinic management software. Presentation of modules, features, and plans for the dental sector. Developed with Astro and Tailwind, deployed on AWS infrastructure.",
            contentNovoseguros: "Landing page for Novoseguros, an insurance brokerage management platform. Presentation of features, modules, and plans specialized in the insurance sector. Developed with Astro and Tailwind, deployed on AWS infrastructure.",
            viewAll: "View all projects",
            viewAllHint: "Want to see more?"
          },
          allProjects: {
            title: "All Projects",
            subtitle: "A complete view of my web projects and management systems",
            tabWeb: "Web Pages",
            tabCRM: "Management Systems",
            seeMore: "See more",
            seeLess: "See less"
          },
          crm: {
            contentMetal: "Automotive workshop CRM focused on vehicle reception and workflow, quoting and invoicing products and services. Complete management of the vehicle service cycle.",
            contentProyecta: "Construction project CRM with real-time tracking, georeferenced location, budget income/expense log, purchase requests and orders. Includes a client portal to view project status.",
            contentNovosalesCRM: "CRM focused on inventory, petty cash control, orders, and customer follow-up. Integrated with an ecommerce landing page for online sales management.",
            contentReportesBot: "Call tracking system for a dispatch bot. Includes call history, audio recordings, quality evaluations, and operational expense control.",
            contentGrillas: "Regional TV channel guide management system. Centralized administration of programming schedules and content grids.",
            contentCentral: "Lead management CRM with service requests, personnel control, and ticket assignment. KPI tracking and corporate team performance metrics.",
            contentPlazaAdmin: "Admin system for the Plaza Miraflores website. Dynamic content management for stores, promotions, events, and mall services.",
            contentTH: "Comprehensive vacancy management platform with interactive Kanban board. Job posting, candidate referrals, and document module with file upload via public link.",
            contentPortal: "Internal employee portal with access to business systems, employee directory, corporate event gallery, suggestion box, and automated email signature generator.",
            contentDispatch: "Field technician and team organization system for installations. Efficient work order management and assignment with automated order extraction and generation.",
            contentDMS: "Document Management System for confidential documents. Kanban board for requests, document approval via tickets, and automated version generation.",
            contentGestor: "Content management tool for dynamically managing regional website sections. Modification of images, text, icons, services, and agency information. Developed with APEX and PL/SQL."
          },
          experience: {
            puestoCC: 'Full Stack Developer',
            empresaCC: 'Cable Color',
            tiempoCC: 'February 2022 - August 2026',
            descripcionCC: `Regional Development & Web Platforms: Leadership in the architecture, design, and continuous maintenance of the company's official corporate websites at a regional level, ensuring high-availability architecture, optimized load performance, and business continuity. Enterprise Management Systems (ERP/CRM): Design and implementation of custom enterprise software (Human Talent, Logistics/Dispatch, Corporate Business, Document Management System DMS, Corporate Portal, Contracts, Requirements, Channel Grids, and custom CMS), optimizing key operational processes. Integrations & Web Services: Building and consuming RESTful APIs and web services oriented toward system interoperability. Security, Auditing & DAST Practices: Performing software audits validating UI consistency and integrity, robust authentication schemes (JWT/OAuth2 tokens), OSINT analysis for asset exposure assessment, and Dynamic Application Security Testing (DAST) to mitigate pre-deployment vulnerabilities. Cloud Ecosystem (AWS): Cloud infrastructure management; deployment of containerized monolithic architecture (Docker on EC2) managed through Nginx reverse proxies and SSL (Certbot). Automated delivery through CI/CD pipelines (GitHub Actions), variable/secret management in Parameter Store, email services with SES, S3 storage, and granular access control with AWS IAM. Data & Automation: Implementation of ETL flows and automated routines for database extraction and manipulation, ensuring daily updates of critical reports for decision-making. Standardization: Creation and maintenance of detailed technical documentation to ensure the scalability and support of developed systems.`,
            puestoFree: 'Full Stack Developer & Technology Consultant (Freelance)',
            empresaFree: '',
            tiempoFree: 'January 2023 - Present',
            descripcionFree: `Custom Development: Design, architecture, and maintenance of scalable websites and web applications using modern frameworks. CRM & Management Systems: Creation of custom CRM systems with process visualization through Kanban boards and dynamic lead management. Integrations & Automation: Implementation of automated workflows with n8n and Artificial Intelligence (OpenAI) for business process optimization. Data Analytics: Development of interactive dashboards with real-time data updates for strategic decision-making. Cloud Ecosystem (AWS): Infrastructure administration, identity management (IAM), S3 storage, EC2 instance deployment, CloudFront configurations, CI/CD pipelines (GitHub Actions), and email services with SES. Connectivity: Integration of landing pages with CRM systems and third-party services through REST APIs and automated email notification workflows.`,
            puestoD: 'IT Support Assistant (Intern)',
            empresaD: 'DIUNSA',
            tiempoD: 'August 2016 - November 2016',
            descripcionD: `Responsible for maintaining computer equipment, performing formatting and operating system installations. 
                      Setting up a network bridge for the warehouse area. 
                      Configuring printers for IP-based connections to enable printing from different areas, 
                      improving productivity in company requirements.`
          },
          skills: {
            titleToltip: "View skills"
          },
          about: {
            titleAbout: "About Me",
            titleEducation: "Education",
            titleContact: "Contact Me",
            centro: "Catholic University of Honduras",
            centro2: "Instituto San Francisco",
            titulo: "Computer Science Engineering",
            titulo2: "Technical Professional Baccalaureate in IT",
            courseIngles: "English (Basic, Intermediate, Upper-Intermediate)",
            courseTecnico: "Technician in Computer Equipment Installation and Repair",
            aboutFirst: "Hello! My name is",
            aboutSecond: ", I am a systems engineer with",
            aboutThird: "over 4 years of experience in web development",
            aboutFour: `Technology has always been my passion, and throughout my career, I have refined my skills to build dynamic, scalable applications focused on user experience.`,
            aboutFive: `I specialize in both frontend and backend development, working with modern technologies to create efficient and innovative solutions.
                        I enjoy facing new challenges and constantly learning to continue improving my skills.`,
            aboutSix: ` One of my greatest strengths is my ability to work in a team, communicate effectively, and contribute innovative solutions to every project I participate in.`,
            aboutSeven: `If you're looking for someone with a proactive, detail-oriented, and results-driven approach, I would be delighted to collaborate with you.`,
            projectContact: "Have a project in mind?",
            projectContact2: "Contact me!",
            findMe: "Where to find me?",
            location: "Location",
            certificado: "Certificates",
            buttonSend: "Sending...",
            buttonSend2: "Send Message",
            formName: "Full Name",
            formEmail: "Email",
            formMessage: "Message",
            formErrorName: "Name is required.",
            formErrorEmail: "Invalid email",
            formErrorEmail2: "Email is required.",
            formErrorMessage: "The message cannot be empty.",
            toastSuccess: "Message sent successfully!",
            toastError: "Failed to send. Please try again later.",
            courseAWS: "AWS (S3, CloudFront, EC2)",
            languages: "Languages",
            langSpanish: "Spanish (Native)",
            langEnglish: "English (Intermediate)"
          },
          errorPage: {
            title: "Page not found",
            description: "The path you are looking for does not exist or has been moved to another dimension.",
            goHome: "Go Home",
            retry: "Retry"
          },
          lastVisit: {
            previousVisit: "Previous visit from",
            lastVisit: "Last visit from",
            loading: "Loading location..."
          },
          otherProjects: {
            namePortal: "Employee Portal",
            descripcionPortal: "The Employee Portal is an internal platform designed to optimize access to key company information and resources at Cable Color. It allows employees to explore direct links to various business systems, access the employee directory to find contact information, view corporate event photos, submit suggestions to the company, and generate email signatures automatically. Developed with PHP and API services in Oracle APEX, this portal enhances communication and efficiency within the organization.",
            nameGestor: "Web Manager",
            descripcionGestor: "The Web Manager is a content management tool that allows dynamic management of various website sections at a regional level, including the Employee Portal. Through this platform, users can modify images, text, icons, titles, and service sections for both residential and corporate clients, as well as manage agency information. Fully developed in Oracle APEX, this system offers an efficient and centralized solution for business web management.",
            nameDMS: "DMS (Document Management System)",
            descripcionDMS: "The Document Management System (DMS) is a platform designed for handling confidential documents within the Process department. It facilitates the management of company policies, document approval via a ticketing system, and communication between key areas such as management and leadership. My contribution to this project included the development of an interactive Kanban board for request management, improving document traceability and real-time collaboration. Additionally, I implemented maintenance and document approval functionalities, automating version generation. This project was developed using Angular and Node.js.",
            nameTH: "Human Talent System",
            descripcionTH: "The Human Talent System is a comprehensive platform for managing job vacancies, both new and replacement positions. Connected with external websites and the Employee Portal, it enables job posting and candidate referrals. I implemented a Kanban board that facilitates collaboration between hiring managers and specialists overseeing the selection process. I also developed a document module for candidates, allowing document uploads via a public link. This project was developed with React and Node.js for the Human Resources department.",
            nameDispatch: "Dispatch System",
            descripcionDispatch: "The Dispatch System efficiently organizes teams and technicians responsible for installations across different locations in the country. It streamlines the management and assignment of work orders generated within the system, optimizing the workflow for dispatch managers and field technicians. My contribution included developing a section for extracting and generating work orders, ensuring efficient resource allocation. This project was developed with React and Node.js for the Dispatch department.",
            title: "Projects and Collaborations.",
            button: "More Information",
            tecnologias: "Technologies",
            descripcion: "Description",
            descripcionNoModalPortal: "Internal platform designed to optimize access to key information and resources within the company Cable Color.",
            descripcionNoModalGestor: "Content management tool that allows for the dynamic management of various sections of websites at the regional level.",
            descripcionNoModalDMS: "Platform designed for managing confidential documents within the Processes department.",
            descripcionNoModalTH: "Comprehensive platform for managing job vacancies, both new and replacement. Connected with external websites and the Employee Portal.",
            descripcionNoModalDispatch: "Tool that enables the efficient organization of groups and technicians responsible for installations in various locations across the country.",

          }
        },
      },
    },
    lng: localStorage.getItem("language") || "es",
    fallbackLng: "es",
    interpolation: { escapeValue: false },
  });

export default i18n;
