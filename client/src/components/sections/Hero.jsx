import { useState, useEffect } from 'react';
import { Sparkles, ChevronDown, Rocket, Mail, Terminal, Coffee, Code, ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';
import './Hero.css';

const Hero = ({ data }) => {
  const [scrollY, setScrollY] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Full Stack Developer',
    'MERN Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'UI/UX Enthusiast'
  ];

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typing effect
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText. substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ?  50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const socialLinks = [
    { icon:  Github, url: data?. githubLink || '#', label: 'GitHub', color: '#fff' },
    { icon:  Linkedin, url: data?.linkedinLink || '#', label: 'LinkedIn', color: '#0077b5' },
    { icon:  Twitter, url: data?.twitterLink || '#', label: 'Twitter', color: '#1da1f2' }
  ];

  return (
    <section id="home" className="hero">
      {/* Animated Background */}
      <div className="hero-bg" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <div className="hero-gradient-1"></div>
        <div className="hero-gradient-2"></div>
        <div className="hero-gradient-3"></div>
      </div>

      {/* Grid Pattern */}
      <div className="hero-grid"></div>
      
      <div className="hero-content">
        {/* Badge */}
        <div className="hero-badge">
          <Sparkles size={16} className="animate-pulse" />
          <span>Available for freelance work</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="hero-heading">
          <span className="hero-greeting">Hi, I'm</span>
          <span className="hero-name gradient-text">{data?.name || 'Your Name'}</span>
        </h1>
        
        {/* Typing Effect */}
        <div className="hero-typing">
          <p className="hero-typing-text">
            <span style={{ color: '#9ca3af' }}>I'm a </span>
            <span className="gradient-text" style={{ fontWeight: 600 }}>{text}</span>
            <span className="hero-cursor">|</span>
          </p>
        </div>
        
        {/* Description */}
        <p className="hero-description">
          {data?.description || 'Passionate about crafting beautiful web experiences and solving complex problems through elegant code. '}
        </p>
        
        {/* CTA Buttons */}
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary hero-btn-primary">
            <Rocket size={20} />
            View My Work
            <ArrowRight size={20} className="btn-arrow" />
          </a>
          
          <a href="#contact" className="btn btn-secondary">
            <Mail size={20} />
            Get In Touch
          </a>

          <a href={data?.resumeLink || '/resume.pdf'} download className="btn btn-secondary">
            <Download size={20} />
            Download CV
          </a>
        </div>

        {/* Social Links */}
        <div className="hero-social">
          <p className="hero-social-title">Connect with me: </p>
          <div className="hero-social-links">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label={social.label}
                style={{ '--hover-color': social.color }}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <div className="hero-stats">
          <div className="hero-stat-card stat-card-purple">
            <Terminal size={32} className="stat-icon" style={{ color: '#10b981' }} />
            <p>Always Coding</p>
          </div>
          
          <div className="hero-stat-card stat-card-orange">
            <Coffee size={32} className="stat-icon" style={{ color: '#f97316' }} />
            <p>Coffee Powered</p>
          </div>
          
          <div className="hero-stat-card stat-card-blue">
            <Code size={32} className="stat-icon" style={{ color: '#3b82f6' }} />
            <p>Problem Solver</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="hero-scroll">
        <span>Scroll Down</span>
        <ChevronDown size={20} className="hero-scroll-icon" />
      </a>
    </section>
  );
};

export default Hero;