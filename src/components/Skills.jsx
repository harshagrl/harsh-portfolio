import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['C++', 'JavaScript', 'C', 'PHP', 'Python', 'Java']
  },
  {
    title: 'Frameworks',
    skills: ['Tailwind CSS', 'NodeJS', 'React', 'Express']
  },
  {
    title: 'Tools / Platforms',
    skills: ['MySQL', 'MongoDB', 'Gen AI', 'AWS EC2', 'Render', 'Vercel', 'Firebase', 'Docker', 'Git']
  },
  {
    title: 'Core Concepts',
    skills: ['Data Structures & Algorithms', 'OOPS', 'DBMS', 'Operating Systems', 'System Design']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-black border-t border-[#1a1a1a]">
      <div className="container-custom max-w-5xl mx-auto">
        <span className="section-label">04 / Capabilities</span>
        
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-16 max-w-2xl">
          Technologies and tools I use to build robust digital products.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-12 md:p-14 group"
            >
              <h3 className="text-white font-mono text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-purple-500/50"></span>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, j) => (
                  <motion.span 
                    key={j} 
                    whileHover={{ y: -2, backgroundColor: "rgba(168, 85, 247, 0.15)", borderColor: "rgba(168, 85, 247, 0.4)", color: "#fff" }}
                    className="text-[#a1a1aa] text-sm bg-white/5 border border-white/5 px-4 py-2 rounded-xl transition-all cursor-default font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
