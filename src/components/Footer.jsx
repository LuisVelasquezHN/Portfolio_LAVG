import React from 'react'

export const Footer = () => {
    return (
        <footer className="w-full mt-[10vw] dark:text-[#f4f4f4] text-[#515151] py-4 px-6 md:px-12 border dark:border-[#f4f4f40e] border-[#f4f4f4de] rounded-3xl">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
                <p className="text-gray-400">&copy; 2025 Luis Velasquez. <span className='hover:text-[#58C4DC]'>React</span> + <span className='hover:text-[#38bdf8]'>TailwindCSS</span></p>
                <div className="flex space-x-6 mt-2 md:mt-0">
                    <a href="#experiencia" className="dark:hover:text-gray-300 hover:text-[#969696] text-[#515151] dark:text-[#b9b8b8]">Experiencia</a>
                    <a href="#projects" className="dark:hover:text-gray-300 hover:text-[#969696] text-[#515151] dark:text-[#b9b8b8]">Proyectos</a>
                    <a href="#skills" className="dark:hover:text-gray-300 hover:text-[#969696] text-[#515151] dark:text-[#b9b8b8]">Habilidades</a>
                    <a href="#about" className="dark:hover:text-gray-300 hover:text-[#969696] text-[#515151] dark:text-[#b9b8b8]">Sobre mí</a>
                </div>
            </div>
        </footer>
    );
}
