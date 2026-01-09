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
import { fallbackData } from '../data/fallbackData';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [visibleSections, setVisibleSections] = useState(new Set(['home']));

  // Use fallbackData directly - no API calls! 
  const data = fallbackData;

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries. forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold:  0.1 }
    );

    const sections = ['about', 'skills', 'projects', 'education', 'achievements', 'contact'];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar activeSection={activeSection} />
      
      <main>
        <Hero data={data.hero} />
        <About data={data.about} isVisible={visibleSections.has('about')} />
        <Skills data={data.skills} isVisible={visibleSections.has('skills')} />
        <Projects data={data.projects} isVisible={visibleSections.has('projects')} />
        <Education data={data.education} isVisible={visibleSections.has('education')} />
        <Achievements data={data. achievements} isVisible={visibleSections. has('achievements')} />
        <Contact data={data.hero} isVisible={visibleSections. has('contact')} />
      </main>

      <Footer />
    </div>
  );
};

export default Home;