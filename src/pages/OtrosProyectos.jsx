import React, { useState } from 'react';
import { Footer } from '../components/Footer';
import { Breadcrumb } from '../components/Breadcrumb';
import { IconExternalLink } from '@tabler/icons-react';
import { ModalProjects } from '../components/ModalProjects';
import { SVGphp } from '../components/SVG/SVGphp';
import { SVGoracle } from '../components/SVG/SVGoracle';
import { SVGNode } from '../components/SVG/SVGNode';
import { SVGreact } from '../components/SVG/SVGreact';
import { SVGangular } from '../components/SVG/SVGangular';

export const OtrosProyectos = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const projects = [
        {
            id: 1,
            name: "Portal de Empleados",
            portada: "projects/otros/portalProject.png",
            descripcion: "El Portal de Empleados es una plataforma interna diseñada para optimizar el acceso a información y recursos clave dentro de la empresa Cable Color. Permite a los colaboradores explorar enlaces directos a distintos sistemas empresariales, acceder al directorio de empleados para encontrar información de contacto, visualizar fotografías de eventos corporativos, enviar sugerencias a la empresa y generar firmas de correo electrónico de manera automatizada. Desarrollado con PHP y servicios API en Oracle APEX, este portal mejora la comunicación y eficiencia dentro de la organización.",
            tecnologias: [<SVGphp />, <SVGoracle />]
        },
        {
            id: 2,
            name: "Gestor Web",
            portada: "projects/otros/gestorProject.png",
            descripcion: "El Gestor Web es una herramienta de administración de contenido que permite gestionar dinámicamente diversas secciones de sitios web a nivel regional, incluyendo el Portal de Colaboradores. A través de esta plataforma, es posible modificar imágenes, textos, íconos, títulos y secciones de servicios, tanto residenciales como corporativos, además de gestionar información de agencias. Desarrollado íntegramente en Oracle APEX, este sistema ofrece una solución eficiente y centralizada para la gestión web empresarial.",
            tecnologias: [<SVGoracle />]
        },
        {
            id: 3,
            name: "DMS (Document Management System)",
            portada: "projects/otros/dmsProject.png",
            descripcion: "El Sistema de Gestión Documental (DMS) es una plataforma diseñada para el manejo de documentos confidenciales dentro del área de Procesos. Facilita la administración de políticas empresariales, la aprobación de documentos mediante un sistema de tickets y la comunicación entre áreas clave, como gerencia y jefaturas. Mi aporte en este proyecto incluyó el desarrollo de un tablero Kanban interactivo para gestionar solicitudes, facilitando la trazabilidad de documentos y la colaboración en tiempo real. Además, implementé la funcionalidad de mantenimiento y aprobación de documentos, automatizando la generación de versiones. Proyecto desarrollado con Angular y Node.js.",
            tecnologias: [<SVGangular />, <SVGNode />]
        },
        {
            id: 4,
            name: "Sistema Talento Humano",
            portada: "projects/otros/thProject.png",
            descripcion: "El Sistema de Talento Humano es una plataforma integral para la gestión de vacantes, tanto nuevas como de reemplazo. Conectado con sitios web externos y el Portal de Empleados, permite la publicación de ofertas laborales y la referencia de candidatos. Implementé un tablero Kanban que facilita la colaboración entre los jefes que solicitan personal y los especialistas encargados del proceso de selección. También desarrollé un módulo de documentación para candidatos, que permite la carga de documentos a través de un enlace público. Proyecto desarrollado con React y Node.js para el área de Recursos Humanos.",
            tecnologias: [<SVGreact />, <SVGNode />]
        },
        {
            id: 5,
            name: "Sistema Dispatch",
            portada: "projects/otros/dispatchProject.png",
            descripcion: "El Sistema Dispatch permite la organización eficiente de grupos y técnicos encargados de instalaciones en diferentes ubicaciones del país. Facilita la gestión y asignación de órdenes generadas en el sistema, optimizando el trabajo de los gestores y técnicos de campo. Mi aporte incluyó el desarrollo de una sección para la extracción y generación de órdenes de trabajo, asegurando una asignación eficiente de recursos. Proyecto desarrollado con React y Node.js para el área de Dispatch.",
            tecnologias: [<SVGreact />, <SVGNode />]
        }
    ];

    return (
        <>
            <section className='section p-3 hiddenObs2 mt-[10vh] scroll-m-20 w-full container lg:max-w-5xl md:max-w-xl'>
                <Breadcrumb
                    items={[
                        { label: "Inicio", path: "/home" },
                        { label: "Proyectos", path: "/projects" },
                    ]}
                />
                <h1 className='dark:text-white/80 text-gray-600/80 px-8 py-4 text-2xl md:text-3xl'>
                    Proyectos y Colaboraciones.
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="relative rounded-2xl overflow-hidden shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)] h-64 flex items-end cursor-pointer opacity-90 group"
                            style={{ backgroundImage: `url(${project.portada})`, backgroundSize: "cover", backgroundPosition: "center" }}
                        >
                            <div className="absolute inset-0 bg-[#2182c7] dark:bg-[#031d2f] opacity-50 h-20 md:h-15 mt-auto group-hover:opacity-70 transition-opacity duration-300"></div>

                            <div className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 dark:bg-black/40 text-white text-lg font-semibold rounded-lg md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                <a

                                    className=" text-base flex-row text-[#0d639b] dark:text-[#009aff] dark:md:bg-black/80 dark:bg-black/60 bg-white/80
                                                rounded-3xl py-3 px-5 mt-2 cursor-pointer shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)] border dark:border-[#f4f4f40e] border-[#f4f4f4d0]
                                                dark:hover:bg-gradient-to-br dark:hover:from-[#0d639b] dark:hover:via-[#020202] dark:hover:to-[#181818]
                                                hover:bg-gradient-to-br hover:from-[#d6f7ff] hover:via-[#f7f7f7] hover:to-[#e7e7e7] inline-block
                                                "
                                    onClick={() => openModal(project)}
                                >
                                    Más Información
                                    <IconExternalLink stroke={2}
                                        className="w-6 h-6 text-current inline-block align-middle ml-1" />
                                </a>
                            </div>

                            <div className="relative p-4 text-white w-full">
                                <h3 className="text-lg font-semibold">{project.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <ModalProjects
                isOpen={isModalOpen}
                onClose={closeModal}
                modalTitle={selectedProject?.name}
                data={selectedProject ? [
                    <div className="flex flex-col gap-4 md:grid md:grid-cols-2 w-full">
                        <div className='hiddenObs2'>
                            <h4 className="text-lg font-semibold text-[#515151] dark:text-gray-200">Tecnologías</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 flex gap-2 pt-1">{selectedProject.tecnologias}</p>
                            <h4 className="text-lg font-semibold mt-4 text-[#515151] dark:text-gray-200">Descripción</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 text-pretty">{selectedProject.descripcion}</p>
                        </div>
                        <div className="flex justify-center items-center hiddenObs">
                            <img src={selectedProject.portada} alt={selectedProject.name} className="relative rounded-2xl overflow-hidden shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)] h-64 flex items-end opacity-90" />
                        </div>
                    </div>
                ] : []}
            />
            <Footer />
        </>
    );
};
