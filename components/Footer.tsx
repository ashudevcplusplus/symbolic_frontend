import React from 'react';
import { Logo } from './icons/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-0">
      <div className="container mx-auto px-6 py-26">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <a href="#" className="flex items-center gap-3 text-2xl font-bold font-heading text-text-primary mb-4 rounded-md focus:outline-none focus-visible:shadow-focus-glow">
              <Logo />
              Synergize
            </a>
            <p className="text-text-muted text-sm font-light">&copy; {new Date().getFullYear()} Synergize Inc. All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-extrabold font-heading text-text-primary mb-4 text-balance">Product</h4>
            <ul className="space-y-2 font-light">
              <li><a href="#features" className="text-text-muted hover:text-accent-primary rounded-md focus:outline-none focus-visible:shadow-focus-glow py-3 block">Features</a></li>
              <li><a href="#pricing" className="text-text-muted hover:text-accent-primary rounded-md focus:outline-none focus-visible:shadow-focus-glow py-3 block">Pricing</a></li>
              <li><a href="#" className="text-text-muted hover:text-accent-primary rounded-md focus:outline-none focus-visible:shadow-focus-glow py-3 block">Integrations</a></li>
              <li><a href="#" className="text-text-muted hover:text-accent-primary rounded-md focus:outline-none focus-visible:shadow-focus-glow py-3 block">Updates</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold font-heading text-text-primary mb-4 text-balance">Company</h4>
            <ul className="space-y-2 font-light">
              <li><a href="#" className="text-text-muted hover:text-accent-primary rounded-md focus:outline-none focus-visible:shadow-focus-glow py-3 block">About Us</a></li>
              <li><a href="#" className="text-text-muted hover:text-accent-primary rounded-md focus:outline-none focus-visible:shadow-focus-glow py-3 block">Careers</a></li>
              <li><a href="#" className="text-text-muted hover:text-accent-primary rounded-md focus:outline-none focus-visible:shadow-focus-glow py-3 block">Contact</a></li>
              <li><a href="#" className="text-text-muted hover:text-accent-primary rounded-md focus:outline-none focus-visible:shadow-focus-glow py-3 block">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold font-heading text-text-primary mb-4 text-balance">Legal</h4>
            <ul className="space-y-2 font-light">
              <li><a href="#" className="text-text-muted hover:text-accent-primary rounded-md focus:outline-none focus-visible:shadow-focus-glow py-3 block">Privacy Policy</a></li>
              <li><a href="#" className="text-text-muted hover:text-accent-primary rounded-md focus:outline-none focus-visible:shadow-focus-glow py-3 block">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;