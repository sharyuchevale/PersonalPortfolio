import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  Building2, 
  School,
  Award
} from "lucide-react";
import vnitCampus from "@/assets/vnit_campus.jpg";
import citiImage from "@/assets/citi.jpg";
import tamuImage from "@/assets/tamu.jpg";
import internshipImage from "@/assets/internship.jpg";
import fulltimeImage from "@/assets/fulltime.jpg";

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
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#7EA046] via-[#7EA046] to-[#7EA046]"></div>

            {timelineEvents.slice(0, 5).map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-center gap-8 mb-16"
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'order-1' : 'order-3'}`}>
                  <div className="bg-black/40 backdrop-blur-sm border border-[#7EA046]/30 rounded-xl overflow-hidden shadow-xl group
                                min-h-[350px] h-full">
                    {/* Image Container - Fixed height */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                      <div className="absolute top-3 right-3 p-1.5 rounded-full bg-[#7EA046]/20">
                        {event.icon}
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span style={{ color: '#7EA046' }} className="font-bold">{event.year}</span>
                      </div>
                    </div>

                    {/* Content - Flex grow to fill space */}
                    <div className="p-3 flex flex-col h-[calc(100%-10rem)]">
                      <h3 className="text-white font-bold text-sm mb-0.5">{event.title}</h3>
                      <p style={{ color: '#7EA046' }} className="text-xs mb-2">{event.subtitle}</p>

                      <div className="relative overflow-hidden transition-all duration-300 group-hover:max-h-[500px] max-h-[60px]">
                        <p className="text-gray-300 text-xs leading-relaxed mb-2">{event.description}</p>
                        
                        {(event.achievements || event.projects) && (
                          <div className="mt-2 pt-2 border-t border-[#7EA046]/20">
                            {event.achievements?.map((achievement, i) => (
                              <div key={i} className="mb-1.5 last:mb-0">
                                <h4 style={{ color: '#7EA046' }} className="text-xs font-semibold mb-0.5">
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
                            {event.projects?.map((project, i) => (
                              <div key={i} className="mb-1.5 last:mb-0">
                                <h4 style={{ color: '#7EA046' }} className="text-xs font-semibold mb-0.5">
                                  {project.title}
                                </h4>
                                <p className="text-gray-300 text-xs">{project.detail}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black/40 to-transparent group-hover:opacity-0 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Center Point */}
                <div className="w-4 h-4 bg-[#7EA046] rounded-full order-2 relative">
                  <div className="absolute inset-0 bg-[#7EA046] rounded-full animate-ping opacity-25"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6 px-4">
          {timelineEvents.slice(0, 5).map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-black/40 backdrop-blur-sm border border-[#7EA046]/30 rounded-xl overflow-hidden shadow-xl group
                            min-h-[300px] h-full">
                {/* Image Container - Fixed height */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute top-3 right-3 p-1.5 rounded-full bg-[#7EA046]/20">
                    {event.icon}
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span style={{ color: '#7EA046' }} className="font-bold">{event.year}</span>
                  </div>
                </div>

                {/* Content - Flex grow to fill space */}
                <div className="p-3 flex flex-col h-[calc(100%-9rem)]">
                  <h3 className="text-white font-bold text-sm mb-0.5">{event.title}</h3>
                  <p style={{ color: '#7EA046' }} className="text-xs mb-2">{event.subtitle}</p>

                  <div className="relative overflow-hidden transition-all duration-300 group-hover:max-h-[500px] max-h-[60px]">
                    <p className="text-gray-300 text-xs leading-relaxed mb-2">{event.description}</p>
                    
                    {(event.achievements || event.projects) && (
                      <div className="mt-2 pt-2 border-t border-[#7EA046]/20">
                        {event.achievements?.map((achievement, i) => (
                          <div key={i} className="mb-1.5 last:mb-0">
                            <h4 style={{ color: '#7EA046' }} className="text-xs font-semibold mb-0.5">
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
                        {event.projects?.map((project, i) => (
                          <div key={i} className="mb-1.5 last:mb-0">
                            <h4 style={{ color: '#7EA046' }} className="text-xs font-semibold mb-0.5">
                              {project.title}
                            </h4>
                            <p className="text-gray-300 text-xs">{project.detail}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black/40 to-transparent group-hover:opacity-0 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
