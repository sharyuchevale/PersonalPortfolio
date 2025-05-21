import { skills, technologies } from "@/lib/data";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function SkillsSection() {
  const [visibleProgress, setVisibleProgress] = useState(false);
  const { observeElement } = useIntersectionObserver();

  useEffect(() => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observeElement(skillsSection, () => {
        setVisibleProgress(true);
      });
    }
  }, [observeElement]);

  // Updated skill names for nature photography
  const natureSkills = [
    {
      name: "Landscape Photography",
      percentage: 90,
      color: "bg-primary"
    },
    {
      name: "Wildlife Photography",
      percentage: 85,
      color: "bg-secondary"
    },
    {
      name: "Environmental Conservation",
      percentage: 75,
      color: "bg-accent"
    },
    {
      name: "Expedition Planning",
      percentage: 70,
      color: "bg-blue-400"
    },
    {
      name: "Post-Processing",
      percentage: 80,
      color: "bg-green-400"
    }
  ];

  return (
    <section id="skills" className="py-20 section-fade" style={{ background: 'linear-gradient(160deg, #1c3b45, #18432f)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-primary text-lg font-medium mb-2">My expertise</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Photography Skills & Equipment</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-6">Photography Skills</h3>
            
            {natureSkills.map((skill, index) => (
              <div className="mb-5" key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <Progress 
                  value={visibleProgress ? skill.percentage : 0} 
                  className="h-2 bg-muted rounded-full"
                  // Fix the indicatorClassName issue by putting the class directly on the div element
                />
                <div 
                  className={`h-full rounded-full ${skill.color} transition-all duration-1500`} 
                  style={{width: visibleProgress ? `${skill.percentage}%` : '0%'}}
                />
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Equipment & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div className="bg-background p-4 rounded-lg shadow-sm text-center border border-border/50 hover:shadow-md hover:border-primary/20 transition-all" key={index}>
                  <div className="text-3xl mb-3" dangerouslySetInnerHTML={{ __html: tech.icon }} />
                  <h4 className="font-medium">{
                    index === 0 ? "Canon EOS R5" :
                    index === 1 ? "DJI Drone" :
                    index === 2 ? "Adobe Lightroom" :
                    index === 3 ? "Underwater Gear" :
                    index === 4 ? "Tripods & Mounts" :
                    index === 5 ? "Field Guides" :
                    index === 6 ? "Tracking Tools" :
                    index === 7 ? "GoPro Hero 11" :
                    "GPS Equipment"
                  }</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
