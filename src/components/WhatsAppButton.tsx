import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = "919050519168",
  message = "Hello! I'm interested in your visa consultation services. Please provide more information.",
  className = "",
  children
}) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`bg-green-500 hover:bg-green-600 text-white ${className}`}
      variant="default"
    >
      {children || (
        <>
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </>
      )}
    </Button>
  );
};

export default WhatsAppButton;