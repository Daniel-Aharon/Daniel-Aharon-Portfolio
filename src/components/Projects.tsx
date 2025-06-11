import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Chat Bot Application",
      description:
        "A full-stack chat application with a React frontend and FastAPI backend, containerized using Docker. The project features a modern chat interface, real-time messaging via WebSockets, and robust CI/CD with GitHub Actions. Easily deployable with Docker Compose, it demonstrates cloud-native development and infrastructure automation.",
      image: "/chat_bot_pic.png",
      technologies: [
        "React",
        "FastAPI",
        "Docker",
        "Docker Compose",
        "GitHub Actions",
        "WebSockets",
        "Nginx",
        "Python"
      ],
      githubUrl: "https://github.com/Daniel-Aharon/Chat-Bot",
      liveUrl: "#",
      category: "Full Stack"
    },
    {
      title: "Scalable Web App Deployment with Docker & AWS",
      description:
        "A Dockerized Python Flask application with automated CI/CD pipelines using GitHub Actions. The project demonstrates building, testing, and deploying a web app to DockerHub and AWS EC2, with infrastructure managed via Terraform and integrated monitoring solutions.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: [
        "Python",
        "Flask",
        "Docker",
        "AWS EC2",
        "Terraform",
        "GitHub Actions",
        "DockerHub",
        "Monitoring"
      ],
      githubUrl: "https://github.com/Daniel-Aharon/Scalable-Web-App-Deployment-with-Docker-and-AWS",
      liveUrl: "#",
      category: "CI/CD & Cloud"
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
