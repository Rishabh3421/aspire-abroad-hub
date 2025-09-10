import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CountryCardProps {
  country: {
    name: string;
    flag: string;
    description: string;
    image: string;
    slug: string;
  };
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <Card className="country-card group overflow-hidden border-0 animate-scale-in">
      <div className="relative">
        <img 
          src={country.image} 
          alt={`Study in ${country.name}`}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="text-4xl">{country.flag}</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-display font-bold text-xl mb-2">
            {country.name}
          </h3>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {country.description}
        </p>
        <Link to={`/countries/${country.slug}`}>
          <Button 
            variant="outline" 
            className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all duration-300"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default CountryCard;