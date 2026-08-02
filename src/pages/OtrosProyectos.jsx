import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { Breadcrumb } from '../components/Breadcrumb';
import { useTranslation } from 'react-i18next';
import { Bentox2 } from './Bentox2';
import { useLocation } from 'react-router-dom';


export const OtrosProyectos = () => {
    const { t } = useTranslation();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [pathname]);

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
            </section>

            <Bentox2 />

            <Footer />
        </>
    );
};
