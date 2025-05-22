import { useState, useEffect } from "react";
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
  // State to track active event on mobile
  const [activeEvent, setActiveEvent] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Navigation functions for mobile view
  const nextEvent = () => {
    setActiveEvent(prev => Math.min(prev + 1, timelineEvents.length - 1));
  };

  const prevEvent = () => {
    setActiveEvent(prev => Math.max(prev - 1, 0));
  };

  // Define timeline data with 5 key timestamps
  const timelineEvents = [
    {
      year: "2015",
      title: "Educational Beginnings",
      description: "Graduated with a B.S. in Electrical and Electronics Engineering from VNIT Nagpur.",
      icon: <GraduationCap className="text-primary h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
    },
    {
      year: "2017",
      title: "First Expedition",
      description: "Joined a conservation team on a six-month expedition through the Amazon rainforest, documenting endangered species and habitats.",
      icon: <TreePine className="text-primary h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1518729571365-9a891a9df2bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      year: "2019",
      title: "National Geographic Feature",
      description: "My photo series 'Silent Forests' was featured in National Geographic, highlighting the beauty and fragility of old-growth forests.",
      icon: <Award className="text-primary h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      year: "2021",
      title: "Conservation Initiative",
      description: "Founded the 'Through the Lens' conservation initiative, partnering with environmental NGOs to raise awareness through visual storytelling.",
      icon: <Camera className="text-primary h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1551636898-47668aa61de2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      year: "2023",
      title: "Global Recognition",
      description: "Received the Environmental Photographer of the Year award for my work documenting climate change impacts on coastal communities.",
      icon: <Briefcase className="text-primary h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1615559120015-a9d575968752?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    }
  ];

  return (
    <section id="about" className="py-20 section-fade overflow-x-hidden" style={{ background: 'linear-gradient(120deg, #0f2e3d, #173a2d)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-primary text-lg font-medium mb-2">The Road Behind, the Road Ahead</h3>
          <h2 className="text-3xl md:text-4xl font-bold">My Journey</h2>
        </div>
        
        {/* DESKTOP: Creative Nature-Inspired Horizontal Timeline */}
        <div className="hidden lg:block relative py-12 mt-8">
          <div className="max-w-6xl mx-auto">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-full h-1/2 bg-gradient-to-b from-emerald-900/5 to-transparent"></div>
              
              {/* Decorative Leaf Pattern */}
              <div className="absolute right-0 top-0 w-64 h-64 opacity-10">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100,0 C130,50 170,50 200,50 C170,80 170,120 200,150 C170,150 130,150 100,200 C70,150 30,150 0,150 C30,120 30,80 0,50 C30,50 70,50 100,0 Z" fill="#7EA046" />
                </svg>
              </div>
              
              <div className="absolute left-0 bottom-0 w-64 h-64 opacity-10">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100,0 C130,50 170,50 200,50 C170,80 170,120 200,150 C170,150 130,150 100,200 C70,150 30,150 0,150 C30,120 30,80 0,50 C30,50 70,50 100,0 Z" fill="#7EA046" />
                </svg>
              </div>
            </div>
            
            {/* Main Timeline Container */}
            <div className="relative">
              {/* Creative Winding Path with Leaf Pattern */}
              <div className="relative h-28 mb-16">
                {/* Main Path - Green Gradient Line */}
                <div className="absolute top-1/2 w-full h-4 transform -translate-y-1/2 bg-gradient-to-r from-emerald-800 via-primary to-teal-700 rounded-full"></div>
                
                {/* Light Highlight on Path */}
                <div className="absolute top-1/2 w-full h-1 transform -translate-y-1/2 mt-[-1px] bg-white/20 rounded-full"></div>
                
                {/* Leaf Pattern Decorations along Timeline */}
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={`leaf-${i}`} 
                    className="absolute top-1/2 transform -translate-y-1/2" 
                    style={{ left: `${i * 12 + 6}%`, opacity: 0.3 }}
                  >
                    <div className="text-primary h-6 w-6 animate-pulse" style={{ animationDelay: `${i * 0.5}s` }}>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6,3 C14,1 16,10 16,12 C12,14 6,14 4,8 C2,4 6,3 6,3 Z" fill="currentColor" />
                        <path d="M18,21 C10,23 8,14 8,12 C12,10 18,10 20,16 C22,20 18,21 18,21 Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                ))}
                
                {/* Event Markers on the Timeline */}
                <div className="flex justify-between absolute top-1/2 w-full transform -translate-y-1/2">
                  {timelineEvents.map((event, index) => (
                    <div key={`marker-${index}`} className="relative">
                      {/* Marker Outer Glow Effect */}
                      <div className="absolute w-16 h-16 rounded-full bg-primary/20 animate-pulse transform -translate-x-1/2 -translate-y-1/2" 
                           style={{ animationDuration: "3s", animationDelay: `${index * 0.5}s` }}></div>
                      
                      {/* Marker Circle */}
                      <div className="absolute w-12 h-12 rounded-full border-4 border-primary bg-background/90 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10 shadow-lg">
                        <span className="text-primary font-bold">{event.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Event Cards with 3D Effects */}
              <div className="grid grid-cols-5 gap-6 perspective-1000">
                {timelineEvents.map((event, index) => (
                  <div 
                    key={`event-${index}`} 
                    className="group transform transition-all duration-500 hover:scale-105 hover:rotate-y-10 hover:z-10"
                  >
                    {/* Card with 3D effects */}
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-primary/30 h-full bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur">
                      {/* Card Top with Hexagonal Cutout for Image */}
                      <div className="relative">
                        {/* Hexagonal Mask */}
                        <div className="relative h-48 overflow-hidden">
                          <div className="absolute inset-0 clip-hex">
                            <img 
                              src={event.image} 
                              alt={event.title}
                              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                        </div>
                        
                        {/* Icon Badge - Floating Effect */}
                        <div className="absolute top-4 right-4 p-3 rounded-full bg-primary shadow-lg shadow-primary/30 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                          {event.icon}
                        </div>
                        
                        {/* Title and Location Badge */}
                        <div className="absolute bottom-3 left-0 p-4">
                          <h3 className="text-white text-xl font-bold drop-shadow-md">{event.title}</h3>
                          <div className="flex items-center mt-2 gap-2">
                            <div className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm shadow-inner">
                              {index === 0 && "VNIT Nagpur, India"}
                              {index === 1 && "Amazon Rainforest, Brazil"}
                              {index === 2 && "National Geographic Feature"}
                              {index === 3 && "Global Conservation Initiative"}
                              {index === 4 && "Environmental Award Ceremony"}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Card Content with Nature-Themed Details */}
                      <div className="p-5 relative">
                        {/* Leaf Decoration */}
                        <div className="absolute top-2 right-2 opacity-10 text-primary">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6,3 C14,1 16,10 16,12 C12,14 6,14 4,8 C2,4 6,3 6,3 Z" />
                          </svg>
                        </div>
                        
                        <p className="text-sm text-gray-300 leading-relaxed mb-4">{event.description}</p>
                        
                        {/* Achievements with Icon Indicators */}
                        <div className="border-t border-primary/20 pt-3 mt-2">
                          <div className="flex items-center justify-between">
                            {/* Left Achievement */}
                            <div className="flex items-center gap-1.5">
                              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                                {index === 0 && <span className="text-xs text-primary font-bold">A+</span>}
                                {index === 1 && <span className="text-xs text-primary font-bold">47</span>}
                                {index === 2 && <span className="text-xs text-primary font-bold">12</span>}
                                {index === 3 && <span className="text-xs text-primary font-bold">5</span>}
                                {index === 4 && <span className="text-xs text-primary font-bold">7</span>}
                              </div>
                              <span className="text-xs text-gray-200">
                                {index === 0 && "GPA: 3.92/4.0"}
                                {index === 1 && "Species Documented"}
                                {index === 2 && "Featured Photos"}
                                {index === 3 && "NGO Partners"}
                                {index === 4 && "Global Exhibitions"}
                              </span>
                            </div>
                            
                            {/* Right Achievement Badge */}
                            <div className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full">
                              {index === 0 && "Honors Graduate"}
                              {index === 1 && "6 Month Expedition"}
                              {index === 2 && "2.3M Reach"}
                              {index === 3 && "16 Workshops"}
                              {index === 4 && "Environmental Award"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Custom CSS for Hexagonal Clip */}
          <style jsx>{`
            .clip-hex {
              clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
            }
            .perspective-1000 {
              perspective: 1000px;
            }
            .rotate-y-10:hover {
              transform: rotateY(10deg) scale(1.05);
            }
          `}</style>
        </div>
        
        {/* TABLET: Hybrid Timeline (not quite horizontal, not quite vertical) */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
            {timelineEvents.map((event, index) => (
              <div key={`tablet-${index}`} className="bg-background/20 backdrop-blur-sm rounded-xl border border-primary/20 shadow-lg overflow-hidden">
                {/* Header with year and icon */}
                <div className="flex items-center p-3 border-b border-primary/10 gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-primary bg-background/50 flex items-center justify-center">
                    {event.icon}
                  </div>
                  <div>
                    <span className="text-primary font-bold block">{event.year}</span>
                    <h3 className="font-bold text-sm">{event.title}</h3>
                  </div>
                </div>
                
                {/* Image */}
                <div className="h-36 relative overflow-hidden">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-3">
                  <p className="text-sm text-gray-300 line-clamp-3">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* MOBILE: Vertical Timeline with navigation */}
        <div className="md:hidden">
          {/* Current event display */}
          <div className="bg-background/20 backdrop-blur-sm rounded-xl border border-primary/20 shadow-lg overflow-hidden mb-6">
            {/* Image at top */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={timelineEvents[activeEvent].image}
                alt={timelineEvents[activeEvent].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 m-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white font-bold">
                {timelineEvents[activeEvent].year}
              </div>
            </div>
            
            {/* Content */}
            <div className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-full bg-primary/20">
                  {timelineEvents[activeEvent].icon}
                </div>
                <h3 className="text-xl font-bold">{timelineEvents[activeEvent].title}</h3>
              </div>
              <p className="text-gray-200">{timelineEvents[activeEvent].description}</p>
            </div>
          </div>
          
          {/* Timeline navigation */}
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={prevEvent} 
              disabled={activeEvent === 0}
              className={`p-2 rounded-full ${activeEvent === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/20'}`}
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>
            
            <div className="flex-1 px-4">
              <div className="relative h-2 bg-gray-700 rounded-full">
                <div 
                  className="absolute h-full bg-primary rounded-full"
                  style={{ width: `${(activeEvent / (timelineEvents.length - 1)) * 100}%` }}
                ></div>
                <div className="flex justify-between absolute -top-2 w-full">
                  {timelineEvents.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setActiveEvent(index)}
                      className={`w-6 h-6 rounded-full border-2 ${
                        activeEvent === index 
                          ? 'border-primary bg-background' 
                          : 'border-gray-600 bg-gray-800'
                      }`}
                      aria-label={`View event from ${timelineEvents[index].year}`}
                    >
                      {activeEvent === index && (
                        <span className="block w-2 h-2 bg-primary rounded-full mx-auto"></span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <button 
              onClick={nextEvent} 
              disabled={activeEvent === timelineEvents.length - 1}
              className={`p-2 rounded-full ${activeEvent === timelineEvents.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/20'}`}
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>
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
