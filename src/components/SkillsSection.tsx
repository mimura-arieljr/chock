import { useState } from "react";
import { motion } from 'framer-motion';
import DecryptedText from "./Animations/DecryptedText";
// Icons
import HTML from '../assets/technologies/html5.svg?react';
import CSS from '../assets/technologies/css.svg?react';
import Bootstrap from '../assets/technologies/bootstrap.svg?react';
import Tailwind from '../assets/technologies/tailwindcss.svg?react';
import JavaScript from '../assets/technologies/javascript.svg?react';
import TypeScript from '../assets/technologies/typescript.svg?react';
import Python from '../assets/technologies/python.svg?react';
import CSharp from '../assets/technologies/c.svg?react';
import NodeJS from '../assets/technologies/nodedotjs.svg?react';
import DotNet from '../assets/technologies/dotnet.svg?react';
import AWS from '../assets/technologies/aws.svg?react';
import Azure from '../assets/technologies/azure.svg?react';
import Docker from '../assets/technologies/docker.svg?react';
import MySQL from '../assets/technologies/mysql.svg?react';
import Database from '../assets/technologies/database.svg?react'
import ReactIcon from '../assets/technologies/reacticon.svg?react';
import Git from '../assets/technologies/git.svg?react';
import Figma from '../assets/technologies/figma.svg?react';

const skills = [
    { name: "Python", icon: Python, category: ["Languages"] },
    { name: "C#", icon: CSharp, category: ["Languages"] },
    { name: "TypeScript", icon: TypeScript, category: ["Languages", "Web"] },
    { name: "JavaScript", icon: JavaScript, category: ["Languages", "Web"] },
    { name: "HTML", icon: HTML, category: ["Web"] },
    { name: "CSS", icon: CSS, category: ["Web"] },
    { name: "Bootstrap", icon: Bootstrap, category: ["Web"] },
    { name: "Tailwind", icon: Tailwind, category: ["Web"] },
    { name: "Node.js", icon: NodeJS, category: ["Web", "Frameworks"] },
    { name: ".NET", icon: DotNet, category: ["Frameworks"] },
    { name: "AWS", icon: AWS, category: ["Cloud"] },
    { name: "Azure", icon: Azure, category: ["Cloud"] },
    { name: "Docker", icon: Docker, category: ["Tools"] },
    { name: "MySQL", icon: MySQL, category: ["Databases"] },
    { name: "MsSQL", icon: Database, category: ["Databases"] },
    { name: "React", icon: ReactIcon, category: ["Frameworks"] },
    { name: "Git", icon: Git, category: ["Tools"] },
    { name: "Figma", icon: Figma, category: ["Tools"] },
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

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = skills.filter(
        (skill) =>
            activeCategory.toLowerCase() === "all" ||
            skill.category.includes(activeCategory)
    );
    return (
        <section id="Skills" className="max-w-4xl mx-5 md:mx-auto relative min-h-screen">
            <motion.h2
                className="text-3xl md:text-4xl font-gotham text-primary mb-12 text-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
            >
                <DecryptedText
                    text="Technologies I know"
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
                    name="Skill Category"
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="flex justify-self-end py-2 text-sm font-gotham"
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

export default SkillsSection;