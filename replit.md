# Portfolio Website Project Guide

## Overview

This project is a modern, responsive portfolio website built with React and a Node.js backend. The application features a clean architecture with a client-side React application for the frontend and an Express server for the backend API. The design uses shadcn/ui components with a custom styling theme, and the database layer is handled by Drizzle ORM.

The portfolio website includes sections for a hero banner, about information, projects showcase, skills display, and a contact form that stores submissions in a database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a client-server architecture:

1. **Frontend**: React-based SPA (Single Page Application) with client-side routing using Wouter
2. **Backend**: Express.js server handling API requests and serving the static frontend
3. **Database**: PostgreSQL with Drizzle ORM for data modeling and querying
4. **Styling**: Tailwind CSS with shadcn/ui components for a consistent design system

The application is structured as a monorepo with clear separation between client, server, and shared code. This approach allows for code reuse while maintaining a clean separation of concerns.

### Key Architectural Decisions

- **Monorepo Structure**: The project uses a monorepo approach to keep frontend and backend code in a single repository, facilitating easier development and deployment.
- **Shared Type Definitions**: Types are shared between frontend and backend via the `shared` directory, ensuring type safety across the application.
- **Component-Based UI**: The UI is built using reusable components from shadcn/ui, allowing for consistent styling and easier maintenance.
- **API-First Backend**: The backend provides a RESTful API for the frontend to consume, with clear endpoint definitions.

## Key Components

### Frontend

1. **Page Structure**:
   - Homepage with multiple sections (Hero, About, Projects, Skills, Contact)
   - 404 Not Found page

2. **UI Components**:
   - Layout components (Header, Footer)
   - Section components (HeroSection, AboutSection, ProjectsSection, SkillsSection, ContactSection)
   - UI components from shadcn/ui (Button, Card, Form, Toast, etc.)

3. **State Management**:
   - React Query for server state (API data)
   - React hooks for local component state

4. **Animation**:
   - Framer Motion for section animations
   - Intersection Observer API for scroll-based animations

### Backend

1. **API Routes**:
   - `/api/contact` - Handles contact form submissions

2. **Data Layer**:
   - Drizzle ORM for database interactions
   - Schema definitions with validation using Zod

3. **Server Setup**:
   - Express.js for routing and middleware
   - Development-specific Vite integration for HMR (Hot Module Replacement)

## Data Flow

1. **Contact Form Submission**:
   - User fills out the contact form on the frontend
   - Form validation occurs client-side using Zod schemas
   - On submission, data is sent to the `/api/contact` endpoint
   - Server validates input using the same Zod schema
   - Valid data is stored in the database
   - Response is sent back to the client
   - User receives a toast notification about success/failure

2. **Page Navigation**:
   - Header navigation links use smooth scrolling to relevant page sections
   - Scroll spy functionality highlights the active section in the navigation
   - Sections use fade-in animations as they come into viewport

## External Dependencies

### Frontend
- React for UI rendering
- Wouter for client-side routing
- Tailwind CSS for styling
- shadcn/ui for UI components 
- React Hook Form for form management
- Zod for form validation
- Framer Motion for animations
- Lucide React for icons
- Tanstack React Query for data fetching

### Backend
- Express.js for handling HTTP requests
- Drizzle ORM for database operations
- Zod for validation

## Deployment Strategy

The application is configured for deployment on Replit:

1. **Development Mode**:
   - `npm run dev` - Runs the application with development features enabled
   - Vite provides Hot Module Replacement for the frontend

2. **Production Build**:
   - `npm run build` - Creates optimized production builds for both frontend and backend
   - Frontend is built with Vite
   - Backend is bundled with esbuild

3. **Production Serve**:
   - `npm run start` - Serves the production build
   - Express serves the static frontend files from the build directory

4. **Database Management**:
   - `npm run db:push` - Updates the database schema using Drizzle Kit

## Database Schema

The application includes two main data entities:

1. **Users**:
   - `id`: Serial primary key
   - `username`: Unique text field
   - `password`: Password text field

2. **Contacts**:
   - `id`: Serial primary key
   - `name`: Contact name
   - `email`: Contact email
   - `subject`: Message subject
   - `message`: Message content
   - `createdAt`: Timestamp of contact creation

## Getting Started

To start working on the project:

1. The application requires a PostgreSQL database. Make sure it's properly configured in Replit.
2. Environment variables should include `DATABASE_URL` for the database connection.
3. Run `npm run dev` to start the development server.
4. To add new API endpoints, extend the routes in `server/routes.ts`.
5. For UI changes, modify the components in the `client/src/components` directory.
6. To update the database schema, modify `shared/schema.ts` and run `npm run db:push`.