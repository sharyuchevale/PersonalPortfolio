import { skills, software } from "@/lib/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Code2, Database, Palette, Laptop, Brush, ClipboardList, LineChart, FileText, ChevronDown } from "lucide-react";
import { ReactNode } from "react";

type SkillIconsType = {
  [key: string]: ReactNode;
};

const skillIcons: SkillIconsType = {
  "Product Management": <ClipboardList className="w-6 h-6" />,
  "UI Design & Development": <Palette className="w-6 h-6" />,
  "Backend Development": <Database className="w-6 h-6" />,
  "Data Management": <LineChart className="w-6 h-6" />,
  "Planning & Documentation": <FileText className="w-6 h-6" />,
  "Design": <Brush className="w-6 h-6" />,
  "Development": <Laptop className="w-6 h-6" />
};

export default function SkillsSection() {
  const [visibleProgress, setVisibleProgress] = useState(false);
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
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
    <section id="skills" className="py-16 relative overflow-hidden" 
             style={{ background: 'linear-gradient(160deg, #18432f 0%, #1c3b45 50%, #18432f 100%)' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] -top-[300px] -left-[300px] bg-[#7EA046]/10 rounded-full blur-[120px]"
             style={{ animation: 'pulse 4s ease-in-out infinite' }} />
        <div className="absolute w-[500px] h-[500px] -bottom-[250px] -right-[250px] bg-[#7EA046]/5 rounded-full blur-[100px]"
             style={{ animation: 'pulse 4s ease-in-out infinite 1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-lg font-medium mb-2 bg-gradient-to-r from-[#7EA046] to-[#94B06F] bg-clip-text text-transparent">
            Expertise & Tools
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Skills</h2>
        </div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Core Skills */}
          <div className="space-y-4 h-fit">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div
                  className={`bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm border border-[#7EA046]/30 rounded-xl overflow-hidden transition-all duration-300
                            ${expandedSkill === skill.name ? 'shadow-[0_4px_20px_rgba(126,160,70,0.2)]' : 'hover:shadow-[0_4px_20px_rgba(126,160,70,0.15)]'}`}
                >
                  {/* Header */}
                  <div
                    className="p-4 cursor-pointer group/header hover:bg-[#7EA046]/5 transition-colors duration-300"
                    onClick={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-[#7EA046]/20 to-[#7EA046]/10">
                          {skillIcons[skill.name]}
                        </div>
                        <h3 className="text-lg font-semibold text-white group-hover/header:text-[#7EA046] transition-colors">
                          {skill.name}
                        </h3>
                      </div>
                      <div className="relative">
                        <div className="absolute -inset-2 rounded-full bg-[#7EA046]/10 opacity-0 group-hover/header:opacity-100 transition-opacity duration-300" />
                        <motion.div
                          animate={{ 
                            rotate: expandedSkill === skill.name ? 180 : 0,
                            scale: expandedSkill === skill.name ? 1.1 : 1
                          }}
                          transition={{ duration: 0.2 }}
                          className="relative"
                        >
                          <ChevronDown className="w-5 h-5 text-[#7EA046]" />
                          {/* Pulsing ring animation */}
                          <div className="absolute inset-0 rounded-full animate-ping opacity-30 bg-[#7EA046]/20" />
                          <div className="absolute -inset-1 rounded-full animate-pulse bg-gradient-to-r from-[#7EA046]/10 to-transparent" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Proficiency</span>
                        <span className="text-sm text-[#7EA046]">{skill.percentage}%</span>
                      </div>
                      <div className="h-1.5 bg-black/20 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: visibleProgress ? `${skill.percentage}%` : 0 }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          className="h-full bg-gradient-to-r from-[#7EA046] to-[#94B06F] rounded-full relative"
                        >
                          <motion.div
                            animate={{ x: ['0%', '100%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <motion.div
                    initial={false}
                    animate={{ height: expandedSkill === skill.name ? 'auto' : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0">
                      <div className="border-t border-[#7EA046]/20 pt-4">
                        <div className="flex flex-wrap gap-2">
                          {getTechnologies(skill.name).map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 rounded-full bg-gradient-to-br from-[#7EA046]/20 to-[#7EA046]/5 
                                       text-gray-300 text-sm border border-[#7EA046]/20
                                       hover:from-[#7EA046]/30 hover:to-[#7EA046]/10 hover:text-white 
                                       transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit content-start">
            {software.map((category: { category: string; tools: { name: string }[] }, categoryIndex: number) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm 
                          border border-[#7EA046]/30 rounded-xl p-4 hover:shadow-[0_4px_20px_rgba(126,160,70,0.15)]
                          transition-all duration-300 h-full"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[#7EA046]/20 to-[#7EA046]/10">
                    {skillIcons[category.category]}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                </div>

                <div className="space-y-3">
                  {category.tools.map((tool: { name: string }, toolIndex: number) => (
                    <div
                      key={tool.name}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 group/tool"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#7EA046]/50 group-hover/tool:bg-[#7EA046] group-hover/tool:scale-125 transition-all duration-300" />
                      <span className="text-sm">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function getTechnologies(skillName: string): string[] {
  switch (skillName) {
    case "Product Management":
      return [
        "Product Strategy & Vision",
        "Requirement Gathering",
        "User Research",
        "Market & Competitive Analysis",
        "Roadmapping",
        "Backlog Prioritization",
        "Stakeholder Management",
        "Go-to-Market Strategy"
      ];
    case "UI Design & Development":
      return [
        "Wire-framing & Prototyping",
        "HTML/CSS",
        "Javascript",
        "Angular",
        "React"
      ];
    case "Backend Development":
      return [
        "Java",
        "Python",
        "Node.js",
        "RESTful",
        "Spring",
        "Spring Boot",
        "Git",
        "Postman"
      ];
    case "Data Management":
      return [
        "SQL",
        "NoSQL",
        "Data Analysis",
        "Data Visualization",
        "ETL",
        "Big Data"
      ];
    default:
      return [];
  }
}
