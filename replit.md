# Franklin Liu - Blockchain Developer Portfolio

## Overview

This is a modern, responsive portfolio website for Franklin Liu, a blockchain developer specializing in zkApps, smart contracts, and Web3 development. The application showcases professional experience, projects, skills, and provides a contact form for potential clients or employers. Built as a full-stack application with a React frontend and Express backend, it demonstrates modern web development practices with a focus on clean design and user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system including CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express framework for API routes
- **Language**: TypeScript for full-stack type safety
- **Database Layer**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Storage Strategy**: Dual implementation with in-memory storage for development and PostgreSQL for production
- **Session Management**: express-session with connect-pg-simple for PostgreSQL session storage

### Data Management
- **Database**: PostgreSQL as the primary database (configured via Drizzle)
- **Schema**: Type-safe database schemas using Drizzle ORM with Zod validation
- **Migrations**: Drizzle Kit for database schema migrations and management
- **Models**: Users and Contacts tables with proper typing and validation

### Development Tooling
- **Type Safety**: Full TypeScript configuration across frontend, backend, and shared modules
- **Code Quality**: ESLint and Prettier for consistent code formatting
- **Development Server**: Vite dev server with HMR and Express middleware integration
- **Path Aliases**: Configured for clean imports (@/ for client, @shared for shared modules)

### Deployment Strategy
- **Build Process**: Separate builds for client (Vite) and server (esbuild)
- **Static Assets**: Client builds to dist/public for serving
- **Server Bundle**: esbuild bundles server code for production deployment
- **Environment**: NODE_ENV-based configuration for development/production differences

### External Dependencies

- **Database Provider**: Neon Database (@neondatabase/serverless) for serverless PostgreSQL
- **UI Framework**: Radix UI component primitives for accessible, unstyled components
- **Styling**: Tailwind CSS with PostCSS for utility-first styling
- **Fonts**: Google Fonts (Inter for UI, JetBrains Mono for code)
- **Icons**: Font Awesome for consistent iconography
- **Form Validation**: Zod for runtime type validation and schema parsing
- **Date Handling**: date-fns for date manipulation and formatting
- **Development**: Replit integration with development banner and cartographer plugin