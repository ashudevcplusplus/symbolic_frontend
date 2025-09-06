import React, { useState, useEffect } from 'react';
import { Logo } from './icons/Logo';
import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
            promtflow.ai
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
              className="has-gradient has-shimmer bg-gradient-to-r from-brand-gradient-from via-accent-mid to-brand-gradient-to text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-sky-500/30 focus:outline-none focus-visible:shadow-focus-glow bg-[length:200%_auto] motion-safe:animate-shimmer"
            >
              Sign Up
            </a>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <ThemeSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-primary p-3 rounded-md focus:outline-none focus-visible:shadow-focus-glow transition-colors duration-200 hover:text-accent-primary"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-surface-0/95 backdrop-blur-sm">
          <div className="flex flex-col h-full pt-20 px-6">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text-primary hover:text-accent-primary transition-colors rounded-md focus:outline-none focus-visible:shadow-focus-glow px-4 py-3 text-lg font-medium"
              >
                Features
              </a>
              <a
                href="#testimonials"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text-primary hover:text-accent-primary transition-colors rounded-md focus:outline-none focus-visible:shadow-focus-glow px-4 py-3 text-lg font-medium"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text-primary hover:text-accent-primary transition-colors rounded-md focus:outline-none focus-visible:shadow-focus-glow px-4 py-3 text-lg font-medium"
              >
                Pricing
              </a>
              <a
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text-primary hover:text-accent-primary transition-colors rounded-md focus:outline-none focus-visible:shadow-focus-glow px-4 py-3 text-lg font-medium"
              >
                Docs
              </a>
            </nav>
            
            <div className="mt-8 pt-6 border-t border-surface-2">
              <div className="flex flex-col space-y-4">
                <a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-text-muted hover:text-accent-primary transition-colors rounded-md focus:outline-none focus-visible:shadow-focus-glow px-4 py-3 text-lg font-medium"
                >
                  Log In
                </a>
                <a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="has-gradient has-shimmer bg-gradient-to-r from-brand-gradient-from via-accent-mid to-brand-gradient-to text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-sky-500/30 focus:outline-none focus-visible:shadow-focus-glow bg-[length:200%_auto] motion-safe:animate-shimmer text-center"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
