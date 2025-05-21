import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Briefcase, 
  Download 
} from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 section-fade">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-primary text-lg font-medium mb-2">Get to know me</h3>
          <h2 className="text-3xl md:text-4xl font-bold">About My Journey</h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/5">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="John Doe working on software development" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
          
          <div className="md:w-3/5">
            <h3 className="text-2xl font-bold mb-4">My Professional Background</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With over 5 years of experience in software development and user experience design, 
              I've had the privilege of working with diverse teams to create innovative digital solutions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I began my career after graduating with a Computer Science degree from Stanford University. 
              Since then, I've worked with startups and established companies alike, helping to transform ideas into 
              user-friendly applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <GraduationCap className="text-primary h-5 w-5" />
                  </div>
                  <h4 className="font-medium">Education</h4>
                </div>
                <p className="text-gray-600">B.S. Computer Science, Stanford University</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Briefcase className="text-secondary h-5 w-5" />
                  </div>
                  <h4 className="font-medium">Experience</h4>
                </div>
                <p className="text-gray-600">5+ Years in Software Development</p>
              </div>
            </div>
            
            <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
              Download Resume <Download className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
