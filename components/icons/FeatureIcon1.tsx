import React from 'react';

export const FeatureIcon1: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="3"></circle>
    <circle cx="12" cy="12" r="9"></circle>
    <path d="M12 3v2"></path>
    <path d="M12 19v2"></path>
    <path d="M5.636 5.636l1.414 1.414"></path>
    <path d="M16.95 16.95l1.414 1.414"></path>
    <path d="M3 12h2"></path>
    <path d="M19 12h2"></path>
    <path d="M5.636 18.364l1.414-1.414"></path>
    <path d="M16.95 7.05l1.414-1.414"></path>
  </svg>
);
