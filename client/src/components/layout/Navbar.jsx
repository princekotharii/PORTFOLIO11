import { useState, useEffect } from 'react';
import { Terminal, Menu, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import MobileMenu from './MobileMenu';
import './Navbar.css';

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com/yourusername', label: 'Twitter' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style. overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`navbar ${isScrolled || isMobileMenuOpen ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-content">
            
            {/* Logo */}
            <a href="#home" className="navbar-logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
              <div className="logo-icon">
                <div className="logo-icon-bg"></div>
                <div className="logo-icon-inner">
                  <Terminal size={24} />
                </div>
              </div>
              <div className="logo-text">
                <span className="logo-name gradient-text">Prince Kothari</span>
                <p className="logo-subtitle">Full Stack Developer</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="nav-desktop">
              {sections.map((section, idx) => (
                <a
                  key={idx}
                  href={`#${section.id}`}
                  className={`nav-link ${activeSection === section. id ? 'nav-link-active' : ''}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(section.id); }}
                >
                  {section.name}
                </a>
              ))}
            </nav>

            {/* Social Links & CTA */}
            <div className="navbar-actions">
              <div className="social-links">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>

              <a href="#contact" className="btn btn-primary navbar-cta" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                <Mail size={16} />
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        sections={sections}
        activeSection={activeSection}
        socialLinks={socialLinks}
        scrollToSection={scrollToSection}
      />
    </>
  );
};

export default Navbar;