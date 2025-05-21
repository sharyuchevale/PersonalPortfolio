import { useState, useEffect } from "react";

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header height
      
      // Get all sections
      const sections = document.querySelectorAll("section[id]");
      
      // Find the current active section
      let currentSection = "";
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
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
