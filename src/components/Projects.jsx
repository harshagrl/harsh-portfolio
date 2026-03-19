import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';
import ElectricBorder from './ui/ElectricBorder';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    title: 'MunchBae',
    period: "Dec '25 - Feb '26",
    github: 'https://github.com/harshagrl/MunchBae',
    live: 'https://munchbae.vercel.app/',
    description: 'A comprehensive MERN-stack food delivery platform capable of managing 30+ RESTful API endpoints and 6+ dynamic data schemas for users, shops, and logistics.',
    highlights: [
      'Secure multi-role authentication (Customer, Shop Owner, Delivery Partner) using JWT and Bcrypt',
      '100% authorized access control across 25+ protected routes via custom middleware',
      'Premium responsive UI with Tailwind CSS and GSAP animations, integrating Razorpay for 99% secure payment processing',
      'Leaflet Maps for real-time delivery tracking across 15+ interactive components',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Razorpay', 'Tailwind CSS', 'GSAP'],
  },
  {
    title: 'KhariDari',
    period: "Nov '25 - Dec '25",
    github: 'https://github.com/harshagrl/Kharidari',
    live: 'https://kharidari-ten.vercel.app/',
    description: 'A high-performance e-commerce ecosystem using React and Node.js, featuring a decoupled architecture deployed on Vercel.',
    highlights: [
      'Global state-management system using React Context API enabling real-time cart persistence',
      'Secure authentication across 11+ dynamic pages with ~0% data leakage during session transitions',
      'Server-side search engine and smart recommendation via Mongoose, ~45% improvement in navigation speed',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Vercel', 'Context API', 'Mongoose'],
  },
  {
    title: 'Job Tracker Application',
    period: "Jun '25 - Aug '25",
    github: 'https://github.com/harshagrl/job-tracker-application',
    live: 'https://job-tracker-application-chi.vercel.app/',
    description: 'A scalable Job Tracking platform using React and Node.js, featuring a dynamic dashboard with 5+ specialized application modules.',
    highlights: [
      'Secure Profile & Resume ecosystem with JWT authentication and Multer-driven storage',
      '99% data privacy and persistent file access during application status transitions',
      'Improved retrieval speed by ~35% via indexed MongoDB queries and optimized server-side search',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Multer', 'Express'],
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.proj-title', { x: -60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      });

      gsap.fromTo('.proj-card', { y: 70, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.2,
        scrollTrigger: { trigger: '.proj-grid', start: 'top 82%' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-padding bg-[#050505]">
      <div className="container-custom">
        <span className="section-label">05 / Featured Work</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16">
          Selected <span className="text-purple-500">Projects</span>
        </h2>

        <div className="proj-grid grid grid-cols-1 lg:grid-cols-2 gap-16">
          {projectsData.map((proj, i) => (
            <div key={i} className="proj-card">
              <ElectricBorder
                color="#a855f7"
                speed={1.5}
                chaos={0.1}
                borderRadius={28}
                className="electric-card-wrapper h-full"
              >
                <div className="glass-card h-full p-12 md:p-16 flex flex-col group" style={{ borderRadius: '28px' }}>
                  <div className="flex justify-end items-start mb-12">
                    <div className="flex gap-4">
                      <a href={proj.github} target="_blank" rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/5 text-[#a1a1aa] hover:text-white hover:border-purple-500 transition-all">
                        <FaGithub size={24} />
                      </a>
                      <a href={proj.live} target="_blank" rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/5 text-[#a1a1aa] hover:text-white hover:border-purple-500 transition-all">
                        <FaExternalLinkAlt size={22} />
                      </a>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-[#555] uppercase block mb-2">{proj.period}</span>
                    <h3 className="text-4xl font-bold text-white group-hover:text-purple-400 transition-colors tracking-tight">
                      {proj.title}
                    </h3>
                  </div>

                  <p className="text-[#888] text-lg leading-relaxed mb-10">{proj.description}</p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2.5 mb-10">
                      {proj.tech.map((t, j) => (
                        <span key={j} className="text-[10px] font-bold tracking-widest uppercase px-4 py-2 bg-white/5 border border-white/5 text-[#eee] rounded-xl">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <div className="space-y-4">
                      {proj.highlights.slice(0, 2).map((h, j) => (
                        <div key={j} className="flex items-start gap-4 text-sm text-[#777] leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                          <p>{h}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ElectricBorder>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
