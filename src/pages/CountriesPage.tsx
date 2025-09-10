import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import CountryCard from '@/components/CountryCard';
import { Search, Filter } from 'lucide-react';
import ukImage from '@/assets/countries/uk.jpg';
import canadaImage from '@/assets/countries/canada.jpg';
import australiaImage from '@/assets/countries/australia.jpg';
import usaImage from '@/assets/countries/usa.jpg';
import germanyImage from '@/assets/countries/germany.jpg';
import singaporeImage from '@/assets/countries/singapore.jpg';

const CountriesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const countries = [
    {
      name: 'Canada',
      flag: '🇨🇦',
      description: 'Study, work, PR opportunities with world-class education system and multicultural environment. Express Entry system for skilled workers.',
      image: canadaImage,
      slug: 'canada',
      category: 'popular',
      highlights: ['Express Entry', 'PNP Programs', 'Quality Education', 'Healthcare'],
      visaTypes: ['Student', 'Work', 'PR', 'Tourist', 'Business']
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      description: 'High-quality education & skilled migration opportunities in beautiful cities. Points-based immigration system with excellent work-life balance.',
      image: australiaImage,
      slug: 'australia',
      category: 'popular',
      highlights: ['SkillSelect System', 'Group of 8 Universities', 'Work Rights', 'Quality of Life'],
      visaTypes: ['Student', 'Work', 'PR', 'Tourist', 'Business']
    },
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      description: 'Affordable study & excellent job prospects in historic universities. Post-study work opportunities and pathway to settlement.',
      image: ukImage,
      slug: 'uk',
      category: 'popular',
      highlights: ['Russell Group Universities', 'Post-Study Work', 'Rich Culture', 'Global Recognition'],
      visaTypes: ['Student', 'Work', 'Tourist', 'Business']
    },
    {
      name: 'United States',
      flag: '🇺🇸',
      description: 'Leading universities & diverse career paths in the land of opportunities. Innovation hub with excellent research facilities.',
      image: usaImage,
      slug: 'usa',
      category: 'popular',
      highlights: ['Ivy League Universities', 'Silicon Valley', 'Research Opportunities', 'Diversity'],
      visaTypes: ['Student', 'Work', 'Tourist', 'Business', 'Investment']
    },
    {
      name: 'Germany',
      flag: '🇩🇪',
      description: 'Free education & strong industrial opportunities in the heart of Europe. Gateway to European Union with excellent job market.',
      image: germanyImage,
      slug: 'germany',
      category: 'europe',
      highlights: ['Free Education', 'Strong Economy', 'EU Access', 'Engineering Excellence'],
      visaTypes: ['Student', 'Work', 'Tourist', 'Business']
    },
    {
      name: 'Singapore',
      flag: '🇸🇬',
      description: 'Global business & study gateway with excellent career prospects. Multicultural society with strategic location in Asia.',
      image: singaporeImage,
      slug: 'singapore',
      category: 'asia',
      highlights: ['Business Hub', 'Multicultural', 'Strategic Location', 'Innovation'],
      visaTypes: ['Student', 'Work', 'Tourist', 'Business', 'Investment']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Countries', count: countries.length },
    { id: 'popular', name: 'Most Popular', count: countries.filter(c => c.category === 'popular').length },
    { id: 'europe', name: 'Europe', count: countries.filter(c => c.category === 'europe').length },
    { id: 'asia', name: 'Asia Pacific', count: countries.filter(c => c.category === 'asia').length }
  ];

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         country.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || country.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in">
              Study & Work Destinations
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed animate-slide-up">
              Explore global opportunities across multiple countries. Find the perfect destination 
              for your education, career, and life goals.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search countries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="text-xs"
                  >
                    {category.name}
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredCountries.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">
                  No countries found matching your search criteria.
                </p>
                <p className="text-muted-foreground mt-2">
                  Try adjusting your search terms or filters.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCountries.map((country, index) => (
                  <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                    <CountryCard country={country} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">Why Choose These Destinations</Badge>
              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                Global Opportunities Await
              </h2>
              <p className="text-xl text-muted-foreground">
                Each destination offers unique advantages for your personal and professional growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Quality Education',
                  description: 'World-renowned universities and institutions',
                  icon: '🎓'
                },
                {
                  title: 'Career Opportunities',
                  description: 'Diverse job markets and career growth',
                  icon: '💼'
                },
                {
                  title: 'Cultural Diversity',
                  description: 'Multicultural environments and experiences',
                  icon: '🌍'
                },
                {
                  title: 'Quality of Life',
                  description: 'High living standards and life satisfaction',
                  icon: '⭐'
                }
              ].map((feature, index) => (
                <div key={index} className="text-center animate-scale-in">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-display font-semibold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="mb-4">Our Process</Badge>
              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                Your Journey in 4 Simple Steps
              </h2>
              <p className="text-xl text-muted-foreground">
                We guide you through every step of your international journey
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Consultation',
                  description: 'Discuss your goals and assess your profile',
                  icon: '💬'
                },
                {
                  step: '2',
                  title: 'Documentation',
                  description: 'Gather and prepare required documents',
                  icon: '📋'
                },
                {
                  step: '3',
                  title: 'Application',
                  description: 'File applications with accuracy and precision',
                  icon: '📤'
                },
                {
                  step: '4',
                  title: 'Approval',
                  description: 'Visa granted and pre-departure support',
                  icon: '✅'
                }
              ].map((item, index) => (
                <div key={index} className="text-center animate-scale-in relative">
                  {index < 3 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent transform translate-x-4" />
                  )}
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span className="text-white font-bold text-2xl">{item.step}</span>
                  </div>
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-display font-semibold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-lg text-muted-foreground mb-6">
                ⚡ Our proven process ensures maximum success with minimum stress
              </p>
              <Button variant="hero" size="xl">
                Start Your Journey Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-display font-bold">
              Ready to Explore Your Options?
            </h2>
            <p className="text-xl opacity-90">
              Our country specialists are here to help you choose the perfect destination 
              based on your goals, budget, and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                Book Country Consultation
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

export default CountriesPage;