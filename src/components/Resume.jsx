import { Download, Mail, Phone, ExternalLink, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section id="resume" className="section-padding bg-black border-y border-[#1a1a1a]">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 mb-16">
          <div className="max-w-3xl">
            <span className="section-label">02 / Profile</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Building <span className="text-purple-500">scalable</span> solutions with passion.
            </h2>
            <p className="text-xl text-[#a1a1aa] leading-relaxed">
              An aspiring engineer committed to continuous learning and technical excellence.
            </p>
          </div>
          
          <motion.a
            whileHover={{ y: -5, boxShadow: "0 20px 40px -5px rgba(168, 85, 247, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            href="/Harsh_Kumar_Resume.pdf"
            download
            className="inline-flex items-center justify-center gap-4 px-16 py-8 bg-purple-600 border border-purple-500 text-white font-bold rounded-lg text-xl uppercase tracking-[0.2em] transition-all shadow-2xl self-center lg:self-center"
          >
            <Download size={24} />
            Download Resume
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="md:col-span-2 glass-card p-10">
            <h3 className="text-white font-mono text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Career Objective
            </h3>
            <p className="text-[#eee] leading-relaxed text-lg italic">
              "Aspiring Full Stack Developer seeking to leverage expertise in MERN stack 
              development, competitive programming, and cloud technologies to build impactful software solutions. 
              Committed to contributing to innovative teams in the tech industry."
            </p>
          </div>

          

        </div>
      </div>
    </section>
  );
}
