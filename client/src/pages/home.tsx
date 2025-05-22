import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import InterestsSection from "@/components/sections/InterestsSection";
import ContactSection from "@/components/sections/ContactSection";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

export default function Home() {
  // Set up intersection observer for fade-in sections
  const { observeElements } = useIntersectionObserver();
  const activeSection = useScrollSpy();

  useEffect(() => {
    observeElements('.section-fade');
  }, [observeElements]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeSection={activeSection} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <InterestsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
