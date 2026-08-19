import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { IconArrowLeft, IconWorld, IconServer, IconExternalLink, IconX } from '@tabler/icons-react';

const ScrollRevealCard = ({ children, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const CrmCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <div
        className="flex flex-col h-full rounded-2xl border border-gray-200 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white dark:bg-zinc-900"
      >
        {/* Imagen con click para expandir */}
        <div
          className="relative aspect-video overflow-hidden cursor-pointer group"
          onClick={() => setIsExpanded(true)}
        >
          <img
            src={project.src}
            alt={project.titleKey ? t(project.titleKey) : project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>

        {/* Info */}
        <div className="flex flex-col flex-1 p-4">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold dark:text-[#4484bf] text-[#0686ff]">
              {project.titleKey ? t(project.titleKey) : project.title}
            </h3>
            {project.badge && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium">
                {project.badge}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5 mt-2">
            {project.tags.map((tag, idx) => (
              <TagSmall key={idx} tag={tag} />
            ))}
          </div>

          {project.evolution && (
            <div className="flex items-center gap-1.5 mt-2 text-[11px] text-gray-500 dark:text-gray-400">
              <span className="font-medium">Evolución:</span>
              {project.evolution.map((version, idx) => (
                <span key={idx} className="flex items-center gap-1.5">
                  <span className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-zinc-800 text-[10px]">
                    V{idx + 1}: {version}
                  </span>
                  {idx < project.evolution.length - 1 && <span>→</span>}
                </span>
              ))}
            </div>
          )}

          <ExpandableText text={t(project.contentKey)} />
        </div>
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
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={project.src}
                alt={project.titleKey ? t(project.titleKey) : project.title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute -top-10 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close"
              >
                <IconX size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
import { allWebProjectsData, crmProjectsData } from '../data/projectsData';
import { ImageSlideshow } from '../components/ImageSlideshow';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

const ExpandableText = ({ text, maxLines = 3 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const textRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (textRef.current) {
      setIsClamped(textRef.current.scrollHeight > textRef.current.clientHeight);
    }
  }, [text]);

  return (
    <div>
      <p
        ref={textRef}
        className={`text-sm dark:text-[#e2e0e0] text-[#515151] ${!isExpanded ? 'line-clamp-3' : ''}`}
      >
        {text}
      </p>
      {(isClamped || isExpanded) && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs mt-1 text-[#0686ff] dark:text-[#4484bf] hover:underline font-medium"
        >
          {isExpanded ? t('allProjects.seeLess') : t('allProjects.seeMore')}
        </button>
      )}
    </div>
  );
};

const TagSmall = ({ tag }) => {
  const getColors = (type) => {
    switch (type) {
      case 'react': return 'dark:bg-[#1f2729] bg-[#d2ebf2] text-[#515151] dark:text-[#f4f4f4]';
      case 'tailwind': return 'dark:bg-[#38bff82d] bg-[#38bff849] text-[#515151] dark:text-[#f4f4f4]';
      case 'sass': return 'dark:bg-[#39262f] bg-[#f7e2eb] text-[#515151] dark:text-[#f4f4f4]';
      case 'node': return 'dark:bg-[#1e2e1d] bg-[#d4f6d3] text-[#515151] dark:text-[#f4f4f4]';
      case 'php': return 'dark:bg-[#333552] bg-[#d5d8fb] text-[#515151] dark:text-[#f4f4f4]';
      case 'astro': return 'dark:bg-[#3d1f0f] bg-[#ffe0cc] text-[#515151] dark:text-[#f4f4f4]';
      case 'aws': return 'dark:bg-[#3d2e0f] bg-[#fff3cc] text-[#515151] dark:text-[#f4f4f4]';
      case 'python': return 'dark:bg-[#1f2d3d] bg-[#d6e8f7] text-[#515151] dark:text-[#f4f4f4]';
      default: return 'bg-gray-200 dark:bg-gray-700';
    }
  };

  return (
    <span className={`text-[11px] px-2 py-0.5 rounded-full ${getColors(tag.type)}`}>
      {tag.name}
    </span>
  );
};

export const AllProjects = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('web');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const webProjects = allWebProjectsData;

  const tabs = [
    { id: 'web', label: t('allProjects.tabWeb'), icon: IconWorld },
    { id: 'crm', label: t('allProjects.tabCRM'), icon: IconServer },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/home"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Go back"
          >
            <IconArrowLeft size={22} className="text-gray-600 dark:text-gray-300" />
          </Link>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-black/80 dark:text-white">
              {t('allProjects.title')}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {t('allProjects.subtitle')}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-10 border-b border-gray-200 dark:border-zinc-700 pb-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors relative
                  ${activeTab === tab.id
                    ? 'text-[#0686ff] dark:text-[#4484bf]'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                  }`}
              >
                <Icon size={18} />
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0686ff] dark:bg-[#4484bf] rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'web' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {webProjects.map((project, index) => (
                  <ScrollRevealCard key={index} index={index}>
                    <div className="flex flex-col h-full rounded-2xl border border-gray-200 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-white dark:bg-zinc-900">
                    {/* Slideshow */}
                    <ImageSlideshow
                      images={project.images}
                      alt={project.title}
                      interval={750}
                      className="aspect-video"
                    />

                    {/* Info */}
                    <div className="flex flex-col flex-1 p-4">
                      <h3 className="text-lg font-semibold dark:text-[#4484bf] text-[#0686ff]">
                        {project.titleKey ? t(project.titleKey) : project.title}
                      </h3>

                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {project.tags.map((tag, idx) => (
                          <TagSmall key={idx} tag={tag} />
                        ))}
                      </div>

                      <ExpandableText text={t(project.contentKey)} />

                      {project.url && project.url !== '#' && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm mt-4 text-[#0686ff] dark:text-[#4484bf] hover:underline"
                        >
                          <IconExternalLink size={14} />
                          {t('projects.buttonPreview')}
                        </a>
                      )}
                    </div>
                    </div>
                  </ScrollRevealCard>
                ))}
              </div>
            )}

            {activeTab === 'crm' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {crmProjectsData.map((project, index) => (
                  <ScrollRevealCard key={index} index={index}>
                    <CrmCard project={project} index={index} />
                  </ScrollRevealCard>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <ScrollToTop />
      <Footer />
    </>
  );
};
