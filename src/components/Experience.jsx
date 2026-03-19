import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const experienceData = [
  {
    company: 'CipherSchools',
    role: 'Full Stack Web Development Trainee',
    period: 'Summer 2025',
    link: 'https://www.cipherschools.com/',
    highlights: [
      'Integrated frontend and backend features using React.js, Node.js, Express.js, and REST APIs to improve platform functionality by 40%',
      'Configured secure authentication and state handling with JWT Auth and Redux for 99% secure user access and smoother data flow across 5+ protected modules',
      'Worked with MongoDB and full-stack workflows to build 12+ optimized, scalable interfaces and backend logic, increasing search efficiency by 35%',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-black border-t border-[#1a1a1a]">
      <div className="container-custom max-w-5xl mx-auto">
        <span className="section-label">08 / Experience</span>
        
        <div className="grid gap-12 mt-16">
          {experienceData.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass-card p-16 md:p-20 group relative overflow-hidden"
            >

              <div className="flex flex-col md:flex-row gap-10 relative z-10">
                {/* Meta */}
                <div className="md:w-1/3 border-r border-white/5 pr-8">
                  <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl inline-block mb-6">
                    <span className="text-purple-400 font-mono text-sm tracking-widest uppercase">{exp.period}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">{exp.company}</h4>
                  <p className="text-[#a1a1aa] text-sm font-medium flex items-center gap-2 mb-8">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Remote Training
                  </p>
                  <p className="mt-4">
                    <a href="https://www.cipherschools.com/certificate/preview?id=687e3fb77efd6d5090703dc5" target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] text-sm font-medium flex items-center gap-2">
                      <ExternalLink size={20} className="text-purple-400" />
                    </a>
                  </p>
                </div>

                {/* Details */}
                <div className="md:w-2/3">
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-8 group-hover:text-purple-400 transition-colors">
                    {exp.role}
                  </h3>
                  
                  <ul className="grid gap-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-[#a1a1aa] text-lg leading-relaxed flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-transparent hover:border-white/10 hover:bg-white/10 transition-all duration-300">
                        <span className="text-purple-500 mt-1 font-bold">»</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
