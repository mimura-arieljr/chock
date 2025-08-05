import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import toast from "react-hot-toast";
import goodle1 from '../assets/goodle/goodle1.jpg';
import goodle2 from '../assets/goodle/goodle2.jpg';
import goodle3 from '../assets/goodle/goodle3.jpg';
import goodle4 from '../assets/goodle/goodle4.jpg';
import goodle5 from '../assets/goodle/goodle5.jpg';
import goodle6 from '../assets/goodle/goodle6.jpg';
import goodle7 from '../assets/goodle/goodle7.jpg';
import RollingGallery from '../components/Animations/RollingGallery'

type Project = {
    images: string[],
    name: string,
    description: string,
    description_ext: string,
    technology: string[],
    link: string
}

const goodle: Project = {
    images: [goodle1, goodle2, goodle3, goodle4, goodle5, goodle6, goodle7],
    name: "Goodle",
    description: "Goodle is a web-based review platform that allows users to select and study from a variety of subjects. It's built to be easily scalable, supporting the addition of more topics over time.",
    description_ext: "At present, it features six subjects, including a dedicated practice set for the AWS Cloud Practitioner Certification exam and English Proficiency Test. Number of questions and time limit per question are configurable.",
    technology: ["TypeScript", "Tailwind"],
    link: "https://mimura-arieljr.github.io/goodle/"
}

const reveal: Project = {
    images: [],
    name: "Reveal",
    description: "A real-time web application designed to support sprint planning sessions. It enables team members to collaboratively provide their estimates during planning.",
    description_ext: "Users can choose between Fibonacci point values or T-shirt size estimations, depending on team preference.",
    technology: ["TypeScript, NodeJS, Websocket"],
    link: "inactive"
}

const allProjects: Record<string, Project> = {
    goodle,
    reveal,
    // Add more projects here
};

export const Projects = () => {
    const { id } = useParams();
    const project = allProjects[id || ''];

    if (!project) {
        return <div className="text-center mt-20">Project not found.</div>;
    }

    return (
        <div className="lg:max-w-5xl md:mt-8 mx-auto min-h-screen">
            <RollingGallery autoplay={true} pauseOnHover={true} images={project.images} />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="-mt-10 mx-3 md:mx-20 text-start pb-8 font-gotham px-4 md:px-30">
                <h2 className="text-3xl mb-4">{project.name}</h2>
                <div>
                    <div className="w-full h-0.5 bg-accent-themed" />
                    <div className="w-16 h-2 bg-accent-themed clip-path-large mb-10" />
                </div>
                <p className="font-gotham-light text-sm mb-2">{project.description}</p>
                <p className="font-gotham-light text-sm mb-4">{project.description_ext}</p>
                <p className="font-gotham-light text-sm mb-4">
                    Technologies used: <span className="text-accent-word-themed">{project.technology.join(', ')}</span>
                </p>
                {project.link && (
                    <span className="flex items-center gap-4 pt-4 w-fit pr-3 transition-colors relative overflow-hidden group">
                        <span className="absolute inset-0 bg-accent animate-sweep-border z-10" />
                        <span
                            className="relative flex items-center"
                            style={{
                                opacity: 0,
                                animation: 'fade-in 0.5s ease 1s forwards'
                            }}
                        >
                            <ExternalLink className="text-accent-themed w-4 h-4" />
                            <a
                                href={project.link !== 'inactive' ? project.link : '#'}
                                onClick={(e) => {
                                    if (project.link === 'inactive') {
                                        e.preventDefault();
                                        toast.custom((t) => (
                                            <div className={`w-80 bg-background border border-red-500 rounded-md p-4 shadow-lg transition-all ${t.visible ? "animate-enter" : "animate-leave"}`}>
                                                <div className="font-gotham font-semibold text-lg text-accent-themed">
                                                    Ooops!
                                                </div>
                                                <p className="text-sm mt-1 text-foreground">
                                                    The website is currently down for maintenance.
                                                </p>
                                                <div className="mt-3 text-right">
                                                    <button
                                                        onClick={() => toast.dismiss(t.id)}
                                                        className="text-accent-themed text-sm hover:underline"
                                                    >
                                                        Dismiss
                                                    </button>
                                                </div>
                                            </div>
                                        ));
                                    }
                                }}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-gotham text-accent-themed text-sm ml-2"
                            >
                                Visit Site
                            </a>
                        </span>
                    </span>
                )}
            </motion.div>
        </div>
    );
};
