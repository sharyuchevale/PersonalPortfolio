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
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/sharyu-background-cropped.jpg" 
          alt="Sharyu standing by a beautiful mountain lake" 
          className="w-full h-full object-cover scale-150" 
          style={{ transformOrigin: 'left center', objectPosition: '60% 40%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="text-white text-lg font-medium mb-2">
              Welcome to
            </motion.p>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Sharyu <span className="text-primary">Chevale</span>
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-white/90 mb-6">
              Nature Photography & Environmental Design
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white/80 text-lg mb-8 leading-relaxed">
              Capturing the beauty of our natural world through stunning photography and sustainable design. 
              Explore my journey through forests, oceans, and mountains.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white rounded-lg shadow-md"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 rounded-lg"
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
