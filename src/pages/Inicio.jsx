import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { IconBrandGithub, IconBrandLinkedin, IconDownload, IconMailForward, IconUserCode, IconUserScan } from '@tabler/icons-react';
import { Timeline } from '../components/Timeline';
import { Proyectos } from '../components/Proyectos';
import { Skills2 } from '../components/Skills2';
import { AboutUs } from '../components/AboutUs';

export const Inicio = () => {
  return (
    <>
      <section className="flex flex-col-reverse md:flex-row justify-center mt-[15vh] md:mt-[30vh] content-center items-center gap-[40px] md:gap-[100px] w-full max-w-[1000px] px-4 md:px-0">
        <div className="text-center md:text-left">
          <h1 className='text-2xl md:text-5xl font-bold'>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('<span class="text-[#0072ff]">Hey,</span> soy Luis Velasquez')
                  .pauseFor(1000000)
                  .start();
              }}
              options={{
                autoStart: true,
                loop: false,
                delay: 75,
              }} />
          </h1>

          <p className='text-base md:text-xl mt-4 md:mt-6 px-2 md:px-0 text-pretty hiddenObs'>
            <span className='text-[#009aff]'>Desarrollador Web</span> con más de 3 años de experiencia <span className='text-[#d0efff]'> en el diseño y desarrollo de sitios y aplicaciones web,</span>
            &nbsp;enfocado en rendimiento, accesibilidad y experiencia de usuario.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-3 hiddenObs">
            <div className='flex flex-row gap-3'>
              <a href="CV_LuisVelasquez.pdf" download="CV_LuisVelasquez.pdf" title='Descargar CV' className='flex text-base flex-row gap-2 bg-gradient-to-br from-[#313131] via-[#020202] to-[#181818] rounded-3xl py-2 px-4 mt-2 cursor-pointer border border-[#505050] hover:from-[#c6c6c6] hover:via-[#c0c0c0] hover:to-blue-400 hover:text-[#181818] hover:font-semibold'>
                <IconDownload stroke={2} width={20} height={20} />
                Descargar CV
              </a>

              <a href='mailto:l.velasquez1617@gmail.com' target='__blank' title='Contáctame' className='flex text-base flex-row gap-2 bg-gradient-to-br from-[#313131] via-[#020202] to-[#181818] rounded-3xl py-2 px-4 mt-2 cursor-pointer border border-[#505050] hover:from-[#c6c6c6] hover:via-[#c0c0c0] hover:to-blue-400 hover:text-[#181818] hover:font-semibold'>
                <IconMailForward stroke={2} width={20} height={20} />
                Contáctame
              </a>
            </div>

            <div className='flex flex-row gap-3'>
              <a href='https://www.linkedin.com/in/luis-velasquez-768072284' target='__blank' title='LinkedIn' className='flex text-base flex-row gap-2 bg-gradient-to-br from-[#313131] via-[#020202] to-[#181818] rounded-3xl py-2 px-3 mt-2 cursor-pointer border border-[#505050] hover:from-[#c6c6c6] hover:via-[#c0c0c0] hover:to-blue-400 hover:text-[#181818] hover:font-semibold'>
                <IconBrandLinkedin stroke={2} width={20} height={20} />
              </a>

              <a href='https://github.com/LuisVelasquezHN' target='__blank' title='GitHub' className='flex text-base flex-row gap-2 bg-gradient-to-br from-[#313131] via-[#020202] to-[#181818] rounded-3xl py-2 px-3 mt-2 cursor-pointer border border-[#505050] hover:from-[#c6c6c6] hover:via-[#c0c0c0] hover:to-blue-400 hover:text-[#181818] hover:font-semibold'>
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
            src="/personal.jpg"
            alt="foto_personal" />
        </div>
      </section>

      <Timeline />
      <Proyectos />
      {/* <Skills/> */}

      <section id="experiencia" className="section p-3 hiddenObs mt-[10vh] scroll-m-20 w-full container lg:max-w-5xl md:max-w-2xl">
        <h2 className="flex items-center mb-14 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
          <IconUserCode width={30} height={30} stroke={2} />
          Skills
        </h2>

        <Skills2 />
      </section>

      <section id="about" className="section p-3 hiddenObs mt-[10vh] scroll-m-20 w-full container lg:max-w-5xl md:max-w-2xl">
        <h2 className="flex items-center mb-14 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
          <IconUserScan width={30} height={30} stroke={2} />
          Sobre mí
        </h2>

        <AboutUs />
        
      </section>


      {/* <Timeline /> */}
    </>
  )
}
