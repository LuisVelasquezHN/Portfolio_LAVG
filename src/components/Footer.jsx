import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/home";

  const handleNavigation = (section) => {
    if (isHome) {
      window.location.hash = section;
    } else {
      navigate("/home");
      setTimeout(() => {
        window.location.hash = section; 
      }, 100);
    }
  };

  return (
    <footer className="w-full mt-[10vw] dark:text-[#f4f4f4] text-[#515151] py-4 px-6 md:px-12 border dark:border-[#f4f4f40e] border-[#f4f4f4de] rounded-3xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Luis Velasquez.{" "}
          <span className="hover:text-[#58C4DC]">React</span> +{" "}
          <span className="hover:text-[#38bdf8]">TailwindCSS</span>
        </p>
        <div className="flex space-x-6 mt-2 md:mt-0">
          <button
            onClick={() => handleNavigation("#experiencia")}
            className="dark:hover:text-gray-300 hover:text-[#969696] text-[#515151] dark:text-[#b9b8b8] cursor-pointer"
          >
            Experiencia
          </button>
          <button
            onClick={() => handleNavigation("#projects")}
            className="dark:hover:text-gray-300 hover:text-[#969696] text-[#515151] dark:text-[#b9b8b8] cursor-pointer"
          >
            Proyectos
          </button>
          <button
            onClick={() => handleNavigation("#skills")}
            className="dark:hover:text-gray-300 hover:text-[#969696] text-[#515151] dark:text-[#b9b8b8] cursor-pointer"
          >
            Habilidades
          </button>
          <button
            onClick={() => handleNavigation("#about")}
            className="dark:hover:text-gray-300 hover:text-[#969696] text-[#515151] dark:text-[#b9b8b8] cursor-pointer"
          >
            Sobre mí
          </button>
        </div>
      </div>
    </footer>
  );
};
