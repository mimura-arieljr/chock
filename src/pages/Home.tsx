import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { SiteIconComponent } from "../components/SiteIcon"
import { HeroSection } from "../components/HeroSection";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";
const CareerSection = lazy(() => import("../components/CareerSection"));
const ProjectsSection = lazy(() => import("../components/ProjectsSection"));
const ContactSection = lazy(() => import("../components/ContactSection"));
const Footer = lazy(() => import("../components/FooterSection"));


export const Home = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

    <ThemeToggle />
    <SiteIconComponent />
    <Navbar />
    <HeroSection />

    <Suspense fallback={<div>Loading...</div>}>
      <CareerSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </Suspense>

    <Toaster position="bottom-right" />

  </div>
);