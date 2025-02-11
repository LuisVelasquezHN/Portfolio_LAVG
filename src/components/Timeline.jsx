import { IconBriefcase2 } from '@tabler/icons-react';
import React from 'react'

export const Timeline = () => {
    return (
        <section id="experiencia" className="section hiddenObs mt-[40vh] scroll-m-20 w-full container lg:max-w-5xl md:max-w-2xl">
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
                <IconBriefcase2 width={30} height={30} stroke={2} />
                Experiencia
            </h2>
            <ol className="relative mt-16">
                <li className='hiddenObs'>
                    <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 md:grid-cols-5 md:gap-10 md:space-x-4">
                        <div className="relative pb-12 md:col-span-2">
                            <div className="sticky top-0">
                                <span className="text-[#0686ff] -left-[42px] absolute rounded-full text-5xl">•</span>
                                <h3 className="text-xl font-bold text-[#0686ff]">Analista de Inteligencia de Negocios</h3>
                                <h4 className="font-semibold text-xl text-gray-600 dark:text-white">Cable Color</h4>
                                <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">Febrero 2022 - Actualidad</time>
                            </div>
                        </div>
                        <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
                            Desarrollo, diseño y mantenimiento de sitios web oficiales a nivel regional. Involucrado en la creación e implementación
                            de multiples soluciones tecnológicas. Desarrollo y mantenimiento de documentación técnica para los sistemas desarrollados.
                            Extracción y manipulación de bases de datos, implementando rutinas automatizadas para la actualización diaria de reportes.
                            Automatización de procesos para mejorar la eficiencia y el rendimiento de los sistemas.

                        </div>
                    </div>
                </li>
                <li className='hiddenObs'>
                    <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 md:grid-cols-5 md:gap-10 md:space-x-4">
                        <div className="relative pb-12 md:col-span-2">
                            <div className="sticky top-0">
                                <span className="text-[#0686ff] -left-[42px] absolute rounded-full text-5xl">•</span>
                                <h3 className="text-xl font-bold text-[#0686ff]">Auxiliar de Soporte IT (Pasante)</h3>
                                <h4 className="font-semibold text-xl text-gray-600 dark:text-white">DIUNSA</h4>
                                <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">Agosto 2016 - Noviembre 2016</time>
                            </div>
                        </div>
                        <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
                            Responsable de dar mantenimiento a equipos de computo, realizar formateos e instalación de sistemas operativos.
                            Hacer un puente de red para área de bodega. Configuración de impresoras para la conexión mediante IP y lograr la ejecución de impresión desde diferentes áreas
                            mejorando la productividad en los requerimientos de la empresa.
                        </div>
                    </div>
                </li>
                <li className='hiddenObs'>
                    <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 md:grid-cols-5 md:gap-10 md:space-x-4">
                        <div className="relative pb-12 md:col-span-2">
                            <div className="sticky top-0">
                                <span className="text-[#0686ff] -left-[42px] absolute rounded-full text-5xl">•</span>
                                <h3 className="text-xl font-bold text-[#0686ff]">Freelancer</h3>
                                <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">2024 - Actualidad</time>
                            </div>
                        </div>
                        <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
                            Responsable de la creación del sitio web oficial de Platinum Rent A Car, mostrando un catálogo de vehículos disponibles
                            y realizando conexión mediante WhatsApp solicitando información de los vehículos seleccionados. 
                        </div>
                    </div>
                </li>
            </ol>
        </section>
    );
}
