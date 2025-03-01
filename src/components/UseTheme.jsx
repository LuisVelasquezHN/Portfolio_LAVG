import { useEffect, useState } from "react";

export const UseTheme = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") || "system";
  });

  useEffect(() => {
    const applyTheme = (theme) => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else if (theme === "light") {
        document.documentElement.classList.remove("dark");
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.classList.toggle("dark", prefersDark);
      }
    };

    applyTheme(darkMode);
    localStorage.setItem("theme", darkMode);
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
