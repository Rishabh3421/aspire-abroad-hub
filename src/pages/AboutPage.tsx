import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Users, 
  Globe, 
  CheckCircle, 
  Target, 
  Heart,
  Building2,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import managingDirector from '@/assets/managing-director.jpg';

const AboutPage: React.FC = () => {
  const achievements = [
    { icon: Award, title: '5+ Years', description: 'Of Excellence in Immigration Services' },
    { icon: Users, title: '1000+', description: 'Successful Cases Processed' },
    { icon: Globe, title: '8+', description: 'Countries We Serve' },
    { icon: CheckCircle, title: '99%', description: 'Visa Success Rate' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide, ensuring the highest standards of professionalism and quality.'
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'We genuinely care about our clients\' dreams and work tirelessly to make them a reality with personalized attention.'
    },
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'We maintain complete transparency and honesty in all our dealings, building trust through reliable service.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We see ourselves as partners in your journey, not just service providers, supporting you every step of the way.'
    }
  ];

  const branches = [
    {
      name: 'Head Office - Indore',
      address: 'Mahalaxmi Nagar, Vijay Nagar, Indore – 452010',
      isHeadOffice: true
    },
    {
      name: 'Assandh Branch',
      address: 'Assandh, Haryana',
      isHeadOffice: false
    },
    {
      name: 'Panipat Branch',
      address: 'Panipat, Haryana',
      isHeadOffice: false
    },
    {
      name: 'Sonipat Branch',
      address: 'Sonipat, Haryana',
      isHeadOffice: false
    },
    {
      name: 'Indri Branch',
      address: 'Indri, Haryana',
      isHeadOffice: false
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in">
              About Easy World
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed animate-slide-up">
              Your trusted partner for global opportunities, turning dreams into destinations 
              with expert guidance and unwavering support.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">Our Story</Badge>
              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                Welcome to Easy World Educational Consultant
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                For over 5 years, we have been guiding students, professionals, and families toward global opportunities. 
                We are more than a consultancy—we are dream builders, combining expertise, transparency, and personalized 
                support to achieve your global goals seamlessly.
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-20">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover-lift animate-scale-in border-0 shadow-soft">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Managing Director Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-scale-in">
                <img 
                  src={managingDirector} 
                  alt="Managing Director - Easy World Educational Consultant" 
                  className="w-full rounded-2xl shadow-large"
                />
              </div>
              <div className="space-y-6 animate-fade-in">
                <div>
                  <Badge variant="secondary" className="mb-4">Leadership</Badge>
                  <h3 className="text-3xl font-display font-bold text-primary mb-4">
                    Meet Our Managing Director
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    With a passion for global education and immigration, our Managing Director founded Easy World 
                    to help people achieve their international dreams. His vision has transformed countless lives, 
                    providing pathways to success across the globe.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Under his leadership, Easy World has grown to multiple branches across India, serving 1000+ 
                    happy clients with a focus on trust, success, and client satisfaction. His commitment to 
                    excellence has made Easy World a trusted name in immigration services.
                  </p>
                  <blockquote className="text-xl font-medium text-primary italic border-l-4 border-accent pl-6 mb-6">
                    "At Easy World, we don't just process visas—we help build futures. Every client's success 
                    is a testament to our dedication and expertise."
                  </blockquote>
                  <Button variant="hero" size="lg">
                    Schedule a Meeting
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">Our Services</Badge>
              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                What We Do
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive immigration and educational consultancy services tailored to your unique needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Student Visas', 
                  description: 'Study at leading global universities with our complete admission and visa guidance.',
                  icon: '🎓'
                },
                { 
                  title: 'Work Visas', 
                  description: 'Build your international career with expert work visa consultation and job placement support.',
                  icon: '💼'
                },
                { 
                  title: 'Tourist & Visitor Visas', 
                  description: 'Explore the world hassle-free with our tourist visa services and travel guidance.',
                  icon: '✈️'
                },
                { 
                  title: 'PR & Immigration', 
                  description: 'Secure your permanent residency abroad with our comprehensive immigration services.',
                  icon: '🏠'
                },
                { 
                  title: 'Business & Investor Visas', 
                  description: 'Expand your ventures globally with business visa support and investment guidance.',
                  icon: '🏢'
                },
                { 
                  title: 'Family & Dependent Visas', 
                  description: 'Keep your loved ones close with family reunification and dependent visa services.',
                  icon: '👨‍👩‍👧‍👦'
                }
              ].map((service, index) => (
                <Card key={index} className="hover-lift animate-scale-in border-0 shadow-soft">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
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
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold mb-6">
                Our Core Values
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                The principles that guide everything we do at Easy World
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center animate-scale-in">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-4">
                    {value.title}
                  </h3>
                  <p className="opacity-90 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Our Commitment</Badge>
            <h2 className="text-4xl font-display font-bold text-primary mb-6">
              Our Promise to You
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              At Easy World, your dream is our mission. We don't just process visas—we help shape futures 
              without borders. Our personalized approach ensures that every client receives the attention 
              and expertise they deserve on their journey to global success.
            </p>
            <Button variant="hero" size="xl">
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">Our Presence</Badge>
              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                Our Branches
              </h2>
              <p className="text-xl text-muted-foreground">
                Easy access with multiple locations across India
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {branches.map((branch, index) => (
                <Card key={index} className="hover-lift animate-scale-in border-0 shadow-soft">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        branch.isHeadOffice 
                          ? 'bg-gradient-to-br from-primary to-accent text-white' 
                          : 'bg-secondary text-secondary-foreground'
                      }`}>
                        {branch.isHeadOffice ? <Building2 className="w-6 h-6" /> : <MapPin className="w-6 h-6" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-display font-semibold text-primary mb-2">
                          {branch.name}
                          {branch.isHeadOffice && <Badge variant="secondary" className="ml-2 text-xs">HQ</Badge>}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {branch.address}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-16 text-center">
              <Card className="max-w-2xl mx-auto border-0 shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-display font-bold text-primary mb-6">
                    Get in Touch
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-accent" />
                      <div className="text-left">
                        <p className="font-medium">Call Us</p>
                        <p className="text-sm text-muted-foreground">9050519168, 8950023501</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-accent" />
                      <div className="text-left">
                        <p className="font-medium">Email Us</p>
                        <p className="text-sm text-muted-foreground">mdeasyworld@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;