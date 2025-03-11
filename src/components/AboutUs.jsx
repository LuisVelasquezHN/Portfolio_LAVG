import React, { useState } from "react";
import Icons from './IconsSkills';
import { IconBook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp, IconBrandX, IconCertificate, IconMailForward, IconMapPin } from "@tabler/icons-react";
import { ContactForm } from "./ContactForm";

const tabs = [
  { id: "about", label: "Sobre mí" },
  { id: "education", label: "Educación" },
  { id: "contact", label: "Contacto" },
];

const education = [
  {
    centro: 'Universidad Católica de Honduras',
    titulo: 'Ingeniería en Ciencias de la Computación',
    tiempo: '2017 - 2022'
  },
  {
    centro: 'Educación Secundaria',
    titulo: 'Bachillerato Técnico Profesional en Informática',
    tiempo: '2011 - 2016'
  }
]

const cursos = [

  {
    titulo: 'ReactJS',
    lugar: 'Udemy',
    icon: <Icons.REACTV2 />
  },
  {
    titulo: 'AngularJS',
    lugar: 'Udemy',
    icon: <Icons.ANGULARV2 />
  },
  {
    titulo: 'OpenAI',
    lugar: 'Udemy',
    icon: <Icons.OPENAIV2 />
  },


  {
    titulo: 'Photoshop',
    lugar: 'INFOP',
    icon: <Icons.PHOTOSHOPV2 />
  },

  {
    titulo: 'Ingles (Básico, Intermedio, Medio)',
    lugar: 'INFOP',
    icon: <Icons.INGLES />
  },

  {
    titulo: 'Tester',
    lugar: 'Capacitate.org',
    icon: <Icons.TECNICO />
  },
  {
    titulo: 'Técnico en instalación y reparación de equipo de cómputo',
    lugar: 'Capacitate.org',
    icon: <Icons.TECNICO />
  },
  {
    titulo: 'CCNA 1',
    lugar: 'CISCO',
    icon: <Icons.CISCO />
  },
]

