import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { IconHome, IconRefresh } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

const ErrorPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex items-center justify-center p-6 overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, -90, 0],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-indigo-600 rounded-full blur-[150px]"
                />
            </div>

            <div className="max-w-4xl w-full flex flex-col items-center text-center relative z-10">
                {/* 3D-like Animated 404 */}
                <motion.div
                    initial={{ perspective: 1000 }}
                    className="relative mb-12"
                >
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
                        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                        whileHover={{ rotateY: 15, rotateX: -15, scale: 1.05 }}
                        className="text-[120px] md:text-[200px] font-black leading-none bg-clip-text text-transparent bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 drop-shadow-2xl cursor-default select-none"
                    >
                        404
                    </motion.h1>

                    {/* Shadow/Reflection */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        className="absolute -bottom-4 left-0 w-full h-20 bg-gradient-to-t from-transparent to-black/20 dark:to-white/10 blur-xl transform scale-y-[-1] mask-linear-gradient"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[#515151] dark:text-[#f4f4f4] mb-4">
                        {t('errorPage.title')}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto">
                        {t('errorPage.description')}
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/')}
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold shadow-lg shadow-blue-500/30 transition-all"
                    >
                        <IconHome size={24} />
                        {t('errorPage.goHome')}
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.reload()}
                        className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-200 dark:border-zinc-800 text-[#515151] dark:text-[#f4f4f4] rounded-full font-bold hover:bg-gray-50 dark:hover:bg-zinc-900 transition-all"
                    >
                        <IconRefresh size={24} />
                        {t('errorPage.retry')}
                    </motion.button>
                </motion.div>
            </div>

            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                    animate={{
                        x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                        y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                        scale: [0, 1, 0],
                        opacity: [0, 0.5, 0]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
};

export default ErrorPage;
