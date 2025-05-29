import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { navLinks } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  activeSection: string | null;
}

export default function Header({ activeSection }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  // Track scroll position for background change
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Menu animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: "inset(0 0 100% 0)",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.05
      }
    },
    open: {
      opacity: 1,
      clipPath: "inset(0 0 0 0)",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

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
        
        {/* Desktop Navigation (Large screens only) */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <motion.a
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-2 py-2 text-white/90 hover:text-[#7EA046] transition-colors cursor-pointer text-base whitespace-nowrap ${
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
        
        {/* Hamburger Menu Button (Mobile & Tablet) */}
        <motion.button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full 
                     bg-gradient-to-br from-[#7EA046]/20 to-[#7EA046]/5 backdrop-blur-sm
                     hover:from-[#7EA046]/30 hover:to-[#7EA046]/10 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <motion.div
            animate={menuOpen ? { rotate: 45 } : { rotate: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </motion.div>
        </motion.button>
      </div>
      
      {/* Enhanced Mobile & Tablet Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-[72px] left-0 right-0 w-full lg:hidden 
                       bg-gradient-to-br from-black/95 via-black/90 to-[#7EA046]/10 backdrop-blur-md
                       border-t border-[#7EA046]/10"
          >
            <div className="relative w-full overflow-hidden">
              {/* Decorative gradient orbs */}
              <div className="absolute top-4 left-10 w-24 h-24 rounded-full 
                            bg-gradient-to-r from-[#7EA046]/20 to-transparent blur-2xl" />
              <div className="absolute bottom-4 right-10 w-32 h-32 rounded-full 
                            bg-gradient-to-l from-[#7EA046]/10 to-transparent blur-2xl" />
              
              <div className="container mx-auto px-4 py-4">
                <ul className="space-y-2 relative z-10">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.id}
                      variants={itemVariants}
                      className="overflow-hidden"
                    >
                      <motion.a
                        onClick={() => scrollToSection(link.id)}
                        className={`group relative flex items-center py-2.5 pl-6 pr-4 rounded-xl cursor-pointer 
                                  transition-all duration-300
                                  ${activeSection === link.id 
                                    ? "bg-gradient-to-r from-[#7EA046]/20 to-transparent text-[#7EA046]" 
                                    : "hover:bg-white/5 text-white/80 hover:text-white"}`}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Animated dot */}
                        <motion.div
                          className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full
                                    ${activeSection === link.id ? 'bg-[#7EA046]' : 'bg-white/40'}`}
                          layoutId="menuDot"
                          transition={{ duration: 0.3 }}
                        />
                        
                        <div className="flex items-center justify-between w-full">
                          <span className="text-base font-medium">{link.label}</span>
                          <span className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
                            0{index + 1}
                          </span>
                        </div>
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom decorative line */}
                <motion.div
                  className="h-px w-full bg-gradient-to-r from-transparent via-[#7EA046]/30 to-transparent mt-4"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
