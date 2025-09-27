
import React from 'react';

const BrainIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v1.23a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V4.5A2.5 2.5 0 0 1 19.5 2"></path>
    <path d="M14.5 2a2.5 2.5 0 0 0-2.5 2.5v1.23a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V4.5A2.5 2.5 0 0 0 4.5 2"></path>
    <path d="M5 8.5A2.5 2.5 0 0 1 7.5 6h9a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 15.5Z"></path>
    <path d="M12 18v2.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V18"></path>
    <path d="M12 18v2.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V18"></path>
  </svg>
);

export default BrainIcon;
