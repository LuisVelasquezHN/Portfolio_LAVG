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
          home: {
            greeting: "Hey, soy",
            name: "Luis Velasquez",
            job_title: "Desarrollador Web",
            experience: "con más de 3 años de experiencia",
            experience2: "en el diseño y desarrollo de sitios y aplicaciones web,",
            experience3: "enfocado en rendimiento, accesibilidad y experiencia de usuario.",
            download_cv: "Descargar CV",
            contact_me: "Contáctame",
            about_me: "Sobre mí"
          },
          projects: {
            contentPlatinum: "Plataforma web para una rentadora de vehículos en Honduras. Catálogo de autos disponibles con contacto directo a WhatsApp. Desarrollado desde cero con React y Sass.",
            contentISG: "Plataforma web para una empresa de telecomunicaciones, donde los clientes pueden explorar planes residenciales, conocer servicios y ubicar agencias de contacto. Desarrollado con React, SASS y WebServices con Node.js",
            contentCC: "Plataforma web multisitio para una empresa de telecomunicaciones, con dos líneas diferenciadas: residencial y corporativo. Los usuarios pueden explorar planes, servicios, pagos en línea y ubicar agencias de contacto según su segmento. Desarrollado con React, SASS, backend en Node.js y php.",
            contentProjects: "Explora otros proyectos en los que he trabajado, plataformas empresariales y aplicaciones interactivas. Desarrollo soluciones a medida utilizando tecnologías modernas como React, Angular, Node.js y más.",
            buttonPreview: "Ver sitio web",
            buttonOthers: "Ver más",
            titleOtherProject: "Otros Proyectos"
          },
          experience: {
            puestoCC: 'Analista de Inteligencia de Negocios',
            empresaCC: 'Cable Color',
            tiempoCC: 'Febrero 2022 - Actualidad',
            descripcionCC: `Desarrollo, diseño y mantenimiento de sitios web oficiales a nivel regional. Involucrado en la creación e implementación
                            de multiples soluciones tecnológicas. Desarrollo y mantenimiento de documentación técnica para los sistemas desarrollados.
                            Extracción y manipulación de bases de datos, implementando rutinas automatizadas para la actualización diaria de reportes.
                            Automatización de procesos para mejorar la eficiencia y el rendimiento de los sistemas.`,
            puestoFree: 'Freelancer',
            empresaFree: '',
            tiempoFree: 'Actualidad',
            descripcionFree: `Como desarrollador freelance, he trabajado en la creación y optimización de sitios web para diversas industrias, 
                              asegurando interfaces intuitivas, alto rendimiento y experiencias de usuario eficientes. 
                              Mi enfoque se basa en el uso de tecnologías como React, JavaScript, Tailwind CSS, APIs REST y optimización SEO, adaptando cada solución a las necesidades específicas del cliente.`,
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
            centro2: "Educación Secundaria",
            titulo: "Ingeniería en Ciencias de la Computación",
            titulo2: "Bachillerato Técnico Profesional en Informática",
            courseIngles: "Ingles (Básico, Intermedio, Medio)",
            courseTecnico: "Técnico en instalación y reparación de equipo de cómputo",
            aboutFirst: "¡Hola! Me llamo",
            aboutSecond: ", soy ingeniero en sistemas con",
            aboutThird: "más de 3 años de experiencia en desarrollo web",
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
            formErrorMessage: "El mensaje no puede estar vacío."
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
          home: {
            greeting: "Hey, I'm",
            name: "Luis Velasquez",
            job_title: "Web Developer",
            experience: "with more than 3 years of experience",
            experience2: "in designing and developing websites and web applications,",
            experience3: "focused on performance, accessibility, and user experience.",
            download_cv: "Download CV",
            contact_me: "Contact Me",
            about_me: "About Me"
          },
          projects: {
            contentPlatinum: "Web platform for a car rental company in Honduras. Catalog of available cars with direct contact to WhatsApp. Developed from scratch with React and Sass.",
            contentISG: "Web platform for a telecommunications company, where customers can explore residential plans, learn about services, and locate contact agencies. Developed with React, SASS, and WebServices using Node.js.",
            contentCC: "Multi-site web platform for a telecommunications company with two distinct segments: residential and corporate. Users can explore plans, services, make online payments, and locate contact agencies based on their segment. Developed with React, SASS, backend in Node.js and PHP.",
            contentProjects: "Explore other projects I have worked on, including business platforms and interactive applications. I develop custom solutions using modern technologies such as React, Angular, Node.js, and more.",
            buttonPreview: "Live website",
            buttonOthers: "Explore more",
            titleOtherProject: "Other Projects"
          },
          experience: {
            puestoCC: 'Business Intelligence Analyst',
            empresaCC: 'Cable Color',
            tiempoCC: 'February 2022 - Present',
            descripcionCC: `Development, design, and maintenance of official regional websites. 
                      Involved in the creation and implementation of multiple technological solutions. 
                      Development and maintenance of technical documentation for the developed systems. 
                      Data extraction and manipulation, implementing automated routines for the daily update of reports. 
                      Process automation to improve system efficiency and performance.`,
            puestoFree: 'Freelancer',
            empresaFree: '',
            tiempoFree: 'Present',
            descripcionFree: `As a freelance developer, I have worked on the creation and optimization of websites for various industries, 
                      ensuring intuitive interfaces, high performance, and efficient user experiences. 
                      My approach is based on technologies such as React, JavaScript, Tailwind CSS, REST APIs, and SEO optimization, 
                      adapting each solution to the specific needs of the client.`,
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
            centro2: "Secondary Education",
            titulo: "Computer Science Engineering",
            titulo2: "Technical Professional Baccalaureate in IT",
            courseIngles: "English (Basic, Intermediate, Upper-Intermediate)",
            courseTecnico: "Technician in Computer Equipment Installation and Repair",
            aboutFirst: "Hello! My name is",
            aboutSecond: ", I am a systems engineer with",
            aboutThird: "over 3 years of experience in web development",
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
            formErrorMessage: "The message cannot be empty."
          }
        },
      },
    },
    lng: localStorage.getItem("language") || "es",
    fallbackLng: "es",
    interpolation: { escapeValue: false },
  });

export default i18n;
