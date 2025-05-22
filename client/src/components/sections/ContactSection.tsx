import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import {
  RectangleEllipsis,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Dribbble
} from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  
  // Initialize form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Handle form submission
  const mutation = useMutation({
    mutationFn: (values: ContactFormValues) => 
      apiRequest("POST", "/api/contact", values),
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Oops! Something went wrong",
        description: error.message || "Please try again later",
        variant: "destructive",
      });
    },
  });

  // Handle form submission
  function onSubmit(values: ContactFormValues) {
    mutation.mutate(values);
  }

  return (
    <section id="contact" className="py-20 section-fade" style={{ background: 'linear-gradient(180deg, #143442, #1c3c30)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-primary text-lg font-medium mb-2">Get in touch</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Contact Me</h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              I'm available for photography collaborations, environmental projects, and speaking engagements.
              Feel free to reach out if you'd like to discuss a project or just share your love for nature!
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <RectangleEllipsis className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:hello@natureportfolio.com" className="text-foreground/70 hover:text-primary transition-colors">
                    hello@natureportfolio.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-secondary/10 p-3 rounded-full mr-4">
                  <MapPin className="text-secondary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-foreground/70">Portland, Oregon</p>
                </div>
              </div>
            </div>
            
            <h4 className="font-medium mb-3">Connect with me on:</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary/5 p-3 rounded-full text-foreground/70 hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/5 p-3 rounded-full text-foreground/70 hover:bg-secondary hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/5 p-3 rounded-full text-foreground/70 hover:bg-accent hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary/5 p-3 rounded-full text-foreground/70 hover:bg-green-500 hover:text-white transition-colors">
                <Dribbble className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-background border border-border/50 p-6 rounded-xl shadow-sm">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel className="text-sm font-medium">Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Your name" 
                          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
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
                    <FormItem className="mb-4">
                      <FormLabel className="text-sm font-medium">Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email" 
                          placeholder="Your email" 
                          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel className="text-sm font-medium">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Subject" 
                          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel className="text-sm font-medium">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={4} 
                          placeholder="Your message" 
                          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full gradient-button text-white py-3 px-4"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
