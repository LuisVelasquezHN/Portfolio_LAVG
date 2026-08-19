import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IconBriefcase2 } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

const TimelineItem = ({ item, index, isLast }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-4 md:gap-8 pb-10 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
    >
      {/* Left column - Timeline line + node */}
      <div className="flex flex-col items-center">
        {/* Node */}
        <motion.div
          className="relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 border-[#0686ff] bg-white dark:bg-neutral-950 shadow-lg shadow-[#0686ff]/10"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
        >
          <span className="text-lg md:text-xl">{item.icon}</span>
          {/* Pulse ring */}
          {index === 0 && (
            <span className="absolute inset-0 rounded-full border-2 border-[#0686ff] animate-ping opacity-20" />
          )}
        </motion.div>

        {/* Connecting line */}
        {!isLast && (
          <motion.div
            className="w-[2px] flex-1 mt-2 bg-gradient-to-b from-[#0686ff]/40 to-[#0686ff]/10 dark:from-[#0686ff]/50 dark:to-[#0686ff]/15 rounded-full"
            initial={{ scaleY: 0, originY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
          />
        )}
      </div>

      {/* Right column - Content card */}
      <motion.div
        className="flex-1 pb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.25 }}
      >
        {/* Time badge */}
        <span className="inline-flex items-center px-3 py-1 mb-3 rounded-full text-xs font-medium bg-[#0686ff]/10 text-[#0686ff] dark:bg-[#0686ff]/20 border border-[#0686ff]/20">
          {item.tiempo}
        </span>

        {/* Card */}
        <div className="dark:bg-[#1010106c] bg-[#f5f7f783] rounded-2xl border border-[#f4f4f40e] p-5 md:p-6 shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.05)] hover:shadow-[3px_3px_25px_6px_rgba(6,134,255,0.08)] transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
            <h3 className="text-lg md:text-xl font-bold text-[#0686ff]">
              {item.puesto}
            </h3>
            {item.empresa && (
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-neutral-800 px-2 py-0.5 rounded-lg w-fit">
                {item.empresa}
              </span>
            )}
          </div>

          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 text-pretty leading-relaxed">
            {item.descripcion.includes('•') || item.descripcion.includes('\n') ? (
              <ul className="list-disc list-inside space-y-1.5 marker:text-[#0686ff]">
                {item.descripcion.split(/[.]\s+/).filter(s => s.trim()).map((sentence, i) => (
                  <li key={i} className="text-sm md:text-base text-gray-600 dark:text-gray-300">{sentence.trim().replace(/\.$/, '')}.</li>
                ))}
              </ul>
            ) : (
              <ul className="list-disc list-inside space-y-1.5 marker:text-[#0686ff]">
                {item.descripcion.split(/[.]\s+/).filter(s => s.trim().length > 10).map((sentence, i) => (
                  <li key={i} className="text-sm md:text-base text-gray-600 dark:text-gray-300">{sentence.trim().replace(/\.$/, '')}.</li>
                ))}
              </ul>
            )}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const TimelineHorizontal = () => {
  const { t } = useTranslation();

  const info = [
    {
      puesto: t("experience.puestoFree"),
      empresa: "",
      tiempo: t("experience.tiempoFree"),
      descripcion: t("experience.descripcionFree"),
      icon: "🚀",
    },
    {
      puesto: t("experience.puestoCC"),
      empresa: "Cable Color",
      tiempo: t("experience.tiempoCC"),
      descripcion: t("experience.descripcionCC"),
      icon: "💼",
    },
    {
      puesto: t("experience.puestoD"),
      empresa: "DIUNSA",
      tiempo: t("experience.tiempoD"),
      descripcion: t("experience.descripcionD"),
      icon: "🖥️",
    },
  ];

  return (
    <section
      id="experiencia"
      className="container p-3 mt-[10vh] scroll-m-20 w-full lg:max-w-5xl"
    >
      <h2 className="flex items-center mb-10 p-4 md:p-0 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
        <IconBriefcase2 width={30} height={30} stroke={2} />
        {t("navbar.experiencia")}
      </h2>

      <div className="relative px-2 md:px-8">
        {info.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            isLast={index === info.length - 1}
          />
        ))}
      </div>
    </section>
  );
};
