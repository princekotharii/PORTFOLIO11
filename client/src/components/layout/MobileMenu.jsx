import { X, Award } from 'lucide-react';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, onClose, sections, activeSection, socialLinks, scrollToSection }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay" onClick={onClose}>
      <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
        
        {/* Mobile Menu Header */}
        <div className="mobile-menu-header">
          <div className="mobile-menu-logo">
            <span className="gradient-text font-bold text-xl">Portfolio</span>
          </div>
          <button onClick={onClose} className="mobile-menu-close">
            <X size={24} />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <nav className="mobile-menu-nav">
          {sections.map((section, idx) => (
            <a
              key={idx}
              href={`#${section.id}`}
              className={`mobile-menu-link ${activeSection === section.id ? 'mobile-menu-link-active' : ''}`}
              onClick={(e) => {
                e. preventDefault();
                scrollToSection(section.id);
              }}
            >
              <span className="mobile-menu-link-number">{String(idx + 1).padStart(2, '0')}</span>
              <span className="mobile-menu-link-text">{section.name}</span>
            </a>
          ))}

          {/* Achievements Link (Mobile Only) */}
          <a
            href="#achievements"
            className="mobile-menu-link mobile-menu-achievements"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('achievements');
            }}
          >
            <Award size={20} className="mobile-menu-achievements-icon" />
            <span className="mobile-menu-link-text">Achievements</span>
            <span className="mobile-menu-achievements-badge">Special</span>
          </a>
        </nav>

        {/* Mobile Social Links */}
        <div className="mobile-menu-social">
          <p className="mobile-menu-social-title">Connect With Me</p>
          <div className="mobile-menu-social-links">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-menu-social-link"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mobile-menu-cta">
          <a
            href="#contact"
            className="btn btn-primary w-full"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
              onClose();
            }}
          >
            Get In Touch
          </a>
        </div>

      </div>
    </div>
  );
};

export default MobileMenu;