import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <img 
            src="/assets/images/sharyu-background-new.jpg" 
            alt="Sharyu standing by a beautiful mountain lake" 
            className="w-full h-full object-cover scale-110" 
            style={{ 
              objectPosition: 'center center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-start">
          <motion.div 
            className="md:w-7/12 lg:w-6/12 mb-10 md:mb-0 md:pr-10 lg:pr-16 max-h-screen overflow-y-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <p className="text-2xl md:text-3xl font-medium text-white shadow-text">Hi! I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white shadow-text">Sharyu <span className="text-primary">Chevale</span></h1>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-white mb-6 shadow-text">
              Product Manager
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white text-base sm:text-lg md:text-lg lg:text-lg max-w-xl mb-8 leading-relaxed shadow-text">
              <span className="block text-lg sm:text-xl md:text-xl lg:text-2xl font-medium mb-2 text-primary">Built to build — products, plans, and purpose-driven progress</span>
              My journey blends technology, management, and business. I've built financial products at Citi, led enterprise-wide strategic planning at HPE, and earned a Master's in MIS from Texas A&M. With expertise in the fintech, enterprise solutions, & academic administration domains, I craft thoughtful, impact-driven products that move organizations forward.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="gradient-button text-white"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                className="gradient-button text-white"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Removed the second image since we're using your photo as the main background */}
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <a 
            onClick={() => scrollToSection("about")}
            className="text-primary cursor-pointer"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
