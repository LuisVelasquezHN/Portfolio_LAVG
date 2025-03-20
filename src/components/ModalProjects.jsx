import { useEffect } from "react";
import { motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";

export const ModalProjects = ({ isOpen, onClose, modalTitle, data }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-xl z-50"
        onClick={onClose}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="dark:bg-[#1010106c] bg-[#fdfdfd83] border border-[#f4f4f40e] 
                rounded-2xl shadow-xl w-[90%] sm:w-[850px] max-h-[90vh] overflow-y-auto p-4 md:p-6 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10"
                >
                    <IconX size={24} className="text-[#1010106c] dark:text-[#f5f7f783] cursor-pointer" />
                </button>

                <h3 className="text-lg max-w-[30vh] md:max-w-[100%] md:text-2xl font-semibold dark:text-[#009aff] text-[#0d639b]">{modalTitle}</h3>

                <div className="grid grid-cols-1 gap-2 pt-4 overflow-auto max-h-[80vh] md:max-h-[80vh] p-2 md:p-4 scrollbar-thin" >
                    {data.map((items, idx) => (
                        <div key={idx} className="flex">
                            {items}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
        
    );
}
