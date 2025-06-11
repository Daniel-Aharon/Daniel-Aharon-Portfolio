
const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-normal mb-8 text-foreground">
              About
            </h2>
            <div className="w-16 h-px bg-foreground mb-12"></div>
            
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed classical-text">
              <p>
                I am a DevOps Engineer with expertise in cloud infrastructure automation and 
                modern deployment practices. My focus lies in building scalable, resilient 
                systems that enable teams to deliver software efficiently and reliably.
              </p>
              
              <p>
                With hands-on experience in containerization technologies like Docker and 
                Kubernetes, I design and implement CI/CD pipelines that streamline development 
                workflows. My proficiency with Infrastructure as Code tools, particularly 
                Terraform and Ansible, allows me to manage AWS resources systematically.
              </p>
              
              <p>
                I am committed to implementing industry best practices for monitoring, 
                security, and deployment automation while maintaining high standards for 
                system reliability and performance optimization.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="border-l-2 border-border pl-6">
                <div className="text-sm font-medium text-muted-foreground mb-2">SPECIALIZATION</div>
                <div className="text-lg font-medium text-foreground">Cloud Infrastructure</div>
              </div>
              <div className="border-l-2 border-border pl-6">
                <div className="text-sm font-medium text-muted-foreground mb-2">PLATFORM</div>
                <div className="text-lg font-medium text-foreground">Amazon Web Services</div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll lg:mt-16">
            <div className="relative">
              <div className="bg-secondary/30 p-12 rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                  alt="Daniel Aharon"
                  className="w-full max-w-sm mx-auto rounded-sm shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
