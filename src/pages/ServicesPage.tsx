import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  GraduationCap, 
  Briefcase, 
  Plane, 
  Home, 
  Building2, 
  Users,
  CheckCircle,
  ArrowRight,
  FileText,
  CreditCard,
  Clock,
  Award,
  Globe,
  Shield
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 'student',
      icon: GraduationCap,
      title: 'Student Visas',
      subtitle: 'Study at World-Class Universities',
      description: 'Complete admission and visa guidance for international education opportunities.',
      features: [
        'University selection and application',
        'Scholarship guidance and financial planning',
        'Visa documentation and interview preparation',
        'Pre-departure orientation and support',
        'Accommodation and travel assistance'
      ],
      process: [
        'Initial consultation and profile assessment',
        'University shortlisting based on profile',
        'Application preparation and submission',
        'Visa documentation and filing',
        'Interview preparation and mock sessions',
        'Pre-departure briefing and support'
      ],
      countries: ['Canada', 'Australia', 'UK', 'USA', 'Germany', 'New Zealand']
    },
    {
      id: 'work',
      icon: Briefcase,
      title: 'Work Visas',
      subtitle: 'Build Your International Career',
      description: 'Expert guidance for work visa applications and global career opportunities.',
      features: [
        'Job market analysis and opportunities',
        'Resume optimization for international standards',
        'Work permit and visa documentation',
        'Employer liaison and job placement',
        'Family visa coordination'
      ],
      process: [
        'Career assessment and goal setting',
        'Job market research and opportunities',
        'Resume and profile enhancement',
        'Employer matching and applications',
        'Work visa documentation',
        'Pre-departure and settlement support'
      ],
      countries: ['Canada', 'Australia', 'Germany', 'USA', 'Singapore', 'UAE']
    },
    {
      id: 'tourist',
      icon: Plane,
      title: 'Tourist & Visitor Visas',
      subtitle: 'Explore the World Hassle-Free',
      description: 'Simple and efficient tourist visa services for your travel dreams.',
      features: [
        'Tourist visa documentation',
        'Travel itinerary planning',
        'Travel insurance guidance',
        'Embassy appointment scheduling',
        'Visa tracking and updates'
      ],
      process: [
        'Travel consultation and planning',
        'Documentation preparation',
        'Visa application submission',
        'Embassy appointments',
        'Visa collection and travel briefing'
      ],
      countries: ['USA', 'UK', 'Canada', 'Australia', 'Europe', 'Singapore']
    },
    {
      id: 'pr',
      icon: Home,
      title: 'Permanent Residency & Immigration',
      subtitle: 'Settle Abroad Permanently',
      description: 'Comprehensive immigration services for permanent residency applications.',
      features: [
        'Eligibility assessment and point calculation',
        'Provincial nomination programs',
        'Express entry and skilled migration',
        'Investment and entrepreneur programs',
        'Family reunification services'
      ],
      process: [
        'Immigration assessment and consultation',
        'Program selection and strategy',
        'Documentation and application preparation',
        'Submission and case monitoring',
        'Landing and settlement services'
      ],
      countries: ['Canada', 'Australia', 'New Zealand', 'USA', 'Germany']
    },
    {
      id: 'business',
      icon: Building2,
      title: 'Business & Investor Visas',
      subtitle: 'Expand Your Business Globally',
      description: 'Support for business expansion and investment opportunities abroad.',
      features: [
        'Business plan development',
        'Investment opportunity analysis',
        'Investor visa applications',
        'Business setup guidance',
        'Legal and regulatory compliance'
      ],
      process: [
        'Business assessment and planning',
        'Investment analysis and strategy',
        'Business plan preparation',
        'Visa application and documentation',
        'Business setup and legal compliance'
      ],
      countries: ['Canada', 'Australia', 'USA', 'UK', 'Singapore']
    },
    {
      id: 'family',
      icon: Users,
      title: 'Family & Dependent Visas',
      subtitle: 'Reunite with Your Loved Ones',
      description: 'Family reunification and dependent visa services.',
      features: [
        'Spouse and partner visas',
        'Dependent children visas',
        'Parent and grandparent programs',
        'Family reunification planning',
        'Settlement support services'
      ],
      process: [
        'Relationship assessment and documentation',
        'Eligibility verification',
        'Application preparation and submission',
        'Case monitoring and updates',
        'Arrival and settlement support'
      ],
      countries: ['Canada', 'Australia', 'UK', 'USA', 'New Zealand']
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Expert Consultants',
      description: 'Certified immigration consultants with 5+ years of experience'
    },
    {
      icon: CheckCircle,
      title: 'High Success Rate',
      description: '99% visa approval rate with transparent processes'
    },
    {
      icon: Clock,
      title: 'Quick Processing',
      description: 'Fast-track services with regular updates and follow-ups'
    },
    {
      icon: Shield,
      title: 'Secure & Confidential',
      description: 'Complete privacy and security of your personal information'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Partnerships with universities and employers worldwide'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock assistance throughout your journey'
    }
  ];

  const documents = [
    'Passport (Valid for at least 6 months)',
    'Academic Certificates and Transcripts',
    'IELTS/TOEFL/PTE Score Reports',
    'Work Experience Letters',
    'Financial Statements and Bank Records',
    'Medical Examination Reports',
    'Police Clearance Certificates',
    'Photographs as per specifications',
    'Aadhar Card and PAN Card',
    'Birth Certificate and Family Documents'
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed animate-slide-up">
              Comprehensive visa and immigration services tailored for your global journey. 
              Expert guidance from consultation to settlement.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">What We Offer</Badge>
            <h2 className="text-4xl font-display font-bold text-primary mb-6">
              Visa & Immigration Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From student visas to permanent residency, we provide end-to-end solutions 
              for all your immigration needs with personalized attention and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift animate-scale-in border-0 shadow-soft group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-display font-semibold text-primary">
                    {service.title}
                  </CardTitle>
                  <p className="text-sm text-accent font-medium">
                    {service.subtitle}
                  </p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Information */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                Service Details
              </h2>
              <p className="text-xl text-muted-foreground">
                Explore our comprehensive service offerings in detail
              </p>
            </div>

            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
                {services.map((service) => (
                  <TabsTrigger key={service.id} value={service.id} className="text-xs">
                    {service.title.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {services.map((service) => (
                <TabsContent key={service.id} value={service.id}>
                  <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-display font-bold text-primary mb-4">
                          {service.title}
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-primary mb-4">Key Features</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-primary mb-4">Countries We Serve</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.countries.map((country, index) => (
                            <Badge key={index} variant="secondary">
                              {country}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <Card className="border-0 shadow-soft">
                        <CardHeader>
                          <CardTitle className="text-xl font-display font-semibold text-primary">
                            Our Process
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {service.process.map((step, index) => (
                              <div key={index} className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                  {index + 1}
                                </div>
                                <p className="text-muted-foreground">{step}</p>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      <div className="text-center">
                        <Button variant="hero" size="lg">
                          Get Started Today
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">Our Advantage</Badge>
              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                Why Choose Easy World?
              </h2>
              <p className="text-xl text-muted-foreground">
                Experience the difference with our expert team and proven track record
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="text-center hover-lift animate-scale-in border-0 shadow-soft">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold mb-6">
                Documents Required
              </h2>
              <p className="text-xl opacity-90">
                General document requirements for visa applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((document, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <FileText className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{document}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg opacity-90 mb-6">
                💡 Our experts guide you step by step through document preparation
              </p>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Get Free Checklist
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-display font-bold">
              Ready to Start Your Application?
            </h2>
            <p className="text-xl opacity-90">
              Get personalized consultation from our expert team and take the first step 
              towards your global journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                Book Free Consultation
              </Button>
              <Button variant="secondary" size="xl">
                Call: 9050519168
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;