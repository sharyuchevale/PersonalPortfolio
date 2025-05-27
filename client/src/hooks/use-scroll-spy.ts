import { useState, useEffect } from "react";

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Get all sections
      const sections = document.querySelectorAll("section[id]");
      
      // If we're at the bottom of the page, activate the last section
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        const lastSection = sections[sections.length - 1];
        const lastSectionId = lastSection.getAttribute("id") || "";
        if (activeSection !== lastSectionId) {
          setActiveSection(lastSectionId);
        }
        return;
      }
      
      // Find the current active section
      let currentSection = "";
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
          currentSection = section.getAttribute("id") || "";
        }
      });
      
      // Update active section only if it changed
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };
    
    // Initial check on mount
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return activeSection;
}
