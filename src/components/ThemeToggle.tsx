import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { classname } from "../lib/utils";

export const ThemeToggle = () => {
    // Initialize on light mode
    const [isLightMode, setIsLightMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setToDarkTheme();
        } else {
            setToLightTheme();
        }
    }, [])


    const toggleTheme = () => {
        if (isLightMode) {
            setToDarkTheme();
            localStorage.setItem("theme", "dark");
        } else {
            setToLightTheme();
            localStorage.setItem("theme", "light");
        }
    }

    const setToDarkTheme = () => {
        setIsLightMode(false);
        document.documentElement.classList.remove("light");
    }

    const setToLightTheme = () => {
        setIsLightMode(true);
        document.documentElement.classList.add("light");
    }

    return (
        <button onClick={toggleTheme} className={classname("top-10 right-11 md:top-16 lg:flex fixed lg:top-15 lg:right-18 z-60 lg:p-2",
            "rounded-full transition-colors duration-300 hover:-rotate-20"
        )}>
            <div
                className={`relative transition-transform duration-500 ease-in-out ${isLightMode ? "-rotate-360" : "rotate-0"}`}
            >
                <Sun
                    className={`absolute toggle-theme-icon h-6 lg:h-10 fill-black ${isLightMode ? "opacity-100" : "opacity-0"}`}
                />
                <Moon
                    className={`toggle-theme-icon h-6 lg:h-10 fill-gray-200 ${isLightMode ? "opacity-0" : "opacity-100"}`}
                />
            </div>
        </button>
    );
}