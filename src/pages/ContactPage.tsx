import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  Users,
  Building2,
  Globe
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      duration: 5000,
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const branches = [
    {
      name: 'Head Office - Indore',
      address: 'Mahalaxmi Nagar, Vijay Nagar, Indore – 452010',
      phone: '9050519168, 8950023501',
      email: 'mdeasyworld@gmail.com',
      isHeadOffice: true,
      hours: 'Mon-Sat: 9:00 AM - 7:00 PM'
    },
    {
      name: 'Assandh Branch',
      address: 'Assandh, Haryana',
      phone: '8396000445',
      email: 'mdeasyworld@gmail.com',
      isHeadOffice: false,
      hours: 'Mon-Sat: 10:00 AM - 6:00 PM'
    },
    {
      name: 'Panipat Branch',
      address: 'Panipat, Haryana',
      phone: '8396000445',
      email: 'mdeasyworld@gmail.com',
      isHeadOffice: false,
      hours: 'Mon-Sat: 10:00 AM - 6:00 PM'
    },
    {
      name: 'Sonipat Branch',
      address: 'Sonipat, Haryana',
      phone: '8396000445',
      email: 'mdeasyworld@gmail.com',
      isHeadOffice: false,
      hours: 'Mon-Sat: 10:00 AM - 6:00 PM'
    },
    {
      name: 'Indri Branch',
      address: 'Indri, Haryana',
      phone: '8396000445',
      email: 'mdeasyworld@gmail.com',
      isHeadOffice: false,
      hours: 'Mon-Sat: 10:00 AM - 6:00 PM'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our counselors',
      contact: '9050519168, 8950023501, 8396000445',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your queries and documents',
      contact: 'mdeasyworld@gmail.com',
      action: 'Send Email'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      description: 'Quick support via WhatsApp',
      contact: '9050519168',
      action: 'Chat Now'
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed animate-slide-up">
              Get in touch with our expert counselors. We're here to help you achieve 
              your global dreams with personalized guidance and support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose your preferred method of communication
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={index} className="hover-lift animate-scale-in border-0 shadow-soft text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-primary mb-3">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {method.description}
                    </p>
                    <p className="font-medium text-primary mb-6">
                      {method.contact}
                    </p>
                    <Button variant="outline" className="w-full">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-display font-bold text-primary mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <Card className="border-0 shadow-soft">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input 
                            id="firstName" 
                            placeholder="Your first name" 
                            required 
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input 
                            id="lastName" 
                            placeholder="Your last name" 
                            required 
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your.email@example.com" 
                          required 
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+91 98765 43210" 
                          required 
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="service">Service Interested In *</Label>
                        <Select required>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="student">Student Visa</SelectItem>
                            <SelectItem value="work">Work Visa</SelectItem>
                            <SelectItem value="pr">Permanent Residency</SelectItem>
                            <SelectItem value="tourist">Tourist Visa</SelectItem>
                            <SelectItem value="business">Business Visa</SelectItem>
                            <SelectItem value="family">Family/Dependent Visa</SelectItem>
                            <SelectItem value="consultation">General Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="country">Preferred Country</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select preferred country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="canada">Canada</SelectItem>
                            <SelectItem value="australia">Australia</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="germany">Germany</SelectItem>
                            <SelectItem value="singapore">Singapore</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your goals, background, and any specific questions you have..."
                          required 
                          className="mt-1 min-h-[120px]"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                        disabled={isSubmitting}
                        size="lg"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="loader w-4 h-4 mr-2" />
                            Sending Message...
                          </div>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-display font-bold text-primary mb-4">
                    Visit Our Offices
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    We have multiple locations across India for your convenience.
                  </p>
                </div>

                <div className="space-y-6">
                  {branches.map((branch, index) => (
                    <Card key={index} className="border-0 shadow-soft">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                            branch.isHeadOffice 
                              ? 'bg-gradient-to-br from-primary to-accent text-white' 
                              : 'bg-secondary text-secondary-foreground'
                          }`}>
                            {branch.isHeadOffice ? <Building2 className="w-6 h-6" /> : <MapPin className="w-6 h-6" />}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="text-lg font-display font-semibold text-primary">
                                {branch.name}
                              </h3>
                              {branch.isHeadOffice && (
                                <Badge variant="secondary" className="text-xs">
                                  HQ
                                </Badge>
                              )}
                            </div>
                            <div className="space-y-2 text-sm text-muted-foreground">
                              <div className="flex items-start space-x-2">
                                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span>{branch.address}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4 flex-shrink-0" />
                                <span>{branch.phone}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4 flex-shrink-0" />
                                <span>{branch.email}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4 flex-shrink-0" />
                                <span>{branch.hours}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick Stats */}
                <Card className="border-0 shadow-soft mt-8">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-primary mb-4">
                      Why Clients Choose Us
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">5+</div>
                        <div className="text-xs text-muted-foreground">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">1000+</div>
                        <div className="text-xs text-muted-foreground">Happy Clients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">99%</div>
                        <div className="text-xs text-muted-foreground">Success Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">24/7</div>
                        <div className="text-xs text-muted-foreground">Support</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">FAQ</Badge>
              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: 'How long does the visa process take?',
                  answer: 'Processing times vary by country and visa type, typically ranging from 2-6 months. We provide regular updates throughout the process.'
                },
                {
                  question: 'What documents do I need?',
                  answer: 'Required documents vary by visa type. Our consultants provide a personalized checklist based on your specific case and destination.'
                },
                {
                  question: 'Do you guarantee visa approval?',
                  answer: 'While we cannot guarantee approval, we have a 99% success rate due to our thorough assessment and preparation process.'
                },
                {
                  question: 'What are your consultation fees?',
                  answer: 'We offer free initial consultations. Service fees vary by complexity. We provide transparent pricing with no hidden costs.'
                },
                {
                  question: 'Do you help with post-arrival services?',
                  answer: 'Yes, we provide pre-departure orientation and can connect you with settlement services in your destination country.'
                },
                {
                  question: 'Can I track my application status?',
                  answer: 'Absolutely! We provide regular updates and you can always contact us for the latest status of your application.'
                }
              ].map((faq, index) => (
                <Card key={index} className="border-0 shadow-soft">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-display font-bold">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl opacity-90">
              Don't wait any longer. Contact our expert team today and take the first step 
              towards your global dreams.
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

export default ContactPage;