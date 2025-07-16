import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { SiteIconComponent } from "../components/SiteIcon"
import { HeroSection } from "../components/HeroSection";
import { CareerSection } from "../components/CareerSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/FooterSection";
// import { HoneycombBackground } from "../components/HoneycombBackground";

export const Home = () => (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* {<HoneycombBackground />} */}

        {<ThemeToggle />}

        {<SiteIconComponent />}

        {<Navbar />}

        {<HeroSection />}

        {<CareerSection />}

        {<ProjectsSection />}

        {<ContactSection />}

        {<Footer />}

    </div>
);