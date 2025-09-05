import React, { useState, useEffect } from 'react';
import { Logo } from './icons/Logo';
import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-orbital ${isScrolled ? 'top-4' : 'top-0'}`}
    >
      <header
        className={`container mx-auto rounded-2xl transition-all duration-300 ease-orbital ${isScrolled ? 'bg-surface-0/80 backdrop-blur-sm shadow-2xl shadow-accent-primary/10' : 'bg-transparent'}`}
      >
        <div className="px-6 py-2 flex justify-between items-center">
          <a
            href="#"
            className="flex items-center gap-3 text-2xl font-bold text-text-primary font-heading rounded-md focus:outline-none focus-visible:shadow-focus-glow"
          >
            <Logo />
            Synergize
          </a>
          <nav className="hidden md:flex items-center space-x-2">
            <a
              href="#features"
              className="text-text-muted hover:text-accent-primary transition-colors rounded-md focus:outline-none focus-visible:shadow-focus-glow px-3 py-4"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-text-muted hover:text-accent-primary transition-colors rounded-md focus:outline-none focus-visible:shadow-focus-glow px-3 py-4"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-text-muted hover:text-accent-primary transition-colors rounded-md focus:outline-none focus-visible:shadow-focus-glow px-3 py-4"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-text-muted hover:text-accent-primary transition-colors rounded-md focus:outline-none focus-visible:shadow-focus-glow px-3 py-4"
            >
              Docs
            </a>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <ThemeSwitcher />
            <a
              href="#"
              className="text-text-muted hover:text-accent-primary transition-colors rounded-md focus:outline-none focus-visible:shadow-focus-glow px-3 py-2"
            >
              Log In
            </a>
            <a
              href="#"
              className="has-gradient has-shimmer bg-gradient-to-r from-brand-gradient-from via-accent-mid to-brand-gradient-to text-white font-semibold px-5 py-3 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-sky-500/30 focus:outline-none focus-visible:shadow-focus-glow bg-[length:200%_auto] motion-safe:animate-shimmer"
            >
              Sign Up
            </a>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <ThemeSwitcher />
            <button
              className="text-text-primary p-3 rounded-md focus:outline-none focus-visible:shadow-focus-glow"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
