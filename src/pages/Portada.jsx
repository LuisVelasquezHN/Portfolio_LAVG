import React, { useState } from 'react';
import { BotonIngresar } from '../components/BotonIngresar';
import Typewriter from 'typewriter-effect';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const Portada = () => {
    const [exitAnimation, setExitAnimation] = useState(false);
    const [showParagraph, setShowParagraph] = useState(false);
    const navigate = useNavigate();

    const handleExplore = () => {
        setExitAnimation(true);
        setTimeout(() => {
            navigate('/home');
        }, 1000);
    };

    return (
        <AnimatePresence>
            {!exitAnimation && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 1 }}
                >
                    <section className="flex flex-col-reverse md:flex-col-reverse justify-center content-center items-center gap-[60px] md:gap-[100px] w-full max-w-[1300px]">
                        <div className="text-center md:text-left">
                            <h1 className='text-3xl md:text-5xl font-bold'>
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString('<span class="text-[#0072ff]">Hey,</span> soy Luis Velasquez')
                                            .callFunction(() => setShowParagraph(true))
                                            .start();
                                    }}
                                    options={{
                                        autoStart: true,
                                        loop: false,
                                        delay: 55,
                                    }}
                                />
                            </h1>

                            {showParagraph && (
                                <motion.p
                                    className='text-lg md:text-2xl text-center mt-6 p-2 md:p-0 text-[#1ea5ff]'
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                >
                                    Bienvenido a mi Portfolio.
                                </motion.p>
                            )}
                        </div>

                        <div className="relative w-60 md:min-w-[400px] rounded-full overflow-hidden aspect-square">
                            <motion.img
                                className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
                                src="/personal.jpg"
                                alt="lavg_foto_personal"
                                whileHover={{ scale: 1.1 }} 
                                whileTap={{ scale: 0.95 }}  
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