export const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <article className="flex flex-col-reverse md:flex-row gap-8 items-center justify-center hiddenObs2">
            <div className="dark:text-white/80 text-gray-600/80 text-wrap">
              <p className="pt-4">
              ¡Hola! Me llamo <span className="font-bold">Luis Velasquez</span> , soy un ingeniero en sistemas con <span className="text-[#0073ff]">más de 3 años de experiencia en el desarrollo web</span> . 
              Desde siempre, la tecnología ha sido mi pasión, 
              y a lo largo de mi carrera he perfeccionado mis habilidades para construir aplicaciones dinámicas, 
              escalables y centradas en la experiencia del usuario.
              </p>

              <p className="pt-4">
              Me especializo en el desarrollo frontend y backend, trabajando con tecnologías 
              modernas para crear soluciones eficientes e innovadoras.
              Disfruto enfrentar nuevos desafíos y
              aprender constantemente para seguir mejorando mis habilidades.
              </p>

              <p className="pt-4">
              Una de mis mayores fortalezas es mi capacidad para trabajar en equipo, 
              comunicarme efectivamente y aportar soluciones innovadoras a cada proyecto en el que participo.
              </p>

              <p className="pt-4">
              Si estás buscando a alguien con un enfoque proactivo, 
              detallista y orientado a resultados, estaré encantado de colaborar contigo. 
              </p>


            </div>

            <img width="200" height="200" src="/about.webp" alt="Luis Velasquez" 
            className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-[#f4f4f40e] dark:ring-[#f4f4f40e] " 
            style={{objectPosition: "50% 50%"}}>

            </img>

          </article>
        );
      case "education":
        return (
          <>
            <h2 className="flex items-center mt-4 mb-4 text-xl font-semibold gap-x-3 text-black/80 dark:text-white">
              <IconBook width={30} height={30} stroke={2} />
              Educación
            </h2>
            <ol className="relative mt-4">
              {education.map((item, index) => (
                <li key={index}>
                  <div className="relative hiddenObs2 mx-12 pb-10 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 md:grid-cols-5 md:gap-10 md:space-x-4">
                    <div className="relative md:col-span-4">
                      <div className="sticky top-0">
                        <span className="text-[#0686ff] -left-[42px] absolute rounded-full text-5xl">•</span>
                        <h3 className="text-lg font-bold text-[#0686ff]">{item.titulo}</h3>
                        {item.centro && (
                          <h4 className="font-semibold text-sm text-gray-600 dark:text-[#f4f4f4]">{item.centro}</h4>
                        )}
                        <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">{item.tiempo}</time>
                      </div>
                    </div>

                  </div>
                </li>

              ))}

            </ol>
            <h2 className="flex items-center mt-4 mb-4 text-xl font-semibold gap-x-3 text-black/80 dark:text-white">
              <IconCertificate width={30} height={30} stroke={1.6} />
              Certificados
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cursos.map((item, index) => (
                <div
                  key={index}
                  className="dark:bg-[#1010106c] bg-[#f5f7f783] hiddenObs rounded-2xl border border-[#f4f4f40e] p-2 min-h-[120px] flex items-center shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)]"
                >
                  <div className="flex items-start pl-4">
                    <div className="w-12 h-12 md:w-8 md:h-8 flex md:pt-2 items-center">
                      {item.icon}
                    </div>
                    <div className="flex flex-col flex-1 pl-4">
                      <h2 className="dark:text-[#f4f4f4] text-gray-600 text-md font-semibold">
                        {item.titulo}
                      </h2>
                      <h4 className="dark:text-white/80 text-gray-600/80 text-sm mt-1">
                        {item.lugar}
                      </h4>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </>
        );
      case "contact":
        return (
          <div className="hiddenObs2">
            <p className="dark:text-white/80 text-gray-600/80 px-8 py-4 text-2xl">
              ¿Tienes un Proyecto en mente? <span className="text-3xl font-bold dark:bg-[radial-gradient(64.18%_64.18%_at_71.16%_35.69%,#b5e8ff_0.89%,#83dbff_17.23%,#48c5ff_42.04%,#1ea5ff_55.12%,#0686ff_71.54%,#0686ff_100%)] bg-[radial-gradient(64.18%_64.18%_at_71.16%_35.69%,#48e2ff_0.89%,#1ec8ff_17.23%,#1ec8ff_42.04%,#06adff_55.12%,#009aff_71.54%,#0875c5_100%)] bg-clip-text text-transparent">¡Contáctame!</span>
            </p>

            <ContactForm />

            <p className="dark:text-white/80 text-gray-600/80 px-8 py-4 text-lg">
              ¿Dónde encontrarme?
            </p>

            <div className="px-8 py-2">

              <a href='https://maps.app.goo.gl/8MkrSJa1cbGVXHxJ9' target='__blank' title='Ubicación' className="inline-block align-middle border dark:border-[#f4f4f40e] p-2 rounded-lg text-[#0d639b] dark:text-[#009aff] shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)] border-[#f4f4f4d0]
               dark:hover:bg-gradient-to-br dark:hover:from-[#0d639b] dark:hover:via-[#020202] dark:hover:to-[#181818]
               hover:bg-gradient-to-br hover:from-[#d6f7ff] hover:via-[#f7f7f7] hover:to-[#e7e7e7]">
                <IconMapPin stroke={2} width={20} height={20} className="inline-block align-middle" />

              </a>
              <p className="inline-block text-md pl-4 dark:text-white/80 text-gray-600/80">
                Tegucigalpa, Honduras
              </p>
            </div>

            <div className="px-8 py-2">

              <a href='mailto:l.velasquez1617@gmail.com' target='__blank' title='Contáctame' className="inline-block align-middle border dark:border-[#f4f4f40e] p-2 rounded-lg text-[#0d639b] dark:text-[#009aff] shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)] border-[#f4f4f4d0]
               dark:hover:bg-gradient-to-br dark:hover:from-[#0d639b] dark:hover:via-[#020202] dark:hover:to-[#181818]
               hover:bg-gradient-to-br hover:from-[#d6f7ff] hover:via-[#f7f7f7] hover:to-[#e7e7e7]">
                <IconMailForward stroke={2} width={20} height={20} className="inline-block align-middle" />

              </a>
              <p className="inline-block text-md pl-4 dark:text-white/80 text-gray-600/80">
                l.velasquez1617@gmail.com
              </p>
            </div>

            <div className="flex flex-row gap-2 px-8 py-2 justify-center">

              <div className="py-2">

                <a href='https://api.whatsapp.com/send?phone=50488918086&text=Hola%2C%20v%C3%AD%20tu%20Portfolio%2C%20y%20me%20gustar%C3%ADa%20cont%C3%A1ctarme%20contigo%20sobre%20un%20proyecto.' target='__blank' title='WhatsApp' className="inline-block align-middle border dark:border-[#f4f4f40e] p-2 rounded-lg text-[#0d639b] dark:text-[#009aff] shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)] border-[#f4f4f4d0]
               dark:hover:bg-gradient-to-br dark:hover:from-[#0d639b] dark:hover:via-[#020202] dark:hover:to-[#181818]
               hover:bg-gradient-to-br hover:from-[#d6f7ff] hover:via-[#f7f7f7] hover:to-[#e7e7e7]">
                  <IconBrandWhatsapp stroke={2} width={20} height={20} className="inline-block align-middle" />

                </a>
              </div>

              <div className="py-2">

                <a href='https://www.linkedin.com/in/luis-velasquez-768072284' target='__blank' title='LinkedIn' className="inline-block align-middle border dark:border-[#f4f4f40e] p-2 rounded-lg text-[#0d639b] dark:text-[#009aff] shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)] border-[#f4f4f4d0]
               dark:hover:bg-gradient-to-br dark:hover:from-[#0d639b] dark:hover:via-[#020202] dark:hover:to-[#181818]
               hover:bg-gradient-to-br hover:from-[#d6f7ff] hover:via-[#f7f7f7] hover:to-[#e7e7e7]">
                  <IconBrandLinkedin stroke={2} width={20} height={20} className="inline-block align-middle" />

                </a>
              </div>

              <div className="py-2">

                <a href='https://github.com/LuisVelasquezHN' target='__blank' title='GitHub' className="inline-block align-middle border dark:border-[#f4f4f40e] p-2 rounded-lg text-[#0d639b] dark:text-[#009aff] shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)] border-[#f4f4f4d0]
               dark:hover:bg-gradient-to-br dark:hover:from-[#0d639b] dark:hover:via-[#020202] dark:hover:to-[#181818]
               hover:bg-gradient-to-br hover:from-[#d6f7ff] hover:via-[#f7f7f7] hover:to-[#e7e7e7]">
                  <IconBrandGithub stroke={2} width={20} height={20} className="inline-block align-middle" />

                </a>
              </div>

              <div className="py-2">

                <a href='https://www.instagram.com/luisalfredo98/' target='__blank' title='Instagram' className="inline-block align-middle border dark:border-[#f4f4f40e] p-2 rounded-lg text-[#0d639b] dark:text-[#009aff] shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)] border-[#f4f4f4d0]
               dark:hover:bg-gradient-to-br dark:hover:from-[#0d639b] dark:hover:via-[#020202] dark:hover:to-[#181818]
               hover:bg-gradient-to-br hover:from-[#d6f7ff] hover:via-[#f7f7f7] hover:to-[#e7e7e7]">
                  <IconBrandInstagram stroke={2} width={20} height={20} className="inline-block align-middle" />

                </a>
              </div>

              <div className="py-2">

                <a href='https://x.com/Luiss_Alfredoo' target='__blank' title='Twitter / X' className="inline-block align-middle border dark:border-[#f4f4f40e] p-2 rounded-lg text-[#0d639b] dark:text-[#009aff] shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)] border-[#f4f4f4d0]
               dark:hover:bg-gradient-to-br dark:hover:from-[#0d639b] dark:hover:via-[#020202] dark:hover:to-[#181818]
               hover:bg-gradient-to-br hover:from-[#d6f7ff] hover:via-[#f7f7f7] hover:to-[#e7e7e7]">
                  <IconBrandX stroke={2} width={20} height={20} className="inline-block align-middle" />

                </a>
              </div>
            </div>

          </div>
        );
      default:
        return null;
    }
  };


  return (
    <div className="w-full max-w-[1100px] mx-auto grid md:grid-cols-[1fr_3fr] gap-4">
      <div className="flex flex-row sm:flex-col gap-2 sm:gap-y-2 justify-center sm:justify-start md:sticky top-4 h-fit">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`cursor-pointer h-[60px] sm:h-[70px] flex items-center px-5 py-2 dark:text-[#f4f4f4] text-[#515151] rounded-2xl border border-[#f4f4f40e] transition-all duration-300 ${activeTab === tab.id
              ? "bg-[#0073ff18] border-l-2 border-l-[#0073ff] shadow-md"
              : "hover:bg-[#0073ff18] hover:border-l-[#0073ff]"
              }`}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div className="p-4 dark:bg-[#1010106c] bg-[#f6f5f783]  rounded-2xl border border-[#f4f4f40e] text-pretty">
        {renderContent()}
      </div>
    </div>
  );
};
