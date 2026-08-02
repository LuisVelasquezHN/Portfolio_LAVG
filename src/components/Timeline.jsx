import { IconBriefcase2 } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';


export const Timeline = () => {
      const { t } = useTranslation();
    
    const info = [
        {
            puesto: t('experience.puestoCC'),
            empresa: 'Cable Color',
            tiempo: t('experience.tiempoCC'),
            descripcion: t('experience.descripcionCC')
        },
        {
            puesto: t('experience.puestoFree'),
            empresa: '',
            tiempo: t('experience.tiempoFree'),
            descripcion: t('experience.descripcionFree')
        },
        {
            puesto: t('experience.puestoD'),
            empresa: 'DIUNSA',
            tiempo: t('experience.tiempoD'),
            descripcion: t('experience.descripcionD')
        },
    ]
    return (
        <section id="experiencia" className="container p-3 hiddenObs2 md:hiddenObs mt-[10vh] scroll-m-20 w-full lg:max-w-5xl">
            <h2 className="flex items-center mb-6 p-4 md:p-0 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
                <IconBriefcase2 width={30} height={30} stroke={2} />
                {t('navbar.experiencia')}
            </h2>
            <ol className="relative mt-16">
                {info.map((item, index) => (
                    <li key={index} className='hiddenObs2 md:hiddenObs'>
                        <div className="relative mx-8 md:mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 md:grid-cols-5 md:gap-10 md:space-x-4">
                            <div className="relative pb-12 md:col-span-2">
                                <div className="md:sticky md:top-0">
                                    <span className="text-[#0686ff] -left-[42px] absolute rounded-full text-5xl">•</span>
                                    <h3 className="text-xl font-bold text-[#0686ff]">{item.puesto}</h3>
                                    {item.empresa && (
                                        <h4 className="font-semibold text-xl text-gray-600 dark:text-white">{item.empresa}</h4>
                                    )}
                                    <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">{item.tiempo}</time>
                                </div>
                            </div>
                            <div className="relative flex flex-col text-pretty gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
                                {item.descripcion}

                            </div>
                        </div>
                    </li>

                ))}
               
            </ol>
        </section>
    );
}
