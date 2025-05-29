import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useState, useEffect } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-6 section-fade" style={{ background: 'linear-gradient(140deg, #173a2d, #1a4257)' }}>
      <div className="relative">
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-6 mt-4">
            <h3 className="text-lg font-medium mb-1" style={{ color: '#7EA046' }}>Bringing Ideas to Life</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
          </div>
          
          {/* Desktop Carousel */}
          <div className="hidden md:block mb-4 overflow-hidden">
            <div className="relative px-20">
              <Swiper
                key={isVisible ? 'visible' : 'hidden'}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 5,
                  stretch: 0,
                  depth: 50,
                  modifier: 2,
                  slideShadows: false,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 1.8,
                    spaceBetween: 20,
                    coverflowEffect: {
                      rotate: 5,
                      stretch: 0,
                      depth: 50,
                      modifier: 2,
                    },
                  },
                  1024: {
                    slidesPerView: 2.2,
                    spaceBetween: 30,
                    coverflowEffect: {
                      rotate: 5,
                      stretch: 0,
                      depth: 50,
                      modifier: 2,
                    },
                  },
                  1280: {
                    slidesPerView: 2.5,
                    spaceBetween: 40,
                    coverflowEffect: {
                      rotate: 5,
                      stretch: 0,
                      depth: 50,
                      modifier: 3,
                    },
                  },
                  1536: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                    coverflowEffect: {
                      rotate: 5,
                      stretch: 0,
                      depth: 50,
                      modifier: 3,
                    },
                  }
                }}
                initialSlide={2}
                speed={800}
                allowTouchMove={true}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="projects-coverflow-swiper !overflow-visible !py-8"
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index} className="max-w-[90vw] md:max-w-[45vw] lg:max-w-[40vw] xl:max-w-[35vw] 2xl:max-w-[30vw]">
                    <div className="relative group transition-all duration-700 ease-out hover:scale-[1.02]">
                      {/* Card Container */}
                      <div className="relative h-[400px] sm:h-[420px] md:h-[450px] rounded-xl overflow-hidden bg-background/50 backdrop-blur-sm border border-[#7EA046]/20">
                        {/* Image Section */}
                        <div className="relative h-[45%]" style={{ background: 'linear-gradient(135deg, rgba(23, 58, 45, 0.95) 0%, rgba(26, 66, 87, 0.95) 100%)' }}>
                          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                            <img 
                              src={project.image}
                              alt={project.title}
                              className="w-[95%] h-[95%] object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
                            />
                          </div>
                          {/* Updated gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-[rgba(23,58,45,0.7)] to-transparent opacity-70"></div>
                          
                          {/* Subtle pattern overlay */}
                          <div 
                            className="absolute inset-0 opacity-5 mix-blend-overlay"
                            style={{
                              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(126,160,70,0.4) 1px, transparent 0)',
                              backgroundSize: '20px 20px'
                            }}
                          ></div>
                        </div>

                        {/* Content Section */}
                        <div className="absolute inset-0 p-6 flex flex-col">
                          {/* Project Type - Fixed at top */}
                          <div className="relative z-10 mb-auto mt-2">
                            <Badge className="bg-[#7EA046]/80 text-white hover:bg-[#7EA046] shadow-lg px-3 py-1">
                              {project.type}
                            </Badge>
                          </div>

                          {/* Main Content - Bottom aligned */}
                          <div className="mt-auto">
                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-500 group-hover:text-[#7EA046]">
                              {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-300 text-sm mb-4 line-clamp-3 transition-opacity duration-500">
                              {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {project.technologies.slice(0, 3).map((tech, i) => (
                                <Badge 
                                  key={i} 
                                  variant="outline" 
                                  className="bg-[#7EA046]/5 border-[#7EA046]/20 text-gray-300 hover:bg-[#7EA046]/10 text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                              {project.technologies.length > 3 && (
                                <Badge 
                                  variant="outline" 
                                  className="bg-[#7EA046]/5 border-[#7EA046]/20 text-gray-300 hover:bg-[#7EA046]/10 text-xs"
                                >
                                  +{project.technologies.length - 3}
                                </Badge>
                              )}
                            </div>

                            {/* Links */}
                            <div className="flex gap-3 opacity-0 transform translate-y-2 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                              <a 
                                href={project.demoLink} 
                                className="w-full bg-[#7EA046]/80 hover:bg-[#7EA046] text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-500 hover:shadow-lg"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ArrowRight className="h-4 w-4" />
                                <span className="text-sm">View More</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                
                {/* Custom Navigation Buttons */}
                <div className="swiper-button-prev !-left-14 !mt-0 !top-1/2 !-translate-y-1/2"></div>
                <div className="swiper-button-next !-right-14 !mt-0 !top-1/2 !-translate-y-1/2"></div>
              </Swiper>
            </div>
          </div>

          {/* Mobile Grid */}
          <div className="md:hidden">
            <Swiper
              slidesPerView={1.2}
              centeredSlides={true}
              spaceBetween={16}
              grabCursor={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                480: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2.2,
                  spaceBetween: 24,
                },
              }}
              modules={[Pagination]}
              className="!pb-12"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div 
                    className="overflow-hidden shadow-lg transition-all hover:-translate-y-2 duration-300 rounded-xl border border-[#7EA046]/20 bg-background/50 backdrop-blur-sm h-[500px]"
                  >
                    {/* Mobile Image Section */}
                    <div 
                      className="relative h-48" 
                      style={{ background: 'linear-gradient(315deg, rgba(23, 58, 45, 0.95) 0%, rgba(26, 66, 87, 0.95) 100%)' }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-[95%] h-[95%] object-cover transition-transform hover:scale-105 duration-500" 
                        />
                      </div>
                      {/* Updated gradient overlay - reversed direction */}
                      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-[rgba(23,58,45,0.7)] to-transparent opacity-70"></div>
                      
                      {/* Subtle pattern overlay */}
                      <div 
                        className="absolute inset-0 opacity-5 mix-blend-overlay"
                        style={{
                          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(126,160,70,0.4) 1px, transparent 0)',
                          backgroundSize: '20px 20px'
                        }}
                      ></div>
                      
                      <div className="absolute bottom-4 left-4 z-10">
                        <Badge className="bg-[#7EA046]/90 text-white hover:bg-[#7EA046]">
                          {project.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-bold text-xl text-white group-hover:text-[#7EA046] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mt-2 line-clamp-3">{project.description}</p>
                    </div>
                    <div className="px-4 py-2 flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <Badge 
                            key={i} 
                            variant="outline" 
                            className="bg-[#7EA046]/5 border-[#7EA046]/20 text-gray-300 hover:bg-[#7EA046]/10"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge 
                            variant="outline" 
                            className="bg-[#7EA046]/5 border-[#7EA046]/20 text-gray-300 hover:bg-[#7EA046]/10"
                          >
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="p-4 mt-auto border-t border-[#7EA046]/20">
                      <a 
                        href={project.demoLink} 
                        className="flex items-center justify-center gap-2 text-[#7EA046] hover:text-[#7EA046]/80 transition-colors bg-[#7EA046]/10 hover:bg-[#7EA046]/20 px-4 py-2 rounded-lg w-full"
                      >
                        <ArrowRight className="h-4 w-4" />
                        <span className="text-sm">View More</span>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
