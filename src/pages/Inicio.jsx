import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { IconBrandGithub, IconBrandLinkedin, IconDownload, IconMailForward, IconUserScan } from '@tabler/icons-react';
import { Timeline } from '../components/Timeline';
import { Proyectos } from '../components/Proyectos';
import { AboutUs } from '../components/AboutUs';
import { ScrollDownIndicator } from '../components/ScrollDownIndicator';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { Navbar } from '../components/Navbar';
import { Toaster } from 'sonner'
import { useTranslation } from 'react-i18next';
import LastVisit from '../components/LastVisit';
import { Skills3 } from '../components/Skills3';



export const Inicio = () => {
  const { t, i18n } = useTranslation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [i18n.language]);

  return (
    <>
      <Toaster position="bottom-right" expand={false} />

      <div id='inicio' className="relative flex flex-col items-center justify-center min-h-screen">
        <section className="flex flex-col-reverse lg:flex-row justify-center content-center items-center gap-[40px] lg:gap-[80px] w-full max-w-[1100px] px-4 md:px-8 lg:px-0">
          {/* mt-[15vh] md:mt-[30vh] */}
          <Navbar />
          <div className="text-center lg:text-left max-w-[90%] md:max-w-[80%] lg:max-w-[60%]">
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#515151] dark:text-[#f4f4f4]'>
              <Typewriter
                key={key}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(`${t('home.greeting')} <span class="dark:bg-[radial-gradient(64.18%_64.18%_at_71.16%_35.69%,#b5e8ff_0.89%,#83dbff_17.23%,#48c5ff_42.04%,#1ea5ff_55.12%,#0686ff_71.54%,#0686ff_100%)] bg-[radial-gradient(64.18%_64.18%_at_71.16%_35.69%,#48e2ff_0.89%,#1ec8ff_17.23%,#1ec8ff_42.04%,#06adff_55.12%,#009aff_71.54%,#0875c5_100%)] bg-clip-text text-transparent"> ${t('home.name')}</span>`)
                    .pauseFor(1000000)
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 75,
                }} />
            </h1>

            <p className='text-base md:text-xl mt-4 md:mt-6 px-2 md:px-0 text-pretty hiddenObs2 text-[#515151] dark:text-[#f4f4f4]'>
              <span className='dark:text-[#009aff] text-[#0875c5] '>{t('home.job_title')}</span> {t('home.experience')} <span className='dark:text-[#d0efff] text-[#1ec8ff]'> {t('home.experience2')}</span>
              &nbsp;{t('home.experience3')}
            </p>

            <div className="flex flex-col md:flex-row items-center gap-3 hiddenObs2">
              <div className='flex flex-row gap-3'>
                <a href={t('home.CV')} download={t('home.CV')} title={t('home.download_cv')} className='
              flex text-[14px] md:text-base flex-row items-center gap-1 md:gap-2 
               rounded-3xl py-2 px-4 mt-2 cursor-pointer border dark:border-[#f4f4f436] text-[#0d639b] dark:text-[#f4f4f4] shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)] border-[#f4f4f4d0]
               dark:hover:bg-gradient-to-br dark:hover:from-[#0d639b] dark:hover:via-[#020202] dark:hover:to-[#181818]
               hover:bg-gradient-to-br hover:from-[#d6f7ff] hover:via-[#f7f7f7] hover:to-[#e7e7e7]
              '>
                  <IconDownload stroke={2} width={20} height={20} className='hidden md:block'/>
                  {t('home.download_cv')}
                </a>

                <a href='mailto:l.velasquez1617@gmail.com' target='_blank' rel='noopener noreferrer' title={t('home.contact_me')} className='
              flex text-[14px] md:text-base flex-row items-center gap-1 md:gap-2   
               rounded-3xl py-2 px-4 mt-2 cursor-pointer border dark:border-[#f4f4f436] text-[#0d639b] dark:text-[#f4f4f4] shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)] border-[#f4f4f4d0]
               dark:hover:bg-gradient-to-br dark:hover:from-[#0d639b] dark:hover:via-[#020202] dark:hover:to-[#181818]
               hover:bg-gradient-to-br hover:from-[#d6f7ff] hover:via-[#f7f7f7] hover:to-[#e7e7e7]
              '>
                  <IconMailForward stroke={2} width={20} height={20} className='hidden md:block' />
                  {t('home.contact_me')}
                </a>
              </div>

              <div className='flex flex-row gap-3'>
                <a href='https://www.linkedin.com/in/luis-velasquez-768072284' target='_blank' rel='noopener noreferrer' title='LinkedIn' className='
              flex text-base flex-row gap-2
               rounded-3xl py-2 px-4 mt-2 cursor-pointer border dark:border-[#f4f4f436] text-[#0d639b] dark:text-[#f4f4f4] shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)] border-[#f4f4f4d0]
               dark:hover:bg-gradient-to-br dark:hover:from-[#0d639b] dark:hover:via-[#020202] dark:hover:to-[#181818]
               hover:bg-gradient-to-br hover:from-[#d6f7ff] hover:via-[#f7f7f7] hover:to-[#e7e7e7]
              '>
                  <IconBrandLinkedin stroke={2} width={20} height={20} />
                </a>

                <a href='https://github.com/LuisVelasquezHN' target='_blank' rel='noopener noreferrer' title='GitHub' className='
              flex text-base flex-row 
               rounded-3xl py-2 px-4 mt-2 cursor-pointer border dark:border-[#f4f4f436] text-[#0d639b] dark:text-[#f4f4f4] shadow-[3px_3px_19px_4px_rgba(0,_0,_0,_0.1)] border-[#f4f4f4d0]
               dark:hover:bg-gradient-to-br dark:hover:from-[#0d639b] dark:hover:via-[#020202] dark:hover:to-[#181818]
               hover:bg-gradient-to-br hover:from-[#d6f7ff] hover:via-[#f7f7f7] hover:to-[#e7e7e7]
              '>
                  <IconBrandGithub stroke={2} width={20} height={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="hiddenObs relative w-60 h-60 md:w-80 md:h-80 aspect-square flex justify-center items-center">
            <motion.div
              className="absolute w-full h-full rounded-full"
              style={{
                background: "conic-gradient(from 0deg, transparent 10%, #83dbff 20%, transparent 30%, #1ea5ff 40%, transparent 60%, #0072ff 70%, transparent 90%)",
                mask: "radial-gradient(circle, transparent 68%, black 50%)",
                WebkitMask: "radial-gradient(circle, transparent 68%, black 50%)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }} />

            <img
              className="w-[90%] h-[90%] object-cover rounded-full"
              src="/personal.webp"
              alt="foto_personal" />
          </div>

        </section>
        <ScrollDownIndicator />
      </div>
        <LastVisit />


      <Timeline />
      <Proyectos />

      <Skills3 />

      <section id="about" className="section p-3 hiddenObs2 mt-[10vh] scroll-m-20 w-full container lg:max-w-5xl">
        <h2 className="flex items-center mb-14 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
          <IconUserScan width={30} height={30} stroke={2} />
          {t('home.about_me')}
        </h2>

        <AboutUs />

      </section>

      <ScrollToTop />

      <Footer />

    </>
  )
}
