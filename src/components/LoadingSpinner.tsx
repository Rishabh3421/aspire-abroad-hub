import React from 'react';
import logoImage from '@/assets/easy-world-logo.png';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  useLogo?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '', 
  useLogo = false 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  if (useLogo) {
    return (
      <div className={`logo-loader ${className}`}>
        <img 
          src={logoImage} 
          alt="Easy World Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`loader ${sizeClasses[size]} ${className}`} />
  );
};

export default LoadingSpinner;