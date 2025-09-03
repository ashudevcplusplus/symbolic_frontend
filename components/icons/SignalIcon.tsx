import React from 'react';

export const SignalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2 20h.01"></path>
    <path d="M7 20v-4"></path>
    <path d="M12 20v-8"></path>
    <path d="M17 20V8"></path>
    <path d="M22 4v16"></path>
  </svg>
);