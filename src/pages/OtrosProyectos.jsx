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
import { useTranslation } from 'react-i18next';


export const OtrosProyectos = () => {
    const { t } = useTranslation();

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
            name: t('otherProjects.namePortal'),
            portada: "projects/otros/portalProject.png",
            descripcion: t('otherProjects.descripcionPortal'),
            tecnologias: [
                <SVGphp key="php-1" />,
                <SVGoracle key="oracle-1" />
            ]
        },
        {
            id: 2,
            name: t('otherProjects.nameGestor'),
            portada: "projects/otros/gestorProject.png",
            descripcion: t('otherProjects.descripcionGestor'),
            tecnologias: [
                <SVGoracle key="oracle-2" />
            ]
        },
        {
            id: 3,
            name: t('otherProjects.nameDMS'),
            portada: "projects/otros/dmsProject.png",
            descripcion: t('otherProjects.descripcionDMS'),
            tecnologias: [
                <SVGangular key="angular-3" />,
                <SVGNode key="node-3" />
            ]
        },
        {
            id: 4,
            name: t('otherProjects.nameTH'),
            portada: "projects/otros/thProject.png",
            descripcion: t('otherProjects.descripcionTH'),
            tecnologias: [
                <SVGreact key="react-4" />,
                <SVGNode key="node-4" />
            ]
        },
        {
            id: 5,
            name: t('otherProjects.nameDispatch'),
            portada: "projects/otros/dispatchProject.png",
            descripcion: t('otherProjects.descripcionDispatch'),
            tecnologias: [
                <SVGreact key="react-5" />,
                <SVGNode key="node-5" />
            ]
        }
    ];



    return (
        <>
            <section className='section p-3 sm:p-4 md:p-6 hiddenObs2 mt-[10vh] scroll-m-20 w-full container lg:max-w-5xl md:max-w-3xl sm:max-w-xl'>
                <Breadcrumb
                    items={[
                        { label: t('navbar.home'), path: "/home" },
                        { label: t('navbar.projects'), path: "/projects" },
                    ]}
                />
                <h1 className='dark:text-white/80 text-gray-600/80 px-4 sm:px-8 py-4 text-2xl md:text-3xl'>
                    {t('otherProjects.title')}
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="relative rounded-2xl overflow-hidden shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)] min-h-56 md:h-64 flex items-end cursor-pointer opacity-90 group"
                            style={{ backgroundImage: `url(${project.portada})`, backgroundSize: "cover", backgroundPosition: "center" }}
                            onClick={() => openModal(project)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 md:from-black/60 dark:from-black/80 to-transparent h-full md:h-full mt-auto group-hover:opacity-70 transition-opacity duration-300"></div>

                            <div className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 dark:bg-black/40 text-white text-lg font-semibold rounded-lg md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                {/* <a

                                    className=" text-base flex-row text-[#0d639b] dark:text-[#009aff] dark:md:bg-black/80 dark:bg-black/60 bg-white/80
                                                rounded-3xl py-3 px-5 mt-2 cursor-pointer shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)] border dark:border-[#f4f4f40e] border-[#f4f4f4d0]
                                                dark:hover:bg-gradient-to-br dark:hover:from-[#0d639b] dark:hover:via-[#020202] dark:hover:to-[#181818]
                                                hover:bg-gradient-to-br hover:from-[#d6f7ff] hover:via-[#f7f7f7] hover:to-[#e7e7e7] inline-block
                                                "
                                    onClick={() => openModal(project)}
                                >
                                    {t('otherProjects.button')}
                                    <IconExternalLink stroke={2}
                                        className="w-6 h-6 text-current inline-block align-middle ml-1" />
                                </a> */}
                            </div>

                            <div className="relative p-4 text-white w-full">
                                <h3 className="text-lg font-semibold inline-block text-balance">{project.name}
                          
                                    <IconExternalLink stroke={2}
                                        className="w-5 h-5 text-current inline-block align-middle ml-1" />
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 flex gap-2 pt-1">
                                    {project.tecnologias}
                                </p>
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
                            <h4 className="text-lg font-semibold text-[#515151] dark:text-gray-200">{t('otherProjects.tecnologias')}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 flex gap-2 pt-1">{selectedProject.tecnologias}</p>
                            <h4 className="text-lg font-semibold mt-4 text-[#515151] dark:text-gray-200">{t('otherProjects.descripcion')}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 text-pretty">{selectedProject.descripcion}</p>
                        </div>
                        <div className="flex justify-center items-center sm:block md:flex hiddenObs">
                            <img src={selectedProject.portada} alt={selectedProject.name} className="rounded-2xl overflow-hidden shadow-lg max-w-full h-auto md:h-64 object-cover opacity-90" />
                        </div>
                    </div>
                ] : []}
            />
            <Footer />
        </>
    );
};
