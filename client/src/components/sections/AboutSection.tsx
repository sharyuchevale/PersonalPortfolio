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
        
        {/* DESKTOP: Creative Nature-Inspired Timeline */}
        <div className="hidden lg:block relative py-12 mt-8">
          <div className="max-w-6xl mx-auto">
            {/* Main timeline bar */}
            <div className="relative mb-16">
              {/* Main Path - Gradient Line */}
              <div className="relative h-8 flex items-center">
                <div className="absolute w-full h-4 bg-gradient-to-r from-emerald-800 via-primary to-teal-700 rounded-full"></div>
                <div className="absolute w-full h-1 bg-white/20 rounded-full mt-[-4px]"></div>
              </div>
              
              {/* Timeline markers */}
              <div className="absolute top-0 w-full flex justify-between">
                {timelineEvents.map((event, index) => (
                  <div key={`marker-${index}`} className="relative" style={{ left: `${(index * 25)}%` }}>
                    <div className="absolute top-0 w-16 h-16 rounded-full bg-primary/20 animate-pulse" style={{ 
                      left: '-32px',
                      top: '-4px', 
                      animationDuration: "3s" 
                    }}></div>
                    
                    <div className="absolute w-12 h-12 rounded-full border-4 border-primary bg-background flex items-center justify-center shadow-lg" style={{ 
                      left: '-24px',
                      top: '0px'
                    }}>
                      <span className="text-primary font-bold">{event.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Event cards in grid */}
            <div className="grid grid-cols-5 gap-6">
              {timelineEvents.map((event, index) => (
                <div key={`event-${index}`} className="group hover:scale-105 transition-all duration-300">
                  <div className="bg-black/40 rounded-xl overflow-hidden border border-primary/30 shadow-xl">
                    {/* Card image */}
                    <div className="relative h-48">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                      
                      {/* Icon badge */}
                      <div className="absolute top-3 right-3 p-2 rounded-full bg-primary shadow-lg">
                        {event.icon}
                      </div>
                      
                      {/* Title and location */}
                      <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-white text-lg font-bold">{event.title}</h3>
                        <div className="mt-1">
                          <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                            {index === 0 && "VNIT Nagpur, India"}
                            {index === 1 && "Amazon Rainforest"}
                            {index === 2 && "National Geographic"}
                            {index === 3 && "Global Initiative"}
                            {index === 4 && "Award Ceremony"}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card content */}
                    <div className="p-4">
                      <p className="text-sm text-gray-300 mb-4">{event.description}</p>
                      
                      {/* Stats */}
                      <div className="border-t border-primary/20 pt-3 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                            {index === 0 && <span className="text-xs text-primary font-bold">A+</span>}
                            {index === 1 && <span className="text-xs text-primary font-bold">47</span>}
                            {index === 2 && <span className="text-xs text-primary font-bold">12</span>}
                            {index === 3 && <span className="text-xs text-primary font-bold">5</span>}
                            {index === 4 && <span className="text-xs text-primary font-bold">7</span>}
                          </div>
                          <span className="text-xs text-gray-300">
                            {index === 0 && "GPA: 3.92/4.0"}
                            {index === 1 && "Species Documented"}
                            {index === 2 && "Featured Photos"}
                            {index === 3 && "NGO Partners"}
                            {index === 4 && "Exhibitions"}
                          </span>
                        </div>
                        
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                          {index === 0 && "Honors"}
                          {index === 1 && "6 Months"}
                          {index === 2 && "2.3M Reach"}
                          {index === 3 && "16 Workshops"}
                          {index === 4 && "Award"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
        

      </div>
    </section>
  );
}
