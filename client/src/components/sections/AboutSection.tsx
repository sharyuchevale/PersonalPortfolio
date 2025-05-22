import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  Download 
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 section-fade" style={{ background: 'linear-gradient(120deg, #0f2e3d, #1b5668)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-primary text-lg font-medium mb-2">Get to know me</h3>
          <h2 className="text-3xl md:text-4xl font-bold">My Journey</h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5">
            <img 
              src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Beautiful mountain landscape at sunset" 
              className="rounded-xl shadow-lg w-full h-auto border-4 border-white/20 shadow-primary/20" 
            />
          </div>
          
          <div className="md:w-3/5">
            <h3 className="text-2xl font-bold mb-4">My Nature Journey</h3>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              With over 8 years of experience in nature photography and environmental conservation, 
              I've had the privilege of exploring diverse ecosystems around the world, capturing their beauty and fragility.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              I began my career after completing a degree in Environmental Science with a focus on conservation photography. 
              Since then, I've worked with conservation organizations and environmental initiatives to document and raise awareness 
              about our natural world.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-background p-5 rounded-lg shadow-sm border border-border">
                <div className="flex items-center mb-3">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <GraduationCap className="text-primary h-5 w-5" />
                  </div>
                  <h4 className="font-medium">Education</h4>
                </div>
                <p className="text-foreground/70">B.S. Environmental Science, Green Mountain University</p>
              </div>
              
              <div className="bg-background p-5 rounded-lg shadow-sm border border-border">
                <div className="flex items-center mb-3">
                  <div className="bg-secondary/10 p-3 rounded-full mr-4">
                    <Briefcase className="text-secondary h-5 w-5" />
                  </div>
                  <h4 className="font-medium">Experience</h4>
                </div>
                <p className="text-foreground/70">8+ Years in Nature Photography & Conservation</p>
              </div>
            </div>
            
            <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
              Download Portfolio <Download className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
