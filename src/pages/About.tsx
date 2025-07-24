import { Undo2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DecryptedText from '../components/Animations/DecryptedText';
import TiltedCard from '../components/Animations/TiltedCard';

export const About = () => {
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
                        revealDirection="center"
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
                            overlayContent={
                                <p className="tilted-card-demo-text font-gotham-light">
                                    Chock Mimura
                                </p>
                            }
                        />
                    </motion.div>
                    <motion.div
                        className="max-w-xl space-y-4 text-left mt-5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
                    >
                        <p className="font-gotham-light text-sm">
                            I hold a degree in Civil Engineering from Mapúa University, one of the Philippines’ leading institutions for engineering education.
                            Driven by a deep passion for technology, I transitioned into software engineering, where I found my true calling in creating, learning, and innovating.
                        </p>
                        <p className="font-gotham-light text-sm">
                            I take pride in my stength to quickly adapt to new technologies and frameworks, which has allowed me to thrive in the ever-evolving tech landscape.
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
        </div>
    );
}
