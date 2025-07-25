import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroIcon from '../assets/heroicon.svg?react';

export const SiteIconComponent = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);
    const heroRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        heroRef.current = document.querySelector('#Hero');
        if (!heroRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isSmallScreen = window.innerWidth < 768;
                if (entry.isIntersecting || !isSmallScreen) {
                    setIsVisible(true);
                    setShouldRender(true);
                } else {
                    setIsVisible(false);
                    setTimeout(() => setShouldRender(false), 2000); // matches vanish-out animation duration
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(heroRef.current);
        return () => observer.disconnect();
    }, []);

    if (!shouldRender) return null;

    return (
        <Link
            to="/about"
            aria-label="Go to about"
            className={`fixed right-19 top-10 md:left-12 md:top-15 z-50 transition-all duration-300 ${
                isVisible ? '' : 'animate-vanish-out'
            }`}
            style={{ width: 'fit-content', height: 'fit-content' }}
        >
            <HeroIcon className="h-7.5 w-7.5 md:h-15 md:w-15 fill-current hover:text-accent transition" />
        </Link>
    );
};