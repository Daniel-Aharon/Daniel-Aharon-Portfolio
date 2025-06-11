
import { ArrowDown, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-devops-dark via-devops-darker to-devops-dark">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMGQ0ZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium mb-6">
              DevOps Engineer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-white">Daniel</span>
            <span className="block gradient-text">Aharon</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Building scalable infrastructure and automating deployments with 
            <span className="text-devops-cyan font-medium"> AWS</span>, 
            <span className="text-devops-orange font-medium"> Docker</span>, and 
            <span className="text-devops-purple font-medium"> Terraform</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#projects"
              className="btn-primary animate-glow"
            >
              View My Work
              <ArrowDown size={20} />
            </a>
            <a
              href="https://github.com/Daniel-Aharon"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              <Github size={20} />
              GitHub Profile
            </a>
          </div>

          {/* Floating Tech Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-md mx-auto">
            {[
              { name: 'AWS', icon: '☁️', delay: '0s' },
              { name: 'Docker', icon: '🐳', delay: '0.5s' },
              { name: 'Terraform', icon: '🏗️', delay: '1s' },
              { name: 'GitHub', icon: '⚡', delay: '1.5s' }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="text-center animate-float"
                style={{ animationDelay: tech.delay }}
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="text-sm text-slate-400 font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ArrowDown className="text-white/60" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
