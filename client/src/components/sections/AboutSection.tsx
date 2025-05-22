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
        
        {/* DESKTOP: Enhanced Horizontal Timeline with Visual Journey */}
        <div className="hidden lg:block relative mx-auto mb-12 mt-10">
          <div className="relative max-w-6xl mx-auto">
            {/* Main Timeline Track */}
            <div className="relative h-[400px]">
              {/* The Main Journey Line - Wavy Pattern */}
              <div className="absolute top-[180px] left-0 right-0 h-[8px] bg-primary/40 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/60 via-primary to-teal-500/60"></div>
                <div className="absolute inset-y-0 left-0 right-0 bg-white/10 h-[2px] top-[3px]"></div>
              </div>
              
              {/* Timeline Markers and Event Cards */}
              <div className="relative flex justify-between">
                {timelineEvents.map((event, index) => {
                  const offsetY = index % 2 === 0 ? -80 : 80; // Alternate above/below
                  const basePosition = 180; // Baseline position (center of timeline)
                  
                  return (
                    <div key={index} className="relative mx-2" style={{ width: `${90 / timelineEvents.length}%` }}>
                      {/* Timeline Circle Marker */}
                      <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: `${basePosition - 16}px` }}>
                        <div className="relative">
                          {/* Pulse animation */}
                          <div className="absolute w-10 h-10 rounded-full bg-primary/30 animate-ping"></div>
                          
                          {/* Main marker */}
                          <div className="relative w-8 h-8 rounded-full border-4 border-primary bg-background flex items-center justify-center z-20">
                            <span className="text-primary font-bold text-xs">{event.year}</span>
                          </div>
                          
                          {/* Vertical connection line to content */}
                          <div 
                            className="absolute left-1/2 w-[3px] bg-primary/50 -translate-x-1/2" 
                            style={{ 
                              height: `${Math.abs(offsetY)}px`, 
                              top: offsetY > 0 ? '32px' : `${-Math.abs(offsetY)}px` 
                            }}
                          ></div>
                        </div>
                      </div>
                      
                      {/* Event Card - Alternating Position */}
                      <div 
                        className="absolute w-full left-1/2 transform -translate-x-1/2" 
                        style={{ top: `${basePosition + offsetY - (offsetY > 0 ? 160 : 0)}px` }}
                      >
                        <div className="bg-background/40 backdrop-blur-sm border border-primary/30 rounded-xl overflow-hidden shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105">
                          {/* Card Header with Image */}
                          <div className="relative h-32 overflow-hidden">
                            <img 
                              src={event.image} 
                              alt={event.title} 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            
                            {/* Icon Badge */}
                            <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                              {event.icon}
                            </div>
                            
                            <div className="absolute bottom-0 left-0 p-3">
                              <h3 className="text-white font-bold">{event.title}</h3>
                              
                              {/* Location Badge */}
                              <div className="mt-1 inline-flex bg-white/20 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">
                                {index === 0 && "VNIT Nagpur, India"}
                                {index === 1 && "Amazon, Brazil"}
                                {index === 2 && "National Geographic"}
                                {index === 3 && "Global Initiative"}
                                {index === 4 && "International Award"}
                              </div>
                            </div>
                          </div>
                          
                          {/* Card Content */}
                          <div className="p-3">
                            <p className="text-sm text-gray-300 mb-3">{event.description}</p>
                            
                            {/* Achievement Tags */}
                            <div className="flex flex-wrap gap-1 mt-2">
                              {index === 0 && (
                                <>
                                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Engineering</span>
                                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">GPA: 3.92</span>
                                </>
                              )}
                              {index === 1 && (
                                <>
                                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">47 Species</span>
                                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">6 Month Expedition</span>
                                </>
                              )}
                              {index === 2 && (
                                <>
                                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Publication</span>
                                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">2.3M Reach</span>
                                </>
                              )}
                              {index === 3 && (
                                <>
                                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Conservation</span>
                                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">5 NGO Partners</span>
                                </>
                              )}
                              {index === 4 && (
                                <>
                                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Award Winner</span>
                                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">7 Exhibitions</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Extra Timeline Decorations - Dotted lines along the main path */}
              <div className="absolute top-[184px] left-0 right-0">
                {[...Array(40)].map((_, i) => (
                  <div 
                    key={`dot-${i}`} 
                    className="absolute w-1 h-1 bg-white/60 rounded-full"
                    style={{ left: `${(i * 2.5) + 1}%` }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Year markers at the bottom */}
            <div className="flex justify-between px-10 mt-4">
              {timelineEvents.map((event, index) => (
                <div key={`year-${index}`} className="text-center">
                  <div className="h-8 w-[1px] bg-primary/40 mx-auto mb-2"></div>
                  <div className="bg-primary/20 px-3 py-1 rounded-full">
                    <span className="font-bold text-white">{event.year}</span>
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
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
            Download Complete Timeline <Download className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
