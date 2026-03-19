import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:harshkr.agrl@gmail.com?subject=Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AReply to: ${formData.email}`;
  };

  return (
    <section id="contact" className="section-padding bg-[#050505] border-t border-[#1a1a1a]">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          
          <div className="lg:sticky lg:top-32">
            <span className="section-label">10 / Connect</span>
            <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-10 leading-[0.95]">
              Let's build <br/>
              <span className="text-purple-500">something</span> <br/>
              vibrant.
            </h2>
            
            <p className="text-[#a1a1aa] text-xl mb-12 max-w-sm leading-relaxed">
              I'm always open to discussing new projects, creative ideas or architectural challenges.
            </p>

            <div className="space-y-8">
              <a href="mailto:harshkr.agrl@gmail.com" className="flex items-center gap-5 text-2xl font-bold text-white hover:text-purple-400 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                  <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={24} />
                </div>
                <span>harshkr.agrl@gmail.com</span>
              </a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-16 md:p-20"
          >
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-sm font-bold tracking-widest uppercase text-[#555] ml-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-20 py-10 text-lg text-white placeholder:text-[#333] focus:outline-none focus:border-purple-500 focus:bg-purple-500/5 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-bold tracking-widest uppercase text-[#555] ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-20 py-10 text-lg text-white placeholder:text-[#333] focus:outline-none focus:border-purple-500 focus:bg-purple-500/5 transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold tracking-widest uppercase text-[#555] ml-1">Your Message</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-20 py-12 text-lg text-white placeholder:text-[#333] focus:outline-none focus:border-purple-500 focus:bg-purple-500/5 transition-all resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button type="submit" className="w-full py-8 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-3 group text-lg uppercase tracking-widest">
                Send Message
                <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
