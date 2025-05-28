import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import aarohiImage from "@/assets/aarohi.jpg";
import culturalImage from "@/assets/cultural.jpg";
import lrImage from "@/assets/lr.jpg";
import receptionImage from "@/assets/reception.jpg";
import buddyImage from "@/assets/buddy.jpeg";

const activities = [
  {
    image: aarohiImage,
    role: "Event Coordinator",
    year: "2017-18",
    organization: "Aarohi",
    description: "Managed Judges for the all events for the festival",
    department: "VNIT",
    size: "medium"
  },
  {
    image: culturalImage,
    role: "Cultural Secretary",
    year: "2018-19",
    organization: "EEE Department",
    description: "Led the managment and logistics of cultural events of the EEE department",
    department: "VNIT",
    size: "large"
  },
  {
    image: lrImage,
    role: "Department Representative",
    year: "2019-20",
    organization: "EEE Department",
    description: "Led department level event for 400 students",
    department: "VNIT",
    size: "small"
  },
  {
    image: receptionImage,
    role: "Reception Head",
    year: "2019-20",
    organization: "AXIS",
    description: "Headed the reception team for techinal festival that hosted 30+ events",
    department: "VNIT",
    size: "medium"
  },
  {
    image: buddyImage,
    role: "Buddy",
    year: "2024-25",
    organization: "Buddy Connect",
    description: "Mentored incoming batch of MS-MIS in career, academic and personal aspects",
    department: "TAMU",
    size: "large"
  }
];

const achievements = [
  "Led 500+ students",
  "Hosted 10+ creative events",
  "Managed 50+ events",
  "Managed teams of 10+ members",
  "Mentored 10+ students"
];

export default function ExtracurricularsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentAchievement, setCurrentAchievement] = useState(0);

  // Rotate achievements
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAchievement((prev) => (prev + 1) % achievements.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="extracurriculars" 
      className="py-12 md:py-24 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0px 0px", "30px 30px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: 'radial-gradient(#7EA046 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-20"
        >
          <h3 className="text-lg font-medium mb-2" style={{ color: '#7EA046' }}>Beyond Academics</h3>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Extracurriculars</h2>
        </motion.div>

        {/* Magazine-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Achievement Card */}
          <motion.article
            className="relative min-h-[280px] bg-gradient-to-br from-[#7EA046]/10 via-black/80 to-black/90 rounded-lg overflow-hidden backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Decorative border */}
            <motion.div 
              className="absolute inset-[1px] rounded-lg border border-[#7EA046]/20"
              animate={{
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <div className="absolute inset-0">
              <div className="relative h-full p-6 flex flex-col">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <motion.div 
                      className="w-12 h-12 mx-auto mb-3 rounded-full border-2 border-[#7EA046]/40 flex items-center justify-center bg-black/30"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <motion.span 
                        className="text-xl font-bold text-[#7EA046]"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        A
                      </motion.span>
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Key Achievements</h3>
                  <div className="w-16 h-0.5 bg-[#7EA046]/30 mx-auto" />
                </div>

                {/* Rotating Achievements */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative h-24 w-full max-w-[280px] mx-auto">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentAchievement}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="text-center">
                          <p className="text-[#7EA046] text-xl font-semibold px-4 leading-relaxed">
                            {achievements[currentAchievement]}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex gap-2 justify-center mt-4">
                  {achievements.map((_, index) => (
                    <motion.div
                      key={index}
                      className="relative h-2"
                    >
                      <motion.div
                        className="w-8 h-0.5 rounded-full absolute top-1/2 -translate-y-1/2"
                        animate={{
                          backgroundColor: index === currentAchievement 
                            ? "rgb(126, 160, 70)" 
                            : "rgba(126, 160, 70, 0.2)",
                          scale: index === currentAchievement ? [1, 1.2, 1] : 1
                        }}
                        transition={{ 
                          duration: index === currentAchievement ? 2 : 0.3,
                          repeat: index === currentAchievement ? Infinity : 0
                        }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-24 h-24 opacity-10">
                  <motion.div
                    className="w-full h-full border-l-2 border-t-2 border-[#7EA046] rounded-tl-lg"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
                  <motion.div
                    className="w-full h-full border-r-2 border-b-2 border-[#7EA046] rounded-br-lg"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </div>
              </div>
            </div>
          </motion.article>

          {/* Activity Cards */}
          {activities.map((activity, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.article
                key={activity.role}
                className="group relative min-h-[280px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                {/* Background Image with Gradient */}
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-black/60 mix-blend-multiply transition-opacity duration-300"
                    animate={{ opacity: isHovered ? 0.3 : 0.6 }}
                  />
                  <motion.img
                    src={activity.image}
                    alt={activity.role}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Content Overlay */}
                <div className="relative h-full p-4 flex flex-col justify-between">
                  {/* Top Content */}
                  <div>
                    <motion.div 
                      className="inline-flex items-center bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 mb-3"
                      animate={{ y: isHovered ? -5 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 bg-[#7EA046] rounded-full mr-2"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-[#7EA046] text-xs font-medium">{activity.year}</span>
                    </motion.div>

                    <motion.h3 
                      className="text-lg font-bold text-white mb-2 tracking-tight line-clamp-2"
                      animate={{ y: isHovered ? -5 : 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      {activity.role}
                    </motion.h3>
                  </div>

                  {/* Bottom Content */}
                  <motion.div
                    animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : 10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                  >
                    <p className="text-gray-200 text-xs line-clamp-2">
                      {activity.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-[#7EA046] font-semibold">{activity.organization}</span>
                      <span className="w-1 h-1 bg-white/30 rounded-full" />
                      <span className="text-white/70">{activity.department}</span>
                    </div>
                  </motion.div>

                  {/* Decorative Elements */}
                  <motion.div 
                    className="absolute top-2 right-2 w-8 h-8 border border-white/10 rounded-full"
                    animate={{ 
                      rotate: isHovered ? 360 : 0,
                      borderColor: isHovered ? "rgba(126, 160, 70, 0.3)" : "rgba(255, 255, 255, 0.1)"
                    }}
                    transition={{ duration: 1 }}
                  >
                    <motion.div 
                      className="absolute inset-0 border-t-2 border-[#7EA046] rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  animate={{ 
                    boxShadow: isHovered 
                      ? "inset 0 0 0 2px rgba(126, 160, 70, 0.5)" 
                      : "inset 0 0 0 1px rgba(255, 255, 255, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
} 