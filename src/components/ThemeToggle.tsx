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
        <button onClick={toggleTheme} className={classname("fixed max-sm:hidden top-15 right-18 z-50 p-2",
            "rounded-full transition-colors duration-300 hover:-rotate-20"
        )}>
            <div
                className={`relative transition-transform duration-500 ease-in-out ${isLightMode ? "-rotate-360" : "rotate-0"}`}
            >
                <Sun
                    className={`absolute toggle-theme-icon fill-black ${isLightMode ? "opacity-100" : "opacity-0"}`}
                />
                <Moon
                    className={`toggle-theme-icon fill-gray-200 ${isLightMode ? "opacity-0" : "opacity-100"}`}
                />
            </div>
        </button>
    );
}