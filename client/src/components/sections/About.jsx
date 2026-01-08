import { useState } from 'react';
import { User, MapPin, Mail, Phone, Download, Award, Code, Heart, Target, Zap, Trophy, Users, Briefcase } from 'lucide-react';
import './About.css';

const About = ({ data, isVisible }) => {
  const iconMap = {
    Zap,
    Target,
    Heart,
    Code,
    Award,
    Trophy,
    Users,
    Briefcase
  };

  const highlights = data?. highlights || [];
  const stats = data?.stats || [];

  return (
    <section id="about" className={`about-section ${isVisible ? 'visible' : ''}`}>
      <div className="section-bg"></div>
      
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <User size={16} />
            <span>Get to Know Me</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text-blue">About Me</span>
          </h2>
          <div className="section-divider-blue"></div>
        </div>

        {/* About Content */}
        <div className="about-content">
          {/* Left Side - Profile Picture & Info */}
          <div className="about-left">
            {/* Profile Picture with Decorative Frame */}
            <div className="profile-wrapper">
              <div className="profile-decoration-1"></div>
              <div className="profile-decoration-2"></div>
              <div className="profile-image-container">
                <div className="profile-image-wrapper">
                  {data?.profileImage ?  (
                    <img
                      src={data.profileImage}
                      alt={data?. name || 'Profile'}
                      className="profile-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className="profile-placeholder" style={{ display: data?.profileImage ? 'none' : 'flex' }}>
                    <User size={80} />
                  </div>
                </div>
                <div className="profile-status">
                  <span className="status-dot"></span>
                  Available for work
                </div>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="contact-info-cards">
              {data?.location && (
                <div className="info-card">
                  <div className="info-icon" style={{ background: 'rgba(168, 85, 247, 0.1)' }}>
                    <MapPin size={20} style={{ color: '#a855f7' }} />
                  </div>
                  <div className="info-text">
                    <span className="info-label">Location</span>
                    <span className="info-value">{data. location}</span>
                  </div>
                </div>
              )}
              
              {data?.email && (
                <div className="info-card">
                  <div className="info-icon" style={{ background:  'rgba(59, 130, 246, 0.1)' }}>
                    <Mail size={20} style={{ color: '#3b82f6' }} />
                  </div>
                  <div className="info-text">
                    <span className="info-label">Email</span>
                    <span className="info-value">{data.email}</span>
                  </div>
                </div>
              )}
              
              {data?.phone && (
                <div className="info-card">
                  <div className="info-icon" style={{ background:  'rgba(16, 185, 129, 0.1)' }}>
                    <Phone size={20} style={{ color: '#10b981' }} />
                  </div>
                  <div className="info-text">
                    <span className="info-label">Phone</span>
                    <span className="info-value">{data.phone}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Download Resume Button */}
            <a href="/resume.pdf" download className="btn btn-primary download-cv-btn">
              <Download size={20} />
              Download Resume
            </a>
          </div>

          {/* Right Side - Description & Highlights */}
          <div className="about-right">
            {/* Description */}
            <div className="about-description">
              <h3 className="about-subtitle">Who I Am</h3>
              <p className="about-text">
                {data?.description || 'Full-stack developer passionate about creating elegant solutions to complex problems. '}
              </p>
            </div>

            {/* Highlights */}
            {highlights.length > 0 && (
              <div className="about-highlights">
                <h3 className="about-subtitle">What I Bring</h3>
                <div className="highlights-grid">
                  {highlights.map((highlight, idx) => {
                    const Icon = iconMap[highlight.icon] || Code;
                    return (
                      <div key={idx} className="highlight-card">
                        <div className="highlight-icon" style={{ color: highlight.color }}>
                          <Icon size={24} />
                        </div>
                        <span className="highlight-text">{highlight.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Stats */}
            {stats.length > 0 && (
              <div className="about-stats">
                {stats.map((stat, idx) => {
                  const Icon = iconMap[stat.icon] || Code;
                  return (
                    <div key={idx} className="stat-card">
                      <div className="stat-icon" style={{ color: stat.color }}>
                        <Icon size={32} />
                      </div>
                      <div className="stat-content">
                        <h4 className="stat-value">{stat.value}</h4>
                        <p className="stat-label">{stat.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;