import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import backgroundImage from "@/assets/sharyu-background-new.jpg";

export default function HeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };
  
  // Scroll to section handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <img 
            src={backgroundImage}
            alt="Sharyu standing by a beautiful mountain lake" 
            className="w-full h-full object-cover scale-110 md:scale-110 md:object-center object-[70%_center] transform-gpu"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-transparent"></div>
        </div>
      </div>

      {/* Introduction Component - Vertically Centered */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start">
            <motion.div 
              className="md:w-7/12 lg:w-6/12 md:pr-10 lg:pr-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="mb-4">
                <p className="text-2xl md:text-3xl font-medium text-white shadow-text">Hi! I'm</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white shadow-text">Sharyu <span style={{ color: '#7EA046' }}>Chevale</span></h1>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-white mb-6 shadow-text">
                Product Manager
              </motion.h2>
              <motion.p variants={itemVariants} className="text-white text-base sm:text-lg md:text-lg lg:text-lg max-w-2xl mb-8 leading-relaxed shadow-text">
                <span className="block text-lg sm:text-xl md:text-xl lg:text-2xl font-medium mb-2" style={{ color: '#7EA046' }}>Built to build — products, plans, and purpose-driven progress</span>
                My journey blends software development, product management, and business strategy. I've built fintech products at Citi, worked on enterprise-wide strategic planning at HPE, and earned a Master's in MIS from Texas A&M. With expertise across fintech, enterprise solutions, & academic domains I enjoy creating thoughtful, useful products that help organizations move forward.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="gradient-button !bg-[#7EA046] hover:!bg-black/40 hover:backdrop-blur-sm text-white rounded-lg shadow-md"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work
                </Button>
                <Button 
                  size="lg" 
                  className="gradient-button !bg-[#7EA046] hover:!bg-black/40 hover:backdrop-blur-sm text-white rounded-lg shadow-md"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator - Fixed at Bottom */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div 
          className="relative cursor-pointer scale-75 sm:scale-90 md:scale-100" 
          onClick={() => scrollToSection("about")}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full blur-lg bg-[#7EA046]/30"></div>
          
          {/* Arrow Container */}
          <motion.div 
            className="relative bg-[#7EA046]/10 p-5 rounded-full border-2 border-[#7EA046]/30 backdrop-blur-sm 
                       hover:bg-[#7EA046]/20 hover:border-[#7EA046]/50 transition-all duration-300
                       hover:scale-110 group"
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronDown className="w-6 h-6 text-[#7EA046] group-hover:text-white transition-colors duration-300" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
