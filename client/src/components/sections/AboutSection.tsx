import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  Camera, 
  TreePine,
  Award,
  Download 
} from "lucide-react";

export default function AboutSection() {
  // Define timeline data with 5 key timestamps
  const timelineEvents = [
    {
      year: "2015",
      title: "Educational Beginnings",
      description: "Graduated with a B.S. in Environmental Science from Green Mountain University, specializing in conservation photography.",
      icon: <GraduationCap className="text-primary h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      imageAlt: "University graduation ceremony",
      isLeft: true
    },
    {
      year: "2017",
      title: "First Expedition",
      description: "Joined a conservation team on a six-month expedition through the Amazon rainforest, documenting endangered species and habitats.",
      icon: <TreePine className="text-primary h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1518729571365-9a891a9df2bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      imageAlt: "Dense rainforest canopy view",
      isLeft: false
    },
    {
      year: "2019",
      title: "National Geographic Feature",
      description: "My photo series 'Silent Forests' was featured in National Geographic, highlighting the beauty and fragility of old-growth forests.",
      icon: <Award className="text-primary h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      imageAlt: "Mountain forest at sunset",
      isLeft: true
    },
    {
      year: "2021",
      title: "Conservation Initiative",
      description: "Founded the 'Through the Lens' conservation initiative, partnering with environmental NGOs to raise awareness through visual storytelling.",
      icon: <Camera className="text-primary h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1551636898-47668aa61de2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      imageAlt: "Person taking photos in nature",
      isLeft: false
    },
    {
      year: "2023",
      title: "Global Recognition",
      description: "Received the Environmental Photographer of the Year award for my work documenting climate change impacts on coastal communities.",
      icon: <Briefcase className="text-primary h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1615559120015-a9d575968752?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      imageAlt: "Coastal landscape with dramatic clouds",
      isLeft: true
    }
  ];

  return (
    <section id="about" className="py-20 section-fade" style={{ background: 'linear-gradient(120deg, #0f2e3d, #173a2d)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-primary text-lg font-medium mb-2">The Road Behind, the Road Ahead</h3>
          <h2 className="text-3xl md:text-4xl font-bold">My Journey</h2>
        </div>
        
        <div className="relative">
          {/* Horizontal Timeline inspired by the image */}
          <div className="flex flex-col">
            {/* Circle timeline with connecting line */}
            <div className="relative mb-20">
              {/* Horizontal connecting line */}
              <div className="hidden md:block absolute left-0 right-0 h-0.5 bg-gray-600 top-1/2 transform -translate-y-1/2"></div>
              
              {/* Timeline circles */}
              <div className="flex justify-between relative">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="relative">
                    {/* Small decorative dots - before */}
                    {index > 0 && (
                      <>
                        <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 -left-5 w-1.5 h-1.5 rounded-full bg-white"></div>
                        <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 -left-12 w-1.5 h-1.5 rounded-full bg-white"></div>
                      </>
                    )}
                    
                    {/* Main circle with image */}
                    <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-primary z-10 overflow-hidden group">
                      <img 
                        src={event.image}
                        alt={event.imageAlt}
                        className="w-full h-full object-cover"
                      />
                      {/* Green overlay with slight transparency */}
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300"></div>
                    </div>
                    
                    {/* Small decorative dots - after */}
                    {index < timelineEvents.length - 1 && (
                      <>
                        <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 -right-5 w-1.5 h-1.5 rounded-full bg-white"></div>
                        <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 -right-12 w-1.5 h-1.5 rounded-full bg-white"></div>
                      </>
                    )}
                    
                    {/* Vertical connecting line to text */}
                    <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-600"></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Timeline content cards */}
            <div className="md:grid md:grid-cols-5 gap-6 space-y-10 md:space-y-0">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex flex-col">
                  {/* Year and Title */}
                  <div className="text-center mb-4">
                    <p className="text-primary font-medium">{event.year}</p>
                    <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                  </div>
                  
                  {/* Content card */}
                  <div className="bg-black/60 backdrop-blur-sm p-5 rounded-lg border border-gray-800 hover:border-primary/40 transition-all hover:-translate-y-1 duration-300 flex-1">
                    <div className="flex items-center mb-3">
                      <span className="bg-primary/10 p-2 rounded-full mr-2">
                        {event.icon}
                      </span>
                      <h4 className="font-medium">{index === 0 ? "Beginnings" : 
                               index === 1 ? "Education" : 
                               index === 2 ? "Recognition" : 
                               index === 3 ? "Initiative" : 
                               "Achievement"}</h4>
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
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
