import React, { useState } from "react";
import Icons from './IconsSkills';
import { IconBook, IconCertificate } from "@tabler/icons-react";

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
          <div>
            <h2 className="text-xl font-bold text-white">Hola</h2>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              aliquid quaerat, rerum laboriosam odio officiis ullam earum
              officia maiores aut veniam ad assumenda voluptates hic voluptas,
              tempora suscipit ipsam deserunt!
            </p>
          </div>
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
                  className="bg-[#1010106c] hiddenObs rounded-2xl border border-[#f4f4f40e] p-2 min-h-[120px] flex items-center shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)]"
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
          <div>
            <p className="text-gray-300">
              Contact
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              aliquid quaerat, rerum laboriosam odio officiis ullam earum
              officia maiores aut veniam ad assumenda voluptates hic voluptas,
              tempora suscipit ipsam deserunt!
            </p>
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
            className={`cursor-pointer h-[60px] sm:h-[70px] flex items-center px-5 py-2 text-[#f4f4f4] rounded-2xl border border-[#f4f4f40e] transition-all duration-300 ${activeTab === tab.id
                ? "bg-[#0073ff18] border-l-2 border-l-[#0073ff] shadow-md"
                : "hover:bg-[#0073ff18] hover:border-l-[#0073ff]"
              }`}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div className="p-4 bg-[#1010106c] rounded-2xl border border-[#f4f4f40e] text-pretty">
        {renderContent()}
      </div>
    </div>
  );
};
