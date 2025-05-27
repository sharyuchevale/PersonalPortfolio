import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { motion } from "framer-motion";

interface HeaderProps {
  activeSection: string | null;
}

export default function Header({ activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Track scroll position for background change
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    });
  }

  return (
    <header className={`fixed w-full bg-transparent z-50 transition-all ${scrolled ? 'bg-black/50 backdrop-blur-sm' : ''}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a 
          onClick={() => scrollToSection("home")} 
          className="text-2xl font-bold cursor-pointer flex items-center gap-1"
        >
          {/* Diamond Sparkles Arrangement */}
          <div className="relative w-10 h-8 flex items-center">
            {/* Left Large Sparkle */}
            <div className="absolute left-0 w-5 h-5 text-[#7EA046] animate-pulse">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2L20 12L12 22L4 12L12 2Z" />
              </svg>
            </div>

            {/* Top Small Sparkle */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3 h-3 text-[#7EA046] animate-pulse">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2L20 12L12 22L4 12L12 2Z" />
              </svg>
            </div>

            {/* Right Medium Sparkle */}
            <div className="absolute right-0 w-4 h-4 text-[#7EA046] animate-pulse">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2L20 12L12 22L4 12L12 2Z" />
              </svg>
            </div>
          </div>
          <span className="text-white">Sharyu</span> <span style={{ color: '#7EA046' }} className="font-extrabold drop-shadow-md">Chevale</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <motion.a
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3 py-2 text-white/90 hover:text-[#7EA046] transition-colors cursor-pointer ${
                    activeSection === link.id ? "text-[#7EA046]" : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    >
                      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#7EA046] to-transparent" />
                    </motion.div>
                  )}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-[#7EA046] p-1 rounded-md"
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
                <motion.a
                  onClick={() => scrollToSection(link.id)}
                  className={`block py-2 text-white/80 hover:text-[#7EA046] transition-colors cursor-pointer relative ${
                    activeSection === link.id ? "text-[#7EA046] pl-4" : "pl-4"
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-[calc(100%-16px)]"
                      layoutId="activeMobileSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    >
                      <div className="h-full w-[2px] bg-gradient-to-b from-[#7EA046] via-[#7EA046] to-transparent" />
                    </motion.div>
                  )}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
