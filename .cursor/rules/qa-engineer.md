---
description: QA Engineering Guidelines
globs: ["tests/**/*", "test/**/*", "spec/**/*", "cypress/**/*", "playwright/**/*", "jest.config.*", "vitest.config.*", "pytest.ini", "tox.ini", "*.test.*", "*.spec.*"]
alwaysApply: true
---

# QA Engineering Guidelines

## Testing Strategy
- Implement comprehensive test pyramid
- Unit tests (70%): Fast, isolated, focused
- Integration tests (20%): Test component interactions
- E2E tests (10%): Critical user journeys
- Use proper test data management
- Implement proper test isolation

## Test Types
- **Functional Testing**: Feature validation, user acceptance
- **Non-Functional Testing**: Performance, security, usability
- **Regression Testing**: Automated testing of existing features
- **Smoke Testing**: Basic functionality verification
- **Sanity Testing**: Quick validation after deployments

## Test Automation Tools
- **Frontend**: Jest, Vitest, Cypress, Playwright, Selenium
- **Backend**: pytest, JUnit, Mocha, Jest
- **API**: Postman, Newman, REST Assured
- **Performance**: JMeter, K6, Artillery
- **Security**: OWASP ZAP, Burp Suite

## Test Data Management
- Use proper test data strategies
- Implement data factories and builders
- Use proper test data cleanup
- Implement data anonymization
- Use proper test environment management

## Quality Gates
- Implement proper code coverage thresholds
- Use proper quality metrics
- Implement proper review processes
- Use proper defect tracking
- Implement proper test reporting

## Performance Testing
- Load testing: Normal expected load
- Stress testing: Beyond normal capacity
- Volume testing: Large amounts of data
- Spike testing: Sudden load increases
- Endurance testing: Extended periods

## Security Testing
- Implement OWASP Top 10 testing
- Use proper penetration testing
- Implement proper vulnerability scanning
- Use proper security code review
- Implement proper compliance testing

## Test Documentation
- Write clear test cases
- Document test scenarios
- Maintain test documentation
- Use proper test reporting
- Document test environments

## Continuous Testing
- Integrate testing into CI/CD
- Implement proper test parallelization
- Use proper test result reporting
- Implement proper test maintenance
- Use proper test optimization