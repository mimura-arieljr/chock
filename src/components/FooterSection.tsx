import { ChevronUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 relative mt-12 pt-8 text-[16px] text-center">
      <div className="flex flex-col items-center gap-4">
        <p className="font-gotham-light">
          <span className="text-secondary">&copy; {new Date().getFullYear()} Ariel Jr Mimura.</span>{" "}
          <a
            href=""
            className="text-primary hover:underline hover:animate-pulse transition-all"
          >
            Learn how I built this site!
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