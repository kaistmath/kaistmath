import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden ${hoverEffect ? 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;