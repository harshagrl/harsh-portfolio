import { motion } from 'framer-motion';

const achievementsData = [
  {
    title: 'Solved 250+ Problems',
    description: 'Solved over 250+ problems across LeetCode, GFG, HackerRank and CodeChef, demonstrating strong algorithmic and problem-solving skills.',
    date: 'March 2026',
  },
  {
    title: '4-Star Rating in Java',
    description: 'Achieved a 4-star rating in Java on HackerRank, showcasing advanced proficiency in Java programming and data structures.',
    date: 'March 2026',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-[#050505] border-t border-[#1a1a1a]">
      <div className="container-custom max-w-5xl mx-auto">
        <span className="section-label">07 / Achievements</span>
        
        {/* Massive Stats Grid */}
        {/* Massive Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { label: 'Problems Solved', value: '250+' },
            { label: 'HackerRank', value: '4★' },
            { label: 'Projects Built', value: '3+' },
            { label: 'Certifications', value: '5+' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-10 md:p-12 text-center flex flex-col items-center justify-center hover:bg-purple-500/10 hover:border-purple-500/30 transition-all duration-500"
            >
              <div className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-3 group-hover:text-purple-400">
                {stat.value}
              </div>
              <p className="text-[#a1a1aa] font-mono text-xs uppercase tracking-[0.25em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Achievements */}
        <div className="grid md:grid-cols-2 gap-12">
          {achievementsData.map((ach, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="glass-card p-12 md:p-16 group"
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
                <span className="text-[#555] font-mono text-sm uppercase tracking-widest">{ach.date}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-purple-400 transition-colors">
                {ach.title}
              </h3>
              <p className="text-[#a1a1aa] leading-relaxed text-lg">
                {ach.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
