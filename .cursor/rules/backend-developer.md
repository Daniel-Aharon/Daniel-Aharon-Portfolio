---
description: Backend Development Guidelines
globs: ["backend/**/*", "api/**/*", "server/**/*", "*.py", "*.js", "*.ts", "*.go", "*.java", "*.php", "*.rb", "requirements.txt", "package.json", "Dockerfile", "docker-compose.yml"]
alwaysApply: true
---

# Backend Development Guidelines

## Technology Stack Options
- **Node.js**: Express.js, Fastify, NestJS
- **Python**: FastAPI, Django, Flask
- **Go**: Gin, Echo, Fiber
- **Java**: Spring Boot, Quarkus
- **PHP**: Laravel, Symfony
- **Ruby**: Rails, Sinatra

## API Design Principles
- Follow RESTful API conventions
- Use proper HTTP status codes
- Implement consistent error handling
- Version your APIs (e.g., /api/v1/)
- Use proper HTTP methods (GET, POST, PUT, DELETE, PATCH)
- Implement proper request/response validation

## Database Guidelines
- Use proper database design principles
- Implement database migrations
- Use connection pooling
- Implement proper indexing
- Follow ACID principles
- Use prepared statements to prevent SQL injection

## Security Best Practices
- Implement proper authentication (JWT, OAuth2)
- Use HTTPS everywhere
- Validate and sanitize all inputs
- Implement rate limiting
- Use environment variables for secrets
- Implement proper CORS policies
- Use security headers (HSTS, CSP, etc.)

## Code Quality
- Write comprehensive unit tests
- Implement integration tests
- Use proper error handling and logging
- Follow SOLID principles
- Implement proper logging (structured logging)
- Use dependency injection where appropriate

## Performance
- Implement caching strategies (Redis, Memcached)
- Use database query optimization
- Implement proper pagination
- Use compression (gzip)
- Implement proper monitoring and metrics

## Documentation
- Document all API endpoints
- Use OpenAPI/Swagger specifications
- Document database schemas
- Maintain README files
- Document deployment procedures