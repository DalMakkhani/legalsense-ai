import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, MessageCircle, Users, Globe, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Document Summarizer",
      description: "Upload legal documents and get clear, concise summaries in your preferred language",
      features: ["Multi-language support", "Instant analysis", "Key points extraction", "Legal terminology simplified"],
      link: "/services/document-analyzer"
    },
    {
      icon: MessageCircle,
      title: "AI Legal Assistant",
      description: "Get personalized legal guidance through our intelligent chatbot",
      features: ["24/7 availability", "Situation-specific advice", "Next steps guidance", "Case preparation help"],
      link: "/services/legal-chat"
    },
    {
      icon: Users,
      title: "Lawyer Marketplace",
      description: "Find and connect with verified lawyers in your area",
      features: ["Verified credentials", "Reviews & ratings", "Price comparison", "Location-based search"],
      link: "/services/find-lawyers"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive legal assistance tools designed to make legal processes accessible to everyone
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.link}>
                  <Button variant="professional" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Multi-Language Support</h3>
            <p className="text-muted-foreground">
              Get legal assistance in your preferred language with our advanced translation capabilities
            </p>
          </div>
          
          <div className="text-center">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure & Confidential</h3>
            <p className="text-muted-foreground">
              Your legal documents and conversations are protected with enterprise-grade security
            </p>
          </div>
          
          <div className="text-center">
            <Star className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
            <p className="text-muted-foreground">
              All lawyers are verified with proper licensing and credentials before joining our platform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;