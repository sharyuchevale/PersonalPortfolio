import { motion } from "framer-motion";
import { Dumbbell, Palette, PenTool, Compass } from "lucide-react";
import exerciseImage from "@/assets/optimized/optimized-exercise.jpeg";
import decorImage from "@/assets/optimized/optimized-decor.jpg";
import trekkingImage from "@/assets/optimized/optimized-trekking.jpg";
import writingImage from "@/assets/optimized/optimized-writing.jpg";

// Particle animation variants
const particleVariants = {
  animate: (i: number) => ({
    y: [0, -40, 0],
    x: [0, Math.sin(i * Math.PI) * 20, 0],
    opacity: [0, 1, 0],
    scale: [1, 1.2, 1],
    transition: {
      duration: 2 + Math.random(),
      repeat: Infinity,
      ease: "easeInOut",
      delay: Math.random() * 2
    }
  })
};

interface Interest {
  title: string;
  description: string;
  icon: JSX.Element;
  image: string;
  overlayText: string;
  details: string[];
}

const interests: Interest[] = [
  {
    title: "Exercise",
    description: "Embracing physical and mental wellness through movement",
    icon: <Dumbbell className="w-6 h-6" />,
    image: exerciseImage,
    overlayText: "MOVE",
    details: [
      "Running",
      "Yoga",
      "Badminton"
    ]
  },
  {
    title: "Art & Design",
    description: "Exploring creativity through various mediums and styles",
    icon: <Palette className="w-6 h-6" />,
    image: decorImage,
    overlayText: "CREATE",
    details: [
      "UI/UX Design",
      "Home Decor",
      "Digital Designing"
    ]
  },
  {
    title: "Trekking",
    description: "Exploring nature and challenging physical limits",
    icon: <Compass className="w-6 h-6" />,
    image: trekkingImage,
    overlayText: "EXPLORE",
    details: [
      "Mountain trails",
      "Nature photography",
      "Outdoor adventures"
    ]
  },
  {
    title: "Writing",
    description: "Crafting narratives and sharing thoughts through words",
    icon: <PenTool className="w-6 h-6" />,
    image: writingImage,
    overlayText: "CREATE",
    details: [
      "Technical Writing",
      "Storytelling",
      "Business blogs"
    ]
  }
];

export default function InterestsSection() {
  return (
    <section 
      id="interests" 
      className="py-16 relative overflow-hidden" 
      style={{ background: 'linear-gradient(160deg, #18432f, #1c3b45)' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.1, 0.15, 0.1],
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
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-lg font-medium mb-2" style={{ color: '#7EA046' }}>What I Love</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Personal Interests</h2>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={interest.image} 
                  alt={interest.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-75"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500" />
                
                {/* Animated dots */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[#7EA046] rounded-full"
                    style={{
                      left: `${20 + (i * 15)}%`,
                      bottom: "10%"
                    }}
                    custom={i}
                    variants={particleVariants}
                    animate="animate"
                  />
                ))}
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Top Text */}
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="p-2 rounded-full bg-[#7EA046]/20 backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(126,160,70,0.2)",
                        "0 0 0 10px rgba(126,160,70,0)",
                      ]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="text-[#7EA046]">
                      {interest.icon}
                    </div>
                  </motion.div>
                  <span className="text-white font-medium tracking-wider text-sm">
                    {interest.overlayText}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="space-y-4">
                  <div className="transform transition-all duration-300">
                    <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-[#7EA046] transition-colors duration-300">
                      {interest.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                  
                  {/* Details with fade-in animation */}
                  <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <div className="h-px bg-gradient-to-r from-[#7EA046]/50 via-[#7EA046]/20 to-transparent" />
                    <ul className="space-y-2">
                      {interest.details.map((detail, i) => (
                        <motion.li
                          key={detail}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-gray-400 text-sm flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7EA046]/50" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Corner Decorations */}
              <div className="absolute inset-0 p-3 pointer-events-none">
                <div className="relative w-full h-full">
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#7EA046]/30" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#7EA046]/30" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}