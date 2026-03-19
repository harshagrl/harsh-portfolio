import { motion } from 'framer-motion';

export default function Research() {
  return (
    <section id="research" className="section-padding bg-black border-t border-[#1a1a1a]">
      <div className="container-custom max-w-5xl mx-auto text-center">
        <span className="section-label mb-8">10 / Research</span>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-10 md:p-20 relative overflow-hidden group"
        >
          {/* Animated Background Decorative Element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] group-hover:bg-purple-500/20 transition-all duration-700"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px] group-hover:bg-purple-500/15 transition-all duration-700"></div>

          <div className="relative z-10">
            <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white/5 mb-8 select-none">
              RESEARCH
            </h2>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Coming Soon</h3>
              <p className="text-[#a1a1aa] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Currently exploring research opportunities in areas of <span className="text-purple-400">Artificial Intelligence</span>, 
                <span className="text-purple-400">Web Technologies</span>, and <span className="text-purple-400">Cloud Computing</span>.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {['AI & ML', 'Web Technologies', 'Cloud Computing', 'Cybersecurity'].map((topic, i) => (
                  <span key={i} className="text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 bg-white/5 border border-white/10 text-[#888] rounded-full hover:border-purple-500/50 hover:text-white transition-all cursor-default">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
