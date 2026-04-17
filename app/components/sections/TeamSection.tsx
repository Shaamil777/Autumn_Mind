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
  const [activeId, setActiveId] = useState<number>(teamMembers[0].id);

  // New Style: Split-Screen Image Presentation with Typography Hover
  // Includes 'clipPath' shutter effect (top and bottom collapse).

  return (
    <section id="team" className="py-12 md:py-24 w-full relative" style={{ background: "var(--background)" }}>
      
      {/* ── Section Header ── */}
      <div className="max-w-[90vw] mx-auto px-4 lg:px-8 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-5 justify-center md:justify-start"
        >
          <div className="w-12 h-[1px]" style={{ background: "var(--accent)" }} />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: "var(--accent)" }}>
            Our Care Professionals
          </span>
          <div className="w-12 h-[1px] md:hidden" style={{ background: "var(--accent)" }} />
        </motion.div>
      </div>

      <div className="max-w-[95vw] lg:max-w-screen-2xl mx-auto px-4 lg:px-8 pb-24">
        
        {/* Responsive Grid layout for Mobile and Desktop */}
        <div className="flex flex-col md:flex-row-reverse gap-10 lg:gap-16 items-start relative">

          {/* ── Image Panel ── */}
          <div className="w-full md:w-6/12 lg:w-1/2 aspect-[4/5] sticky top-28 rounded-xl md:rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] bg-[#0a0f0f]">
             
             <AnimatePresence>
               {teamMembers.map(member => {
                 if (member.id !== activeId) return null;
                 return (
                   <motion.div
                     key={member.id}
                     initial={{ clipPath: "inset(50% 0% 50% 0%)", filter: "brightness(0.5)" }}
                     animate={{ clipPath: "inset(0% 0% 0% 0%)", filter: "brightness(1)", zIndex: 10 }}
                     exit={{ clipPath: "inset(50% 0% 50% 0%)", filter: "brightness(0.5)", zIndex: 0 }}
                     transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Highly cinematic easing
                     className="absolute inset-0 w-full h-full"
                   >
                     {/* The Portrait */}
                     <img 
                       src={member.image} 
                       alt={member.name}
                       className="w-full h-full object-cover object-center" 
                     />
                     
                     {/* Deep shadows to ensure text pops */}
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/30 to-transparent pointer-events-none" />

                     {/* Image Overlay Interactivity (Text & Button) */}
                     <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 lg:p-16 flex flex-col justify-end">
                       <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                         className="max-w-xl"
                       >
                         {/* Name is repeated here visually to bind it directly to the portrait */}
                         <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-4" style={{ color: "var(--accent)" }}>
                           {member.role}
                         </p>
                         
                         <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-md md:hidden" style={{ fontFamily: "var(--font-cormorant-garamond)" }}>
                           {member.name}
                         </h3>

                         <p className="text-[15px] md:text-[17px] leading-[1.8] font-medium text-white/90 mb-8 max-w-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-black/10 backdrop-blur-[2px] p-4 rounded-xl md:bg-transparent md:p-0 md:backdrop-blur-none">
                           {member.fullBio}
                         </p>
                         
                         <div className="flex flex-wrap gap-2 mb-8 hidden md:flex">
                           {member.specialties.map((s, idx) => (
                             <span key={idx} className="px-4 py-2 border border-white/20 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase font-bold tracking-widest text-white shadow-sm">
                               {s}
                             </span>
                           ))}
                         </div>

                         <button 
                           onClick={() => {
                             window.location.href = '#booking';
                           }}
                           className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] bg-white text-black hover:bg-transparent hover:text-white border border-transparent hover:border-white hover:-translate-y-1"
                         >
                           Reserve Session
                           <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                         </button>
                       </motion.div>
                     </div>
                   </motion.div>
                 );
               })}
             </AnimatePresence>
          </div>

          {/* ── Left Side: Stroke Typography Selector ── */}
          <div className="w-full md:w-6/12 lg:w-1/2 flex flex-col justify-center pt-8 md:pt-16 pb-[10vh]">
             <div className="flex flex-col border-t" style={{ borderColor: "var(--border-subtle)" }}>
                {teamMembers.map((member, index) => {
                  const isActive = activeId === member.id;
                  const displayNum = String(index + 1).padStart(2, "0");

                  return (
                    <motion.div 
                      key={member.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onMouseEnter={() => setActiveId(member.id)}
                      onClick={() => setActiveId(member.id)} 
                      className="cursor-pointer group flex items-start py-8 lg:py-10 border-b transition-all duration-500"
                      style={{ borderColor: "var(--border-subtle)" }}
                    >
                      <div className="flex gap-6 md:gap-10 w-full items-center">
                         
                         {/* The rotating index text indicator */}
                         <div className="flex flex-col items-center shrink-0 w-8">
                           <span 
                             className="text-sm font-semibold tracking-widest transition-all duration-[0.6s]"
                             style={{ 
                               color: isActive ? "var(--accent)" : "var(--text-secondary)",
                               transform: isActive ? "rotate(-90deg) scale(1.1)" : "rotate(0deg) scale(1)",
                               opacity: isActive ? 1 : 0.4
                             }}
                           >
                             {displayNum}
                           </span>
                         </div>
                         
                         {/* The Stroke/Fill Typography */}
                         <div className="flex-1 overflow-hidden">
                           <h3 
                             className="text-4xl md:text-5xl lg:text-[4rem] xl:text-[5rem] font-bold leading-none tracking-tight transition-all duration-[0.6s] ease-[cubic-bezier(0.19,1,0.22,1)] whitespace-nowrap"
                             style={{ 
                               fontFamily: "var(--font-cormorant-garamond)",
                               WebkitTextStroke: isActive ? "0px" : "1px var(--primary)",
                               color: isActive ? "var(--primary)" : "transparent",
                               opacity: isActive ? 1 : 0.25,
                               transform: isActive ? "translateX(1rem)" : "translateX(0)"
                             }}
                           >
                             {member.name}
                           </h3>
                           
                           {/* Role smoothly unrolling under active name */}
                           <div 
                             className="overflow-hidden transition-all duration-[0.6s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                             style={{ 
                               height: isActive ? "24px" : "0px",
                               opacity: isActive ? 1 : 0,
                               marginTop: isActive ? "16px" : "0px",
                               transform: isActive ? "translateX(1.3rem)" : "translateX(0)"
                             }}
                           >
                             <p className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color: "var(--accent)" }}>
                               {member.role}
                             </p>
                           </div>
                         </div>
                         
                      </div>
                    </motion.div>
                  );
                })}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}