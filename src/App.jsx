import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Competitive from './components/Competitive';

import Contact from './components/Contact';
import Footer from './components/Footer';
import ClickSpark from './components/ui/ClickSpark';
import Reveal from './components/animations/Reveal';

function App() {
  return (
    <ClickSpark
      sparkColor="#a855f7"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={10}
      duration={500}
    >
      <div className="relative">
        {/* Floating Particles Background */}
        <div className="particles-bg">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 20 + 15}s`,
              }}
            />
          ))}
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          
          <Reveal animationType="fadeUp" width="100%">
            <About />
          </Reveal>
          
          <Reveal animationType="slideRight" width="100%">
            <Resume />
          </Reveal>
          
          <Reveal animationType="slideLeft" width="100%">
            <Education />
          </Reveal>
          
          <Reveal animationType="zoomIn" width="100%">
            <Skills />
          </Reveal>
          
          <Reveal animationType="fadeUp" width="100%">
            <Projects />
          </Reveal>
          
          <Reveal animationType="slideRight" width="100%">
            <Certificates />
          </Reveal>
          
          <Reveal animationType="slideLeft" width="100%">
            <Achievements />
          </Reveal>
          
          <Reveal animationType="zoomIn" width="100%">
            <Experience />
          </Reveal>
          
          <Reveal animationType="fadeUp" width="100%">
            <Competitive />
          </Reveal>
          

          
          <Reveal animationType="zoomIn" width="100%">
            <Contact />
          </Reveal>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ClickSpark>
  );
}

export default App;
