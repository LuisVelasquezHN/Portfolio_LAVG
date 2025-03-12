import React from 'react';
import { Footer } from '../components/Footer';
import { Breadcrumb } from '../components/Breadcrumb';

export const OtrosProyectos = () => {
    const projects = [
        { id: 1, name: "Portal de Colaboradores", portada: "projects/otros/portalProject.png" },
        { id: 2, name: "Gestor Web", portada: "projects/otros/gestorProject.png" },
        { id: 3, name: "DMS (Document Management System)", portada: "projects/otros/dmsProject.png" },
        { id: 4, name: "Sistema Talento Humano", portada: "projects/otros/thProject.png" },
        { id: 5, name: "Sistema Dispatch", portada: "projects/otros/dispatchProject.png" },
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
                    Proyectos en los que he colaborado.
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="relative rounded-2xl overflow-hidden shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)] h-64 flex items-end cursor-pointer opacity-90 group"
                            style={{ backgroundImage: `url(${project.portada})`, backgroundSize: "cover", backgroundPosition: "center" }}
                        >
                            <div className="absolute inset-0 bg-[#031d2f] opacity-50 h-20 md:h-15 mt-auto group-hover:opacity-70 transition-opacity duration-300"></div>

                            <button className="absolute inset-0 flex items-center justify-center cursor-pointer  bg-black/40 text-white text-lg font-semibold rounded-lg md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                Ver Más
                            </button>

                            <div className="relative p-4 text-white w-full">
                                <h3 className="text-lg font-semibold">{project.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};
