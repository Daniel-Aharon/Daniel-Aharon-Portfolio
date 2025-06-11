
import { useState } from 'react';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with a form service like Netlify Forms or Formspree
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or just connect about DevOps and cloud technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a 
                    href="mailto:daniel.aharon@example.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    daniel.aharon@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Tel Aviv, Israel</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Linkedin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/daniel-aharon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    /in/daniel-aharon
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-semibold mb-4">Available for:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• DevOps consulting and architecture review</li>
                <li>• Cloud migration and optimization</li>
                <li>• CI/CD pipeline implementation</li>
                <li>• Mentoring and knowledge sharing</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary justify-center"
              >
                Send Message
                <Mail size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
