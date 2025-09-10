import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin,
  MessageSquare
} from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Countries', href: '/countries' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    'Student Visas',
    'Work Visas',
    'Tourist Visas',
    'PR & Immigration',
    'Business Visas',
    'Family Visas'
  ];

  const countries = [
    'Canada',
    'Australia',
    'United Kingdom', 
    'United States',
    'Germany',
    'Singapore'
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-lg">
                EW
              </div>
              <div>
                <h3 className="font-display font-bold text-xl leading-tight">
                  Easy World
                </h3>
                <p className="text-xs opacity-80 -mt-1">Educational Consultant</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-6">
              Your trusted partner for global opportunities. We help students, professionals, 
              and families achieve their international dreams with expert guidance and support.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services"
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 opacity-80" />
                <div className="text-sm opacity-90">
                  <p className="font-medium mb-1">Head Office</p>
                  <p>Mahalaxmi Nagar, Vijay Nagar</p>
                  <p>Indore – 452010</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 flex-shrink-0 opacity-80" />
                <div className="text-sm opacity-90">
                  <p>9050519168, 8950023501</p>
                  <p>8396000445</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0 opacity-80" />
                <p className="text-sm opacity-90">mdeasyworld@gmail.com</p>
              </div>
              <div className="pt-4">
                <Button 
                  variant="cta" 
                  size="sm" 
                  className="w-full"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp: 9050519168
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80 text-center md:text-left">
              <p>© 2024 Easy World Educational Consultant. All rights reserved.</p>
              <p className="mt-1">
                Easy World Educational Consultant is an independent consultancy providing visa and immigration guidance. 
                We are not affiliated with any government authority.
              </p>
            </div>
            <div className="flex space-x-6 text-xs opacity-80">
              <Link to="/privacy" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:opacity-100 transition-opacity">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;