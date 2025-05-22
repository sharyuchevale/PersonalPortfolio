import { Camera, Music, Coffee, Book, TreePine, Map } from "lucide-react";

export default function InterestsSection() {
  // Define list of interests with icons and descriptions
  const interests = [
    {
      icon: <Camera className="h-6 w-6 text-primary" />,
      title: "Photography",
      description: "Capturing the beauty of nature and wildlife in their natural habitats."
    },
    {
      icon: <Music className="h-6 w-6 text-primary" />,
      title: "Music",
      description: "Enjoying ambient and instrumental music, especially while editing photos."
    },
    {
      icon: <Coffee className="h-6 w-6 text-primary" />,
      title: "Coffee",
      description: "Exploring local coffee shops during my travels to remote locations."
    },
    {
      icon: <Book className="h-6 w-6 text-primary" />,
      title: "Reading",
      description: "Books about environmental conservation, wildlife, and travel memoirs."
    },
    {
      icon: <TreePine className="h-6 w-6 text-primary" />,
      title: "Hiking",
      description: "Exploring natural trails and scenic mountain routes on foot."
    },
    {
      icon: <Map className="h-6 w-6 text-primary" />,
      title: "Travel",
      description: "Visiting diverse ecosystems around the world to document their beauty."
    }
  ];

  return (
    <section id="interests" className="py-20 section-fade" style={{ background: 'linear-gradient(160deg, #1a4257, #143442)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-primary text-lg font-medium mb-2">What I enjoy</h3>
          <h2 className="text-3xl md:text-4xl font-bold">My Interests</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className="bg-background/30 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-background/50 p-3 rounded-full mr-4">
                  {interest.icon}
                </div>
                <h3 className="text-xl font-bold">{interest.title}</h3>
              </div>
              <p className="text-foreground/70 leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}