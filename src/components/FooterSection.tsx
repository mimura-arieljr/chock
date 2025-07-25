import { ChevronUp } from "lucide-react";
import GradientText from '../components/Animations/GradientText'


const Footer = () => {
  return (
    <footer className="py-12 px-4 relative mt-20 pt-8 text-[16px] text-center">
      <div className="flex flex-col items-center gap-4">
        <p className="font-gotham-light flex flex-wrap justify-center items-center gap-1">
          <span className="text-secondary">&copy; {new Date().getFullYear()} Ariel Jr Mimura.</span>
          <a
            href=""
            className="text-primary hover:animate-pulse transition-all gradient-text"
          >
            <GradientText
              colors={["#40ffaa", "#00ffff", "#4079ff", "#00ffff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              Learn how I built this site!
            </GradientText>
          </a>
        </p>
        <a
          href="#Hero"
          className="hidden md:inline-block p-2 mt-5 rounded-full bg-primary/10 hover:bg-accent text-primary transition-colors animate-fading-bounce-reverse duration-300"
        >
          <ChevronUp size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;