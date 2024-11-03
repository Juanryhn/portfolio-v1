import React from 'react';

interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

const Chip: React.FC<ChipProps> = ({ children, className = '' }) => {
  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full -bg-tertiary-color-10 -text-tertiary-color text-sm font-semibold ${className}`}>
      {children}
    </div>
  );
};

export default Chip;