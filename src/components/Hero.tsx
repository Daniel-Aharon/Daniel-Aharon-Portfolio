
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const techIcons = [
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '⚙️' },
    { name: 'Terraform', icon: '🏗️' },
    { name: 'Jenkins', icon: '🔄' },
    { name: 'Python', icon: '🐍' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center animate-on-scroll">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground">
              Daniel Aharon
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-accent mb-6">
              DevOps Engineer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experienced in automation, cloud infrastructure, and CI/CD implementation. 
              Specializing in scalable solutions with modern DevOps practices and cloud-native technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowDown className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-card rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-card rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {techIcons.map((tech, index) => (
              <div key={index} className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border hover:border-accent transition-all duration-300">
                <span className="text-xl">{tech.icon}</span>
                <span className="text-sm font-medium text-muted-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
