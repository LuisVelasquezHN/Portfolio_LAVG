import React from 'react'

export const BotonIngresar = () => {
  return (
    <button className="relative flex items-center place-self-center gap-1 px-6 py-3 border-4 border-transparent text-[16px] bg-inherit rounded-full font-semibold text-[#009aff] shadow-[0_0_0_2px_#009aff] cursor-pointer overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_0_0_12px_transparent] hover:text-gray-900 hover:rounded-lg active:scale-95 active:shadow-[0_0_0_4px_#009aff] group">
    {/* Flecha izquierda */}
    <svg
        viewBox="0 0 24 24"
        className="absolute left-[-25%] w-6 fill-[#009aff] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 group-hover:fill-gray-900"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
    </svg>

    {/* Texto */}
    <span className="relative z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] -translate-x-3 group-hover:translate-x-3">
        Explorar
    </span>

    {/* Círculo animado */}
    <span className="absolute top-1/2 left-1/2 w-5 h-5 bg-[#009aff] rounded-full opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform -translate-x-1/2 -translate-y-1/2 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

    {/* Flecha derecha */}
    <svg
        viewBox="0 0 24 24"
        className="absolute right-4 w-6 fill-[#009aff] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-gray-900"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
    </svg>
</button>
  )
}
