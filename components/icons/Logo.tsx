import React from 'react';

export const Logo: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="url(#paint0_linear_logo)"/>
    <path d="M19.91,10.09C18.47,8.65,16.29,8,14,8c-4.42,0-8,3.58-8,8c0,2.29,0.97,4.47,2.09,6.09C9.53,23.53,11.71,24,14,24c4.42,0,8-3.58,8-8C22,13.71,21.35,11.53,19.91,10.09z M14,22c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S17.31,22,14,22z" fill="white" />
     <path d="M12.09,21.91C13.53,23.35,15.71,24,18,24c4.42,0,8-3.58,8-8c0-2.29-0.97-4.47-2.09-6.09C22.47,8.47,20.29,8,18,8c-4.42,0-8,3.58-8,8C10,18.29,10.65,20.47,12.09,21.91z M18,10c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6S14.69,10,18,10z" fill="white" fillOpacity="0.7" />
    <defs>
      <linearGradient id="paint0_linear_logo" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38bdf8"/>
        <stop offset="1" stopColor="#d946ef"/>
      </linearGradient>
    </defs>
  </svg>
);