import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconDeviceDesktop, IconMenu4, IconMoonStars, IconSun, IconXboxX } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolling, setScrolling] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") || "system");
  const [language, setLanguage] = useState(localStorage.getItem("language") || "es");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 100);
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
    setDarkMode((prev) => (prev === "light" ? "dark" : prev === "dark" ? "system" : "light"));
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const navLinks = [
    { id: "inicio", label: t("navbar.home")},
    { id: "experiencia", label: t("navbar.experiencia") },
    { id: "projects", label: t("navbar.projects") },
    { id: "skills", label: t("navbar.skills") },
    { id: "about", label: t("navbar.about") },
  ];

  return (
    <nav className="fixed z-50 top-0 md:top-2 left-0 w-full transition-all duration-300">
      <div
        className={`w-full md:max-w-fit mx-auto px-4 flex justify-between items-center md:justify-center h-12 ${scrolling ? "dark:bg-[#171f2fe0] bg-[#f6f5f7e6] bg-opacity-80 shadow-lg md:rounded-full md:border md:border-[#f4f4f40e]" : "bg-transparent"
          }`}
      >
        <h1 className="md:hidden text-xl font-bold dark:text-white text-[#515151]">LAVG</h1>

        <div className="hidden md:flex text-sm space-x-6 dark:text-white text-[#515151]">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              className="relative overflow-hidden group dark:text-white text-[#515151]"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#c6c6c6] via-[#c0c0c0] to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              <motion.span
                className="block"
                initial={{ y: "0%" }}
                whileHover={{ y: "0%" }}
                transition={{ duration: 0.3 }}
              >
                {link.label}
              </motion.span>
            </motion.a>
          ))}
          <div className="h-5 w-[1px] bg-gray-400 dark:bg-gray-600"></div>
          <button onClick={toggleLanguage} className="hover:text-[#969696] cursor-pointer">{i18n.language === "es" ? "ES" : "EN"}</button>
          <button onClick={toggleTheme} className="hover:text-[#969696] cursor-pointer">
            {darkMode === "dark" ? <IconMoonStars stroke={2} className="w-4 h-4" /> : darkMode === "light" ? <IconSun stroke={2} className="w-4 h-4" /> : <IconDeviceDesktop stroke={2} className="w-4 h-4" />}
          </button>
        </div>

        <button className="md:hidden dark:text-[#e2e0e0] text-[#515151]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IconXboxX stroke={2} className="w-6 h-6" /> : <IconMenu4 stroke={2} className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`absolute top-12 left-0 w-full bg-opacity-90 dark:text-[#e2e0e0] text-[#515151] p-6 space-y-4 flex flex-col items-left transition-all duration-300 ${menuOpen ? "opacity-100 visible dark:bg-[#171f2fe0] bg-[#f6f5f7e6] bg-opacity-80 shadow-lg" : "opacity-0 invisible"
          } `}
      >
        {navLinks.map((link) => (
          <motion.a
            key={link.id}
            href={`#${link.id}`}
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * navLinks.indexOf(link) }}
          >
            {link.label}
          </motion.a>
        ))}
        <hr className="w-[65px] bg-gray-400 dark:bg-gray-600"/>
        <button onClick={toggleLanguage} className="hover:text-gray-300 text-left">
          {i18n.language === "es" ? "ES" : "EN"}
        </button>
        <button onClick={toggleTheme} className="hover:text-gray-300">
          {darkMode === "dark" ? <IconMoonStars stroke={2} className="w-5 h-5" /> : darkMode === "light" ? <IconSun stroke={2} className="w-5 h-5" /> : <IconDeviceDesktop stroke={2} className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  );
};
