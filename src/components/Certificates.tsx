import { ExternalLink, Award } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      description:
        "AWS Certified Solutions Architect - Associate level certification demonstrating expertise in designing distributed systems on AWS. Covers architectural best practices, security, reliability, performance efficiency, cost optimization, and operational excellence.",
      image: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
      issuer: "Amazon Web Services",
      issueDate: "2024",
      credentialUrl: "https://www.credly.com/badges/654fa071-ca08-4f26-9473-2abf58642496/public_url",
      category: "Cloud Computing"
    }
  ];

  return (
    <section id="certificates" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise in cloud computing, DevOps, and modern software development practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <div
              key={certificate.title}
              className="certificate-card animate-on-scroll group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(certificate.credentialUrl, '_blank')}
            >
              <div className="relative overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-48 object-contain bg-white p-4 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {certificate.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <Award className="text-primary" size={24} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {certificate.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {certificate.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {certificate.issuer}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Issued {certificate.issueDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-primary font-medium">
                  <ExternalLink size={16} />
                  <span>Verify Credential</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-muted-foreground">
            Click on any certificate to view and verify the credential
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates; 