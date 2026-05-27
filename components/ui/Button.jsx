import React from 'react';
import Link from 'next/link';

const Button = ({ children, href, variant = 'neutral', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-primary-blue text-white hover:bg-blue-700 shadow-md hover:shadow-lg',
    secondary: 'bg-white text-navy border-2 border-navy hover:bg-navy hover:text-white',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-navy',
    ghost: 'bg-transparent text-navy hover:bg-gray-100',
    neutral: '',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
