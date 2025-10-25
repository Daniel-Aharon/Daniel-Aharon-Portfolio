---
description: Frontend Development Guidelines for Portfolio Project
globs: ["src/**/*.{ts,tsx,js,jsx}", "*.{ts,tsx,js,jsx}", "tailwind.config.ts", "vite.config.ts"]
alwaysApply: true
---

# Frontend Development Guidelines

## Technology Stack
- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React hooks (useState, useEffect, etc.)
- **Routing**: React Router (if needed)

## Code Standards

### TypeScript
- Use TypeScript for all new components and files
- Define proper interfaces for props and data structures
- Avoid `any` type - use specific types or `unknown`
- Use strict type checking

### React Best Practices
- Use functional components with hooks
- Implement proper prop typing with interfaces
- Use meaningful component and variable names
- Keep components small and focused (single responsibility)
- Use proper key props for lists

### Styling Guidelines
- Use Tailwind CSS classes for styling
- Leverage shadcn/ui components from the `src/components/ui/` directory
- Follow mobile-first responsive design principles
- Use semantic HTML elements
- Ensure accessibility with proper ARIA labels

### File Organization
- Components go in `src/components/`
- UI components go in `src/components/ui/`
- Custom hooks go in `src/hooks/`
- Utilities go in `src/lib/`
- Pages go in `src/pages/`

### Performance
- Use React.memo() for expensive components
- Implement proper loading states
- Optimize images and assets
- Use lazy loading for route components when appropriate

### Code Quality
- Follow ESLint configuration
- Write clean, readable code
- Add proper comments for complex logic
- Use consistent naming conventions (camelCase for variables, PascalCase for components)

## Portfolio-Specific Guidelines
- Ensure all components are responsive and work on mobile
- Maintain consistent design system using shadcn/ui
- Focus on clean, modern UI/UX
- Optimize for performance and accessibility
- Use proper semantic HTML for SEO