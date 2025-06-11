
import { Server, Cloud, Code, Settings, GitBranch, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      skills: ["AWS EC2", "S3", "VPC", "IAM", "CloudFormation", "Lambda"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Containerization",
      skills: ["Docker", "Kubernetes", "Container Orchestration", "Helm Charts"]
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "CI/CD & Automation",
      skills: ["Jenkins", "GitHub Actions", "Pipeline Automation", "Build Management"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Infrastructure as Code",
      skills: ["Terraform", "Ansible", "Configuration Management", "Resource Provisioning"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Scripting & Development",
      skills: ["Python", "Bash", "PowerShell", "REST APIs"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Monitoring & Security",
      skills: ["CloudWatch", "Prometheus", "Security Best Practices", "Log Management"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Core competencies in modern DevOps practices and cloud technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="tech-card animate-on-scroll group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
