# Portfolio Website - Sanskar Vaibhav

## Overview

This is a personal portfolio website for Sanskar Vaibhav, a Computer Science student specializing in AI/ML at Galgotias University. The application is a full-stack web application built to showcase professional experience, projects, skills, certifications, and achievements. The website features a modern, glassmorphism-inspired design with smooth animations and a recruiter-optimized layout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (single-page application with home and 404 routes)

**UI Component System**
- Shadcn/ui component library (New York style variant) for consistent, accessible UI components
- Radix UI primitives for headless, accessible component foundations
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for managing component variants

**Design System**
- Custom color palette defined in CSS variables supporting dark theme
- Poppins font family from Google Fonts as primary typeface
- Glassmorphism effects with backdrop blur and transparency
- Responsive design with mobile-first approach
- Animation system using CSS transitions and intersection observers for scroll-triggered animations

**State Management**
- TanStack Query (React Query) for server state management and API data fetching
- React Hook Form with Zod validation for form state and validation
- Local component state with React hooks

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript for type safety
- Custom middleware for request logging and JSON parsing
- HTTP server created using Node's built-in `http` module

**API Endpoints**
- `POST /api/contact` - Handles contact form submissions with validation
- `GET /api/resume` - Serves PDF resume file for download

**Development vs Production**
- Development: Vite middleware integrated with Express for HMR
- Production: Static file serving from built assets
- Replit-specific plugins for error overlays and dev banners in development

**Data Storage Strategy**
- In-memory storage implementation (`MemStorage` class) for contact form submissions
- Interface-based storage pattern (`IStorage`) allowing future database integration
- UUID-based ID generation for records

### External Dependencies

**Database Preparation**
- Drizzle ORM configured for PostgreSQL with schema definitions
- Neon Database serverless driver for PostgreSQL connections
- Database schema includes users table and contact form validation schemas
- Migration system configured but storage currently uses in-memory implementation

**UI Component Libraries**
- Radix UI (accordion, dialog, dropdown, popover, tooltip, and 20+ other primitives)
- Embla Carousel for touch-friendly carousels
- CMDK for command palette functionality
- Lucide React for icon library
- React Icons for additional social media icons (LeetCode, GeeksforGeeks)

**Form & Validation**
- React Hook Form for performant form state management
- Zod for schema validation with TypeScript inference
- @hookform/resolvers for integrating Zod with React Hook Form
- Drizzle-Zod for generating Zod schemas from Drizzle tables

**Styling & Utilities**
- Tailwind CSS with PostCSS for processing
- clsx and tailwind-merge for conditional className composition
- date-fns for date formatting and manipulation

**Third-Party Services**
- Google Fonts (Poppins font family)
- Font Awesome for additional icons via CDN

**Portfolio Data**
- Portfolio content centralized in `shared/portfolio-data.ts` including personal info, skills, projects, internships, certifications, and achievements
- Data structured as exportable objects for easy maintenance

**Development Tools**
- TSX for running TypeScript files directly in development
- ESBuild for production server bundling
- Drizzle Kit for database migrations

**Session Management**
- connect-pg-simple configured for PostgreSQL session storage (prepared for future authentication)