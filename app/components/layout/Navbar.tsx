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
              className={`font-bold text-2xl transition-all duration-300 font-quicksand ${
                isScrolled 
                  ? 'text-accent hover:text-primary' 
                  : 'text-primary hover:text-accent drop-shadow-lg'
              }`}
            >
              Autumn Mind
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
              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 transition-all duration-300 rounded-full ${
                  isScrolled
                    ? 'text-calm-accent hover:text-accent hover:bg-calm-accent/10'
                    : 'text-primary hover:text-accent hover:bg-primary/10 drop-shadow-xl shadow-background'
                }`}
                title="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>

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
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-calm-accent hover:text-accent transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>
                
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
              Autumn Mind is now offering online therapy worldwide. Get expert care, no matter where you are.
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