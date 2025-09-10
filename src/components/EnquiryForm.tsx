import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const EnquiryForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Enquiry Submitted Successfully!",
      description: "Our expert counselors will contact you within 24 hours.",
      duration: 5000,
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-xl animate-slide-up">
      <CardHeader className="pb-4">
        <CardTitle className="text-center text-primary font-display">
          Get Free Consultation
        </CardTitle>
        <p className="text-center text-sm text-muted-foreground">
          Start your global journey today
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input 
              id="name" 
              placeholder="Enter your full name" 
              required 
              className="mt-1"
            />
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
            <Label htmlFor="visa-type">Visa Type *</Label>
            <Select required>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select visa type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="student">Student Visa</SelectItem>
                <SelectItem value="work">Work Visa</SelectItem>
                <SelectItem value="pr">Permanent Residency</SelectItem>
                <SelectItem value="tourist">Tourist Visa</SelectItem>
                <SelectItem value="business">Business Visa</SelectItem>
                <SelectItem value="family">Family/Dependent Visa</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <div className="loader w-4 h-4 mr-2" />
                Submitting...
              </div>
            ) : (
              <>
                Submit Enquiry
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default EnquiryForm;