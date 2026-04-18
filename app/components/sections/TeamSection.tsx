"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    specialties: ["Medication", "Mood Disorders", "ADHD"],
    education: "M.D., Harvard Medical School"
  },
  {
    id: 3,
    name: "Emily Williams, LCSW",
    role: "Clinical Social Worker",
    image: "https://images.unsplash.com/photo-1594824432258-f24fa9343ee4?w=800&q=80",
    shortBio: "Focuses on trauma-informed care and relationship counseling.",
    fullBio: "Emily Williams specializes in trauma-informed care and couples relationship counseling. With a warm and empathetic approach, Emily creates a safe space for clients to explore past traumas, work through relationship conflicts, and rebuild trust and connection.",
    specialties: ["Couples Therapy", "Trauma & PTSD", "Family Dynamics"],
    education: "MSW, University of Michigan"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    role: "Adolescent Psychologist",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80",
    shortBio: "Dedicated to helping youth navigate developmental challenges.",
    fullBio: "Dr. James Wilson has dedicated his career to supporting children, adolescents, and their families. He uses play therapy, CBT, and family counseling to address behavioral issues, school-related anxiety, and early-stage mood disorders in a child-friendly environment.",
    specialties: ["Child Psychology", "Teen Issues", "Behavioral"],
    education: "Psy.D., Rutgers University"
  }
];

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <section id="team" className="py-20 md:py-32 w-full relative" style={{ background: "var(--background)" }}>
      
      {/* ── Section Header ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 md:mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="flex items-center gap-5 mb-6">
             <div className="w-12 h-[1px]" style={{ background: "var(--border-subtle)" }} />
             <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] md:tracking-[0.25em] uppercase" style={{ color: "var(--accent)" }}>
               Our Care Professionals
             </span>
             <div className="w-12 h-[1px]" style={{ background: "var(--border-subtle)" }} />
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-7xl font-bold max-w-2xl" 
            style={{ fontFamily: "var(--font-cormorant-garamond)", color: "var(--primary)", letterSpacing: "-0.01em" }}
          >
            Meet the Team
          </h2>
        </motion.div>
      </div>

      {/* ── Visual Grid Layout ── */}
      <div className="max-w-[95vw] lg:max-w-screen-2xl mx-auto px-4 lg:px-8 pb-10">
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex-none w-[80vw] sm:w-[60vw] md:w-auto snap-center"
            >
              <div 
                className="group relative w-full aspect-[3/4] md:aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer bg-[#0a0a0a] shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                onClick={() => setSelectedMember(member)}
              >
                 
                 {/* Background Image */}
                 <img 
                   src={member.image} 
                   alt={member.name}
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105" 
                 />
                 
                 {/* Permanent Bottom Gradient & Hover Deepening */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/40 to-transparent transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:from-black group-hover:via-black/70 group-hover:to-black/30 opacity-80 group-hover:opacity-100" />
                 
                 {/* Specific Accent Color Wash on Hover (subtle) */}
                 <div className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-[0.03]" style={{ background: "var(--accent)" }} />
                 
                 {/* Content Wrapper */}
                 <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                   
                   {/* Persistent Headers (Slide up on hover) */}
                   <div className="transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2">
                     <p className="text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase mb-2 md:mb-3" style={{ color: "var(--accent)" }}>
                       {member.role}
                     </p>
                     <h3 className="text-3xl md:text-4xl text-white font-bold leading-none drop-shadow-lg" style={{ fontFamily: "var(--font-cormorant-garamond)" }}>
                       {member.name}
                     </h3>
                   </div>

                   {/* Accordion Detail Reveal (Hidden initially, expands on group-hover) */}
                   <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                     <div className="overflow-hidden">
                       <div className="pt-5">
                         
                         <p className="text-[13px] md:text-[14px] text-white/80 leading-relaxed mb-6 font-light" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                           {member.shortBio}
                         </p>
                         
                         <div className="flex flex-wrap gap-2 mb-8">
                           {member.specialties.map((s, idx) => (
                              <span key={idx} className="px-3 py-1.5 border border-white/20 bg-white/5 backdrop-blur-md rounded-full text-[9px] uppercase font-semibold tracking-widest text-white/90">
                                {s}
                              </span>
                           ))}
                         </div>

                         <a 
                           href="#booking"
                           className="inline-flex w-full items-center justify-center gap-3 px-6 py-4 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 bg-white text-black hover:bg-transparent hover:text-white border border-transparent hover:border-white group/btn"
                           onClick={(e) => {
                             // Let normal link action occur, avoid interfering
                           }}
                         >
                           Reserve Session
                           <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                         </a>
                         
                       </div>
                     </div>
                   </div>

                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* ── Member Details Modal ── */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex flex-col justify-end md:justify-center items-center p-0 md:p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div 
              initial={{ opacity: 0, y: "100%", scale: 1 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: "100%", scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full md:w-auto md:min-w-[800px] md:max-w-5xl bg-[#0a0a0a] md:rounded-3xl rounded-t-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)] flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
            >
              {/* Close button */}
              <button 
                className="absolute top-4 md:top-6 right-4 md:right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-[var(--accent)] hover:text-black backdrop-blur-md transition-all duration-300"
                onClick={() => setSelectedMember(null)}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L13 1M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>

              {/* Left: Image Panel */}
              <div className="w-full md:w-5/12 h-[35vh] md:h-auto relative shrink-0">
                <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0a0a0a]" />
              </div>

              {/* Right: Info Panel */}
              <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10">
                <p className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-[var(--accent)] mb-2">
                  {selectedMember.role}
                </p>
                <h3 className="text-4xl md:text-5xl text-white font-bold mb-8 md:mb-10" style={{ fontFamily: "var(--font-cormorant-garamond)" }}>
                  {selectedMember.name}
                </h3>

                <div className="space-y-8 flex-1">
                  <div>
                    <h4 className="text-[9px] uppercase tracking-[0.2em] text-white/30 font-bold mb-3">About</h4>
                    <p className="text-[14px] md:text-[15px] font-light leading-relaxed text-white/85">
                      {selectedMember.fullBio}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[9px] uppercase tracking-[0.2em] text-white/30 font-bold mb-3">Education</h4>
                    <p className="text-[14px] md:text-[15px] text-white/90">
                      {selectedMember.education}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[9px] uppercase tracking-[0.2em] text-white/30 font-bold mb-4">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.specialties.map((s, idx) => (
                        <span key={idx} className="px-4 py-2 border border-white/10 bg-white/5 rounded-full text-[10px] uppercase font-semibold tracking-widest text-white/80">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 md:mt-12 pt-8 border-t border-white/10">
                  <button 
                    onClick={() => {
                      window.location.href = '#booking';
                      setSelectedMember(null);
                    }}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 bg-white text-black hover:bg-[var(--accent)] hover:text-black hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                  >
                    Reserve Session
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}