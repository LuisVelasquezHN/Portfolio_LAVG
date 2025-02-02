import React from 'react'
import { BotonIngresar } from '../components/BotonIngresar'

export const Portada = () => {
    return (
        <>
            <section className="flex flex-col-reverse md:flex-row justify-center content-center items-center gap-[60px] md:gap-[100px]  w-full max-w-[1300px]">
                <div className="text-center md:text-left ">
                    <h1 className='text-3xl md:text-5xl font-bold'>
                        <span className='text-[#0072ff]'>Hey,</span>  soy Luis Velasquez
                    </h1>

                    <p className='text-lg md:text-2xl mt-6 p-2 md:p-0'>
                        <span className='text-[#009aff]'> Desarrollador Web </span> con más de 3 años de experiencia <span className='text-[#d0efff]'>en el diseño y desarrollo de sitios y aplicaciones web, </span>
                        enfocado en rendimiento, accesibilidad y experiencia de usuario.
                    </p>
                </div>

                <div className="relative w-60 md:min-w-[400px] rounded-full overflow-hidden aspect-square">
                    <img className="absolute top-0 left-0 w-full h-full object-cover" src="/personal.jpg" alt="foto_personal" />
                </div>


            </section>
            <BotonIngresar/>
        </>
    )
}
