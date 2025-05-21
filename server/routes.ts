import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { contactSchema, type Contact } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up API routes
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request using zod schema
      const contactData = contactSchema.parse(req.body);
      
      // Store the contact form submission
      const result = await storage.saveContactMessage(contactData);
      
      return res.status(200).json({
        message: "Contact message received",
        id: result.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        message: "Failed to process contact message" 
      });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
