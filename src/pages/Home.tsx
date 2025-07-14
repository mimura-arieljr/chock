import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { SiteIconComponent } from "../components/SiteIcon"
import { HeroSection } from "../components/HeroSection";
// import { HoneycombBackground } from "../components/HoneycombBackground";
// import { CursorGlow } from "../components/CursorGlow";

export const Home = () => (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* {<CursorGlow/>}  */}
        {/* {<HoneycombBackground />} */}

        {<ThemeToggle />}

        {<SiteIconComponent />}

        {<Navbar />}

        {<HeroSection />}

        {/** Main Content */}

        {/** Footer */}
    </div>
);