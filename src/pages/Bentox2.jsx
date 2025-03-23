import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import IconsText from '../components/IconTextSkill';
import { SVGphp } from '../components/SVG/SVGphp';
import { SVGoracle } from '../components/SVG/SVGoracle';
import { SVGangular } from '../components/SVG/SVGangular';
import { SVGNode } from '../components/SVG/SVGNode';
import { SVGreact } from '../components/SVG/SVGreact';
import { ModalProjects } from '../components/ModalProjects';


export const Bentox2 = () => {
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
            name: t("otherProjects.namePortal"),
            portada: "projects/otros/portalProject.png",
            portadaNoModal: "projects/otros/portal.webp",
            descripcion: t("otherProjects.descripcionPortal"),
            descripcionNoModal: t("otherProjects.descripcionNoModalPortal"),
            tecnologias: [<SVGphp key="php-1" />, <SVGoracle key="oracle-1" />],
        },
        {
            id: 2,
            fila1: [<IconsText.REACT key="react-1" />, <IconsText.ANGULAR key="angular-1" />, <IconsText.PHP key="php-1" />],
            fila2: [<IconsText.NODE key="node-1" />, <IconsText.ORACLE key="oracle-1" />]
        },
        {
            id: 3,
            name: t("otherProjects.nameGestor"),
            portada: "projects/otros/gestorProject.png",
            portadaNoModal: "projects/otros/gestor.webp",
            descripcion: t("otherProjects.descripcionGestor"),
            descripcionNoModal: t("otherProjects.descripcionNoModalGestor"),
            tecnologias: [<SVGoracle key="oracle-2" />],
        },
        {
            id: 4,
            name: t("otherProjects.nameDMS"),
            portada: "projects/otros/dmsProject.png",
            portadaNoModal: "projects/otros/DMS.webp",
            descripcion: t("otherProjects.descripcionDMS"),
            descripcionNoModal: t("otherProjects.descripcionNoModalDMS"),
            tecnologias: [<SVGangular key="angular-3" />, <SVGNode key="node-3" />],
        },
        {
            id: 5,
            name: t("otherProjects.nameTH"),
            portada: "projects/otros/thProject.png",
            portadaNoModal: "projects/otros/TH.webp",
            descripcion: t("otherProjects.descripcionTH"),
            descripcionNoModal: t("otherProjects.descripcionNoModalTH"),
            tecnologias: [<SVGreact key="react-4" />, <SVGNode key="node-4" />],
        },
        {
            id: 6,
            name: t("otherProjects.nameDispatch"),
            portada: "projects/otros/dispatchProject.png",
            portadaNoModal: "projects/otros/dispatch.webp",
            descripcion: t("otherProjects.descripcionDispatch"),
            descripcionNoModal: t("otherProjects.descripcionNoModalDispatch"),
            tecnologias: [<SVGreact key="react-5" />, <SVGNode key="node-5" />],
        },
    ];

    return (
        <>

            <div className="grid grid-cols-1 gap-4 pt-10 w-full max-w-[1100px] md:grid-cols-6 md:grid-rows-60 p-2 md:p-0 hiddenObs2">
                {projects.map((project) => {
                    if (project.id === 1) {
                        return (
                            <div key={project.id} className="col-span-2 row-span-25 rounded-2xl border border-[#0073ff] overflow-hidden relative w-full cursor-pointer 
                            md:col-span-4 md:row-span-20 hiddenObs2" onClick={() => openModal(project)}>
                                <div className="p-4 flex flex-col h-full relative">
                                    <div className="flex flex-row items-center text-balance w-full max-w-[600px]">
                                        <div className="flex flex-col w-full flex-grow basis-0 min-w-0">
                                            <p className="text-2xl md:text-2xl lg:text-3xl font-semibold px-4 text-[#515151] dark:text-gray-200">
                                                {project.name}
                                            </p>
                                            <p className="text-md text-gray-600/80 dark:text-white/80 px-4 w-full flex-shrink-0 overflow-hidden text-ellipsis">
                                                {project.descripcionNoModal}
                                            </p>
                                        </div>

                                        <div className="group btn-glow">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-[#515151] dark:text-gray-200">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/60 to-transparent dark:from-gray-900/90 dark:via-gray-900/60 dark:to-transparent pointer-events-none"></div>

                                    <div className="absolute inset-0 overflow-hidden">
                                        <img src={project.portadaNoModal} alt={project.name} className="w-full md:w-[90%] h-auto absolute bottom-[-70px] right-[-50px] md:bottom-[-250px] md:right-[20px] opacity-60 dark:opacity-40" />
                                    </div>
                                </div>
                            </div>
                        );
                    }

                    if (project.id === 2) {
                        return (
                            <div key={project.id} className="col-span-2 row-span-10 rounded-2xl border border-[#0073ff] overflow-hidden relative w-full
                            md:col-span-4 md:row-span-10 md:col-start-1 md:row-start-21 order-last md:order-none hiddenObs2">
                                <div className='p-4 flex flex-col gap-2 absolute inset-0'>
                                    <div className='flex flex-row gap-1'>{project.fila1}</div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-white/30 to-transparent dark:from-gray-900/90 dark:via-gray-900/20 dark:to-transparent pointer-events-none"></div>
                                    <div className='flex flex-row gap-1'>{project.fila2}</div>
                                </div>
                            </div>
                        );
                    }

                    if (project.id === 3) {
                        return (
                            <div key={project.id} className="col-span-2 row-span-25 rounded-2xl border border-[#0073ff] overflow-hidden relative w-full cursor-pointer 
                                md:col-span-2 md:row-span-20 md:col-start-1 md:row-start-31 hiddenObs2" onClick={() => openModal(project)}>
                                <div className="p-4 flex flex-col h-full relative">
                                    <div className="flex flex-row items-center text-balance w-full max-w-[500px]">
                                        <div className="flex flex-col w-full flex-grow basis-0 min-w-0">
                                            <p className="text-2xl md:text-2xl lg:text-2xl font-semibold px-4 text-[#515151] dark:text-gray-200">
                                                {project.name}
                                            </p>
                                            <p className="text-md text-gray-600/80 dark:text-white/80 px-4 w-full flex-shrink-0 overflow-hidden text-ellipsis">
                                                {project.descripcionNoModal}
                                            </p>
                                        </div>

                                        <div className="group btn-glow">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-[#515151] dark:text-gray-200">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/60 to-transparent dark:from-gray-900/90 dark:via-gray-900/60 dark:to-transparent pointer-events-none"></div>

                                    <div className="absolute inset-0 overflow-hidden">
                                        <img src={project.portadaNoModal} alt={project.name} className="w-full md:w-[90%] h-auto absolute bottom-[-80px] right-[-50px] md:bottom-[-80px] md:right-[20px] opacity-60 dark:opacity-40" />
                                    </div>
                                </div>
                            </div>
                        );
                    }

                    if (project.id === 4) {
                        return (
                            <div key={project.id} className="col-span-2 row-span-25 rounded-2xl border border-[#0073ff] overflow-hidden relative w-full cursor-pointer 
                            md:col-span-2 md:row-span-20 md:col-start-3 md:row-start-31 hiddenObs2" onClick={() => openModal(project)}>
                                <div className="p-4 flex flex-col h-full relative">
                                    <div className="flex flex-row items-center text-balance w-full max-w-[500px]">
                                        <div className="flex flex-col w-full flex-grow basis-0 min-w-0">
                                            <p className="text-2xl md:text-2xl lg:text-2xl font-semibold px-4 text-[#515151] dark:text-gray-200">
                                                {project.name}
                                            </p>
                                            <p className="text-md text-gray-600/80 dark:text-white/80 px-4 w-full flex-shrink-0 overflow-hidden text-ellipsis">
                                                {project.descripcionNoModal}                                </p>
                                        </div>

                                        <div
                                            className="group btn-glow"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6 text-[#515151] dark:text-gray-200"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/60 to-transparent dark:from-gray-900/90 dark:via-gray-900/60 dark:to-transparent pointer-events-none"></div>

                                    <div className="absolute inset-0 overflow-hidden">
                                        <img
                                            src={project.portadaNoModal}
                                            alt={project.name}
                                            className="w-full md:w-[90%] h-auto absolute bottom-[-80px] right-[-50px] md:bottom-[-80px] md:right-[20px] opacity-60 dark:opacity-40"
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    if (project.id === 5) {
                        return (
                            <div key={project.id} className="col-span-2 row-span-25 rounded-2xl border border-[#0073ff] overflow-hidden relative w-full cursor-pointer 
                            md:col-span-2 md:row-span-25 md:col-start-5 md:row-start-1 hiddenObs2" onClick={() => openModal(project)}>
                                <div className="p-4 flex flex-col h-full relative">
                                    <div className="flex flex-row items-center text-balance w-full max-w-[500px]">
                                        <div className="flex flex-col w-full flex-grow basis-0 min-w-0">
                                            <p className="text-2xl md:text-2xl lg:text-3xl font-semibold px-4 text-[#515151] dark:text-gray-200">
                                                {project.name}
                                            </p>
                                            <p className="text-md text-gray-600/80 dark:text-white/80 px-4 w-full flex-shrink-0 overflow-hidden text-ellipsis">
                                                {project.descripcionNoModal}                                </p>
                                        </div>

                                        <div
                                            className="group btn-glow"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6 text-[#515151] dark:text-gray-200"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/60 to-transparent dark:from-gray-900/90 dark:via-gray-900/60 dark:to-transparent pointer-events-none"></div>

                                    <div className="absolute inset-0 overflow-hidden">
                                        <img
                                            src={project.portadaNoModal}
                                            alt={project.name}
                                            className="w-full md:w-[90%] h-auto absolute bottom-[-80px] right-[-50px] md:bottom-[-70px] md:right-[20px] opacity-60 dark:opacity-40"
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    if (project.id === 6) {
                        return (
                            <div key={project.id} className="col-span-2 row-span-25 rounded-2xl border border-[#0073ff] overflow-hidden relative w-full cursor-pointer 
                            md:col-span-2 md:row-span-25 md:col-start-5 md:row-start-26 hiddenObs2" onClick={() => openModal(project)}>
                                <div className="p-4 flex flex-col h-full relative">
                                    <div className="flex flex-row items-center text-balance w-full max-w-[500px]">
                                        <div className="flex flex-col w-full flex-grow basis-0 min-w-0">
                                            <p className="text-2xl md:text-2xl lg:text-3xl font-semibold px-4 text-[#515151] dark:text-gray-200">
                                                {project.name}                                </p>
                                            <p className="text-md text-gray-600/80 dark:text-white/80 px-4 w-full flex-shrink-0 overflow-hidden text-ellipsis">
                                                {project.descripcionNoModal}                                </p>
                                        </div>

                                        <div
                                            className="group btn-glow"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6 text-[#515151] dark:text-gray-200"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/60 to-transparent dark:from-gray-900/90 dark:via-gray-900/60 dark:to-transparent pointer-events-none"></div>

                                    <div className="absolute inset-0 overflow-hidden">
                                        <img
                                            src={project.portadaNoModal}
                                            alt={project.name}
                                            className="w-full md:w-[90%] h-auto absolute bottom-[-80px] right-[-50px] md:bottom-[-70px] md:right-[20px] opacity-60 dark:opacity-40"
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    return null; // Si no coincide con ningún id, no se renderiza nada
                })}
            </div>

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


        </>

    )
}
