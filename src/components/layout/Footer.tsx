import { FC } from 'react';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: FC = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();
  
  // Navigation links for footer
  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative py-8 overflow-hidden" style={{ background: 'linear-gradient(0deg, #143442 0%, #1c3c30 100%)' }}>
      {/* Subtle separator design */}
      <div className="absolute top-0 left-0 right-0 flex justify-center overflow-hidden">
        <div className="w-full max-w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#7EA046]/30 to-transparent">
          <motion.div
            className="h-full w-full bg-gradient-to-r from-transparent via-[#7EA046]/20 to-transparent"
            animate={{
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.1, 0.15, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(126,160,70,0.15) 0%, transparent 50%)',
          }}
        />
        <motion.div
          animate={{
            opacity: [0.15, 0.1, 0.15],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 80% 50%, rgba(126,160,70,0.15) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="mb-8 p-2 rounded-full bg-[#7EA046]/10 hover:bg-[#7EA046]/20 
                     text-[#7EA046] transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
          </motion.button>

          {/* Footer content */}
          <div className="flex flex-col items-center space-y-4">
            <motion.div 
              className="flex items-center gap-2 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-4 h-4 text-[#7EA046]" />
              <span className="font-medium">Sharyu Chevale</span>
              <Sparkles className="w-4 h-4 text-[#7EA046]" />
            </motion.div>

            <div className="text-center text-gray-400 text-sm space-y-2">
              <motion.p 
                className="flex items-center justify-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Built with 
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Heart className="w-4 h-4 text-[#7EA046] inline" />
                </motion.span>
                by Sharyu Chevale
              </motion.p>
              
              <motion.p 
                className="flex items-center justify-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                © {currentYear} All Rights Reserved
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
