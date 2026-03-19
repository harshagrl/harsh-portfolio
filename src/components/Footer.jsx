import { ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className="bg-[#050505] py-20 border-t border-white/5">
      <div className="container-custom max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="text-3xl font-black tracking-tighter text-white mb-3">
              HARSH<span className="text-purple-500">.</span>
            </div>
            <p className="text-[#555] text-sm font-mono uppercase tracking-[0.2em]">© 2026 Portfolio</p>
          </div>

          <div className="flex justify-center gap-12 font-mono text-xs font-bold uppercase tracking-[0.25em]">
            <a href="https://github.com/harshagrl" target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] hover:text-purple-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/harshkumaragrawal" target="_blank" rel="noopener noreferrer" className="text-[#a1a1aa] hover:text-purple-400 transition-colors">LinkedIn</a>
            <a href="mailto:harshkr.agrl@gmail.com" className="text-[#a1a1aa] hover:text-purple-400 transition-colors">Email</a>
          </div>

          <div className="flex justify-center md:justify-end">
            <Link
              to="hero"
              smooth
              duration={1000}
              className="group flex flex-col items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.3em] text-[#555] hover:text-white transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-purple-500 group-hover:bg-purple-500/10 transition-all">
                <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
              </div>
              <span>Back to top</span>
            </Link>
          </div>
          
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/5 text-center">
          <p className="text-[#222] text-[10px] font-mono tracking-widest uppercase">
            Designed & Built with passion
          </p>
        </div>
      </div>
    </footer>
  );
}
