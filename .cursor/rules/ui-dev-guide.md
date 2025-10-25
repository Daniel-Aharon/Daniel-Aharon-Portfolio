---
description: UI Component Development Guidelines
globs: ["src/components/ui/**/*.{ts,tsx}"]
alwaysApply: true
---

# UI Component Guidelines

## shadcn/ui Integration
- All UI components should extend or use shadcn/ui components
- Maintain consistency with the existing design system
- Use proper TypeScript interfaces for component props
- Implement proper accessibility features

## Component Structure
- Export components as default exports
- Use proper prop destructuring
- Include proper TypeScript types
- Add forwardRef when needed for DOM access

## Styling
- Use Tailwind CSS classes
- Follow the existing color scheme and spacing
- Ensure components are themeable and customizable
- Use CSS variables for dynamic theming