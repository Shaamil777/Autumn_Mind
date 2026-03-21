'use client';

import { useState, useEffect } from 'react';

// DESIGN 2: Floating Pill Navigation
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleSectionChange = () => {
      const sections = ['home', 'about', 'service', 'team', 'testimonial', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'service', label: 'Service' },
    { id: 'team', label: 'Team' },
    { id: 'testimonial', label: 'Testimonial' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Logo - Fixed Top Left */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => scrollToSection('home')}
          className="pill-logo bg-primary text-background px-4 py-2 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Autumn Mind
        </button>
      </div>

      {/* Navigation Pills - Floating Center */}
      <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? 'top-4 scale-95' : 'top-6 scale-100'
      }`}>
        <div className="hidden md:flex items-center space-x-2 bg-background/80 backdrop-blur-xl rounded-full px-3 py-2 shadow-2xl border border-secondary-bg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === link.id 
                  ? 'bg-gradient-to-r from-accent to-primary text-background shadow-lg scale-105' 
                  : 'text-primary hover:bg-calm-accent-light hover:scale-105'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-calm-accent rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* CTA Button - Fixed Top Right */}
      <div className="fixed top-6 right-6 z-50">
        <button className="pill-cta bg-gradient-to-r from-accent to-calm-accent text-background px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          Book Session
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-primary text-background p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="w-5 h-5 relative">
            <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 top-2.5' : 'top-1'
            }`}></span>
            <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 top-2.5 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 top-2.5' : 'top-4'
            }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-2xl font-medium transition-all duration-500 hover:scale-110 ${
                  activeSection === link.id ? 'text-accent' : 'text-primary hover:text-accent'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </button>
            ))}
            <button className="mt-8 bg-gradient-to-r from-accent to-primary text-background px-8 py-3 rounded-full font-medium text-lg hover:scale-105 transition-all duration-300">
              Book Session
            </button>
          </div>
        </div>
      )}
    </>
  );
}