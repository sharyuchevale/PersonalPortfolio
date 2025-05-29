import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  Building2, 
  School,
  Award,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import vnitCampus from "@/assets/optimized/optimized-vnit_campus.jpg";
import citiImage from "@/assets/optimized/optimized-citi.jpg";
import tamuImage from "@/assets/optimized/optimized-tamu.jpg";
import internshipImage from "@/assets/optimized/optimized-internship.jpg";
import fulltimeImage from "@/assets/optimized/optimized-fulltime.jpg";
import { useState } from "react";

export default function AboutSection() {
  // Timeline data
  const timelineEvents = [
    {
      year: "2017-2021",
      title: "Bachelor's in Electrical & Electronics Engineering",
      subtitle: "VNIT, Nagpur",
      description: "Studied electrical engineering with a focus on power systems and electronics, led research in DC microgrids and solar tech, and built leadership skills through campus involvement.",
      achievements: [
        {
          title: "Research Publication",
          detail: "Application of Z-Source Circuit Breaker in Solar PV based DC Microgrid",
          link: "https://ieeexplore.ieee.org/document/9670127"
        },
        {
          title: "MahaDBT Scholarship",
          detail: "Awarded Maharashtra Direct Benefit Transfer Scholarship (2018-2020)"
        }
      ],
      icon: <GraduationCap className="w-6 h-6" />,
      image: vnitCampus
    },
    {
      year: "2021-2023",
      title: "Technology Analyst - Fintech",
      subtitle: "Citi, Full-time",
      description: "Took fintech products from idea to launch—conducting market and user research, shaping product strategy, designing user experiences, leading development, and guiding releases to production",
      projects: [
        {
          title: "Broker Reconciliation Tool",
          detail: "Built full-stack web apps to automate financial reconciliation in commodities trading"
        },
        {
          title: "UI Testing Framework",
          detail: "Led product strategy to enhance and restructure automated UI testing application"
        },
        {
          title: "MSME Loan Provider",
          detail: "Developed an award-winning marketplace app enabling small businesses to easily process loans"
        }
      ],
      icon: <Building2 className="w-6 h-6" />,
      image: citiImage,
      imagePosition: "object-top"
    },
    {
      year: "2023-2025",
      title: "Master's in Management Information Systems",
      subtitle: "Texas A&M University",
      description: "Dived deep into the business and management side of products and organizations while building the technical skills needed to develop great products",
      achievements: [
        {
          title: "Academic Scholarship",
          detail: "Awarded TAMU Academic Scholarship (2023-24)"
        },
        {
          title: "Travel Award",
          detail: "Received TAMU Travel Award (2024-25)"
        },
        {
          title: "Graduate Assistant",
          detail: "Program Management role at Graduate Mentoring Academy",
          link: "https://gradconnect.tamu.edu/portal/gma?tab=facilitators"
        }
      ],
      icon: <GraduationCap className="w-6 h-6" />,
      image: tamuImage
    },
    {
      year: "2024",
      title: "Product Manager Intern",
      subtitle: "Hewlett Packard Enterprise",
      description: "Worked on Projects in the Global IT organization that support the backend administration of aaS offering at HPE",
      projects: [
        {
          title: "HPE Long Term Strategic Planning",
          detail: "Strategic organization-wide project planning for Fiscal Year 2025"
        },
        {
          title: "Data & Analytics Platform Migration",
          detail: "Managed data reporting platform migration initiatives as part of M&A"
        }
      ],
      icon: <Briefcase className="w-6 h-6" />,
      image: internshipImage
    },
    {
      year: "2025 - Present",
      title: "IT Business Consultant",
      subtitle: "Hewlett Packard Enterprise",
      description: "Joining Hewlett Packard Enterprise as a full-time PREP through the HPE PREP rotational program, starting July.",
      icon: <Building2 className="w-6 h-6" />,
      image: fulltimeImage,
      imagePosition: "object-bottom"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex === 0 ? timelineEvents.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex === timelineEvents.length - 1 ? 0 : prevIndex + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const getImagePosition = (index: number) => {
    const event = timelineEvents[index];
    if (event.title === "Master's in Management Information Systems") {
      return "rotate-[270deg] scale-[2.2] origin-center"; // Corrected rotation and increased zoom
    }
    return event.imagePosition || 'object-center';
  };

  const dotVariants: Variants = {
    animate: (index: number) => ({
      scale: [1, 1.1, 1], // More subtle scale animation
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop" as const,
        repeatDelay: index * 0.1
      }
    })
  };

  // Card animation variants
  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  // Swipe direction state
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection;
    if (newPage >= 0 && newPage < timelineEvents.length) {
      setPage([newPage, newDirection]);
      setCurrentIndex(newPage);
    }
  };

  return (
    <section 
      id="about" 
      className="py-12 section-fade [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" 
      style={{ background: 'linear-gradient(120deg, #0f2e3d, #173a2d)' }}
    >
      <div className="container mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-lg font-medium mb-2" style={{ color: '#7EA046' }}>The Road Behind, the Road Ahead</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white">My Journey</h2>
        </motion.div>

        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden lg:block">
          <div className="relative max-w-[90rem] mx-auto">
            {/* Horizontal Line with Gradient - Positioned at top */}
            <div className="absolute top-0 left-0 right-0 px-4">
              {/* Main Timeline Line */}
              <div className="relative">
                {/* Enhanced Glowing Line Effect */}
                <div className="absolute inset-0 h-0.5 bg-[#7EA046]/20 blur-sm"></div>
                <div className="h-[1px] bg-gradient-to-r from-[#7EA046]/50 via-[#7EA046] to-[#7EA046]/50 
                              shadow-[0_0_8px_rgba(126,160,70,0.3)]"></div>
                
                {/* Animated Particle */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                  <div className="w-2 h-2 bg-[#7EA046] rounded-full animate-ping"></div>
                  <div className="w-2 h-2 bg-[#7EA046]/50 rounded-full absolute top-0"></div>
                </div>

                {/* Timeline Dots - One for each event */}
                <div className="absolute inset-0 flex justify-between items-center">
                  {timelineEvents.map((event, index) => (
                    <div key={index} className="relative group">
                      <div className="w-2 h-2 bg-[#7EA046] rounded-full shadow-[0_0_6px_rgba(126,160,70,0.4)]"></div>
                      <div className="w-3 h-3 bg-[#7EA046]/20 rounded-full absolute top-1/2 left-1/2 
                                    -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm 
                                    border border-[#7EA046]/20 text-white px-2 py-1 rounded-full text-xs 
                                    font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 
                                    whitespace-nowrap shadow-lg">
                        {event.year}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-6 pt-8">
              {timelineEvents.slice(0, 5).map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="w-[calc(20%-1rem)]"
                >
                  {/* Card */}
                  <div className="relative">
                    {/* Main Card */}
                    <div className="bg-black/40 backdrop-blur-sm border border-[#7EA046]/30 rounded-xl overflow-hidden 
                                  shadow-xl transition-all duration-1000 ease-in-out transform hover:-translate-y-2 
                                  hover:shadow-[0_8px_30px_rgba(126,160,70,0.15)] hover:border-[#7EA046]/50 
                                  min-h-[450px] h-full group">
                      {/* Image Container - Fixed height */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className={`w-full h-full object-cover transform transition-all duration-1000 ease-in-out
                                    group-hover:scale-105 ${event.imagePosition || 'object-center'}`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent 
                                      group-hover:via-black/30 transition-all duration-700 ease-in-out"></div>
                        
                        {/* Year Badge */}
                        <div className="absolute top-4 right-4 bg-[#7EA046]/90 text-white px-3 py-1 rounded-full 
                                      text-sm font-bold backdrop-blur-sm transform group-hover:scale-110 
                                      transition-all duration-500 ease-in-out shadow-[0_0_10px_rgba(126,160,70,0.3)]
                                      hover:shadow-[0_0_15px_rgba(126,160,70,0.4)]">
                          {event.year}
                        </div>
                      </div>

                      {/* Content - Flex grow to fill space */}
                      <div className="p-4 flex flex-col h-[calc(100%-12rem)]">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="p-2 rounded-full bg-[#7EA046]/20 transform group-hover:rotate-12 
                                        transition-all duration-700 ease-in-out group-hover:bg-[#7EA046]/30
                                        group-hover:scale-110">
                            {event.icon}
                          </div>
                          <div>
                            <h3 className="text-white font-bold text-lg leading-tight mb-1 
                                         group-hover:text-[#7EA046] transition-colors duration-500 ease-in-out">
                              {event.title}
                            </h3>
                            <p style={{ color: '#7EA046' }} className="text-sm opacity-80 transition-opacity duration-500 ease-in-out 
                                                                      group-hover:opacity-100">{event.subtitle}</p>
                          </div>
                        </div>

                        {/* Content Container with smooth height transition */}
                        <div className="relative">
                          {/* Description - Always visible */}
                          <div className="mb-3">
                            <p className="text-gray-300 text-sm leading-relaxed transition-all duration-700 ease-in-out
                                        transform group-hover:text-gray-200 line-clamp-3 group-hover:line-clamp-none">
                              {event.description}
                            </p>
                          </div>
                          
                          {/* Achievements/Projects Section - Hidden by default, shown on hover */}
                          <div className="space-y-2 pt-2 border-t border-[#7EA046]/20 transition-all duration-1000 ease-out
                                        group-hover:border-[#7EA046]/30 max-h-0 overflow-hidden opacity-0 
                                        group-hover:max-h-[800px] group-hover:opacity-100 transform translate-y-4
                                        group-hover:translate-y-0 origin-top">
                            {event.achievements?.map((achievement, i) => (
                              <div key={i} className="mb-2 last:mb-0">
                                <h4 style={{ color: '#7EA046' }} className="text-sm font-semibold mb-0.5">
                                  {achievement.title}
                                </h4>
                                {achievement.link ? (
                                  <a 
                                    href={achievement.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-gray-300 text-sm hover:text-[#7EA046] transition-colors duration-300 underline"
                                  >
                                    {achievement.detail}
                                  </a>
                                ) : (
                                  <p className="text-gray-300 text-sm">{achievement.detail}</p>
                                )}
                              </div>
                            ))}
                            {event.projects?.map((project, i) => (
                              <div key={i} className="mb-2 last:mb-0">
                                <h4 style={{ color: '#7EA046' }} className="text-sm font-semibold mb-0.5">
                                  {project.title}
                                </h4>
                                <p className="text-gray-300 text-sm">{project.detail}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Point with Connection - Adjusted for top line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[0.5rem]">
                      <div className="relative">
                        {/* Vertical Connection Line */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-8 w-px bg-gradient-to-t from-[#7EA046] to-transparent"></div>
                        
                        {/* Point */}
                        <div className="relative">
                          <div className="w-3 h-3 bg-[#7EA046] rounded-full relative z-10 shadow-[0_0_6px_rgba(126,160,70,0.4)]"></div>
                          <div className="w-5 h-5 bg-[#7EA046]/20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Tablet Timeline (Vertical) */}
        <div className="hidden md:block lg:hidden">
          <div className="relative max-w-2xl mx-auto px-4">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#7EA046]/20 via-[#7EA046] to-[#7EA046]/20"></div>

            {timelineEvents.slice(0, 5).map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-16 mb-12 last:mb-0"
              >
                {/* Timeline Icon Badge */}
                <div className="absolute left-0 top-[120px] z-10">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.1, rotate: 12 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon Badge */}
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7EA046] to-[#7EA046]/70 
                                  flex items-center justify-center relative z-10 
                                  shadow-[0_0_10px_rgba(126,160,70,0.3)] border border-[#7EA046]/30">
                      <div className="w-6 h-6 text-white/90">
                        {event.icon}
                      </div>
                    </div>
                    {/* Glowing Effect */}
                    <div className="absolute inset-0 w-10 h-10 -translate-x-1 -translate-y-1 
                                  bg-[#7EA046]/10 rounded-full animate-pulse"></div>
                  </motion.div>
                </div>

                {/* Year Badge */}
                <div className="absolute left-16 top-0 bg-[#7EA046]/10 backdrop-blur-sm border border-[#7EA046]/30 
                              px-3 py-1 rounded-full text-sm text-white">
                  {event.year}
                </div>

                {/* Content Card */}
                <div className="bg-black/40 backdrop-blur-sm border border-[#7EA046]/30 rounded-xl overflow-hidden 
                              mt-8 transition-all duration-300 hover:border-[#7EA046]/50 
                              hover:shadow-[0_8px_30px_rgba(126,160,70,0.15)] group">
                  <div className="flex">
                    {/* Image Section */}
                    <div className="w-1/3 relative overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          event.title === "Master's in Management Information Systems" 
                          ? "md:rotate-[270deg] md:scale-[2.2] md:object-cover md:object-[45%_center] md:group-hover:scale-[2.4]" 
                          : `group-hover:scale-110 ${event.imagePosition || 'object-center'}`
                        }`}
                        style={{ minHeight: '200px' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                      <div className="absolute top-3 left-3 p-2 rounded-full bg-[#7EA046]/20 backdrop-blur-sm">
                        {event.icon}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-2/3 p-4">
                      <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#7EA046] transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-[#7EA046] text-sm mb-2">{event.subtitle}</p>
                      <p className="text-gray-300 text-sm leading-relaxed mb-3">{event.description}</p>

                      {/* Achievements/Projects */}
                      {(event.achievements || event.projects) && (
                        <div className="border-t border-[#7EA046]/20 pt-3 mt-3">
                          <div className="grid grid-cols-2 gap-3">
                            {event.achievements?.map((achievement, i) => (
                              <div key={i} className="group/item">
                                <h4 className="text-[#7EA046] text-sm font-medium mb-1">
                                  {achievement.title}
                                </h4>
                                {achievement.link ? (
                                  <a 
                                    href={achievement.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-gray-400 text-xs hover:text-[#7EA046] transition-colors underline"
                                  >
                                    {achievement.detail}
                                  </a>
                                ) : (
                                  <p className="text-gray-400 text-xs">{achievement.detail}</p>
                                )}
                              </div>
                            ))}
                            {event.projects?.map((project, i) => (
                              <div key={i} className="group/item">
                                <h4 className="text-[#7EA046] text-sm font-medium mb-1">
                                  {project.title}
                                </h4>
                                <p className="text-gray-400 text-xs">{project.detail}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline (Swipeable Cards) */}
        <div className="block md:hidden">
          {/* Progress Bar and Dots Container */}
          <div className="relative w-full h-8 mb-6 flex items-center">
            {/* Progress Bar */}
            <div className="absolute left-[2%] right-[2%] h-[2px] bg-[#7EA046]/20">
              <motion.div 
                className="h-full bg-[#7EA046]"
                initial={{ width: '20%' }}
                animate={{ width: `${((currentIndex + 1) / timelineEvents.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Dots Container - positioned relative to the bar */}
            <div className="absolute left-[2%] right-[2%] flex justify-between items-center">
              {timelineEvents.map((_, index) => (
                <div key={index} className="relative">
                  <motion.div
                    className={`w-3 h-3 rounded-full border-2 ${
                      index <= currentIndex 
                        ? 'bg-[#7EA046] border-[#7EA046]' 
                        : 'bg-transparent border-[#7EA046]/30'
                    }`}
                    variants={dotVariants}
                    animate="animate"
                    custom={index}
                  />
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-[#7EA046]/20 rounded-full blur-md -z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div 
            className="relative overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="w-full"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;

                  if (swipe < -10000) {
                    paginate(1);
                  } else if (swipe > 10000) {
                    paginate(-1);
                  }
                }}
              >
                {/* Card Content */}
                <div className="bg-black/40 backdrop-blur-sm border border-[#7EA046]/30 rounded-xl overflow-hidden 
                              shadow-xl transition-all duration-1000 ease-in-out mx-4">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={timelineEvents[currentIndex].image}
                      alt={timelineEvents[currentIndex].title}
                      className={`w-full h-full object-cover ${getImagePosition(currentIndex)}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-3 right-3 p-1.5 rounded-full bg-[#7EA046]/20">
                      {timelineEvents[currentIndex].icon}
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span style={{ color: '#7EA046' }} className="text-sm font-bold">{timelineEvents[currentIndex].year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-white font-bold text-lg leading-tight mb-1">
                      {timelineEvents[currentIndex].title}
                    </h3>
                    <p style={{ color: '#7EA046' }} className="text-sm opacity-80 mb-3">
                      {timelineEvents[currentIndex].subtitle}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {timelineEvents[currentIndex].description}
                    </p>
                    
                    {/* Achievements/Projects List */}
                    <div className="space-y-2 pt-3 border-t border-[#7EA046]/20">
                      {timelineEvents[currentIndex].achievements?.map((achievement, idx) => (
                        <div key={idx} className="mb-2 last:mb-0">
                          <h4 style={{ color: '#7EA046' }} className="text-sm font-semibold mb-0.5">
                            {achievement.title}
                          </h4>
                          {achievement.link ? (
                            <a 
                              href={achievement.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="text-gray-300 text-xs hover:text-[#7EA046] transition-colors duration-300 underline"
                            >
                              {achievement.detail}
                            </a>
                          ) : (
                            <p className="text-gray-300 text-xs">{achievement.detail}</p>
                          )}
                        </div>
                      ))}
                      {timelineEvents[currentIndex].projects?.map((project, idx) => (
                        <div key={idx} className="mb-2 last:mb-0">
                          <h4 style={{ color: '#7EA046' }} className="text-sm font-semibold mb-0.5">
                            {project.title}
                          </h4>
                          <p className="text-gray-300 text-xs">{project.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
