import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconDownload, IconCheck } from "@tabler/icons-react";

export const DownloadCVButton = ({ href, fileName, label, className = "" }) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleClick = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <a
      href={href}
      download={fileName}
      title={label}
      onClick={handleClick}
      className={className}
    >
      <AnimatePresence mode="wait">
        {downloaded ? (
          <motion.span
            key="check"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className="hidden md:flex items-center"
          >
            <IconCheck stroke={2.5} width={20} height={20} className="text-green-500" />
          </motion.span>
        ) : (
          <motion.span
            key="download"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="hidden md:flex items-center"
          >
            <IconDownload stroke={2} width={20} height={20} />
          </motion.span>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {downloaded ? (
          <motion.span
            key="label-done"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="text-green-500 font-medium"
          >
            ✓
          </motion.span>
        ) : (
          <motion.span
            key="label-text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Confetti particles on download */}
      {downloaded && (
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                left: "50%",
                top: "50%",
                backgroundColor: ["#0686ff", "#1ea5ff", "#48c5ff", "#83dbff", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"][i],
              }}
              initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              animate={{
                x: Math.cos((i * Math.PI * 2) / 8) * 40,
                y: Math.sin((i * Math.PI * 2) / 8) * 40,
                scale: 0,
                opacity: 0,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          ))}
        </div>
      )}
    </a>
  );
};
