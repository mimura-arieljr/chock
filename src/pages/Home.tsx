import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { SiteIconComponent } from "../components/SiteIcon"
import { HeroSection } from "../components/HeroSection";
import { CareerSection } from "../components/CareerSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/FooterSection";

export const Home = () => (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

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