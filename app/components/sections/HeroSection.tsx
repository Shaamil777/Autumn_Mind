'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Organic Background Shapes */}
      <div className="absolute inset-0">
        {/* Main background */}
        <div className="absolute inset-0 bg-background"></div>
        
        {/* Large organic shape - right side */}
        <div className="absolute top-0 right-0 w-2/3 h-full">
          <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <path
              d="M400,0 C600,50 750,200 800,400 C800,500 700,600 600,600 C400,580 200,450 100,300 C50,200 150,50 400,0 Z"
              fill="url(#organicGradient)"
              opacity="0.8"
            />
            <defs>
              <linearGradient id="organicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D8C3A5" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#8A9A5B" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#C65D2E" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Secondary organic shape - bottom */}
        <div className="absolute bottom-0 left-0 w-full h-2/3">
          <svg viewBox="0 0 1200 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <path
              d="M0,400 C200,350 400,300 600,320 C800,340 1000,380 1200,360 L1200,400 L0,400 Z"
              fill="url(#bottomGradient)"
              opacity="0.5"
            />
            <defs>
              <linearGradient id="bottomGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F5EFE6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#D8C3A5" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8A9A5B" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Subtle accent shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-calm-accent/15 rounded-full blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
          
          {/* Content Side - Left */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-calm-accent/10 border border-calm-accent/20 text-calm-accent text-sm font-medium">
              <span className="w-2 h-2 bg-calm-accent rounded-full mr-2"></span>
              WELCOME TO AUTUMN MIND
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-primary">Where Healing Begins</span>
                <span className="block text-accent">with Understanding</span>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-4 max-w-lg">
              <p className="text-lg lg:text-xl text-primary/70 leading-relaxed">
                Professional psychological support rooted in empathy, trust, and evidence-based care. Your journey to emotional well-being starts here.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-accent px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Book a Session
              </button>
              
              <button 
                onClick={() => scrollToSection('team')}
                className="px-8 py-4 border-2 border-accent text-accent rounded-full font-semibold text-lg hover:bg-accent hover:text-background transition-all duration-300"
              >
                Meet Our Team
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-6 pt-12">
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-primary">Licensed Professionals</div>
                  <div className="text-sm text-primary/60">Certified & Experienced</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-primary">Confidential Support</div>
                  <div className="text-sm text-primary/60">Safe & Secure</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-calm-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-calm-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-primary">Online & In-Person</div>
                  <div className="text-sm text-primary/60">Flexible Options</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-secondary-bg/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-primary">Personalised Care</div>
                  <div className="text-sm text-primary/60">Tailored Approach</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Side - Right */}
          <div className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            {/* Growth Spiral - Large Coverage Design */}
            <div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
              
              {/* Main Spiral Container */}
              <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
                
                {/* Background Spiral Glow */}
                <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-calm-accent/3 to-transparent rounded-full blur-3xl scale-110"></div>
                
                {/* Spiral Path SVG */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
                  
                  {/* Main Healing Spiral Path */}
                  <path
                    d="M250,250 Q300,200 350,250 Q400,300 350,350 Q300,400 250,350 Q200,300 250,250 Q280,220 320,250 Q360,280 320,320 Q280,360 250,320 Q220,280 250,250 Q265,235 285,250 Q305,265 285,285 Q265,305 250,285 Q235,265 250,250"
                    stroke="url(#spiralGradient)"
                    strokeWidth="3"
                    fill="none"
                    className="opacity-40"
                  />
                  
                  {/* Secondary Spiral Paths */}
                  <path
                    d="M250,250 Q200,200 150,250 Q100,300 150,350 Q200,400 250,350 Q300,300 250,250 Q220,220 180,250 Q140,280 180,320 Q220,360 250,320 Q280,280 250,250 Q235,235 215,250 Q195,265 215,285 Q235,305 250,285 Q265,265 250,250"
                    stroke="url(#spiralGradient2)"
                    strokeWidth="2"
                    fill="none"
                    className="opacity-30"
                  />
                  
                  <defs>
                    <linearGradient id="spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C65D2E" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#8A9A5B" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#D8C3A5" stopOpacity="0.3" />
                    </linearGradient>
                    
                    <linearGradient id="spiralGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#D8C3A5" stopOpacity="0.5" />
                      <stop offset="50%" stopColor="#C65D2E" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#8A9A5B" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Large Autumn Leaves in Spiral Formation */}
                
                {/* Outer Ring - Large Leaves */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rotate-12 hover:scale-110 hover:rotate-45 transition-all duration-500">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-accent drop-shadow-lg" fill="currentColor">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                  </svg>
                </div>

                <div className="absolute top-16 right-8 w-14 h-14 transform -rotate-30 hover:scale-110 hover:-rotate-60 transition-all duration-500">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-calm-accent drop-shadow-lg" fill="currentColor">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                  </svg>
                </div>

                <div className="absolute bottom-8 right-1/2 transform translate-x-1/2 w-18 h-18 rotate-45 hover:scale-110 hover:rotate-90 transition-all duration-500">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-secondary drop-shadow-lg" fill="currentColor">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                  </svg>
                </div>

                <div className="absolute bottom-16 left-8 w-15 h-15 transform -rotate-45 hover:scale-110 hover:-rotate-90 transition-all duration-500">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-accent opacity-90 drop-shadow-lg" fill="currentColor">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                  </svg>
                </div>

                {/* Middle Ring - Medium Leaves */}
                <div className="absolute top-20 right-20 w-12 h-12 transform rotate-60 hover:scale-125 hover:rotate-120 transition-all duration-500">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-calm-accent drop-shadow-md" fill="currentColor">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                  </svg>
                </div>

                <div className="absolute right-12 top-1/2 transform -translate-y-1/2 w-11 h-11 rotate-90 hover:scale-125 hover:rotate-180 transition-all duration-500">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-secondary opacity-80 drop-shadow-md" fill="currentColor">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                  </svg>
                </div>

                <div className="absolute bottom-20 left-20 w-13 h-13 transform -rotate-60 hover:scale-125 hover:-rotate-120 transition-all duration-500">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-accent opacity-75 drop-shadow-md" fill="currentColor">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                  </svg>
                </div>

                <div className="absolute left-12 top-1/2 transform -translate-y-1/2 w-10 h-10 -rotate-90 hover:scale-125 hover:-rotate-180 transition-all duration-500">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-calm-accent opacity-70 drop-shadow-md" fill="currentColor">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                  </svg>
                </div>

                {/* Inner Ring - Smaller Leaves */}
                <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-8 h-8 rotate-30 hover:scale-150 hover:rotate-90 transition-all duration-500">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-secondary drop-shadow-sm" fill="currentColor">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                  </svg>
                </div>

                <div className="absolute right-32 top-1/2 transform -translate-y-1/2 w-7 h-7 rotate-120 hover:scale-150 hover:rotate-240 transition-all duration-500">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-accent opacity-80 drop-shadow-sm" fill="currentColor">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                  </svg>
                </div>

                <div className="absolute bottom-32 right-1/2 transform translate-x-1/2 w-9 h-9 -rotate-30 hover:scale-150 hover:-rotate-90 transition-all duration-500">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-calm-accent opacity-85 drop-shadow-sm" fill="currentColor">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                  </svg>
                </div>

                <div className="absolute left-32 bottom-1/2 transform translate-y-1/2 w-6 h-6 -rotate-120 hover:scale-150 hover:-rotate-240 transition-all duration-500">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-secondary opacity-75 drop-shadow-sm" fill="currentColor">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                  </svg>
                </div>

                {/* Central Healing Symbol */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-accent/20 to-calm-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/10 shadow-2xl hover:scale-110 transition-all duration-500">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-calm-accent rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-background" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Floating Particles for Depth */}
                <div className="absolute top-12 left-12 w-3 h-3 bg-accent/30 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
                <div className="absolute top-24 right-12 w-2 h-2 bg-calm-accent/40 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
                <div className="absolute bottom-12 left-16 w-4 h-4 bg-secondary/25 rounded-full animate-bounce" style={{animationDelay: '3s', animationDuration: '6s'}}></div>
                <div className="absolute bottom-24 right-16 w-2.5 h-2.5 bg-accent/35 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
                
                {/* Additional Coverage Elements */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-radial from-calm-accent/5 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-radial from-accent/5 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute top-1/4 -right-12 w-28 h-28 bg-gradient-radial from-secondary/5 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/4 -left-12 w-36 h-36 bg-gradient-radial from-calm-accent/4 to-transparent rounded-full blur-3xl"></div>
                
              </div>
              
            </div>
            <div className="relative w-full max-w-lg h-96">
              
              {/* Tree Structure SVG */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                
                {/* Tree Trunk */}
                <path
                  d="M200,380 L200,280 Q200,270 205,265 L210,260 Q215,255 215,245 L215,220"
                  stroke="url(#trunkGradient)"
                  strokeWidth="8"
                  fill="none"
                  className="opacity-80"
                />
                
                {/* Main Branches - Neural Pattern */}
                <path
                  d="M215,220 Q230,200 250,180 Q270,160 290,140"
                  stroke="url(#branchGradient)"
                  strokeWidth="4"
                  fill="none"
                  className="opacity-70 animate-pulse"
                  style={{animationDelay: '0.5s'}}
                />
                
                <path
                  d="M215,220 Q180,200 160,180 Q140,160 120,140"
                  stroke="url(#branchGradient)"
                  strokeWidth="4"
                  fill="none"
                  className="opacity-70 animate-pulse"
                  style={{animationDelay: '1s'}}
                />
                
                <path
                  d="M215,220 Q200,180 200,140 Q200,120 200,100"
                  stroke="url(#branchGradient)"
                  strokeWidth="5"
                  fill="none"
                  className="opacity-80 animate-pulse"
                  style={{animationDelay: '0.2s'}}
                />
                
                {/* Secondary Neural Branches */}
                <path
                  d="M250,180 Q270,170 285,155 Q300,140 310,120"
                  stroke="url(#neuralGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-60 animate-pulse"
                  style={{animationDelay: '1.5s'}}
                />
                
                <path
                  d="M250,180 Q265,195 275,210 Q285,225 295,240"
                  stroke="url(#neuralGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-60 animate-pulse"
                  style={{animationDelay: '2s'}}
                />
                
                <path
                  d="M160,180 Q145,170 130,155 Q115,140 105,120"
                  stroke="url(#neuralGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-60 animate-pulse"
                  style={{animationDelay: '2.5s'}}
                />
                
                <path
                  d="M160,180 Q145,195 135,210 Q125,225 115,240"
                  stroke="url(#neuralGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-60 animate-pulse"
                  style={{animationDelay: '3s'}}
                />
                
                <path
                  d="M200,140 Q220,130 235,115 Q250,100 260,80"
                  stroke="url(#neuralGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-60 animate-pulse"
                  style={{animationDelay: '1.2s'}}
                />
                
                <path
                  d="M200,140 Q180,130 165,115 Q150,100 140,80"
                  stroke="url(#neuralGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-60 animate-pulse"
                  style={{animationDelay: '1.8s'}}
                />
                
                {/* Gradients */}
                <defs>
                  <linearGradient id="trunkGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#8A9A5B" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#C65D2E" stopOpacity="0.7" />
                  </linearGradient>
                  
                  <linearGradient id="branchGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C65D2E" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#8A9A5B" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#D8C3A5" stopOpacity="0.6" />
                  </linearGradient>
                  
                  <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D8C3A5" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#C65D2E" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Autumn Leaves on Branches */}
              <div className="absolute top-20 left-32 w-6 h-6 transform rotate-12 hover:scale-125 transition-all duration-300 hover:rotate-45">
                <svg viewBox="0 0 24 24" className="w-full h-full text-accent drop-shadow-sm" fill="currentColor">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </div>

              <div className="absolute top-16 right-28 w-8 h-8 transform -rotate-30 hover:scale-125 transition-all duration-300 hover:-rotate-60">
                <svg viewBox="0 0 24 24" className="w-full h-full text-calm-accent drop-shadow-sm" fill="currentColor">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </div>

              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-7 h-7 rotate-45 hover:scale-125 transition-all duration-300 hover:rotate-90">
                <svg viewBox="0 0 24 24" className="w-full h-full text-secondary drop-shadow-sm" fill="currentColor">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </div>

              <div className="absolute top-28 right-16 w-5 h-5 transform rotate-90 hover:scale-125 transition-all duration-300 hover:rotate-180">
                <svg viewBox="0 0 24 24" className="w-full h-full text-accent opacity-80 drop-shadow-sm" fill="currentColor">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </div>

              <div className="absolute top-32 left-16 w-6 h-6 transform -rotate-45 hover:scale-125 transition-all duration-300 hover:-rotate-90">
                <svg viewBox="0 0 24 24" className="w-full h-full text-calm-accent opacity-70 drop-shadow-sm" fill="currentColor">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </div>

              <div className="absolute top-40 right-24 w-4 h-4 transform rotate-30 hover:scale-125 transition-all duration-300 hover:rotate-60">
                <svg viewBox="0 0 24 24" className="w-full h-full text-secondary opacity-60 drop-shadow-sm" fill="currentColor">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </div>

              <div className="absolute top-44 left-20 w-5 h-5 transform -rotate-60 hover:scale-125 transition-all duration-300 hover:-rotate-120">
                <svg viewBox="0 0 24 24" className="w-full h-full text-accent opacity-50 drop-shadow-sm" fill="currentColor">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </div>

              {/* Falling Leaves Animation */}
              <div className="absolute top-0 left-1/4 w-3 h-3 text-accent/40 animate-bounce" style={{animationDelay: '2s', animationDuration: '3s'}}>
                <svg viewBox="0 0 24 24" className="w-full h-full transform rotate-45" fill="currentColor">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </div>

              <div className="absolute top-8 right-1/3 w-2.5 h-2.5 text-calm-accent/30 animate-bounce" style={{animationDelay: '4s', animationDuration: '4s'}}>
                <svg viewBox="0 0 24 24" className="w-full h-full transform -rotate-30" fill="currentColor">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </div>

              {/* Root System Hint */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-t from-accent/10 to-transparent rounded-full blur-sm"></div>
              
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}