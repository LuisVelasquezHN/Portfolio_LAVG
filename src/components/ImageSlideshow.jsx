import { useState, useEffect, useCallback, useRef } from 'react';
import { IconMaximize, IconX, IconChevronLeft, IconChevronRight, IconPlayerPlay, IconPlayerPause } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

export const ImageSlideshow = ({ images = [], alt = 'Project', interval = 1000, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const intervalRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Determinar si debe estar animando
  const shouldAnimate = !isExpanded && images.length > 1 && (
    isMobile ? isPlaying : isHovering
  );

  useEffect(() => {
    if (shouldAnimate) {
      nextImage(); // Avanzar inmediatamente al activar
      intervalRef.current = setInterval(nextImage, interval);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [shouldAnimate, interval, nextImage]);

  if (!images.length) return null;

  return (
    <>
      {/* Slideshow normal */}
      <div
        className={`relative overflow-hidden rounded-2xl group cursor-pointer ${className}`}
        onClick={() => setIsExpanded(true)}
        onMouseEnter={() => !isMobile && setIsHovering(true)}
        onMouseLeave={() => {
          if (!isMobile) {
            setIsHovering(false);
            setCurrentIndex(0); // Volver a la primera imagen al salir
          }
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${alt} - ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            loading="lazy"
          />
        </AnimatePresence>

        {/* Overlay en hover (desktop) */}
        {!isMobile && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        )}

        {/* Botón play/pause para mobile/tablet */}
        {isMobile && images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying((prev) => !prev);
            }}
            className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 dark:bg-black/70 text-gray-800 dark:text-white shadow-lg active:scale-95 transition-transform"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <IconPlayerPause size={18} /> : <IconPlayerPlay size={18} />}
          </button>
        )}

        {/* Botón expandir */}
        <button
          onClick={(e) => { e.stopPropagation(); setIsExpanded(true); }}
          className={`absolute top-2 right-2 p-1.5 rounded-lg bg-white/80 dark:bg-black/60 text-gray-800 dark:text-white hover:bg-white dark:hover:bg-black/80 transition-opacity duration-300 ${
            isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
          aria-label="Expand image"
        >
          <IconMaximize size={16} />
        </button>

        {/* Indicadores de progreso */}
        {images.length > 1 && (
          <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 transition-opacity duration-300 ${
            isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}>
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-white w-4 shadow-md'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal expandido */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentIndex]}
                alt={`${alt} - ${currentIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />

              {/* Cerrar */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute -top-10 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close"
              >
                <IconX size={24} />
              </button>

              {/* Navegación en modal */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 md:left-[-50px] p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Previous image"
                  >
                    <IconChevronLeft size={28} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 md:right-[-50px] p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Next image"
                  >
                    <IconChevronRight size={28} />
                  </button>
                </>
              )}

              {/* Contador */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
