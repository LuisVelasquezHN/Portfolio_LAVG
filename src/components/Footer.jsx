import React from 'react'

export const Footer = () => {
    return (
        <footer className="w-full mt-[10vw] text-white py-4 px-6 md:px-12 border border-[#f4f4f40e] rounded-3xl">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
                <p className="text-gray-400">&copy; 2025 Luis Velasquez. <span className='hover:text-[#58C4DC]'>React</span> + <span className='hover:text-[#38bdf8]'>TailwindCSS</span></p>
                <div className="flex space-x-6 mt-2 md:mt-0">
                    <a href="#experiencia" className="hover:text-gray-300">Experiencia</a>
                    <a href="#proyectos" className="hover:text-gray-300">Proyectos</a>
                    <a href="#skills" className="hover:text-gray-300">Skills</a>
                    <a href="#about" className="hover:text-gray-300">Sobre mí</a>
                </div>
            </div>
        </footer>
    );
}
