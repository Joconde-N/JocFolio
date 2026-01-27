'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '../config/site';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: isScrolled ? '#111111' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.5)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px'
      }}>
        <div style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text)' }}>
          {siteConfig.name}
        </div>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '500',
                color: activeSection === item.toLowerCase() ? 'var(--primary)' : 'var(--text)',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                padding: '0.5rem 0'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
              onMouseLeave={(e) => {
                if (activeSection !== item.toLowerCase()) {
                  e.target.style.color = 'var(--text)';
                }
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}