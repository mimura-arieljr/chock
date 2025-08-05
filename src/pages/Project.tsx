import { Projects } from "../components/Projects";
import { Toaster } from "react-hot-toast";

export const Project = () => (
  <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

    <Projects />
    <Toaster position="bottom-right" />

  </div>
);