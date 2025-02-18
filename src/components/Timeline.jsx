import { IconBriefcase2 } from '@tabler/icons-react';
import React from 'react'

export const Timeline = () => {
    const info = [
        {
            puesto: 'Analista de Inteligencia de Negocios',
            empresa: 'Cable Color',
            tiempo: 'Febrero 2022 - Actualidad',
            descripcion: `Desarrollo, diseño y mantenimiento de sitios web oficiales a nivel regional. Involucrado en la creación e implementación
                            de multiples soluciones tecnológicas. Desarrollo y mantenimiento de documentación técnica para los sistemas desarrollados.
                            Extracción y manipulación de bases de datos, implementando rutinas automatizadas para la actualización diaria de reportes.
                            Automatización de procesos para mejorar la eficiencia y el rendimiento de los sistemas.`
        },
        {
            puesto: 'Freelancer',
            empresa: '',
            tiempo: 'Actualidad',
            descripcion: `Como desarrollador freelance, he trabajado en la creación y optimización de sitios web para diversas industrias, 
                        asegurando interfaces intuitivas, alto rendimiento y experiencias de usuario eficientes. 
                        Mi enfoque se basa en el uso de tecnologías como React, JavaScript, Tailwind CSS, APIs REST y optimización SEO, adaptando cada solución a las necesidades específicas del cliente.`
        },
        {
            puesto: 'Auxiliar de Soporte IT (Pasante)',
            empresa: 'DIUNSA',
            tiempo: 'Agosto 2016 - Noviembre 2016',
            descripcion: `Responsable de dar mantenimiento a equipos de computo, realizar formateos e instalación de sistemas operativos.
                            Hacer un puente de red para área de bodega. Configuración de impresoras para la conexión mediante IP y lograr la ejecución de impresión desde diferentes áreas
                            mejorando la productividad en los requerimientos de la empresa.`
        },
    ]
    return (
        <section id="experiencia" className="section p-3 hiddenObs mt-[10vh] scroll-m-20 w-full container lg:max-w-5xl md:max-w-2xl">
            <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white hiddenObs">
                <IconBriefcase2 width={30} height={30} stroke={2} />
                Experiencia
            </h2>
            <ol className="relative mt-16">
                {info.map((item, index) => (
                    <li key={index} className='hiddenObs'>
                        <div className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 md:grid-cols-5 md:gap-10 md:space-x-4">
                            <div className="relative pb-12 md:col-span-2">
                                <div className="sticky top-0">
                                    <span className="text-[#0686ff] -left-[42px] absolute rounded-full text-5xl">•</span>
                                    <h3 className="text-xl font-bold text-[#0686ff]">{item.puesto}</h3>
                                    {item.empresa && (
                                        <h4 className="font-semibold text-xl text-gray-600 dark:text-white">{item.empresa}</h4>
                                    )}
                                    <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">{item.tiempo}</time>
                                </div>
                            </div>
                            <div className="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
                                {item.descripcion}

                            </div>
                        </div>
                    </li>

                ))}
               
            </ol>
        </section>
    );
}
