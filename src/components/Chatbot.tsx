import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  className?: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m here to help you with your visa and immigration queries. How can I assist you today?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const faqData: { [key: string]: string } = {
    'student visa': 'For student visas, you\'ll need: Academic certificates, IELTS/TOEFL scores, Passport, Financial documents, and SOP. Our processing time is typically 15-30 days. Contact us at 9050519168 for detailed guidance.',
    'work visa': 'Work visa requirements include: Job offer letter, Educational certificates, Experience letters, Passport, and Medical certificates. Processing time varies by country (2-8 weeks). Call us for country-specific information.',
    'pr canada': 'For Canada PR, you need minimum 67/100 points in Express Entry. Requirements: IELTS 6.5+, Work experience, Education assessment. We have 95% success rate for Canada PR applications.',
    'fees': 'Our consultation fee starts from ₹5,000. Visa processing fees vary by country and visa type. We offer transparent pricing with no hidden costs. Book a free consultation to get detailed cost breakdown.',
    'processing time': 'Processing times vary: Student visas (15-45 days), Work visas (30-90 days), PR applications (6-18 months), Tourist visas (5-15 days). We provide regular updates throughout the process.',
    'branches': 'We have offices in: Indore (Head Office), Assandh, Panipat, Sonipat, and Indri. Visit any branch for in-person consultation or call us at 9050519168.',
    'contact': 'Contact us: Phone: 9050519168, 8950023501, 8396000445 | Email: mdeasyworld@gmail.com | Address: Mahalaxmi Nagar, Vijay Nagar, Indore - 452010',
    'countries': 'We provide visa services for: Canada, Australia, UK, USA, Germany, Singapore, New Zealand, and other European countries. Each country has specific requirements.',
    'success rate': 'We maintain 95%+ visa approval rate with 1000+ successful cases over 5+ years. Our experienced counselors ensure proper documentation and application preparation.'
  };

  const getResponse = (input: string): string => {
    const lowercaseInput = input.toLowerCase();
    
    for (const [key, response] of Object.entries(faqData)) {
      if (lowercaseInput.includes(key)) {
        return response;
      }
    }
    
    // Check for greetings
    if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi') || lowercaseInput.includes('hey')) {
      return 'Hello! I\'m here to help with your visa and immigration questions. You can ask about student visas, work visas, PR applications, processing times, or our services.';
    }
    
    // Check for thanks
    if (lowercaseInput.includes('thank') || lowercaseInput.includes('thanks')) {
      return 'You\'re welcome! Feel free to ask any other questions about visas or immigration. For detailed consultation, call us at 9050519168.';
    }
    
    // Default response
    return 'I can help you with information about student visas, work visas, PR applications, processing times, fees, and our services. For specific queries, please call us at 9050519168 or book a free consultation.';
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-accent hover:bg-accent/90 text-white shadow-lg animate-bounce-in"
          size="sm"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-80 h-96 bg-background shadow-large animate-scale-in">
          <CardHeader className="flex flex-row items-center justify-between p-4 bg-primary text-primary-foreground rounded-t-lg">
            <CardTitle className="text-sm font-semibold flex items-center gap-2">
              <Bot className="w-5 h-5" />
              Easy World Assistant
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="flex flex-col h-80 p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {message.isBot && (
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-2 rounded-lg text-sm ${
                      message.isBot
                        ? 'bg-secondary text-secondary-foreground'
                        : 'bg-accent text-accent-foreground'
                    } ${message.isBot ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
                  >
                    {message.text}
                  </div>
                  {!message.isBot && (
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about visas, PR, services..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-accent hover:bg-accent/90"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Chatbot;