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
          <h3 className="text-primary text-lg font-medium mb-2">My photo collections</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Nature Gallery</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden shadow-lg transition-all hover:-translate-y-2 duration-300 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5"
            >
              <img 
                src={project.type === 'Web App' ? 
                  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" : 
                  project.type === 'Mobile App' ? 
                  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" : 
                  "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"} 
                alt={project.title}
                className="w-full h-48 object-cover transition-transform hover:scale-105 duration-500" 
              />
              <CardHeader className="p-0">
                <div className="flex justify-between items-center px-6 pt-6 pb-3">
                  <h3 className="font-bold text-xl">{project.type === 'Web App' ? 'Forest Wonders' : 
                    project.type === 'Mobile App' ? 'Mountain Majesty' : 'Ocean Depths'}</h3>
                  <Badge className={`
                    ${project.type === 'Web App' ? 'bg-primary/10 text-primary hover:bg-primary/20' : 
                     project.type === 'Mobile App' ? 'bg-secondary/10 text-secondary hover:bg-secondary/20' : 
                     'bg-accent/10 text-accent hover:bg-accent/20'}
                     text-xs px-3 py-1 rounded-full font-normal
                  `}>
                    {project.type === 'Web App' ? 'Forest' : 
                     project.type === 'Mobile App' ? 'Mountain' : 
                     'Ocean'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-4">
                <p className="text-foreground/70 mb-4">
                  {project.type === 'Web App' ? 
                    'A breathtaking collection showcasing the diverse beauty of forest ecosystems around the world.' : 
                    project.type === 'Mobile App' ? 
                    'Capturing the majestic peaks and stunning vistas of mountain ranges across continents.' : 
                    'Exploring the mysterious and vibrant underwater worlds of our planet\'s oceans.'}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {(project.type === 'Web App' ? 
                    ['Biodiversity', 'Seasons', 'Wildlife'] : 
                    project.type === 'Mobile App' ? 
                    ['Alpine', 'Sunrise', 'Valleys'] : 
                    ['Coral', 'Marine Life', 'Waves']).map((tech, techIndex) => (
                    <span key={techIndex} className="bg-primary/5 text-foreground/80 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pt-0 pb-6 flex justify-between">
                <a href={project.demoLink} className="text-primary hover:underline">View Gallery</a>
                <a href={project.githubLink} className="text-foreground/70 hover:text-foreground transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center px-6 py-3 bg-background border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors">
            View All Collections <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
