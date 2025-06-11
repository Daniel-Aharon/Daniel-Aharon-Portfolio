
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Multi-Tier AWS Infrastructure",
      description: "Designed and deployed a scalable 3-tier architecture on AWS using Terraform, featuring Auto Scaling, Load Balancers, and RDS with automated backup strategies.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      technologies: ["AWS", "Terraform", "EC2", "RDS", "CloudWatch"],
      githubUrl: "https://github.com/Daniel-Aharon/aws-infrastructure",
      liveUrl: "#",
      category: "Infrastructure"
    },
    {
      title: "Containerized Microservices Platform",
      description: "Built a complete microservices deployment pipeline using Docker, Kubernetes, and Helm charts with integrated monitoring and logging solutions.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["Docker", "Kubernetes", "Helm", "Prometheus", "Grafana"],
      githubUrl: "https://github.com/Daniel-Aharon/k8s-microservices",
      liveUrl: "#",
      category: "Containerization"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Implemented comprehensive CI/CD pipelines using GitHub Actions with automated testing, security scanning, and multi-environment deployments.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["GitHub Actions", "Jest", "SonarQube", "AWS", "Docker"],
      githubUrl: "https://github.com/Daniel-Aharon/cicd-pipeline",
      liveUrl: "#",
      category: "CI/CD"
    },
    {
      title: "Infrastructure Monitoring Stack",
      description: "Deployed comprehensive monitoring solution with Prometheus, Grafana, and ELK stack for real-time infrastructure and application monitoring.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop",
      technologies: ["Prometheus", "Grafana", "Elasticsearch", "Kibana", "Logstash"],
      githubUrl: "https://github.com/Daniel-Aharon/monitoring-stack",
      liveUrl: "#",
      category: "Monitoring"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world DevOps solutions showcasing infrastructure automation, containerization, and cloud-native architectures
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                    <span className="font-medium">Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                    <span className="font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <a
            href="https://github.com/Daniel-Aharon"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
