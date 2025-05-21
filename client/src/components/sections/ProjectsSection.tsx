import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 section-fade">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-primary text-lg font-medium mb-2">My recent work</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Project Showcase</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden shadow-lg transition-transform hover:-translate-y-2 duration-300 rounded-xl"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover" 
              />
              <CardHeader className="p-0">
                <div className="flex justify-between items-center px-6 pt-6 pb-3">
                  <h3 className="font-bold text-xl">{project.title}</h3>
                  <Badge className={`
                    ${project.type === 'Web App' ? 'bg-blue-100 text-primary hover:bg-blue-100' : 
                     project.type === 'Mobile App' ? 'bg-green-100 text-secondary hover:bg-green-100' : 
                     'bg-purple-100 text-accent hover:bg-purple-100'}
                     text-xs px-3 py-1 rounded-full font-normal
                  `}>
                    {project.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-4">
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pt-0 pb-6 flex justify-between">
                <a href={project.demoLink} className="text-primary hover:underline">View Demo</a>
                <a href={project.githubLink} className="text-gray-600 hover:text-gray-900">
                  <Github className="h-5 w-5" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center px-6 py-3 bg-white border border-primary text-primary rounded-lg hover:bg-blue-50 transition-colors">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
