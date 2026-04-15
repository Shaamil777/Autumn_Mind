'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleSectionChange = () => {
      const sections = ['home', 'about', 'service', 'team', 'contact'];
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
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Animated Background for Main Navbar */}
      <div className={`fixed top-0 left-0 right-0 z-40 h-16 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-secondary-bg shadow-lg transform translate-y-0' 
          : 'bg-transparent border-b border-transparent transform -translate-y-full'
      }`}></div>

      {/* Main Navbar Content (Always Visible) */}
      <nav className="fixed top-0 left-0 right-0 z-50 font-quicksand">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          
          {/* Logo */}
          <div className="shrink-0">
          
            <button
              onClick={() => scrollToSection('home')}
              className={`font-bold text-2xl transition-all duration-300 font-sans ${
                isScrolled 
                  ? 'text-accent hover:text-primary' 
                  : 'text-primary hover:text-accent drop-shadow-lg'
              }`}
            >
              Rida By Rahma
            </button>
          </div>

          {/* Right side - Navigation, Icons, and Book Now */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-2 text-base font-semibold transition-all duration-500 ease-in-out font-quicksand relative ${
                    activeSection === link.id 
                      ? isScrolled 
                        ? 'text-accent' 
                        : 'text-primary drop-shadow-2xl shadow-background'
                      : isScrolled
                        ? 'text-primary hover:text-accent'
                        : 'text-primary/90 hover:text-accent drop-shadow-xl shadow-background'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-500 ease-in-out ${
                    activeSection === link.id
                      ? isScrolled
                        ? 'bg-accent scale-x-100'
                        : 'bg-primary scale-x-100'
                      : 'bg-transparent scale-x-0'
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Contact Icons */}
            <div className="flex items-center space-x-3">

              {/* Call Icon */}
              <a
                href="tel:+1234567890"
                className={`p-2 transition-all duration-300 rounded-full ${
                  isScrolled
                    ? 'text-calm-accent hover:text-accent hover:bg-calm-accent/10'
                    : 'text-primary hover:text-background hover:bg-background/10 drop-shadow-md'
                }`}
                title="Call Us"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>

            {/* Book Now Button */}
            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:shadow-lg font-quicksand ${
                isScrolled
                  ? 'bg-calm-accent hover:bg-primary text-background'
                  : 'bg-background/90 hover:bg-background text-primary hover:text-accent backdrop-blur-sm'
              }`}
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-all duration-300 ${
                isScrolled
                  ? 'text-primary hover:text-accent'
                  : 'text-background hover:text-background/80 drop-shadow-lg'
              }`}
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 top-3 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-secondary-bg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 font-quicksand ${
                    activeSection === link.id 
                      ? 'text-accent bg-accent-light' 
                      : 'text-primary hover:text-accent hover:bg-accent-light'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              
              {/* Mobile Contact Icons */}
              <div className="flex items-center justify-center space-x-6 pt-4 pb-2">
                
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 text-calm-accent hover:text-accent transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm font-medium">Call</span>
                </a>
              </div>
              
              {/* Mobile Book Now Button */}
              <div className="pt-2">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-calm-accent hover:bg-primary text-background px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 font-quicksand"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Notification Banner with slide-down animation */}
      <div className={`fixed left-0 right-0 z-30 bg-primary text-background py-2 px-4 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'top-16 transform translate-y-0 opacity-100 delay-300' 
          : 'top-0 transform -translate-y-full opacity-0'
      }`}>
        <div className="flex items-center justify-between px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <button className="text-background/80 hover:text-background">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <p className="text-sm font-medium font-quicksand">
              Rida By Rahma is now offering online therapy worldwide. Get expert care, no matter where you are.
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-calm-accent hover:bg-accent text-background px-4 py-1 rounded text-sm font-medium transition-colors duration-200 font-quicksand"
            >
              BOOK YOUR SESSION →
            </button>
          </div>
          <button className="text-background/80 hover:text-background">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}