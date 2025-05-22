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
        
        {/* DESKTOP: Enhanced Creative Horizontal Timeline */}
        <div className="hidden lg:block relative max-w-6xl mx-auto mb-20">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent top-[110px] z-0"></div>
            {/* Decorative circles */}
            {[...Array(8)].map((_, i) => (
              <div 
                key={`circle-${i}`}
                className="absolute rounded-full bg-primary/5 z-0"
                style={{
                  width: `${Math.random() * 60 + 20}px`,
                  height: `${Math.random() * 60 + 20}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 300 + 50}px`,
                  opacity: Math.random() * 0.5 + 0.1,
                  animationDuration: `${Math.random() * 10 + 10}s`,
                }}
              ></div>
            ))}
          </div>
          
          {/* The journey path line with gradient */}
          <div className="relative">
            <div className="absolute h-[6px] bg-gradient-to-r from-emerald-500/40 via-primary/60 to-teal-500/40 w-[110%] -left-[5%] top-[110px] shadow-xl rounded-full"></div>
            <div className="absolute h-1 bg-white/30 w-[108%] -left-[4%] top-[113px] shadow-inner rounded-full"></div>
            
            {/* Path decorations */}
            <div className="absolute w-full top-[95px]">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={`dot-${i}`}
                  className="absolute rounded-full bg-white/60 h-[3px] w-[3px]"
                  style={{ left: `${i * 5 + 2}%` }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Timeline markers and cards */}
          <div className="flex justify-between relative">
            {timelineEvents.map((event, index) => (
              <div 
                key={`desktop-${index}`} 
                className="relative px-3" 
                style={{ width: `${100 / timelineEvents.length}%` }}
              >
                {/* Connection lines to main path */}
                <div 
                  className={`absolute left-1/2 w-[3px] ${index % 2 === 0 ? 'bg-gradient-to-b' : 'bg-gradient-to-t'} from-primary/80 to-transparent`}
                  style={{ 
                    height: index % 2 === 0 ? '60px' : '20px', 
                    top: index % 2 === 0 ? '120px' : '50px',
                    transform: 'translateX(-50%)',
                  }}
                ></div>
                
                {/* Year marker with pulse effect */}
                <div className="flex flex-col items-center">
                  <div className={`relative my-4 ${index % 2 === 0 ? 'mt-32' : 'mb-2'}`}>
                    {/* Pulse animation rings */}
                    <div className="absolute inset-0 rounded-full animate-ping bg-primary/30 z-0" style={{ animationDuration: '3s' }}></div>
                    <div className="absolute inset-[-4px] rounded-full animate-ping bg-primary/20 z-0" style={{ animationDuration: '4s' }}></div>
                    
                    {/* Main year bubble */}
                    <div className="relative flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full border-4 border-primary bg-background/90 flex items-center justify-center z-10 shadow-lg">
                        {event.icon}
                        <span className="absolute -bottom-8 text-xl font-bold bg-background/90 px-3 py-1 rounded-full border border-primary/30">
                          {event.year}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content card with enhanced visuals */}
                  <div className={`${index % 2 === 0 ? '-mt-8' : 'mt-14'} w-full`}>
                    <div className="group bg-background/20 backdrop-blur-sm rounded-xl border border-primary/20 shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary/50">
                      {/* Enhanced image section */}
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-60 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 w-full">
                          <h3 className="text-white text-xl font-bold">{event.title}</h3>
                          
                          {/* Location tag if we add it */}
                          {index === 0 && (
                            <div className="flex items-center mt-1">
                              <div className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">
                                VNIT Nagpur, India
                              </div>
                            </div>
                          )}
                          {index === 1 && (
                            <div className="flex items-center mt-1">
                              <div className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">
                                Amazon Rainforest, Brazil
                              </div>
                            </div>
                          )}
                          {index === 2 && (
                            <div className="flex items-center mt-1">
                              <div className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">
                                Publication Feature
                              </div>
                            </div>
                          )}
                          {index === 3 && (
                            <div className="flex items-center mt-1">
                              <div className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">
                                Global Initiative
                              </div>
                            </div>
                          )}
                          {index === 4 && (
                            <div className="flex items-center mt-1">
                              <div className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">
                                International Recognition
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Enhanced content section */}
                      <div className="p-4">
                        <p className="text-sm text-gray-200 mb-3">{event.description}</p>
                        
                        {/* Tags for each event */}
                        <div className="flex flex-wrap gap-2 mt-2">
                          {index === 0 && (
                            <>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Electrical Engineering</span>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Bachelor's Degree</span>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Academic</span>
                            </>
                          )}
                          {index === 1 && (
                            <>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Conservation</span>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Field Work</span>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Biodiversity</span>
                            </>
                          )}
                          {index === 2 && (
                            <>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">National Geographic</span>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Photography</span>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Old-growth Forests</span>
                            </>
                          )}
                          {index === 3 && (
                            <>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">NGO Partnership</span>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Visual Storytelling</span>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Awareness</span>
                            </>
                          )}
                          {index === 4 && (
                            <>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Award Winner</span>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Climate Change</span>
                              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Coastal Communities</span>
                            </>
                          )}
                        </div>
                        
                        {/* Additional metrics/stats specific to each event */}
                        <div className="mt-3 pt-3 border-t border-white/10">
                          {index === 0 && (
                            <div className="flex justify-between text-xs text-gray-300">
                              <span>GPA: 3.92/4.0</span>
                              <span>Graduated with Honors</span>
                            </div>
                          )}
                          {index === 1 && (
                            <div className="flex justify-between text-xs text-gray-300">
                              <span>Duration: 6 months</span>
                              <span>Species documented: 47</span>
                            </div>
                          )}
                          {index === 2 && (
                            <div className="flex justify-between text-xs text-gray-300">
                              <span>Featured photos: 12</span>
                              <span>Publication reach: 2.3M</span>
                            </div>
                          )}
                          {index === 3 && (
                            <div className="flex justify-between text-xs text-gray-300">
                              <span>NGO partners: 5</span>
                              <span>Workshops conducted: 16</span>
                            </div>
                          )}
                          {index === 4 && (
                            <div className="flex justify-between text-xs text-gray-300">
                              <span>Global competition entries: 3,827</span>
                              <span>Exhibition locations: 7</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
