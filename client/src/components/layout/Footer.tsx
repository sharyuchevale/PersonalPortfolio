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
    <footer className="bg-gradient-to-b from-primary/10 to-primary/20 dark:from-primary/5 dark:to-primary/10 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-foreground mb-2">Nature<span className="text-secondary">Portfolio</span></h2>
            <p className="text-muted-foreground">Nature Photography & Environmental Design</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0 mb-6 md:mb-0">
            <div>
              <h4 className="font-medium mb-3 text-primary">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map(link => (
                  <li key={link.id}>
                    <a 
                      onClick={() => scrollToSection(link.id)}
                      className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-secondary">Social Media</h4>
              <ul className="space-y-2">
                {socialLinks.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-muted-foreground hover:text-secondary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <hr className="border-border my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} Nature Portfolio. All rights reserved.
          </p>
          
          <p className="text-muted-foreground text-sm flex items-center">
            Designed and built with <Heart className="h-4 w-4 text-accent mx-1" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
