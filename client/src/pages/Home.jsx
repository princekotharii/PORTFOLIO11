import { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Education from '../components/sections/Education';
import Achievements from '../components/sections/Achievements';
import Contact from '../components/sections/Contact';
import { usePortfolioData } from '../hooks/usePortfolioData';

const Home = () => {
  const { data, loading, error, isBackendAvailable } = usePortfolioData();
  const [activeSection, setActiveSection] = useState('home');
  const [visibleSections, setVisibleSections] = useState(new Set(['home']));

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document. getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window. addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = ['about', 'skills', 'projects', 'education', 'achievements', 'contact'];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <div className="spinner" style={{ width: '48px', height: '48px', borderWidth: '4px' }}></div>
        <p style={{ color: 'var(--color-text-muted)' }}>Loading portfolio... </p>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar activeSection={activeSection} />
      
      <main>
        <Hero data={data. hero} />
        <About data={data.about} isVisible={visibleSections.has('about')} />
        <Skills data={data.skills} isVisible={visibleSections.has('skills')} />
        <Projects data={data.projects} isVisible={visibleSections.has('projects')} />
        <Education data={data.education} isVisible={visibleSections.has('education')} />
        <Achievements data={data.achievements} isVisible={visibleSections. has('achievements')} />
        <Contact data={data.hero} isVisible={visibleSections. has('contact')} />
      </main>

      <Footer />

      {/* ✅ REMOVED: Backend Status Indicator Badge */}
    </div>
  );
};

export default Home;