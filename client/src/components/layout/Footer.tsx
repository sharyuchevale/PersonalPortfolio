import { FC } from 'react';
import { Heart } from 'lucide-react';

const Footer: FC = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();
  
  // Navigation links for footer
  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  
  // Social media links
  const socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Dribbble", href: "#" },
  ];
  
  // Scroll to section handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <footer className="bg-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">John<span className="text-primary">Doe</span></h2>
            <p className="text-gray-400">Software Developer & UX Designer</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0 mb-6 md:mb-0">
            <div>
              <h4 className="font-medium mb-3 text-primary">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map(link => (
                  <li key={link.id}>
                    <a 
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-primary">Social Media</h4>
              <ul className="space-y-2">
                {socialLinks.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
          
          <p className="text-gray-400 text-sm flex items-center">
            Designed and built with <Heart className="h-4 w-4 text-primary mx-1" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
