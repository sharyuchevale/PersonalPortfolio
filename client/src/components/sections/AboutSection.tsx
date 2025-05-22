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
          <h3 className="text-primary text-lg font-medium mb-2">Get to know me</h3>
          <h2 className="text-3xl md:text-4xl font-bold">My Journey</h2>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30 z-0"></div>
          
          {/* Timeline events */}
          <div className="space-y-12 relative z-10">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${event.isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary shadow-lg shadow-primary/20 z-10 flex items-center justify-center">
                  <span className="font-bold text-white">{event.year}</span>
                </div>
                
                {/* Content card */}
                <div className={`md:w-5/12 flex flex-col ${event.isLeft ? 'md:items-end md:text-right' : 'md:items-start'} relative`}>
                  {/* Year display (mobile only) */}
                  <div className="md:hidden mb-4 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary shadow-lg shadow-primary/20 flex items-center justify-center mr-3">
                      <span className="font-bold text-white">{event.year}</span>
                    </div>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                  </div>
                  
                  {/* Content card for desktop */}
                  <div className="bg-background/30 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:shadow-lg transition-all hover:-translate-y-1 duration-300 w-full">
                    <div className="hidden md:block mb-4">
                      <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                    </div>
                    <p className="text-foreground/70 leading-relaxed">{event.description}</p>
                    <div className={`hidden md:flex items-center gap-2 mt-4 ${event.isLeft ? 'justify-end' : 'justify-start'}`}>
                      <span className="bg-primary/10 p-2 rounded-full">
                        {event.icon}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Image */}
                <div className="md:w-5/12">
                  <img 
                    src={event.image}
                    alt={event.imageAlt}
                    className="rounded-xl shadow-lg w-full h-auto border-4 border-white/10 shadow-primary/20 hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
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
