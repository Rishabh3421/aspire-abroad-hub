import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, CheckCircle, Clock, DollarSign, GraduationCap, Briefcase, Home, Users, Calendar, Globe } from 'lucide-react';
import ukImage from '@/assets/countries/uk.jpg';
import canadaImage from '@/assets/countries/canada.jpg';
import australiaImage from '@/assets/countries/australia.jpg';
import usaImage from '@/assets/countries/usa.jpg';
import germanyImage from '@/assets/countries/germany.jpg';
import singaporeImage from '@/assets/countries/singapore.jpg';

const CountryDetailPage: React.FC = () => {
  const { slug } = useParams();

  const countryData: Record<string, any> = {
    canada: {
      name: 'Canada',
      flag: '🇨🇦',
      image: canadaImage,
      overview: 'Canada is one of the world\'s most welcoming countries for immigrants, offering excellent education, healthcare, and quality of life. With its multicultural society and strong economy, Canada provides numerous pathways for students, skilled workers, and families.',
      quickFacts: {
        capital: 'Ottawa',
        language: 'English & French',
        currency: 'Canadian Dollar (CAD)',
        population: '38+ Million',
        timeZone: 'UTC-3.5 to UTC-8',
        education: 'World-class universities'
      },
      visaTypes: [
        {
          type: 'Student Visa',
          icon: GraduationCap,
          duration: '6-18 months',
          description: 'Study at top Canadian universities with post-graduation work opportunities'
        },
        {
          type: 'Express Entry',
          icon: Briefcase,
          duration: '6-12 months',
          description: 'Skilled worker immigration through federal economic programs'
        },
        {
          type: 'Provincial Nominee',
          icon: Home,
          duration: '12-18 months',
          description: 'Province-specific immigration programs for various skill levels'
        },
        {
          type: 'Family Sponsorship',
          icon: Users,
          duration: '12-24 months',
          description: 'Reunite with family members who are Canadian citizens or PR holders'
        }
      ],
      requirements: {
        student: [
          'Letter of acceptance from Canadian institution',
          'Proof of financial support (CAD $10,000+ per year)',
          'IELTS/TOEFL scores',
          'Medical examination',
          'No criminal record'
        ],
        work: [
          'Express Entry profile with minimum CRS score',
          'Language proficiency (CLB 7+)',
          'Educational credential assessment',
          'Work experience (NOC 0, A, or B)',
          'Proof of funds'
        ]
      },
      benefits: [
        'Universal healthcare system',
        'High quality of life',
        'Multicultural society',
        'Post-graduation work permits',
        'Pathway to permanent residency',
        'Safe and peaceful environment'
      ],
      topUniversities: [
        'University of Toronto',
        'University of British Columbia',
        'McGill University',
        'University of Alberta',
        'McMaster University'
      ],
      costs: {
        tuition: 'CAD $15,000 - $50,000/year',
        living: 'CAD $12,000 - $20,000/year',
        application: 'CAD $150 - $500'
      }
    },
    australia: {
      name: 'Australia',
      flag: '🇦🇺',
      image: australiaImage,
      overview: 'Australia offers world-class education, excellent career opportunities, and a high standard of living. Known for its points-based immigration system and friendly culture, Australia attracts students and skilled workers from around the globe.',
      quickFacts: {
        capital: 'Canberra',
        language: 'English',
        currency: 'Australian Dollar (AUD)',
        population: '25+ Million',
        timeZone: 'UTC+8 to UTC+11',
        education: 'Group of 8 universities'
      },
      visaTypes: [
        {
          type: 'Student Visa (500)',
          icon: GraduationCap,
          duration: '3-6 months',
          description: 'Study at Australian universities with work rights and post-study work visa'
        },
        {
          type: 'Skilled Independent (189)',
          icon: Briefcase,
          duration: '8-12 months',
          description: 'Points-based permanent residence for skilled workers'
        },
        {
          type: 'Skilled Nominated (190)',
          icon: Home,
          duration: '10-14 months',
          description: 'State-nominated skilled migration program'
        },
        {
          type: 'Partner Visa (820/801)',
          icon: Users,
          duration: '12-24 months',
          description: 'For partners of Australian citizens or permanent residents'
        }
      ],
      requirements: {
        student: [
          'Confirmation of Enrolment (CoE)',
          'Genuine Temporary Entrant (GTE) statement',
          'Financial capacity (AUD $21,000+/year)',
          'English proficiency (IELTS 6.0+)',
          'Health insurance (OSHC)'
        ],
        work: [
          'Skills assessment for nominated occupation',
          'Minimum 65 points in SkillSelect',
          'English proficiency (IELTS 6.0+)',
          'Age under 45 years',
          'Health and character requirements'
        ]
      },
      benefits: [
        'High-quality education system',
        'Work rights while studying',
        'Post-study work opportunities',
        'Excellent weather and lifestyle',
        'Strong job market',
        'Medicare healthcare system'
      ],
      topUniversities: [
        'Australian National University',
        'University of Melbourne',
        'University of Sydney',
        'University of Queensland',
        'Monash University'
      ],
      costs: {
        tuition: 'AUD $20,000 - $45,000/year',
        living: 'AUD $15,000 - $25,000/year',
        application: 'AUD $620 - $1,200'
      }
    },
    uk: {
      name: 'United Kingdom',
      flag: '🇬🇧',
      image: ukImage,
      overview: 'The UK is home to some of the world\'s oldest and most prestigious universities. With its rich history, cultural diversity, and strong academic tradition, the UK offers excellent educational opportunities and career prospects.',
      quickFacts: {
        capital: 'London',
        language: 'English',
        currency: 'British Pound (GBP)',
        population: '67+ Million',
        timeZone: 'UTC+0 to UTC+1',
        education: 'Russell Group universities'
      },
      visaTypes: [
        {
          type: 'Student Visa',
          icon: GraduationCap,
          duration: '3-8 weeks',
          description: 'Study at UK institutions with Graduate Route work visa option'
        },
        {
          type: 'Skilled Worker',
          icon: Briefcase,
          duration: '8-12 weeks',
          description: 'Work in the UK with a job offer from approved sponsor'
        },
        {
          type: 'Global Talent',
          icon: Home,
          duration: '8-12 weeks',
          description: 'For exceptional talent or promise in specific fields'
        },
        {
          type: 'Family Visa',
          icon: Users,
          duration: '12-24 weeks',
          description: 'Join family members who are UK citizens or settled persons'
        }
      ],
      requirements: {
        student: [
          'Confirmation of Acceptance for Studies (CAS)',
          'Financial requirements (£1,334/month)',
          'English language proficiency',
          'Tuberculosis test (if applicable)',
          'Academic qualifications'
        ],
        work: [
          'Job offer from UK employer',
          'Certificate of Sponsorship',
          'English language requirement',
          'Minimum salary threshold',
          'Maintenance funds'
        ]
      },
      benefits: [
        'World-renowned universities',
        'Graduate Route visa (2 years)',
        'Rich cultural heritage',
        'NHS healthcare access',
        'Gateway to Europe',
        'Strong research opportunities'
      ],
      topUniversities: [
        'University of Oxford',
        'University of Cambridge',
        'Imperial College London',
        'London School of Economics',
        'University College London'
      ],
      costs: {
        tuition: '£10,000 - £38,000/year',
        living: '£12,000 - £18,000/year',
        application: '£363 - £693'
      }
    },
    usa: {
      name: 'United States',
      flag: '🇺🇸',
      image: usaImage,
      overview: 'The USA remains the top destination for international students and skilled professionals, offering unparalleled opportunities in education, research, and career development. Home to Silicon Valley and world-leading universities.',
      quickFacts: {
        capital: 'Washington D.C.',
        language: 'English',
        currency: 'US Dollar (USD)',
        population: '330+ Million',
        timeZone: 'UTC-5 to UTC-10',
        education: 'Ivy League & top universities'
      },
      visaTypes: [
        {
          type: 'F-1 Student Visa',
          icon: GraduationCap,
          duration: '2-6 months',
          description: 'Study at US universities with OPT work authorization'
        },
        {
          type: 'H-1B Work Visa',
          icon: Briefcase,
          duration: '3-6 months',
          description: 'Specialty occupation work visa with employer sponsorship'
        },
        {
          type: 'EB-5 Investment',
          icon: Home,
          duration: '12-24 months',
          description: 'Permanent residence through investment in US business'
        },
        {
          type: 'Family-Based',
          icon: Users,
          duration: '8-33 months',
          description: 'Immigration through US citizen or permanent resident family'
        }
      ],
      requirements: {
        student: [
          'Form I-20 from US institution',
          'SEVIS fee payment',
          'Financial documentation',
          'TOEFL/IELTS scores',
          'Academic transcripts'
        ],
        work: [
          'Job offer in specialty occupation',
          'Bachelor\'s degree or equivalent',
          'Labor Condition Application',
          'H-1B lottery selection',
          'Employer sponsorship'
        ]
      },
      benefits: [
        'World\'s top universities',
        'OPT and STEM extension',
        'Innovation and research hubs',
        'Diverse career opportunities',
        'Cultural diversity',
        'Entrepreneurial environment'
      ],
      topUniversities: [
        'Harvard University',
        'Stanford University',
        'Massachusetts Institute of Technology',
        'California Institute of Technology',
        'University of California, Berkeley'
      ],
      costs: {
        tuition: '$20,000 - $70,000/year',
        living: '$15,000 - $25,000/year',
        application: '$160 - $350'
      }
    },
    germany: {
      name: 'Germany',
      flag: '🇩🇪',
      image: germanyImage,
      overview: 'Germany offers free or low-cost education at world-class universities and is the economic powerhouse of Europe. With strong engineering and technology sectors, Germany provides excellent opportunities for students and professionals.',
      quickFacts: {
        capital: 'Berlin',
        language: 'German (English programs available)',
        currency: 'Euro (EUR)',
        population: '83+ Million',
        timeZone: 'UTC+1 to UTC+2',
        education: 'Free/low-cost education'
      },
      visaTypes: [
        {
          type: 'Student Visa',
          icon: GraduationCap,
          duration: '6-12 weeks',
          description: 'Study at German universities with post-study work opportunities'
        },
        {
          type: 'EU Blue Card',
          icon: Briefcase,
          duration: '8-12 weeks',
          description: 'Work permit for highly qualified professionals'
        },
        {
          type: 'Job Seeker Visa',
          icon: Home,
          duration: '4-8 weeks',
          description: '6-month visa to search for employment in Germany'
        },
        {
          type: 'Family Reunion',
          icon: Users,
          duration: '8-16 weeks',
          description: 'Join family members living in Germany'
        }
      ],
      requirements: {
        student: [
          'University admission letter',
          'Proof of financial resources (€11,208/year)',
          'German or English proficiency',
          'Academic qualifications',
          'Health insurance'
        ],
        work: [
          'University degree',
          'Job offer with minimum salary',
          'German or English proficiency',
          'Professional qualifications',
          'Clean criminal record'
        ]
      },
      benefits: [
        'Free/low tuition fees',
        'Strong economy and job market',
        'Central location in Europe',
        'Excellent research facilities',
        'High quality of life',
        'EU access and mobility'
      ],
      topUniversities: [
        'Technical University of Munich',
        'Ludwig Maximilian University',
        'Heidelberg University',
        'Humboldt University Berlin',
        'University of Freiburg'
      ],
      costs: {
        tuition: '€0 - €20,000/year',
        living: '€8,000 - €12,000/year',
        application: '€75 - €100'
      }
    },
    singapore: {
      name: 'Singapore',
      flag: '🇸🇬',
      image: singaporeImage,
      overview: 'Singapore is a global business and education hub in Southeast Asia, offering world-class universities and excellent career opportunities. Known for its multicultural society and strategic location.',
      quickFacts: {
        capital: 'Singapore',
        language: 'English, Mandarin, Malay, Tamil',
        currency: 'Singapore Dollar (SGD)',
        population: '5.9 Million',
        timeZone: 'UTC+8',
        education: 'Top Asian universities'
      },
      visaTypes: [
        {
          type: 'Student\'s Pass',
          icon: GraduationCap,
          duration: '2-6 weeks',
          description: 'Study at Singapore institutions with internship opportunities'
        },
        {
          type: 'Employment Pass',
          icon: Briefcase,
          duration: '3-8 weeks',
          description: 'Work permit for professionals and skilled workers'
        },
        {
          type: 'Entrepreneur Pass',
          icon: Home,
          duration: '8-12 weeks',
          description: 'For entrepreneurs starting innovative businesses'
        },
        {
          type: 'Dependant\'s Pass',
          icon: Users,
          duration: '4-8 weeks',
          description: 'For family members of work pass holders'
        }
      ],
      requirements: {
        student: [
          'Letter of acceptance',
          'Financial proof (SGD $15,000+)',
          'English proficiency',
          'Medical examination',
          'Educational certificates'
        ],
        work: [
          'Job offer from Singapore employer',
          'University degree',
          'Relevant work experience',
          'Minimum salary (SGD $5,000+)',
          'Skills and qualifications'
        ]
      },
      benefits: [
        'Global business hub',
        'Multicultural environment',
        'Strategic Asian location',
        'Excellent infrastructure',
        'Safe and clean city',
        'Tax-friendly policies'
      ],
      topUniversities: [
        'National University of Singapore',
        'Nanyang Technological University',
        'Singapore Management University',
        'Singapore University of Technology',
        'Singapore Institute of Technology'
      ],
      costs: {
        tuition: 'SGD $20,000 - $45,000/year',
        living: 'SGD $12,000 - $18,000/year',
        application: 'SGD $30 - $90'
      }
    }
  };

  const country = countryData[slug || ''];

  if (!country) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Country Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The country you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/countries">
            <Button variant="default">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Countries
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${country.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-white">
            <Link to="/countries" className="inline-flex items-center text-white hover:text-white/80 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Countries
            </Link>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-6xl">{country.flag}</span>
              <div>
                <h1 className="text-5xl lg:text-6xl font-display font-bold animate-fade-in">
                  {country.name}
                </h1>
                <p className="text-xl opacity-90 mt-2">
                  Study, Work & Settle Opportunities
                </p>
              </div>
            </div>
            
            <p className="text-xl leading-relaxed max-w-3xl animate-slide-up">
              {country.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {Object.entries(country.quickFacts).map(([key, value], index) => (
                <div key={index} className="text-center animate-scale-in">
                  <div className="text-sm text-muted-foreground capitalize mb-1">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div className="font-semibold text-primary text-sm">
                    {String(value)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="visas" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                <TabsTrigger value="visas">Visa Types</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="costs">Costs</TabsTrigger>
              </TabsList>

              <TabsContent value="visas">
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-display font-bold text-primary mb-4">
                      Visa Options for {country.name}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Choose the right visa type based on your goals and qualifications
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {country.visaTypes.map((visa: any, index: number) => (
                      <Card key={index} className="hover-lift border-0 shadow-soft">
                        <CardHeader>
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                              <visa.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-xl font-display">
                                {visa.type}
                              </CardTitle>
                              <div className="flex items-center space-x-2 mt-1">
                                <Clock className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">
                                  {visa.duration}
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">
                            {visa.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="requirements">
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-display font-bold text-primary mb-4">
                      Requirements for {country.name}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Key requirements for different visa categories
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <Card className="border-0 shadow-soft">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <GraduationCap className="w-5 h-5 text-accent" />
                          <span>Student Visa Requirements</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {country.requirements.student.map((req: string, index: number) => (
                            <li key={index} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-soft">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Briefcase className="w-5 h-5 text-accent" />
                          <span>Work Visa Requirements</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {country.requirements.work.map((req: string, index: number) => (
                            <li key={index} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="benefits">
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-display font-bold text-primary mb-4">
                      Why Choose {country.name}?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Key advantages and benefits of studying and working in {country.name}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {country.benefits.map((benefit: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-secondary/30 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Card className="border-0 shadow-soft">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <GraduationCap className="w-5 h-5 text-accent" />
                        <span>Top Universities in {country.name}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {country.topUniversities.map((university: string, index: number) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-background rounded-lg border">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="font-medium">{university}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="costs">
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-display font-bold text-primary mb-4">
                      Cost of Education & Living
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Estimated costs for studying and living in {country.name}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    <Card className="border-0 shadow-soft text-center">
                      <CardHeader>
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                          <GraduationCap className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle>Tuition Fees</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-primary mb-2">
                          {country.costs.tuition}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Annual tuition fees for international students
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-soft text-center">
                      <CardHeader>
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                          <Home className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle>Living Costs</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-primary mb-2">
                          {country.costs.living}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Annual living expenses including accommodation
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-soft text-center">
                      <CardHeader>
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                          <DollarSign className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle>Application Fees</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-primary mb-2">
                          {country.costs.application}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Visa and application processing fees
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="text-center">
                    <p className="text-muted-foreground mb-6">
                      💡 Costs may vary based on institution, location, and lifestyle choices. 
                      Our consultants will provide personalized cost estimates.
                    </p>
                    <Button variant="hero" size="lg">
                      Get Detailed Cost Breakdown
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-display font-bold">
              Ready to Start Your {country.name} Journey?
            </h2>
            <p className="text-xl opacity-90">
              Our {country.name} specialists are here to guide you through every step 
              of your application process with personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                Book {country.name} Consultation
              </Button>
              <Button variant="secondary" size="xl">
                Check Eligibility
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountryDetailPage;