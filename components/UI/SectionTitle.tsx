import React from 'react';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  subtitle, 
  title, 
  description, 
  align = 'center',
  light = false
}) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleColor = light ? 'text-white' : 'text-heading';
  const subtitleColor = light ? 'text-secondary' : 'text-primary';
  const descColor = light ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className={`mb-12 max-w-3xl ${alignment}`}>
      {subtitle && (
        <span className={`block text-sm font-bold tracking-widest uppercase mb-3 ${subtitleColor}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg ${descColor} leading-relaxed`}>
          {description}
        </p>
      )}
      <div className={`h-1 w-20 bg-secondary mt-6 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;