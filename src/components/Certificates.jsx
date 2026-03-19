import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const certificatesData = [
  {
    name: 'Node.js (Intermediate)',
    issuer: 'HackerRank',
    date: '2026',
    link: 'https://www.hackerrank.com/certificates/8a0834ddd1ee',
    category: 'Backend',
  },
  {
    name: 'DSA using Java',
    issuer: 'Infosys',
    date: '2025',
    link: 'https://drive.google.com/file/d/1xy6L7ZrGFSAAcfmG0c-9MPB9w0-tq3Ox/view',
    category: 'Algorithms',
  },
  {
    name: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    date: '2025',
    link: 'https://www.hackerrank.com/certificates/8aab5898d977',
    category: 'Frontend',
  },
  {
    name: 'GEN AI Professional',
    issuer: 'Oracle',
    date: '2025',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=5D4159E0A03F5D066874A7D3186292BC3F237EF353CCE865434943410B724BBE',
    category: 'AI / Cloud',
  },
  {
    name: 'Cloud Computing',
    issuer: 'NPTEL',
    date: '2025',
    link: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S133730041404236433.pdf',
    category: 'Cloud',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="section-padding bg-black border-t border-[#1a1a1a]">
      <div className="container-custom max-w-5xl mx-auto">
        <span className="section-label">06 / Certifications</span>
        
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-16">
          Verified Credentials
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 group flex flex-col h-full hover:border-purple-500/50 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500/20 transition-all duration-500">
                  <ExternalLink size={20} className="text-purple-400" />
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#555] uppercase">{cert.date}</span>
              </div>

              <div className="mb-4">
                <span className="text-[10px] font-bold tracking-widest text-purple-500 uppercase block mb-2">
                  {cert.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors tracking-tight">
                  {cert.name}
                </h3>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <p className="text-[#a1a1aa] text-sm font-medium">{cert.issuer}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
