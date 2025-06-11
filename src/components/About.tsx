
const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate DevOps engineer with a strong foundation in cloud infrastructure, 
                automation, and continuous integration/deployment. My journey in technology began 
                with a curiosity about how systems work together to deliver seamless user experiences.
              </p>
              
              <p>
                Currently specializing in AWS cloud services, I design and implement scalable 
                infrastructure solutions using Infrastructure as Code principles. I'm particularly 
                enthusiastic about container orchestration, monitoring solutions, and security best practices.
              </p>
              
              <p>
                When I'm not optimizing CI/CD pipelines or troubleshooting distributed systems, 
                you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the DevOps community.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-card/50 p-4 rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary mb-1">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-card/50 p-4 rounded-lg border border-border/50">
                <div className="text-2xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 backdrop-blur-sm border border-border/50">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Daniel Aharon"
                  className="w-full max-w-sm mx-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-full shadow-lg">
                <span className="text-2xl">☁️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
