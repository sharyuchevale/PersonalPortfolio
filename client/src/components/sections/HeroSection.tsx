import { motion } from "framer-motion";
import { Mail } from "lucide-react";
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
    <section id="home" className="h-screen flex items-center relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <img 
            src="/assets/images/sharyu-background-new.jpg" 
            alt="Sharyu standing by a beautiful mountain lake" 
            className="w-full h-full object-cover" 
            style={{ 
              objectPosition: 'center center'
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - empty to match reference image with text on right */}
          <div className="hidden md:block"></div>
          
          {/* Right side - content area */}
          <motion.div 
            className="max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-light mb-1 text-white">
              Hi! I am <span className="text-primary font-medium">Sharyu</span>
            </motion.h1>
            <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-white/90 mb-6 font-light">
              Aspiring Product Manager
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white/90 text-base mb-8 leading-relaxed max-w-lg">
              I'm currently pursuing a Master's in Management Information Systems at Texas A&M University. 
              Throughout my journey, I've dived into various projects that have sharpened my skills and fueled 
              my passion for product management. I love using product sense in everything I do, always looking 
              for ways to make things better. Check out my work and see how I turn ideas into awesome, user-friendly products. 
              As an aspiring product manager, I'm on the lookout for opportunities that help both me and the products 
              I work on get better every day.
            </motion.p>
            <motion.div variants={itemVariants} className="mb-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white rounded-md shadow-md"
                onClick={() => scrollToSection("about")}
              >
                My Resume
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex space-x-4">
              <a href="#" className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-primary/90">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-primary/90">
                <div className="w-5 h-5 flex items-center justify-center">•</div>
              </a>
              <a href="#" className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-primary/90">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a href="#" className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-primary/90">
                <span className="text-lg font-bold">M</span>
              </a>
            </motion.div>

            {/* Position indicator at side */}
            <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-20 hidden md:block">
              <span className="text-white text-xs writing-vertical-rl transform rotate-180 tracking-wider">PORTFOLIO</span>
              <div className="w-px h-16 mx-auto bg-white/50"></div>
              <div className="w-3 h-3 rounded-full bg-white mx-auto"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
