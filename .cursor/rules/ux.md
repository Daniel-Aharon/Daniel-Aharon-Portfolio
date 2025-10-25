---
description: UX Design Guidelines for Portfolio Project
globs: ["src/**/*.{ts,tsx,js,jsx}", "*.{ts,tsx,js,jsx}", "tailwind.config.ts", "public/**/*"]
alwaysApply: true
---

# UX Design Guidelines

## Design Principles

### User-Centered Design
- **Clarity**: Make information easy to understand and navigate
- **Consistency**: Maintain uniform design patterns throughout the portfolio
- **Accessibility**: Ensure the site is usable by people with disabilities
- **Performance**: Optimize for fast loading and smooth interactions
- **Responsiveness**: Design for all device sizes and orientations

### Visual Hierarchy
- Use proper heading structure (H1 → H2 → H3)
- Implement clear visual hierarchy with typography, spacing, and color
- Guide user attention with strategic use of whitespace
- Use contrast effectively to highlight important elements

## Layout & Navigation

### Navigation Design
- Keep navigation simple and intuitive
- Use clear, descriptive labels for menu items
- Implement sticky navigation for easy access
- Provide visual feedback for active/hover states
- Ensure navigation works on all device sizes

### Content Organization
- Group related content logically
- Use progressive disclosure to avoid overwhelming users
- Implement clear call-to-action buttons
- Provide breadcrumbs for complex navigation paths

## Typography & Readability

### Font Selection
- Use web-safe fonts or reliable web font services
- Maintain good font pairing (max 2-3 font families)
- Ensure sufficient font size for readability (minimum 16px for body text)
- Use appropriate line height (1.4-1.6 for body text)

### Text Hierarchy
- **Headings**: Clear hierarchy with consistent sizing
- **Body Text**: Readable and scannable
- **Links**: Clearly distinguishable from regular text
- **Emphasis**: Use bold/italic sparingly and purposefully

## Color & Visual Design

### Color Palette
- Use a limited, cohesive color palette
- Ensure sufficient contrast ratios (WCAG AA compliance)
- Use color meaningfully, not just decoratively
- Test color combinations for accessibility

### Visual Elements
- Use consistent spacing and margins
- Implement proper use of shadows and borders
- Ensure images are optimized and properly sized
- Use icons consistently and meaningfully

## Interaction Design

### User Feedback
- Provide immediate feedback for user actions
- Use loading states for async operations
- Implement hover and focus states
- Show success/error messages clearly

### Microinteractions
- Use subtle animations to enhance user experience
- Implement smooth transitions between states
- Avoid excessive or distracting animations
- Ensure animations don't interfere with accessibility

## Mobile & Responsive Design

### Mobile-First Approach
- Design for mobile devices first, then scale up
- Ensure touch targets are at least 44px
- Optimize for thumb navigation
- Test on actual devices, not just browser dev tools

### Responsive Breakpoints
- Use consistent breakpoints across the site
- Test layouts at all breakpoints
- Ensure content remains readable at all sizes
- Optimize images for different screen densities

## Accessibility Guidelines

### WCAG Compliance
- **Perceivable**: Provide text alternatives for images
- **Operable**: Ensure keyboard navigation works
- **Understandable**: Use clear language and consistent navigation
- **Robust**: Use semantic HTML and proper ARIA labels

### Implementation
- Use semantic HTML elements
- Implement proper ARIA labels and roles
- Ensure sufficient color contrast
- Provide keyboard navigation support
- Test with screen readers

## Performance & Loading

### Loading Experience
- Implement skeleton screens for better perceived performance
- Use progressive image loading
- Minimize layout shifts during loading
- Provide meaningful loading indicators

### Optimization
- Optimize images (WebP format, proper sizing)
- Minimize JavaScript bundle size
- Use lazy loading for below-the-fold content
- Implement proper caching strategies

## Content Strategy

### Information Architecture
- Organize content logically and intuitively
- Use clear, descriptive headings
- Implement search functionality if needed
- Provide clear paths to important information

### Content Guidelines
- Write clear, concise copy
- Use active voice when possible
- Break up long text with headings and lists
- Include relevant, high-quality images

## Testing & Validation

### User Testing
- Test with real users on different devices
- Gather feedback on navigation and usability
- Test accessibility with assistive technologies
- Validate performance across different networks

### Tools & Resources
- Use browser dev tools for responsive testing
- Implement automated accessibility testing
- Use performance monitoring tools
- Test with various user agents and browsers

## Portfolio-Specific Considerations

### Professional Presentation
- Ensure the portfolio reflects professional quality
- Use high-quality images and media
- Maintain consistent branding throughout
- Showcase work effectively with proper presentation

### Contact & Engagement
- Make contact information easily accessible
- Provide clear ways for visitors to reach out
- Include social media links if relevant
- Implement contact forms with proper validation

### Project Showcases
- Present projects with clear descriptions
- Include relevant technologies and skills
- Provide links to live demos when possible
- Use consistent project card layouts
