import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'Lovely Professional University',
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    location: 'Punjab, India',
    period: "Aug '23 - Present",
    grade: 'CGPA: 8.25',
    coursework: [
      'Data Structures & Algorithms',
      'OOPS',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
    ],
  },
  {
    institution: 'DAV Public School',
    degree: 'Intermediate (12th)',
    location: 'Jharkhand, India',
    period: "Apr '21 - May '22",
    grade: 'Percentage: 81%',
    coursework: [],
  },
  {
    institution: 'DAV Public School',
    degree: 'Matriculation (10th)',
    location: 'Jharkhand, India',
    period: "Apr '19 - May '20",
    grade: 'Percentage: 89%',
    coursework: [],
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding bg-[#050505]">
      <div className="container-custom max-w-5xl mx-auto">
        <span className="section-label">03 / Education</span>
        
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-16">
          Academic Journey
        </h2>

        <div className="grid gap-12">
          {educationData.map((edu, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-12 md:p-16 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl font-bold text-white leading-none">0{educationData.length - i}</span>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                {/* Meta Column */}
                <div className="md:w-1/4 space-y-4">
                  <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-xl text-xs font-bold tracking-widest uppercase">
                    {edu.period}
                  </div>
                  <div className="text-[#a1a1aa] text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
                    {edu.location}
                  </div>
                  <div className="text-white font-mono text-sm bg-white/5 inline-block px-3 py-1 rounded-lg">
                    {edu.grade}
                  </div>
                </div>

                {/* Content Column */}
                <div className="md:w-3/4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-purple-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-[#eee] mb-6 font-medium">{edu.institution}</p>
                  
                  {edu.coursework.length > 0 && (
                    <div className="pt-6 border-t border-white/5">
                      <p className="text-[#555] text-xs uppercase font-mono tracking-widest mb-4">Core Competencies</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, j) => (
                          <span key={j} className="text-[#a1a1aa] text-xs bg-white/5 border border-white/5 px-4 py-2 rounded-xl group-hover:border-purple-500/30 group-hover:text-white transition-all">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
