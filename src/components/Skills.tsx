
const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: "☁️",
      skills: [
        { name: "AWS", level: 90, icon: "🔶" },
        { name: "Azure", level: 75, icon: "🔷" },
        { name: "Google Cloud", level: 70, icon: "🔴" }
      ]
    },
    {
      title: "Containerization",
      icon: "📦",
      skills: [
        { name: "Docker", level: 95, icon: "🐳" },
        { name: "Kubernetes", level: 85, icon: "⚙️" },
        { name: "Docker Compose", level: 90, icon: "🔧" }
      ]
    },
    {
      title: "Infrastructure as Code",
      icon: "🏗️",
      skills: [
        { name: "Terraform", level: 90, icon: "🌍" },
        { name: "CloudFormation", level: 80, icon: "📋" },
        { name: "Ansible", level: 75, icon: "🔴" }
      ]
    },
    {
      title: "CI/CD & Monitoring",
      icon: "🔄",
      skills: [
        { name: "GitHub Actions", level: 90, icon: "⚡" },
        { name: "Jenkins", level: 80, icon: "🔧" },
        { name: "Prometheus", level: 85, icon: "📊" }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building, deploying, and maintaining modern infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="tech-card animate-on-scroll"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 animate-on-scroll">
          <h3 className="text-2xl font-bold text-center mb-8">Certifications & Learning Path</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "AWS Solutions Architect", status: "In Progress", icon: "🏆" },
              { name: "Terraform Associate", status: "Planned", icon: "📜" },
              { name: "CKA (Kubernetes)", status: "Studying", icon: "⚡" }
            ].map((cert) => (
              <div key={cert.name} className="bg-card p-6 rounded-lg border border-border text-center">
                <div className="text-2xl mb-2">{cert.icon}</div>
                <h4 className="font-semibold mb-1">{cert.name}</h4>
                <span className="text-sm text-primary font-medium">{cert.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
