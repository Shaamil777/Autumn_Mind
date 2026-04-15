import React from 'react';

const services = [
  {
    title: 'Individual Therapy',
    description: 'One-on-one sessions tailored to your specific needs, focusing on personal growth, anxiety, depression, and trauma recovery.',
    icon: (
      <svg className="w-8 h-8 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: 'bg-accent'
  },
  {
    title: 'Couples Counseling',
    description: 'Work through relationship challenges, improve communication, and strengthen your bond in a supportive, neutral environment.',
    icon: (
      <svg className="w-8 h-8 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: 'bg-calm-accent'
  },
  {
    title: 'Group Therapy',
    description: 'Connect with others facing similar struggles in a safe, guided setting. Share experiences and learn from collective wisdom.',
    icon: (
      <svg className="w-8 h-8 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'bg-accent'
  },
  {
    title: 'Online Consultations',
    description: 'Access professional support from the comfort of your home with our secure and confidential teletherapy platform.',
    icon: (
      <svg className="w-8 h-8 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'bg-calm-accent'
  },
  {
    title: 'Child & Teen Therapy',
    description: 'Specialized approaches to help adolescents navigate anxiety, bullying, academic pressure, and developmental transitions.',
    icon: (
      <svg className="w-8 h-8 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'bg-accent'
  },
  {
    title: 'Stress Management',
    description: 'Learn evidence-based techniques to cope with workplace stress, prevent burnout, and balance your daily responsibilities.',
    icon: (
      <svg className="w-8 h-8 text-background" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'bg-calm-accent'
  }
];

export default function ServiceSection() {
  return (
    <section id="service" className="min-h-screen py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Discover our comprehensive range of mental health services tailored to support you at every stage of your life's journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-secondary-bg rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-accent/20 flex flex-col h-full"
            >
              <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6 shadow-md`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-primary/70 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              
              <button className="flex items-center text-accent font-semibold hover:text-primary transition-colors duration-300 mt-auto">
                Learn More
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}