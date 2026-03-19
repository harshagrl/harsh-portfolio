import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { to: 'about', label: 'About' },
  { to: 'resume', label: 'Resume' },
  { to: 'education', label: 'Education' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-[#222] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        
        {/* Logo */}
        <Link to="hero" smooth duration={800} className="cursor-pointer">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold tracking-tighter text-white hover:text-purple-400 transition-colors"
          >
            HARSH
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <Link
                to={link.to}
                smooth
                duration={800}
                offset={-80}
                spy
                activeClass="!text-white font-semibold after:scale-x-100"
                className="text-base text-[#a1a1aa] hover:text-white transition-all cursor-pointer font-semibold tracking-widest relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-purple-500 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          
          
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 hover:bg-[#222] rounded-md transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-[#222] transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-custom py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={800}
              offset={-80}
              spy
              activeClass="!text-white"
              onClick={() => setIsOpen(false)}
              className="text-lg text-[#a1a1aa] hover:text-white transition-all cursor-pointer font-medium tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
