import { useState, useCallback, useEffect } from 'react';
import { BotonIngresar } from '../components/BotonIngresar';
import Typewriter from 'typewriter-effect';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Portada = () => {
    const { t, i18n } = useTranslation();
    const [key, setKey] = useState(0);

    useEffect(() => {
        setKey((prevKey) => prevKey + 1);
    }, [i18n.language]);

    const [exitAnimation, setExitAnimation] = useState(false);
    const [showParagraph, setShowParagraph] = useState(false);
    const navigate = useNavigate();

    const handleExplore = useCallback(() => {
        setExitAnimation(true);
        setTimeout(() => {
            navigate('/home');
        }, 1000);
    }, [navigate]);

    const imageVariants = {
        hover: { scale: 1.1 },
        tap: { scale: 0.95 },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <AnimatePresence>
            {!exitAnimation && (
                <motion.div
                    className="min-h-dvh w-full flex flex-col items-center justify-center px-4 md:px-8"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1 }}
                >
                    <section className="flex flex-col-reverse md:flex-col-reverse justify-center content-center items-center gap-[60px] md:gap-[50px] w-full max-w-[1100px]">
                        <div className="text-center md:text-left">
                            <h1 className='text-3xl text-center md:text-5xl font-bold text-[#515151] dark:text-[#f4f4f4]'>
                                <Typewriter
                                    key={key}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString(`<span class="text-[#0072ff]">${t('portada.greeting')}</span> ${t('portada.name')}`)
                                            .callFunction(() => {
                                                if (!showParagraph) setShowParagraph(true);
                                            })
                                            .start();
                                    }}
                                    options={{
                                        autoStart: true,
                                        loop: false,
                                        delay: 45,
                                    }}
                                />
                            </h1>

                            {showParagraph && (
                                <>
                                    <motion.p
                                        className='text-lg md:text-2xl text-center mt-6 p-2 md:p-0 text-[#515151] dark:text-[#f4f4f4]'
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                    >
                                        <span className='dark:text-[#009aff] text-[#0875c5]'>{t('home.job_title')}</span> {t('home.experience')}.
                                    </motion.p>
                                    {/* <motion.p
                                        className='text-lg md:text-2xl text-center mt-2 md:p-0 text-[#1ec8ff]'
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                                    >
                                        {t('portada.welcome')}
                                    </motion.p> */}

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                                        className="inline-block px-4 py-2 mt-4 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-800"
                                    >
                                        <p className="text-blue-600 dark:text-blue-300 font-semibold tracking-wide uppercase text-sm">
                                            {t('portada.welcome')}
                                        </p>
                                    </motion.div>
                                </>
                            )}
                        </div>

                        <div className="relative w-60 md:min-w-[300px] rounded-full overflow-hidden aspect-square">
                            <motion.img
                                loading="lazy"
                                className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
                                src="/personal.webp"
                                alt="lavg_foto_personal"
                                variants={imageVariants}
                                whileHover="hover"
                                whileTap="tap"
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            />
                        </div>
                    </section>
                    <BotonIngresar onClick={handleExplore} />
                </motion.div>
            )}
        </AnimatePresence>
    );
};
