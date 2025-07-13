import GithubIcon from '../assets/github.svg?react';
import LinkedinIcon from '../assets/linkedin.svg?react';
import InstagramIcon from '../assets/instagram.svg?react';
import { classname } from '../lib/utils';
import { useState } from 'react';


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

    return (
        <nav className="fixed left-14 top-35 h-3/4 z-40 transition-all duration-300">
            <div className="h-full flex flex-col items-end justify-between p-4">
                <div className="flex flex-col items-end space-x-6">
                    {navItems.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            onClick={() => setActiveLink(item.href)}
                            className={classname(
                                "relative text-foreground/80 hover:text-accent transition-colors duration-1000 font-gotham text-[16px] font-medium",
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
                <div className="flex flex-col items-start space-y-4">
                    {socialLinks.map(({ Icon, href }, key) => (
                        <a key={key} href={href} target="_blank" rel="noopener noreferrer">
                            <Icon className="h-6 w-6 text-blue fill-current hover:text-accent transition-colors" />
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};