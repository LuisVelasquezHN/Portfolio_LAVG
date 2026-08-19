import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ScrollDownIndicator = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let ticking = false;
    
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setIsVisible(window.scrollY < 100);
                    ticking = false;
                });
                ticking = true;
            }
        };
    
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    

    return (
        <div 
            className={`flex justify-center mt-10 md:mt-0 transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        >
            <a href="#experiencia" className="group flex flex-col items-center cursor-pointer gap-2">
                {/* Texto */}
                <span className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500 group-hover:text-[#0686ff] dark:group-hover:text-[#4484bf] transition-colors duration-300">
                    Scroll
                </span>

                {/* Mouse icon animado */}
                <div className="relative w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center group-hover:border-[#0686ff] dark:group-hover:border-[#4484bf] transition-colors duration-300">
                    <motion.div 
                        className="w-1.5 h-1.5 bg-[#0686ff] dark:bg-[#4484bf] rounded-full mt-2"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ 
                            duration: 1.5, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                    />
                </div>

                {/* Chevrons animados */}
                <div className="flex flex-col items-center -mt-1">
                    <motion.svg
                        width="16" height="8" viewBox="0 0 16 8"
                        className="text-gray-400 dark:text-gray-500 group-hover:text-[#0686ff] dark:group-hover:text-[#4484bf] transition-colors"
                        animate={{ y: [0, 3, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <path d="M1 1L8 7L15 1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </motion.svg>
                    <motion.svg
                        width="16" height="8" viewBox="0 0 16 8"
                        className="text-gray-400 dark:text-gray-500 group-hover:text-[#0686ff] dark:group-hover:text-[#4484bf] transition-colors -mt-1"
                        animate={{ y: [0, 3, 0], opacity: [0.2, 0.7, 0.2] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    >
                        <path d="M1 1L8 7L15 1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </motion.svg>
                </div>
            </a>
        </div>
    );
};
