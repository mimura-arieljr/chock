import { useState } from "react";
import { motion } from 'framer-motion';
import DecryptedText from "./Animations/DecryptedText";
// Icons
import HTML from '../assets/html5.svg?react';
import CSS from '../assets/css.svg?react';
import JavaScript from '../assets/javascript.svg?react';
import TypeScript from '../assets/typescript.svg?react';
import Python from '../assets/python.svg?react';
import CSharp from '../assets/c.svg?react';
import NodeJS from '../assets/nodedotjs.svg?react';
import DotNet from '../assets/dotnet.svg?react';
import AWS from '../assets/html5.svg?react';
import Docker from '../assets/docker.svg?react';
import MySQL from '../assets/mysql.svg?react';
import ReactIcon from '../assets/react.svg?react';
import Git from '../assets/git.svg?react';
import Figma from '../assets/figma.svg?react';

const skills = [
    // Languages
    { name: "Python", icon: Python, category: "Languages" },
    { name: "C#", icon: CSharp, category: "Languages" },
    { name: "TypeScript", icon: TypeScript, category: "Languages" },

    // Web Development
    { name: "HTML", icon: HTML, category: "Web" },
    { name: "CSS", icon: CSS, category: "Web" },
    { name: "JavaScript", icon: JavaScript, category: "Web" },
    { name: "Node.js", icon: NodeJS, category: "Web" },
    { name: ".NET", icon: DotNet, category: "Web" },

    // Cloud
    { name: "AWS", icon: AWS, category: "Cloud" },
    { name: "Docker", icon: Docker, category: "Cloud" },

    // Databases
    { name: "MySQL", icon: MySQL, category: "Databases" },

    // Frameworks/Libraries
    { name: "React", icon: ReactIcon, category: "Frameworks" },

    // Tools
    { name: "Git", icon: Git, category: "Tools" },
    { name: "Figma", icon: Figma, category: "Tools" },
];

const categories = [
    "All",
    "Languages",
    "Web",
    "Cloud",
    "Databases",
    "Frameworks",
    "Tools"
];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "All" || skill.category === activeCategory
    );
    return (
        <section id="skills" className="max-w-4xl mx-5 md:mx-auto py-10 relative">
            <motion.h2
                className="text-3xl md:text-4xl font-gotham text-primary mb-12 text-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
            >
                <DecryptedText
                    text="Some stuff that I know"
                    characters="こんにちは"
                    animateOn="view"
                    revealDirection="start"
                />
            </motion.h2>

            <div>
                <div className="w-full h-0.5 bg-accent-themed" />
                <div className="w-16 h-2 bg-accent-themed clip-path-large mb-10" />
            </div>

            {/* Dropdown for small screens */}
            <div className="mb-6 block md:hidden">
                <select
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="flex justify-self-end px-4 py-2 text-sm font-gotham"
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            {/* Buttons for medium screens and up */}
            <div className="mb-6 hidden md:flex flex-wrap gap-4">
                {categories.map((category, key) => (
                    <motion.button
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: key * 0.05 }}
                        viewport={{ once: true }}
                        onClick={() => setActiveCategory(category)}
                        className={`px-2 py-2 text-left font-gotham ${activeCategory === category
                            ? "border-b-2 border-b-accent text-primary"
                            : "bg-none opacity-50"
                            }`}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>

            <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
                {filteredSkills.map((skill, key) => (
                    <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: key * 0.05 }}
                        viewport={{ once: true }}
                        className="p-2 flex flex-col items-center"
                    >
                        <skill.icon className="w-14 h-14 mb-4 text-blue fill-current hover:text-accent transition-colors" />
                        <h3 className="font-gotham-light text-[12px] text-center">{skill.name}</h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};