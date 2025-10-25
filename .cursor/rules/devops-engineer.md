---
description: DevOps Engineering Guidelines
globs: ["Dockerfile*", "docker-compose*.yml", ".github/workflows/**/*", "*.yml", "*.yaml", "terraform/**/*", "k8s/**/*", "kubernetes/**/*", "scripts/**/*", "deploy/**/*", ".gitlab-ci.yml", "Jenkinsfile", "ansible/**/*", "pulumi/**/*"]
alwaysApply: true
---

# DevOps Engineering Guidelines

## Multi-Job CI/CD Pipeline Best Practices

### Job Separation Strategy
- **Build Job**: Code compilation, linting, type checking, artifact creation
- **Test Job**: Security scanning, quality gates, test execution
- **Deploy Job**: Infrastructure deployment, service updates, notifications

### Job Dependencies
```yaml
jobs:
  build:
    # runs first, creates artifacts
  test:
    needs: build  # waits for build completion
  deploy:
    needs: test   # waits for test completion
```

### Artifact Management
- Upload artifacts after successful build
- Download artifacts in dependent jobs
- Use consistent artifact names across jobs
- Set appropriate retention periods (1-7 days)
- Ensure artifacts are properly cleaned up

### Quality Gates
- Implement fail-fast strategies
- Run linting and type checking before build
- Security scanning before deployment
- Build validation before artifact creation
- Test execution before deployment

## Infrastructure as Code (IaC)
- Use Terraform for cloud infrastructure
- Use Pulumi for multi-language IaC
- Use Ansible for configuration management
- Version control all infrastructure code
- Use modules and reusable components
- Implement proper state management

## Containerization
- Use multi-stage Docker builds
- Optimize Docker images for size
- Use specific version tags, avoid `latest`
- Implement proper health checks
- Use .dockerignore files
- Follow Docker best practices

## CI/CD Pipeline
- Implement automated testing in pipelines
- Use proper branching strategies (GitFlow, GitHub Flow)
- Implement automated security scanning
- Use proper secrets management
- Implement rollback strategies
- Use proper environment promotion
- Separate PR checks from deployment workflows
- Use workflow_dispatch for manual triggers

## Cloud Platforms
- **AWS**: Use proper IAM roles, VPC configuration, RDS, S3, CloudFront
- **Azure**: Use Resource Groups, App Service, Azure SQL, CDN
- **GCP**: Use proper project structure, Cloud Run, Cloud SQL, Cloud CDN
- **Multi-cloud**: Implement cloud-agnostic solutions

## Monitoring & Observability
- Implement comprehensive logging (ELK stack, Fluentd)
- Use proper metrics collection (Prometheus, Grafana)
- Implement distributed tracing (Jaeger, Zipkin)
- Set up proper alerting (PagerDuty, Slack)
- Monitor application performance (APM tools)

## Security
- Implement proper secrets management (HashiCorp Vault, AWS Secrets Manager)
- Use proper network security (VPC, Security Groups)
- Implement automated security scanning
- Use proper access controls and RBAC
- Implement compliance monitoring

## Kubernetes
- Use proper resource limits and requests
- Implement proper health checks
- Use ConfigMaps and Secrets appropriately
- Implement proper service mesh (Istio, Linkerd)
- Use proper ingress controllers
- Implement proper backup strategies

## Automation
- Automate repetitive tasks
- Use proper scripting (Bash, Python, PowerShell)
- Implement proper error handling in scripts
- Use proper configuration management
- Implement proper backup automation