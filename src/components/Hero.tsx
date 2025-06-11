import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const techStack = [
    'AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Python'
  ];

  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-background relative">
      <div className="container-custom relative z-10">
        <div className="text-center animate-on-scroll max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal mb-8 leading-tight text-foreground tracking-tight">
              Daniel Aharon
            </h1>
            <div className="w-24 h-px bg-foreground mx-auto mb-8"></div>
            <h2 className="text-2xl md:text-3xl font-normal text-muted-foreground mb-8 tracking-wide">
              DevOps Engineer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed classical-text">
              Specialized in cloud infrastructure automation, containerization, and scalable deployment solutions. 
              Building resilient systems with modern DevOps practices.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a href="#projects" className="btn-primary">
              View Work
              <ArrowDown className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact
            </a>
            <a href="/Daniel%20Aharon-Resume.pdf" download className="btn-secondary">
              Download CV
            </a>
          </div>

          <div className="flex justify-center gap-8 mb-16">
            <a href="https://github.com/Daniel-Aharon" target="_blank" rel="noopener noreferrer" 
               className="p-4 hover:bg-secondary rounded-sm transition-all duration-300 group">
              <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
            <a href="https://linkedin.com/in/daniel-aharon5" target="_blank" rel="noopener noreferrer"
               className="p-4 hover:bg-secondary rounded-sm transition-all duration-300 group">
              <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
            <a href="mailto:danielaharon53@gmail.com"
               className="p-4 hover:bg-secondary rounded-sm transition-all duration-300 group">
              <Mail className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => (
              <span key={index} className="text-sm font-medium text-muted-foreground border-b border-muted-foreground/30 pb-1 hover:border-foreground hover:text-foreground transition-all duration-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
