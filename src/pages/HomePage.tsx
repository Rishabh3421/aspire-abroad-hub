import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CountryCard from '@/components/CountryCard';
import EnquiryForm from '@/components/EnquiryForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import { 
  GraduationCap, 
  Briefcase, 
  Plane, 
  Home, 
  Building2, 
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Globe,
  Award,
  Shield,
  Clock,
  MapPin
} from 'lucide-react';
import heroBackground from '@/assets/hero-background-professional.jpg';
import managingDirector from '@/assets/managing-director-new.jpg';
import ukImage from '@/assets/countries/uk.jpg';
import canadaImage from '@/assets/countries/canada.jpg';
import australiaImage from '@/assets/countries/australia.jpg';
import usaImage from '@/assets/countries/usa.jpg';
import germanyImage from '@/assets/countries/germany.jpg';
import singaporeImage from '@/assets/countries/singapore.jpg';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const countries = [
    {
      name: 'Canada',
      flag: '🇨🇦',
      description: 'Study, work, PR opportunities with world-class education system and multicultural environment.',
      image: canadaImage,
      slug: 'canada'
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      description: 'High-quality education & skilled migration opportunities in beautiful cities.',
      image: australiaImage,
      slug: 'australia'
    },
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      description: 'Affordable study & excellent job prospects in historic universities.',
      image: ukImage,
      slug: 'uk'
    },
    {
      name: 'United States',
      flag: '🇺🇸',
      description: 'Leading universities & diverse career paths in the land of opportunities.',
      image: usaImage,
      slug: 'usa'
    },
    {
      name: 'Germany',
      flag: '🇩🇪',
      description: 'Free education & strong industrial opportunities in the heart of Europe.',
      image: germanyImage,
      slug: 'germany'
    },
    {
      name: 'Singapore',
      flag: '🇸🇬',
      description: 'Global business & study gateway with excellent career prospects.',
      image: singaporeImage,
      slug: 'singapore'
    }
  ];

  const services = [
    { icon: GraduationCap, title: 'Student Visas', description: 'Admission & visa guidance for world-class universities' },
    { icon: Briefcase, title: 'Work Visas', description: 'Secure global job opportunities with expert guidance' },
    { icon: Plane, title: 'Tourist & Visitor Visas', description: 'Travel made simple and hassle-free' },
    { icon: Home, title: 'PR & Immigration', description: 'Settle abroad permanently with confidence' },
    { icon: Building2, title: 'Business & Investor Visas', description: 'Global business expansion support' },
    { icon: Users, title: 'Family & Dependent Visas', description: 'Reunite with your loved ones abroad' }
  ];

  const whyChooseUs = [
    { icon: Award, title: '5+ Years of Expertise', description: 'Proven track record of success' },
    { icon: CheckCircle, title: '1000+ Successful Cases', description: 'High visa approval rate' },
    { icon: Users, title: 'Personalized Guidance', description: 'Case-by-case attention' },
    { icon: Shield, title: 'Transparent Process', description: '100% transparency in all dealings' },
    { icon: MapPin, title: 'Multiple Branches', description: 'Offices across India for easy access' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock assistance' }
  ];

  const testimonials = [
    {
      name: 'Riya Sharma',
      rating: 5,
      text: 'Easy World made my student visa process simple and stress-free. Highly recommended!',
      country: 'Canada'
    },
    {
      name: 'Arjun Mehta',
      rating: 5,
      text: 'Professional and trustworthy consultants. My PR approval came faster than expected.',
      country: 'Australia'
    },
    {
      name: 'Neha Kapoor',
      rating: 5,
      text: 'Thanks to Easy World, my family is now reunited in Canada. Excellent service!',
      country: 'Canada'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/60" />
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className={`text-white space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight">
                  Anywhere You Want to Be
                </h1>
                <p className="text-xl lg:text-2xl font-light">
                  Study. Work. Travel. Settle Abroad with Confidence.
                </p>
              </div>

              {/* Managing Director Highlight */}
              <div className="bg-accent/20 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Managing Director</p>
                    <p className="text-white/90">Expert Leadership & Guidance</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="xl" className="bg-accent hover:bg-accent/90 animate-float">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                  Free Consultation
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm text-white/80">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">1000+</div>
                  <div className="text-sm text-white/80">Success Stories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">99%</div>
                  <div className="text-sm text-white/80">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className={`${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-display font-bold text-primary mb-4">
                Welcome to Easy World Educational Consultant
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                For over 5 years, we have been guiding students, professionals, and families toward global opportunities. 
                From studying abroad to building careers, traveling, or reuniting with loved ones—we are your trusted partner 
                for every step of the journey.
              </p>
            </div>

            {/* Managing Director Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="animate-scale-in">
                <img 
                  src={managingDirector} 
                  alt="Managing Director" 
                  className="w-full rounded-2xl shadow-large"
                />
              </div>
              <div className="space-y-6 animate-fade-in">
                <div>
                  <Badge variant="secondary" className="mb-4">Meet Our Leader</Badge>
                  <h3 className="text-3xl font-display font-bold text-primary mb-4">
                    Managing Director - Easy World
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    With a passion for global education and immigration, our Managing Director founded Easy World 
                    to help people achieve their international dreams. Under his leadership, Easy World has grown 
                    to multiple branches across India, serving 1000+ happy clients with a focus on trust, success, 
                    and client satisfaction.
                  </p>
                  <blockquote className="text-xl font-medium text-primary italic border-l-4 border-accent pl-6">
                    "At Easy World, we don't just process visas—we help build futures."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive visa & immigration services for all your global needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift animate-scale-in border-0 shadow-soft">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Explore All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">
              Countries We Serve
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore global opportunities with our expert guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <CountryCard country={country} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">
              Why Choose Easy World?
            </h2>
            <p className="text-xl text-muted-foreground">
              Your success is our commitment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center animate-scale-in bg-white p-8 rounded-lg shadow-soft">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-primary">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              What our clients say about us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift animate-scale-in border-0 shadow-soft">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Settled in {testimonial.country}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Read More Success Stories
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-display font-bold">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl opacity-90">
              Get expert guidance from our experienced counselors and make your dreams a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                Book Free Consultation
              </Button>
              <WhatsAppButton
                phoneNumber="919050519168"
                message="Hello! I would like to book a free consultation for visa services. Please let me know the available time slots."
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
              >
                Call Now: 9050519168
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;