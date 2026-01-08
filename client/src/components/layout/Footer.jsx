import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Terminal } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name:  'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: Mail, url: 'mailto:your. email@example.com', label: 'Email' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Terminal size={24} />
              </div>
              <div>
                <h3 className="footer-logo-text gradient-text">Prince Kothari</h3>
                <p className="footer-logo-subtitle">Full Stack Developer</p>
              </div>
            </div>
            <p className="footer-description">
              Building amazing web experiences with modern technologies.  
              Let's create something awesome together!  🚀
            </p>
            <div className="footer-social">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-section">
            <h4 className="footer-links-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="footer-link">
                    {link. name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact-section">
            <h4 className="footer-contact-title">Contact</h4>
            <ul className="footer-contact">
              <li>Your City, Country</li>
              <li>your.email@example.com</li>
              <li>+1 234 567 8900</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Your Name.  Made with <Heart size={16} className="footer-heart" /> using React & Tailwind CSS
          </p>

          {/* Scroll to Top */}
          <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;