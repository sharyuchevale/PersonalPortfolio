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
        
        {/* DESKTOP: Flowing Visual Journey Timeline */}
        <div className="hidden lg:block relative mx-auto mb-20 mt-10 overflow-hidden">
          {/* Dynamic Background */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute w-full h-[600px] bg-gradient-to-b from-emerald-900/10 to-transparent opacity-30"></div>
          </div>
          
          {/* Timeline container */}
          <div className="relative max-w-6xl mx-auto h-[550px]">
            {/* Main journey path - curved SVG path */}
            <svg className="absolute w-full h-[400px] top-0" viewBox="0 0 1200 400" fill="none" preserveAspectRatio="none">
              {/* Background glow */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="10" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              
              {/* Decorative grid lines */}
              <g className="opacity-10">
                {[...Array(10)].map((_, i) => (
                  <line 
                    key={`vline-${i}`} 
                    x1={120 * i} 
                    y1="0" 
                    x2={120 * i} 
                    y2="400" 
                    stroke="#ffffff" 
                    strokeWidth="1" 
                    strokeDasharray="5,5"
                  />
                ))}
                {[...Array(5)].map((_, i) => (
                  <line 
                    key={`hline-${i}`} 
                    x1="0" 
                    y1={80 * i} 
                    x2="1200" 
                    y2={80 * i} 
                    stroke="#ffffff" 
                    strokeWidth="1" 
                    strokeDasharray="5,5"
                  />
                ))}
              </g>
              
              {/* Timeline main path */}
              <path 
                d="M0,200 C300,100 500,300 700,150 S1000,250 1200,200" 
                stroke="url(#gradient)" 
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
                filter="url(#glow)"
              />
              
              {/* Gradient definition */}
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2D5F3E" />
                <stop offset="30%" stopColor="#7EA046" />
                <stop offset="70%" stopColor="#7EA046" />
                <stop offset="100%" stopColor="#4A7A34" />
              </linearGradient>
              
              {/* Timeline dots with connecting lines */}
              {timelineEvents.map((_, index) => {
                const xPos = 240 * index + 75;
                const yPos = index % 2 === 0 ? 
                             (index === 0 ? 200 : index === 2 ? 150 : 220) : 
                             (index === 1 ? 100 : 170);
                             
                return (
                  <g key={`path-point-${index}`}>
                    <circle cx={xPos} cy={yPos} r="8" fill="#7EA046" />
                    <circle cx={xPos} cy={yPos} r="4" fill="white" />
                    
                    {/* Year label */}
                    <text 
                      x={xPos} 
                      y={yPos - 20} 
                      fill="white" 
                      fontSize="16" 
                      fontWeight="bold" 
                      textAnchor="middle"
                    >
                      {timelineEvents[index].year}
                    </text>
                  </g>
                );
              })}
            </svg>
            
            {/* Year Events with Images and Details */}
            <div className="relative pt-[50px] flex justify-between px-5">
              {timelineEvents.map((event, index) => {
                // Calculate different positions based on index for visual variety
                const topPosition = index % 2 === 0 ? 
                                    (index === 0 ? '140px' : index === 2 ? '100px' : '160px') : 
                                    (index === 1 ? '50px' : '120px');
                
                return (
                  <div 
                    key={`event-${index}`} 
                    className="relative"
                    style={{ 
                      width: '200px', 
                      top: topPosition,
                    }}
                  >
                    {/* Connecting vertical line */}
                    <div 
                      className="absolute left-1/2 w-[2px] bg-gradient-to-b from-primary to-transparent h-20 -top-[40px]"
                      style={{ transform: 'translateX(-50%)' }}
                    ></div>
                    
                    {/* Event content */}
                    <div className="transform transition-all duration-300 hover:scale-105 hover:z-50">
                      {/* Image */}
                      <div className="relative w-full h-36 rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Image overlay with icon */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                          <div className="absolute bottom-0 left-0 p-3 flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center shadow-inner">
                              {event.icon}
                            </div>
                            <div>
                              <h3 className="text-white font-bold text-sm">{event.title}</h3>
                              
                              {/* Location tag based on index */}
                              <div className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm mt-1 inline-block">
                                {index === 0 && "VNIT Nagpur, India"}
                                {index === 1 && "Amazon, Brazil"}
                                {index === 2 && "Feature Publication"}
                                {index === 3 && "Global Initiative"}
                                {index === 4 && "Award Ceremony"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content details with pop-up effect */}
                      <div className="relative bg-background/30 backdrop-blur-md rounded-lg p-3 shadow-lg border border-primary/30 -mt-6 mx-3 z-10">
                        <p className="text-xs text-gray-200 line-clamp-3">{event.description}</p>
                        
                        {/* Achievement highlights based on index */}
                        <div className="mt-2 pt-2 border-t border-primary/20">
                          <div className="flex justify-between items-center">
                            {index === 0 && (
                              <>
                                <span className="text-xs text-primary/80">GPA: 3.92/4.0</span>
                                <span className="text-xs bg-primary/20 text-primary px-1.5 py-0.5 rounded-full">Honors</span>
                              </>
                            )}
                            {index === 1 && (
                              <>
                                <span className="text-xs text-primary/80">47 Species</span>
                                <span className="text-xs bg-primary/20 text-primary px-1.5 py-0.5 rounded-full">6 Months</span>
                              </>
                            )}
                            {index === 2 && (
                              <>
                                <span className="text-xs text-primary/80">12 Photos</span>
                                <span className="text-xs bg-primary/20 text-primary px-1.5 py-0.5 rounded-full">2.3M Reach</span>
                              </>
                            )}
                            {index === 3 && (
                              <>
                                <span className="text-xs text-primary/80">5 NGO Partners</span>
                                <span className="text-xs bg-primary/20 text-primary px-1.5 py-0.5 rounded-full">16 Workshops</span>
                              </>
                            )}
                            {index === 4 && (
                              <>
                                <span className="text-xs text-primary/80">7 Exhibitions</span>
                                <span className="text-xs bg-primary/20 text-primary px-1.5 py-0.5 rounded-full">Global Award</span>
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
            
            {/* Timeline year markers along the bottom */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-16">
              {timelineEvents.map((event, index) => (
                <div key={`year-marker-${index}`} className="text-center">
                  <div className="relative">
                    <div className="h-12 w-[2px] bg-primary/30 mx-auto"></div>
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                  </div>
                  <div className="mt-2 bg-background/40 backdrop-blur-sm px-3 py-1 rounded-full border border-primary/20">
                    <span className="text-white font-bold">{event.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Decorative elements - stars/dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div 
                key={`star-${i}`}
                className="absolute rounded-full bg-white/60"
                style={{
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.7 + 0.3,
                }}
              ></div>
            ))}
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
