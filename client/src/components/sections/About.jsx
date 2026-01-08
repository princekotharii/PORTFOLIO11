import { Code, Award, Users, Trophy, Heart, MapPin, Mail, Phone, Zap, Target } from 'lucide-react';
import './About.css';

const About = ({ data, isVisible }) => {
  const iconMap = {
    Zap,
    Target,
    Heart,
    Code
  };

  const stats = data?.stats || [
    { icon: 'Code', value: '50+', label: 'Projects', color: '#a855f7' },
    { icon: 'Award', value:  '10+', label: 'Certificates', color: '#3b82f6' },
    { icon: 'Users', value: '500+', label: 'Commits', color: '#10b981' },
    { icon: 'Trophy', value: '5+', label: 'Hackathons', color: '#f97316' }
  ];

  const statsIconMap = { Code, Award, Users, Trophy };
  
  const highlights = data?.highlights || [
    { icon: 'Zap', text: 'Fast Learner', color: '#eab308' },
    { icon: 'Target', text: 'Goal Oriented', color: '#10b981' },
    { icon: 'Heart', text: 'Passionate', color: '#ec4899' },
    { icon: 'Code', text: 'Clean Coder', color: '#3b82f6' }
  ];

  return (
    <section id="about" className={`about-section ${isVisible ? 'visible' : ''}`}>
      {/* Background */}
      <div className="section-bg"></div>
      
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span>Get To Know Me</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-grid">
          {/* Left:  Profile Card */}
          <div className="about-profile">
            <div className="profile-card-glow"></div>
            
            <div className="profile-card">
              {/* Decorative Elements */}
              <div className="profile-decoration profile-decoration-1"></div>
              <div className="profile-decoration profile-decoration-2"></div>
              
              <div className="profile-content">
                {/* Profile Image */}
                <div className="profile-image">
                  <div className="profile-image-inner">
                    <div className="profile-avatar">
                      <span className="profile-emoji">{data?.image || '👨‍💻'}</span>
                    </div>
                    <p className="profile-label">{data?.name || 'Your Name'}</p>
                    <p className="profile-username">@yourusername</p>
                  </div>
                </div>
                
                {/* Contact Info */}
                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-icon contact-icon-purple">
                      <MapPin size={20} />
                    </div>
                    <div className="contact-text">
                      <p className="contact-label">Location</p>
                      <p className="contact-value">{data?.location || 'Your City, Country'}</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon contact-icon-blue">
                      <Mail size={20} />
                    </div>
                    <div className="contact-text">
                      <p className="contact-label">Email</p>
                      <p className="contact-value">{data?.email || 'your. email@example.com'}</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon contact-icon-green">
                      <Phone size={20} />
                    </div>
                    <div className="contact-text">
                      <p className="contact-label">Phone</p>
                      <p className="contact-value">{data?.phone || '+1 234 567 8900'}</p>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="profile-highlights">
                  {highlights.map((highlight, idx) => {
                    const Icon = iconMap[highlight.icon];
                    return (
                      <div key={idx} className="profile-highlight" style={{ '--highlight-color': highlight.color }}>
                        {Icon && <Icon size={20} />}
                        <span>{highlight.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right: About Content */}
          <div className="about-content">
            <div className="about-text">
              <h3 className="about-subtitle">Who am I?</h3>
              <p className="about-description">
                {data?.description || 'Passionate full-stack developer with expertise in MERN stack. I love creating seamless user experiences and robust backend systems. Always eager to learn new technologies and solve complex problems.'}
              </p>
              
              <div className="about-features">
                <div className="about-feature">
                  <div className="feature-icon feature-icon-purple">
                    <Code size={24} />
                  </div>
                  <div className="feature-text">
                    <h4>Clean Code</h4>
                    <p>Writing maintainable and scalable code</p>
                  </div>
                </div>

                <div className="about-feature">
                  <div className="feature-icon feature-icon-blue">
                    <Zap size={24} />
                  </div>
                  <div className="feature-text">
                    <h4>Fast Performance</h4>
                    <p>Optimized for speed and efficiency</p>
                  </div>
                </div>

                <div className="about-feature">
                  <div className="feature-icon feature-icon-green">
                    <Target size={24} />
                  </div>
                  <div className="feature-text">
                    <h4>Goal Oriented</h4>
                    <p>Focused on delivering results</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="about-stats">
              {stats.map((stat, idx) => {
                const Icon = statsIconMap[stat.icon];
                return (
                  <div key={idx} className="about-stat-card" style={{ '--stat-color': stat.color }}>
                    <div className="stat-icon-wrapper">
                      {Icon && <Icon size={32} />}
                    </div>
                    <div className="stat-content">
                      <p className="stat-value">{stat.value}</p>
                      <p className="stat-label">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;