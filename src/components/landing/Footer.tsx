import { Scale, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-8 w-8" />
              <span className="font-bold text-xl">LegalAid</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Making legal assistance accessible to everyone through AI-powered document analysis, 
              expert guidance, and verified lawyer connections.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>support@legalaid.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Legal District, City, State</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link to="/services/document-analyzer" className="hover:text-primary-foreground transition-colors">
                  Document Analyzer
                </Link>
              </li>
              <li>
                <Link to="/services/legal-chat" className="hover:text-primary-foreground transition-colors">
                  Legal Chatbot
                </Link>
              </li>
              <li>
                <Link to="/services/find-lawyers" className="hover:text-primary-foreground transition-colors">
                  Find Lawyers
                </Link>
              </li>
              <li>
                <a href="#consultation" className="hover:text-primary-foreground transition-colors">
                  Legal Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#privacy" className="hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-primary-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="hover:text-primary-foreground transition-colors">
                  Legal Disclaimer
                </a>
              </li>
              <li>
                <a href="#cookies" className="hover:text-primary-foreground transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2024 LegalAid. All rights reserved. | Professional legal platform for citizens.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;