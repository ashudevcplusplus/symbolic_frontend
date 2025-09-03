import React, { useState, useRef, useEffect } from 'react';
import { useTheme, Theme, themes } from '../contexts/ThemeContext';
import {
  SunIcon,
  MoonIcon,
  EclipseIcon,
  SparklesIcon,
  ContrastIcon,
  CosmicDawnIcon,
} from './icons/ThemeIcons';

const themeConfig: Record<Theme, { icon: React.ReactNode; label: string }> = {
  dawn: { icon: <SunIcon className="w-5 h-5" />, label: 'Dawn' },
  dusk: { icon: <MoonIcon className="w-5 h-5" />, label: 'Dusk' },
  eclipse: { icon: <EclipseIcon className="w-5 h-5" />, label: 'Eclipse' },
  nebula: { icon: <SparklesIcon className="w-5 h-5" />, label: 'Nebula' },
  'cosmic-dawn': {
    icon: <CosmicDawnIcon className="w-5 h-5" />,
    label: 'Cosmic Dawn',
  },
  hicon: { icon: <ContrastIcon className="w-5 h-5" />, label: 'High Contrast' },
};

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentThemeConfig = themeConfig[theme] || themeConfig.dusk;

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={handleToggle}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-1 hover:bg-surface-2 transition-colors focus:outline-none focus-visible:shadow-focus-glow"
        aria-label={`Change theme. Current theme: ${currentThemeConfig.label}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {currentThemeConfig.icon}
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-surface-0 border border-surface-2 rounded-lg shadow-lg py-1 z-50">
          {themes.map((t) => {
            const config = themeConfig[t];
            if (!config) return null;
            return (
              <button
                key={t}
                onClick={() => {
                  setTheme(t);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 w-full px-4 py-2 text-left text-sm transition-colors ${
                  theme === t
                    ? 'text-accent-primary'
                    : 'text-text-secondary hover:bg-surface-1 hover:text-text-primary'
                }`}
              >
                {config.icon}
                <span>{config.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
