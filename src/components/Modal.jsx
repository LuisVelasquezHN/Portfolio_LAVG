import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import IconsText from "./IconTextSkill";

export const Modal = ({ isOpen, onClose, modalTitle }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [isOpen]);

    const data = useMemo(
    () => [
      <IconsText.HTML />,
      <IconsText.TAILWIND />,
      <IconsText.CSS />,
      <IconsText.SASS />,
      <IconsText.JS />,
      <IconsText.TS />,
      <IconsText.REACT />,
      <IconsText.REACTNATIVE />,
      <IconsText.ANGULAR />,
      <IconsText.PHP />,
      <IconsText.UIPATH />,
      <IconsText.NODE />,
      <IconsText.NEST />,
      <IconsText.PORTGRES />,
      <IconsText.MYSQL />,
      <IconsText.ORACLE />,
      <IconsText.WORDPRESS />,
      <IconsText.XAMARIN />,
      <IconsText.CHARP />,
      <IconsText.TALEND />,
      <IconsText.OPENAI />,
      <IconsText.ILLUSTRATOR />,
      <IconsText.PHOTOSHOP />,
      <IconsText.COREL />,
    ],
    []
  );

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50"
        onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="dark:bg-[#1010106c] bg-[#f6f5f783] border border-[#f4f4f40e] 
                rounded-lg shadow-xl w-[90%] sm:w-[600px] max-h-[90vh] overflow-y-auto p-6 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10"
                >
                    <IconX size={24} className="text-[#1010106c] dark:text-[#f5f7f783] cursor-pointer" />
                </button>

                <h3 className="text-lg font-semibold text-black/80 dark:text-white">{modalTitle}</h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pt-4 overflow-auto max-h-[40vh] md:max-h-[60vh] p-4 scrollbar-thin" >
                    {data.map((items, idx) => (
                        <div key={idx} className="flex">
                            {items}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
        
    );
};
