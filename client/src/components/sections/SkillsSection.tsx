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

  return (
    <section id="skills" className="py-20 bg-gray-50 section-fade">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-primary text-lg font-medium mb-2">My expertise</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
            
            {skills.map((skill, index) => (
              <div className="mb-5" key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <Progress 
                  value={visibleProgress ? skill.percentage : 0} 
                  className="h-2 bg-gray-200 rounded-full"
                  indicatorClassName={`h-full rounded-full ${skill.color}`}
                />
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div className="bg-white p-4 rounded-lg shadow-sm text-center" key={index}>
                  <div className="text-3xl mb-3" dangerouslySetInnerHTML={{ __html: tech.icon }} />
                  <h4 className="font-medium">{tech.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
