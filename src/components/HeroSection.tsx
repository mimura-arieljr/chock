/* eslint-disable react-hooks/exhaustive-deps */
import { Mouse, Braces } from "lucide-react";
import { useEffect, useState } from "react";
import { classname } from "../lib/utils";

export const HeroSection = () => {
    const [key, setKey] = useState(0);
    const skills = ["TypeScript", "React", "C#", "JavaScript", "NodeJS", ".NET", "Azure", "AWS", "Python", "TailwindCSS", "Automation"];
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setKey(prev => prev + 1);
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY < 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <section
            id="Hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
                <div className="space-y-1">
                    <h1 className="text-[18px] md:text-[22px] font-gotham text-secondary tracking-tight relative h-10">
                        <span key={`jp-${key}`} className="absolute inset-0 flex gap-1">
                            {"アリエル三村チョーク".split("").map((char, i) => (
                                <span key={i} className="inline-block"
                                    style={{ animation: `vanish-out 0.6s ease forwards`, animationDelay: `${i * 200}ms` }}>
                                    {char}
                                </span>
                            ))}
                        </span>
                        <span key={`en-${key}`} className="absolute inset-0 flex gap-1 text-secondary">
                            {"ARIEL JR MIMURA".split("").map((char, i) => (
                                <span key={i} className="inline-block"
                                    style={{ animation: `reveal-in 0.6s ease forwards`, animationDelay: `${i * 100}ms` }}>
                                    {char}
                                </span>
                            ))}
                        </span>
                    </h1>

                    <span className="flex items-center w-full">
                        <span className="relative overflow-hidden inline-block group">
                            <span className="absolute inset-0 bg-accent animate-sweep-border z-10" />
                            <span
                                className="relative text-primary font-gotham text-[34px] md:text-[70px] lg:text-[90px]"
                                style={{
                                    opacity: 0,
                                    animation: 'fade-in 0.5s ease 1s forwards'
                                }}
                            >
                                Developer
                            </span>
                        </span>
                        <span className="h-[3px] ml-3 bg-secondary opacity-50 flex-1 max-w-[200px] md:max-w-[300px]"></span>
                    </span>
                    <span key={`+${currentTitleIndex}`} className="relative overflow-hidden inline-block group -ml-10 md:-ml-40 lg:-ml-50">
                        <span className="absolute inset-0 bg-accent animate-sweep-border z-10" />
                        <span className="relative flex items-center py-2"
                            style={{
                                opacity: 0,
                                animation: 'fade-in 0.5s ease 1s forwards'
                            }}>
                            <Braces className="text-secondary h-6 w-6 lg:h-14 lg:w-14" />
                            <span className="text-primary ml-3 font-gotham text-[34px] md:text-[70px] lg:text-[90px]"
                            >
                                {skills[currentTitleIndex]}
                            </span>
                        </span>
                    </span>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fading-bounce">
                <Mouse className={classname("h-7 w-7 text-secondary",
                    isVisible ? "opacity-100" : "opacity-0"
                )} />
            </div>
        </section>
    );
};