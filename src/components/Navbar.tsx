import GithubIcon from '../assets/github.svg?react';
import LinkedinIcon from '../assets/linkedin.svg?react';
import InstagramIcon from '../assets/instagram.svg?react';
import { ListFilter, X } from "lucide-react";
import { classname } from '../lib/utils';
import { useState } from 'react';
import { useEffect } from 'react';


type navLinks = {
    name: string,
    href: string,
};

type socialLinks = navLinks & {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

const navItems: navLinks[] = [
    { name: "Career", href: "#Career" },
    { name: "Details", href: "#Details" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#Contact" },
];

const socialLinks: socialLinks[] = [
    { name: "Github", href: "https://github.com/mimura-arieljr", Icon: GithubIcon },
    { name: "Linkedin", href: "https://www.linkedin.com/in/arieljrmimura/", Icon: LinkedinIcon },
    { name: "Instagram", href: "https://www.instagram.com/spdrkd/", Icon: InstagramIcon },
];


export const Navbar = () => {
    const [activeLink, setActiveLink] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <nav className={classname(
            "fixed left-12 top-35 h-3/4 z-40 transition-all duration-300",
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        )}>
            {/* desktop nav */}
            <div className="h-full flex flex-col justify-between p-4">
                <div className="hidden md:flex flex-col items-end space-x-6">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            onClick={() => setActiveLink(item.href)}
                            className={classname(
                                "relative text-foreground/80 hover:text-accent transition-colors duration-1000 font-gotham text-sm md:text-[16px] font-medium",
                                "before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-[4px] before:h-full before:bg-[hsl(var(--accent))]",
                                (activeLink === item.href ? "before:scale-y-110" : "before:scale-y-0"),
                                "hover:before:scale-y-115 before:origin-top before:transition-transform"
                            )}
                            style={{
                                writingMode: 'vertical-rl',
                                transform: 'rotate(180deg)',
                            }}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden md:flex  flex-col items-start space-y-4">
                    {socialLinks.map(({ Icon, href }, key) => (
                        <a key={key} href={href} target="_blank" rel="noopener noreferrer">
                            <Icon className="h-6 w-6 text-blue fill-current hover:text-accent transition-colors" />
                        </a>
                    ))}
                </div>
            </div>

            {/* mobile nav */}
            <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="md:hidden text-foreground z-50 transition-all hover:text-accent duration-300"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
                {isMenuOpen ? <X size={24} /> : <ListFilter size={24} />}
            </button>
            <div
                className={classname(
                    "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}
            >
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="hover:text-accent transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};