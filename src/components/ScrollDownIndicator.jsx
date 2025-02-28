import { useEffect, useState } from "react";

export const ScrollDownIndicator = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY < 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <a href="#experiencia" className="flex flex-col items-center cursor-pointer">
                <span className="text-sm text-gray-400">Scroll Down</span>
                <div className="w-5 h-8 border-2 border-gray-500 rounded-full flex justify-center items-start relative mt-2">
                    <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce absolute top-4"></div>
                </div>
            </a>
        </div>
    );
};
