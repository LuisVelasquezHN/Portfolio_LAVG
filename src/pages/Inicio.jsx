import React from 'react'
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { IconBrandGithub, IconBrandLinkedin, IconDownload, IconMailForward } from '@tabler/icons-react';
import { Timeline } from '../components/Timeline';

export const Inicio = () => {
  return (
    <>
      <section className="flex flex-col-reverse md:flex-row justify-center mt-[30vh] content-center items-center gap-[60px] md:gap-[100px] w-full max-w-[1000px]">
        <div className="text-center md:text-left">
          <h1 className='text-3xl md:text-5xl font-bold'>
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

          <p className='text-lg md:text-xl mt-6 p-2 md:p-0 pr-6 text-pretty'>
            <span className='text-[#009aff]'> Desarrollador Web </span> con más de 3 años de experiencia <span className='text-[#d0efff]'>en el diseño y desarrollo de sitios y aplicaciones web, </span>
            enfocado en rendimiento, accesibilidad y experiencia de usuario.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className='flex flex-row gap-2'>
              <a href="CV_LuisVelasquez.pdf" download="CV_LuisVelasquez.pdf" title='Descargar CV' className='flex text-sm flex-row gap-2 bg-gradient-to-br from-[#313131] via-[#020202] to-blue-800 rounded-3xl py-2 px-3 mt-2 cursor-pointer border-1 border-[#505050] hover:from-[#c6c6c6] hover:via-[#c0c0c0] hover:to-blue-400 hover:text-[#181818] hover:font-semibold'>
                <IconDownload stroke={2} width={20} height={20} />
                Descargar CV
              </a>

              <a href='mailto:l.velasquez1617@gmail.com' target='__blank' title='Contáctame' className='flex text-sm flex-row gap-2 bg-gradient-to-br from-[#313131] via-[#020202] to-blue-800 rounded-3xl py-2 px-3 mt-2 cursor-pointer border-1 border-[#505050] hover:from-[#c6c6c6] hover:via-[#c0c0c0] hover:to-blue-400 hover:text-[#181818] hover:font-semibold'>
                <IconMailForward stroke={2} width={20} height={20} />
                Contáctame
              </a>
            </div>

            <div className='flex flex-row gap-2'>
              <a href='https://www.linkedin.com/in/luis-velasquez-768072284' target='__blank' title='LinkedIn' className='flex text-sm flex-row gap-2 bg-gradient-to-br from-[#313131] via-[#020202] to-blue-800 rounded-3xl py-2 px-3 mt-2 cursor-pointer border-1 border-[#505050] hover:from-[#c6c6c6] hover:via-[#c0c0c0] hover:to-blue-400 hover:text-[#181818] hover:font-semibold'>
                <IconBrandLinkedin stroke={2} width={20} height={20} />
              </a>

              <a href='https://github.com/LuisVelasquezHN' target='__blank' title='GitHub' className='flex text-sm flex-row gap-2 bg-gradient-to-br from-[#313131] via-[#020202] to-blue-800 rounded-3xl py-2 px-3 mt-2 cursor-pointer border-1 border-[#505050] hover:from-[#c6c6c6] hover:via-[#c0c0c0] hover:to-blue-400 hover:text-[#181818] hover:font-semibold'>
                <IconBrandGithub stroke={2} width={20} height={20} />
              </a>

            </div>


          </div>

        </div>

        <div className="relative w-80 h-80 md:w-90 md-h-90 aspect-square flex justify-center items-center ">
          <motion.div
            className="absolute w-full h-full rounded-full"
            style={{
              background: "conic-gradient(from 0deg, transparent 10%, #83dbff 20%, transparent 30%, #1ea5ff 40%, transparent 60%, #0072ff 70%, transparent 90%)",
              mask: "radial-gradient(circle, transparent 47%, black 48%)",
              WebkitMask: "radial-gradient(circle, transparent 67%, black 48%)",
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


    </>
  )
}
