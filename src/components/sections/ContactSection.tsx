import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import {
  Linkedin,
  Github,
  Mail,
  Send,
  MapPin
} from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const socialLinks = [
  { 
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://www.linkedin.com/in/sharyu-chevale/",
    label: "LinkedIn"
  },
  { 
    icon: <Mail className="h-5 w-5" />,
    href: "mailto:sharyuchevale@gmail.com",
    label: "Email"
  }
];

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("M9mMNPoTpZwzgfLC9");
  }, []);
  
  // Initialize form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      setIsSubmitting(true);
      console.log('Sending email with values:', values);
      
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_6n0fpnn',
        'template_tpge3hu',
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
          to_name: 'Sharyu',
          reply_to: values.email,
        },
        'M9mMNPoTpZwzgfLC9' // Adding public key here as well for extra security
      );
      
      console.log('EmailJS Response:', result);

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      let errorMessage = "Please try again later or contact me directly via email.";
      if (error instanceof Error) {
        errorMessage = `Error: ${error.message}. Please try again or email directly.`;
      }
      toast({
        title: "Oops! Something went wrong",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section 
      id="contact" 
      className="py-20 relative overflow-hidden" 
      style={{ background: 'linear-gradient(180deg, #143442, #1c3c30)' }}
    >
      {/* Subtle animated gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(126,160,70,0.15) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-lg font-medium mb-2" style={{ color: '#7EA046' }}>Get in touch</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Seattle, WA</span>
          </div>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            {...field} 
                            placeholder="Your name" 
                            className="bg-black/20 border-[#7EA046]/20 focus:border-[#7EA046] text-white placeholder:text-gray-400"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email" 
                            placeholder="Your email" 
                            className="bg-black/20 border-[#7EA046]/20 focus:border-[#7EA046] text-white placeholder:text-gray-400"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={4} 
                          placeholder="Your message" 
                          className="bg-black/20 border-[#7EA046]/20 focus:border-[#7EA046] text-white placeholder:text-gray-400 resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex flex-col md:flex-row items-center gap-4 pt-2">
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-[#7EA046] hover:bg-[#7EA046]/80 text-white px-8 py-2 rounded-lg
                             transition-all duration-300 flex items-center justify-center gap-2 group order-2 md:order-1"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <div className="flex gap-4 order-1 md:order-2 md:ml-auto">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#7EA046]/70 hover:text-[#7EA046] transition-colors"
                        whileHover={{ y: -2 }}
                        title={link.label}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
