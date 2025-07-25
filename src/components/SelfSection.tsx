import { Undo2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mouse } from 'lucide-react';
import { useEffect, useState } from 'react';
import { classname } from '../lib/utils';
import DecryptedText from '../components/Animations/DecryptedText';
import TiltedCard from '../components/Animations/TiltedCard';


export const SelfSection = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY < 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground px-4 py-12 flex flex-col justify-center items-center">
            <div className='flex flex-col'>
                <motion.h2
                    className="text-3xl md:text-4xl font-gotham text-primary mb-12 self-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
                >
                    <DecryptedText
                        text="Hey there!"
                        characters="こんにちは"
                        animateOn="view"
                        revealDirection="start"
                    />
                </motion.h2>
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                    >
                        <TiltedCard
                            imageSrc="/assets/me.jpeg"
                            altText="Chock Mimura"
                            captionText="Chock Mimura"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                        />
                    </motion.div>
                    <motion.div
                        className="max-w-xl space-y-4 text-left mt-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
                    >
                        <p className="font-gotham-light text-sm">
                            I hold a degree in Civil Engineering from <span className="text-accent">Mapúa University</span>, one of the Philippines’ leading institutions for engineering education.
                            Driven by a deep passion for technology, I transitioned into <span className="text-accent">Software engineering</span>, where I found my true calling in creating, learning, and innovating.
                        </p>
                        <p className="font-gotham-light text-sm">
                            I take pride in my stength to <span className="text-accent">quickly adapt to new technologies and frameworks</span>, which has allowed me to thrive in the ever-evolving tech landscape.
                        </p>
                        <p className="font-gotham-light text-sm">
                            In my free time, I enjoy working out and watching films. I love traveling, exploring different cultures,
                            reading about anything!
                        </p>
                        <div className="flex justify-center md:justify-start pt-4">
                            <span className="flex items-center gap-4 pt-4 transition-colors relative overflow-hidden group">
                                <span className="absolute inset-0 bg-accent animate-sweep-border z-10" />
                                <span
                                    className="relative flex items-center"
                                    style={{
                                        opacity: 0,
                                        animation: 'fade-in 0.5s ease 1s forwards'
                                    }}
                                >
                                    <Undo2 className="text-accent-themed w-4 h-4" />
                                    <Link to="/" className="font-gotham text-accent-themed text-sm ml-2">
                                        Take me back
                                    </Link>
                                </span>
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fading-bounce">
                <Mouse className={classname("h-7 w-7 text-secondary",
                    isVisible ? "opacity-100" : "opacity-0"
                )} />
            </div>
        </div>
    )
}