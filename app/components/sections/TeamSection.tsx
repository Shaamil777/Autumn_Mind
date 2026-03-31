"use client";

import { useState } from 'react';

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Clinical Psychologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
    shortBio: "Specializing in anxiety, depression, and stress management.",
    fullBio: "Dr. Sarah Chen brings over 15 years of clinical experience helping individuals navigate anxiety, depression, and major life transitions. She utilizes Evidence-Based treatments including CBT and mindfulness-based cognitive therapy to empower her clients toward sustainable mental well-being.",
    specialties: ["Anxiety & Panic", "Depression", "Stress Management"],
    education: "Ph.D. in Clinical Psychology, Stanford University"
  },
  {
    id: 2,
    name: "Dr. Marcus Johnson",
    role: "Psychiatrist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
    shortBio: "Expert in adult psychiatry and medication management.",
    fullBio: "Dr. Marcus Johnson is board-certified in general psychiatry with a focus on comprehensive psychiatric evaluations and personalized medication management. He believes in a holistic approach, often collaborating with therapists to ensure patients receive well-rounded care.",
    specialties: ["Medication Management", "Mood Disorders", "ADHD"],
    education: "M.D., Harvard Medical School"
  },
  {
    id: 3,
    name: "Emily Williams, LCSW",
    role: "Licensed Clinical Social Worker",
    image: "https://images.unsplash.com/photo-1594824432258-f24fa9343ee4?w=800&q=80",
    shortBio: "Focuses on trauma-informed care and relationship counseling.",
    fullBio: "Emily Williams specializes in trauma-informed care and couples relationship counseling. With a warm and empathetic approach, Emily creates a safe space for clients to explore past traumas, work through relationship conflicts, and rebuild trust and connection.",
    specialties: ["Couples Therapy", "Trauma & PTSD", "Family Dynamics"],
    education: "MSW, University of Michigan"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    role: "Child & Adolescent Psychologist",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80",
    shortBio: "Dedicated to helping youth navigate developmental challenges.",
    fullBio: "Dr. James Wilson has dedicated his career to supporting children, adolescents, and their families. He uses play therapy, CBT, and family counseling to address behavioral issues, school-related anxiety, and early-stage mood disorders in a child-friendly environment.",
    specialties: ["Child Psychology", "Adolescent Issues", "Behavioral Interventions"],
    education: "Psy.D., Rutgers University"
  }
];

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedMember(null);
    }
  };

  return (
    <section id="team" className="min-h-screen bg-secondary-bg py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-4">Our Team</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-primary/70 max-w-3xl mx-auto">
            Meet our experienced and caring mental health professionals dedicated to your well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-background rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border hover:border-accent/40 border-primary/5 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative h-80 w-full overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-4 group-hover:translate-y-0 text-center transition-transform duration-300 origin-bottom">
                  <h3 className="text-2xl font-bold text-background mb-1 drop-shadow-md">{member.name}</h3>
                  <p className="text-background/90 text-sm font-medium drop-shadow-md">{member.role}</p>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow bg-background relative z-10 text-center">
                <p className="text-primary/70 mb-8 flex-grow leading-relaxed">{member.shortBio}</p>
                
                <div className="flex gap-3 mt-auto">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = '#booking';
                    }}
                    className="flex-1 bg-primary text-background px-4 py-3 rounded-xl text-sm font-bold hover:bg-accent hover:text-white transition-colors shadow-md hover:shadow-lg active:scale-95"
                  >
                    Book Now
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMember(member);
                    }}
                    className="flex-1 bg-secondary-bg text-primary px-4 py-3 rounded-xl text-sm font-bold hover:bg-primary/5 transition-all outline outline-1 outline-primary/10 hover:outline-primary/30"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-primary/80 backdrop-blur-md transition-all duration-300 opacity-100"
          onClick={handleBackdropClick}
        >
          <div className="bg-background rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row max-h-[95vh] sm:max-h-[85vh] relative transform scale-100 transition-all duration-300">
            
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/50 backdrop-blur-sm text-primary rounded-full flex items-center justify-center hover:bg-background/80 hover:text-accent transition-colors shadow-sm"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Modal Image Side */}
            <div className="w-full md:w-5/12 h-72 md:h-auto relative shrink-0">
              <img 
                src={selectedMember.image} 
                alt={selectedMember.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent md:hidden"></div>
              <div className="absolute bottom-6 left-6 right-6 md:hidden">
                <h3 className="text-3xl font-bold text-background mb-1">{selectedMember.name}</h3>
                <p className="text-background/90 text-lg font-medium">{selectedMember.role}</p>
              </div>
            </div>

            {/* Modal Content Side */}
            <div className="w-full md:w-7/12 p-8 md:p-10 lg:p-12 overflow-y-auto flex flex-col bg-background">
              <div className="hidden md:block mb-8">
                <h3 className="text-4xl font-bold text-primary mb-2">{selectedMember.name}</h3>
                <p className="text-accent text-xl font-semibold">{selectedMember.role}</p>
              </div>

              <div className="space-y-8 flex-grow">
                <div>
                  <h4 className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    About
                  </h4>
                  <p className="text-primary/80 leading-relaxed text-base md:text-lg">
                    {selectedMember.fullBio}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.specialties.map((specialty, idx) => (
                      <span key={idx} className="bg-secondary-bg text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/5">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10v7" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 10v7" /></svg>
                    Education
                  </h4>
                  <p className="text-primary/80 font-medium text-base">{selectedMember.education}</p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-primary/10">
                <button 
                  onClick={() => {
                    setSelectedMember(null);
                    window.location.href = '#booking';
                  }}
                  className="w-full bg-primary text-background py-5 rounded-2xl font-bold text-xl hover:bg-accent hover:text-white transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:translate-y-0 active:scale-95 flex items-center justify-center gap-3 group"
                >
                  <svg className="w-6 h-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  Book Appointment
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}