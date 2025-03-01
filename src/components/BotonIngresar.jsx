import React from 'react'

export const BotonIngresar = ({onClick}) => {
    return (
        <div className="flex items-center justify-center pt-6">
            <div className="relative group">
                <button onClick={onClick}
                    className="relative inline-block p-px font-semibold leading-6 text-[#515151] dark:text-[#f4f4f4] bg-[#e0e0e0] dark:bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-[#c4c4c4] dark:shadow-[#f4f4f4] transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-[#f4f4f4]"
                >
                    <span
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#f4f4f4] via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    ></span>
                    <span className="relative z-10 block px-6 py-3 rounded-2xl bg-[#fff] dark:bg-neutral-950">
                        <div className="relative z-10 flex items-center space-x-3">
                            <span
                                className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-cyan-500"
                            >
                                Explorar
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-cyan-500"
                            >
                                <path
                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                ></path>
                            </svg>
                        </div>
                    </span>
                </button>
            </div>
        </div>
    )
}
