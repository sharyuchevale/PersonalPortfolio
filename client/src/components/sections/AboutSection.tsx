import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  Camera, 
  TreePine,
  Award,
  Download,
  ChevronRight,
  ChevronLeft 
} from "lucide-react";

export default function AboutSection() {
  // State to track active timepoint in mobile view
  const [activePoint, setActivePoint] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Animation control
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define timeline data with 5 key timestamps
  const timelineEvents = [
    {
      year: "2015",
      title: "Educational Beginnings",
      description: "Graduated with a B.S. in Electrical and Electronics Engineering from VNIT Nagpur.",
      icon: <GraduationCap className="text-primary h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      color: "#8BA446",
      keywords: ["Education", "Engineering", "University"]
    },
    {
      year: "2017",
      title: "First Expedition",
      description: "Joined a conservation team on a six-month expedition through the Amazon rainforest, documenting endangered species and habitats.",
      icon: <TreePine className="text-primary h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1518729571365-9a891a9df2bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      color: "#7EA046",
      keywords: ["Exploration", "Conservation", "Rainforest"]
    },
    {
      year: "2019",
      title: "National Geographic Feature",
      description: "My photo series 'Silent Forests' was featured in National Geographic, highlighting the beauty and fragility of old-growth forests.",
      icon: <Award className="text-primary h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      color: "#6DA03D",
      keywords: ["Publication", "Photography", "Recognition"]
    },
    {
      year: "2021",
      title: "Conservation Initiative",
      description: "Founded the 'Through the Lens' conservation initiative, partnering with environmental NGOs to raise awareness through visual storytelling.",
      icon: <Camera className="text-primary h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1551636898-47668aa61de2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      color: "#5C9335",
      keywords: ["Initiative", "Partnership", "Storytelling"]
    },
    {
      year: "2023",
      title: "Global Recognition",
      description: "Received the Environmental Photographer of the Year award for my work documenting climate change impacts on coastal communities.",
      icon: <Briefcase className="text-primary h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1615559120015-a9d575968752?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      color: "#4B852D",
      keywords: ["Award", "Climate Change", "Documentary"]
    }
  ];

  // Mobile navigation
  const nextPoint = () => {
    setActivePoint((prev) => (prev < timelineEvents.length - 1 ? prev + 1 : prev));
  };

  const prevPoint = () => {
    setActivePoint((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section id="about" className="py-20 section-fade overflow-hidden" style={{ background: 'linear-gradient(120deg, #0f2e3d, #173a2d)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-primary text-lg font-medium mb-2">The Road Behind, the Road Ahead</h3>
          <h2 className="text-3xl md:text-4xl font-bold">My Journey</h2>
        </div>
        
        {/* Desktop Timeline - Hidden on mobile */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline track */}
            <div className="absolute left-0 right-0 h-1 bg-gray-700/50 top-32"></div>
            
            {/* Timeline points and content */}
            <div className="relative">
              {timelineEvents.map((event, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`absolute w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  style={{ left: `${(index / (timelineEvents.length - 1)) * 100}%`, transform: 'translateX(-50%)' }}
                >
                  {/* Timeline point with year */}
                  <div className="absolute left-0 -top-6 flex flex-col items-center">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center z-10 border-4"
                      style={{ borderColor: event.color, backgroundColor: '#151c26' }}
                    >
                      <span className="text-lg font-bold text-white">{event.year}</span>
                    </div>
                    <div 
                      className={`absolute w-1 ${index % 2 === 0 ? 'h-28' : 'h-12'} top-16`}
                      style={{ backgroundColor: event.color }}
                    ></div>
                  </div>
                  
                  {/* Content card - alternating top/bottom */}
                  <div 
                    className={`w-64 bg-gray-900/80 backdrop-blur-sm rounded-xl border p-4 ${
                      index % 2 === 0 ? 'mt-32' : 'mt-[4.5rem] -mb-36'
                    }`}
                    style={{ borderColor: event.color }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-full" style={{ backgroundColor: `${event.color}30` }}>
                        {event.icon}
                      </div>
                      <h3 className="font-bold">{event.title}</h3>
                    </div>
                    <p className="text-sm text-gray-300 mb-3">{event.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {event.keywords.map((keyword, kidx) => (
                        <span 
                          key={kidx}
                          className="text-xs px-2 py-1 rounded-full"
                          style={{ backgroundColor: `${event.color}20`, color: event.color }}
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Bottom image stripe */}
            <div className="mt-64 grid grid-cols-5 gap-3 relative z-10">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="relative aspect-video rounded-lg overflow-hidden group"
                >
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                    style={{ backgroundColor: event.color }}
                  ></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile Timeline - Visible only on mobile */}
        <div className="md:hidden">
          <div className="relative">
            {/* Current point */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mx-auto mb-4">
                <img 
                  src={timelineEvents[activePoint].image}
                  alt={timelineEvents[activePoint].title}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0 opacity-50"
                  style={{ backgroundColor: timelineEvents[activePoint].color }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center border-4 bg-gray-900/80"
                    style={{ borderColor: timelineEvents[activePoint].color }}
                  >
                    <span className="text-xl font-bold text-white">{timelineEvents[activePoint].year}</span>
                  </div>
                </div>
              </div>
              
              <div 
                className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-5 border"
                style={{ borderColor: timelineEvents[activePoint].color }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div 
                    className="p-2 rounded-full"
                    style={{ backgroundColor: `${timelineEvents[activePoint].color}30` }}
                  >
                    {timelineEvents[activePoint].icon}
                  </div>
                  <h3 className="font-bold text-xl">{timelineEvents[activePoint].title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{timelineEvents[activePoint].description}</p>
                <div className="flex flex-wrap gap-2">
                  {timelineEvents[activePoint].keywords.map((keyword, kidx) => (
                    <span 
                      key={kidx}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ backgroundColor: `${timelineEvents[activePoint].color}20`, color: timelineEvents[activePoint].color }}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Mobile navigation dots */}
            <div className="flex justify-between items-center">
              <button 
                onClick={prevPoint}
                className={`p-2 rounded-full ${activePoint === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
                disabled={activePoint === 0}
              >
                <ChevronLeft className="h-6 w-6 text-primary" />
              </button>
              
              <div className="flex items-center gap-2">
                {timelineEvents.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePoint(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activePoint === index ? 'bg-primary scale-125' : 'bg-gray-600'
                    }`}
                    aria-label={`View event from ${timelineEvents[index].year}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextPoint}
                className={`p-2 rounded-full ${activePoint === timelineEvents.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
                disabled={activePoint === timelineEvents.length - 1}
              >
                <ChevronRight className="h-6 w-6 text-primary" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
            Download Complete Timeline <Download className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
