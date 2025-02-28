import { useState, useEffect } from "react";
import { IconDeviceDesktop, IconMenu4, IconMoonStars, IconSun, IconXboxX } from "@tabler/icons-react";

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") || "system");
  const [language, setLanguage] = useState(localStorage.getItem("language") || "es");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else if (darkMode === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", prefersDark);
    }
    localStorage.setItem("theme", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) =>
      prev === "light" ? "dark" : prev === "dark" ? "system" : "light"
    );
  };

  const toggleLanguage = () => {
    const newLang = language === "es" ? "en" : "es";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <nav
      className={`fixed z-50 top-0 md:top-2 left-0 w-full transition-all duration-300`}
    >
      <div className={`w-full md:max-w-fit mx-auto px-4 flex justify-between items-center md:justify-center h-12 bg-[#041121d4] ${
        scrolling ? "md:bg-[#041121d4] bg-opacity-80 shadow-lg md:rounded-full" : "md:bg-transparent"
      }`}>
        {/* Logo */}
        <h1 className="md:hidden text-xl font-bold text-white">LAVG</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex text-sm space-x-6 text-white">
          <a href="#experiencia" className="hover:text-gray-300">Experiencia</a>
          <a href="#proyectos" className="hover:text-gray-300">Proyectos</a>
          <a href="#skills" className="hover:text-gray-300">Skills</a>
          <a href="#about" className="hover:text-gray-300">Sobre mí</a>
          <button onClick={toggleLanguage} className="hover:text-gray-300">
            {language === "es" ? "ES" : "EN"}
          </button>
          <button onClick={toggleTheme} className="hover:text-gray-300">
            {darkMode === "dark" ? <IconMoonStars stroke={2} className="w-5 h-5" /> : darkMode === "light" ? <IconSun stroke={2} className="w-5 h-5" /> : <IconDeviceDesktop stroke={2} className="w-5 h-5" />}
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IconXboxX stroke={2} className="w-6 h-6" /> : <IconMenu4 stroke={2} className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`absolute top-12 left-0 w-full bg-[#041121d4] bg-opacity-90 text-white p-6 space-y-4 flex flex-col items-center transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <a href="#experiencia" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Experiencia</a>
        <a href="#proyectos" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Proyectos</a>
        <a href="#skills" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#about" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Sobre mí</a>
        <button onClick={toggleLanguage} className="hover:text-gray-300">
          {language === "es" ? "ES" : "EN"}
        </button>
        <button onClick={toggleTheme} className="hover:text-gray-300">
          {darkMode === "dark" ? <IconMoonStars stroke={2} className="w-5 h-5" /> : darkMode === "light" ? <IconSun stroke={2} className="w-5 h-5" /> : <IconDeviceDesktop stroke={2} className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  );
};

