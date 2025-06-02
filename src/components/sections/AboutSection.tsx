import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  Building2, 
  School,
  Award,
  ChevronLeft,
  ChevronRight,
  ChevronDown
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
      year: "2025 - Present",
      title: {
        line1: "Full-Time",
        line2: "IT Business Consultant"
      },
      subtitle: "Hewlett Packard Enterprise",
      description: "Joining Hewlett Packard Enterprise as a full-time PREP through the HPE PREP rotational program, starting July.",
      icon: <Building2 className="w-6 h-6" />,
      image: fulltimeImage,
      imagePosition: "object-bottom"
    },
    {
      year: "2024",
      title: {
        line1: "Internship",
        line2: "Product Manager"
      },
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
      year: "2023-2025",
      title: {
        line1: "Masters",
        line2: "Management Information Systems"
      },
      subtitle: "Texas A&M",
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
      image: tamuImage,
      imagePosition: "rotate-[-90deg] origin-center transform-gpu"
    },
    {
      year: "2021-2023",
      title: {
        line1: "Full-Time",
        line2: "Technology Analyst"
      },
      subtitle: "Citibank",
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
      year: "2017-2021",
      title: {
        line1: "Bachelors",
        line2: "Electrical & Electronics Engineering"
      },
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
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Reset expanded card when section is out of view
  const handleViewportLeave = () => {
    setExpandedCard(null);
  };

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
    if (!touchStart) return;
    const currentTouch = e.touches[0].clientX;
    setTouchEnd(currentTouch);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50; // Minimum distance for swipe

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swiped left
        if (currentIndex < timelineEvents.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      } else {
        // Swiped right
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      }
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const getImagePosition = (index: number) => {
    const event = timelineEvents[index];
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

  // Enhanced swipe animation variants
  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 }
      }
    })
  };

  // Swipe direction state
  const [[page, direction], setPage] = useState([0, 0]);

  return (
    <section 
      id="about" 
      className="py-12 section-fade [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" 
      style={{ background: 'linear-gradient(120deg, #0f2e3d, #173a2d)' }}
    >
      <motion.div 
        className="container mx-auto px-8"
        onViewportLeave={handleViewportLeave}
      >
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
          <motion.div 
            className="relative max-w-[90rem] mx-auto"
            onViewportLeave={handleViewportLeave}
          >
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
                  onClick={() => handleCardClick(index)}
                  onViewportLeave={() => {
                    if (expandedCard === index) {
                      setExpandedCard(null);
                    }
                  }}
                >
                  {/* Card */}
                  <div className="relative">
                    {/* Main Card */}
                    <div className={`bg-black/40 backdrop-blur-sm border border-[#7EA046]/30 rounded-xl overflow-hidden 
                                  shadow-xl transition-all duration-500 ease-in-out transform 
                                  ${expandedCard === index ? 'translate-y-0 border-[#7EA046]/50 shadow-[0_8px_30px_rgba(126,160,70,0.15)]' : 'hover:-translate-y-2'} 
                                  min-h-[450px] h-full group cursor-pointer`}>
                      {/* Image Container - Fixed height */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title.line1}
                          className={`w-full h-full object-cover transform transition-all duration-700 ease-in-out
                                    ${event.subtitle === "Texas A&M" ? 'scale-[2] group-hover:scale-[2.2]' : 'group-hover:scale-110'} 
                                    ${getImagePosition(index)}`}
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

                        {/* Icon Badge - Added back */}
                        <div className="absolute top-4 left-4 p-2.5 rounded-full bg-[#7EA046]/20 backdrop-blur-sm
                                      transform transition-all duration-500 ease-in-out group-hover:scale-110
                                      border border-[#7EA046]/30 shadow-[0_0_10px_rgba(126,160,70,0.2)]">
                          {event.icon}
                        </div>
                      </div>

                      {/* Content - Flex grow to fill space */}
                      <div className="p-4 flex flex-col h-[calc(100%-12rem)] relative">
                        {/* Fixed height container for title and subtitle */}
                        <div className="mb-3">
                          <div className="space-y-0.5">
                            <h3 className={`text-white font-bold text-base transition-colors duration-500 ease-in-out
                                       ${expandedCard === index ? 'text-[#7EA046]' : ''}`}>
                              {event.title.line1}
                            </h3>
                            <h4 className={`text-white font-medium text-sm leading-tight transition-all duration-500 ease-in-out
                                       ${expandedCard === index ? 'text-[#7EA046]' : ''} 
                                       ${expandedCard === index ? '' : 'whitespace-nowrap overflow-hidden text-ellipsis'}`}>
                              {event.title.line2}
                            </h4>
                          </div>
                          <p style={{ color: '#7EA046' }} className={`text-sm mt-2 transition-opacity duration-500 ease-in-out
                                                            ${expandedCard === index ? 'opacity-100' : 'opacity-80'}`}>
                            {event.subtitle}
                          </p>
                        </div>

                        {/* Content Container with smooth height transition */}
                        <div className="relative flex-grow pb-12">
                          {/* Description - Always visible */}
                          <div className="mb-3">
                            <p className={`text-gray-300 text-sm leading-relaxed transition-all duration-500 ease-in-out
                                      ${expandedCard === index ? 'text-gray-200' : ''} 
                                      ${expandedCard === index ? '' : 'line-clamp-4'}`}>
                              {event.description}
                            </p>
                          </div>
                          
                          {/* Achievements/Projects Section - Hidden by default, shown on click */}
                          <motion.div 
                            className={`space-y-2 pt-3 border-t border-[#7EA046]/20
                                      ${expandedCard === index ? 'border-[#7EA046]/30' : ''}`}
                            initial={false}
                            animate={{
                              height: expandedCard === index ? 'auto' : 0,
                              opacity: expandedCard === index ? 1 : 0,
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 100,
                              damping: 20,
                              mass: 1
                            }}
                          >
                            <div className={expandedCard === index ? 'visible' : 'invisible'}>
                              {event.achievements?.map((achievement, i) => (
                                <div key={i} className="mb-2 last:mb-0">
                                  <h4 style={{ color: '#7EA046' }} className="text-sm font-semibold mb-1">
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
                                  <h4 style={{ color: '#7EA046' }} className="text-sm font-semibold mb-1">
                                    {project.title}
                                  </h4>
                                  <p className="text-gray-300 text-sm">{project.detail}</p>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        </div>

                        {/* Icon as expand/collapse indicator - Fixed position at bottom center */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4">
                          <motion.div 
                            className="p-2.5 rounded-full bg-[#7EA046]/20 transition-colors duration-500 
                                     ease-in-out hover:bg-[#7EA046]/30 cursor-pointer"
                            animate={{ rotate: expandedCard === index ? 180 : 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 200,
                              damping: 20
                            }}
                          >
                            <ChevronDown className="w-5 h-5 text-[#7EA046]" />
                          </motion.div>
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
          </motion.div>
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
                        alt={event.title.line1}
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          event.subtitle === "Texas A&M"
                          ? "md:rotate-[270deg] md:scale-[2.2] md:object-cover md:object-center md:group-hover:scale-[2.4] scale-[2.5]" 
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
                      <h3 className="text-white font-bold text-base mb-1 group-hover:text-[#7EA046] transition-colors">
                        {event.title.line1}
                      </h3>
                      <h4 className="text-white font-medium text-sm leading-tight mb-2 group-hover:text-[#7EA046] transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                        {event.title.line2}
                      </h4>
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
            <motion.div
                  key={index}
                  className={`w-3 h-3 rounded-full border-2 ${
                    index <= currentIndex 
                      ? 'bg-[#7EA046] border-[#7EA046]' 
                      : 'bg-transparent border-[#7EA046]/30'
                  }`}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    const direction = index > currentIndex ? 1 : -1;
                    setPage([index, direction]);
                    setCurrentIndex(index);
                  }}
                  variants={dotVariants}
                  animate="animate"
                  custom={index}
                />
              ))}
            </div>
          </div>

          <div 
            className="relative overflow-hidden touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
              <motion.div
                key={page}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  const threshold = 50000;

                  if (swipe < -threshold && currentIndex < timelineEvents.length - 1) {
                    setPage([currentIndex + 1, 1]);
                    setCurrentIndex(currentIndex + 1);
                  } else if (swipe > threshold && currentIndex > 0) {
                    setPage([currentIndex - 1, -1]);
                    setCurrentIndex(currentIndex - 1);
                  }
                }}
                className="w-full px-4"
              >
                {/* Card Content */}
                <motion.div
                  className="bg-black/40 backdrop-blur-sm border border-[#7EA046]/30 rounded-xl overflow-hidden 
                            shadow-xl transition-all duration-300"
                  layoutId={`card-${currentIndex}`}
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={timelineEvents[currentIndex].image}
                      alt={timelineEvents[currentIndex].title.line1}
                      className={`w-full h-full object-cover ${
                        timelineEvents[currentIndex].subtitle === "Texas A&M" 
                        ? "rotate-[270deg] scale-[2.8] object-center" 
                        : getImagePosition(currentIndex)
                      }`}
                      layoutId={`image-${currentIndex}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <motion.div 
                      className="absolute top-3 right-3 p-1.5 rounded-full bg-[#7EA046]/20"
                      layoutId={`icon-${currentIndex}`}
                    >
                      {timelineEvents[currentIndex].icon}
                    </motion.div>
                    <motion.div 
                      className="absolute bottom-3 left-3"
                      layoutId={`year-${currentIndex}`}
                    >
                      <span style={{ color: '#7EA046' }} className="text-sm font-bold">
                        {timelineEvents[currentIndex].year}
                      </span>
                    </motion.div>
                </div>

                  {/* Content */}
                  <div className="p-4">
                    <motion.h3 
                      className="text-white font-bold text-base leading-tight mb-1"
                      layoutId={`title-${currentIndex}`}
                    >
                      {timelineEvents[currentIndex].title.line1}
                    </motion.h3>
                    <motion.h4 
                      className="text-white font-medium text-sm leading-tight mb-1 whitespace-nowrap overflow-hidden text-ellipsis"
                      layoutId={`title-${currentIndex}-line2`}
                    >
                      {timelineEvents[currentIndex].title.line2}
                    </motion.h4>
                    <motion.p 
                      style={{ color: '#7EA046' }} 
                      className="text-sm opacity-80 mb-3"
                      layoutId={`subtitle-${currentIndex}`}
                    >
                      {timelineEvents[currentIndex].subtitle}
                    </motion.p>
                    <motion.p 
                      className="text-gray-300 text-sm leading-relaxed mb-4"
                      layoutId={`description-${currentIndex}`}
                    >
                      {timelineEvents[currentIndex].description}
                    </motion.p>
                    
                    {/* Achievements/Projects List */}
                    <motion.div 
                      className="space-y-2 pt-3 border-t border-[#7EA046]/20"
                      layoutId={`details-${currentIndex}`}
                    >
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
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
                </div>
              </div>
            </motion.div>
    </section>
  );
}
