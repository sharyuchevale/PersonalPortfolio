import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Navigation links
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className={`fixed w-full bg-transparent z-50 transition-all ${scrolled ? 'bg-black/50 backdrop-blur-sm' : ''}`}>
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <a 
          onClick={() => scrollToSection("home")} 
          className="text-2xl font-bold text-white cursor-pointer"
        >
          Sharyu <span className="text-primary">Chevale</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  onClick={() => scrollToSection(link.id)}
                  className={`text-white/90 hover:text-white transition-colors cursor-pointer ${
                    activeSection === link.id ? "text-primary" : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-primary p-1 rounded-md"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-black/80 backdrop-blur-sm w-full border-t border-gray-800`}>
        <div className="container mx-auto px-4 py-3">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  onClick={() => scrollToSection(link.id)}
                  className={`block py-2 text-white/80 hover:text-white transition-colors cursor-pointer ${
                    activeSection === link.id ? "text-primary" : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
