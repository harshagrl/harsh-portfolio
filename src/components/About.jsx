import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import VariableProximity from './animations/VariableProximity';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const aboutText = "I specialize in building scalable web applications using the MERN stack. I've developed platforms that handle real-time data, multi-role authentication, and secure integrations. I thrive on solving complex problems, proactively learning new technologies, and contributing through competitive programming. My goal is to build technology that creates a meaningful impact.";

  return (
    <section id="about" className="section-padding bg-[#050505]">
      <div className="container-custom max-w-4xl mx-auto">
        <span className="section-label">01 / About</span>
        
        <div ref={ref}>
          {/* Main big text with Variable Proximity effect */}
          <div className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.2] tracking-tight text-[#a1a1aa] mb-12">
            <VariableProximity 
              text={aboutText} 
              className="inline-block"
            />
          </div>

          {/* Additional details - Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-10 pt-16"
          >
            <div className="glass-card p-12 md:p-16">
              <h3 className="text-white font-mono text-sm uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                Core Focus
              </h3>
              <p className="text-[#a1a1aa] leading-relaxed text-lg">
                Developing robust APIs, crafting fluid user interfaces, and architecting data models that scale gracefully. 
              </p>
            </div>
            <div className="glass-card p-12 md:p-16">
              <h3 className="text-white font-mono text-sm uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                Current Status
              </h3>
              <p className="text-[#a1a1aa] leading-relaxed text-lg">
                Pursuing B.Tech in CSE at Lovely Professional University (CGPA 8.25). Exploring cloud technologies and AI integration.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
