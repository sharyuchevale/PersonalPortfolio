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
    <section id="about" className="py-20 section-fade" style={{ background: 'linear-gradient(120deg, #0f2e3d, #173a2d)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-primary text-lg font-medium mb-2">The Road Behind, the Road Ahead</h3>
          <h2 className="text-3xl md:text-4xl font-bold">My Journey</h2>
        </div>
        
        {/* Simple Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Timeline container with connecting line */}
          <div className="relative">
            {/* Center line - visible on tablet and up */}
            <div className="hidden md:block absolute h-full w-0.5 bg-primary/30 left-1/2 transform -translate-x-1/2"></div>
            
            {/* Timeline events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`flex flex-col md:flex-row gap-8 md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Image section - equal width on desktop */}
                  <div className="md:w-5/12">
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={event.image}
                        alt={event.title}
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute top-0 left-0 m-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white font-bold">
                        {event.year}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot - visible on tablet and up */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-4 border-primary bg-background flex items-center justify-center z-10">
                      {event.icon}
                    </div>
                  </div>
                  
                  {/* Content section - equal width on desktop */}
                  <div className="md:w-5/12">
                    <div className="bg-background/30 backdrop-blur-sm p-6 rounded-xl border border-primary/20 shadow-lg">
                      {/* Year badge - mobile only */}
                      <div className="md:hidden flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full border-2 border-primary bg-background/50 flex items-center justify-center">
                          {event.icon}
                        </div>
                        <span className="text-primary font-bold">{event.year}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-foreground/80 mb-0">{event.description}</p>
                    </div>
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
