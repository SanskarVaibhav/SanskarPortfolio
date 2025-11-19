import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Store the contact form submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // In a real application, you would send an email here using Nodemailer
      // For now, we'll just log it and return success
      console.log("Contact form submission received:", submission);
      
      res.json({ 
        success: true, 
        message: "Message received successfully!" 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        error: "Failed to process your message. Please try again." 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    const resumePath = path.join(__dirname, "../attached_assets/SDE Resume_1763541908507.pdf");
    res.download(resumePath, "Sanskar_Vaibhav_Resume.pdf", (err) => {
      if (err) {
        console.error("Error downloading resume:", err);
        res.status(500).json({ error: "Failed to download resume" });
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
