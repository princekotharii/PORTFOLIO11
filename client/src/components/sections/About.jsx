import { User, Download, Code, Heart, Target, Zap, Trophy, Users, Briefcase, Award } from 'lucide-react';
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
    <section id="about" className={`about-section ${isVisible ? 'visible' :  ''}`}>
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

        {/* About Content - New Layout */}
        <div className="about-wrapper">
          {/* Profile Picture - Circular */}
          <div className="profile-section-circular">
            <div className="profile-circle-container">
              <div className="profile-circle-border">
                {data?.profileImage ? (
                  <img
                    src={data.profileImage}
                    alt={data?. name || 'Profile'}
                    className="profile-img-circle"
                    onError={(e) => {
                      e.target.style. display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className="profile-placeholder-circle" style={{ display: data?.profileImage ? 'none' : 'flex' }}>
                  <User size={80} />
                </div>
              </div>
            </div>
            <div className="status-badge-below">
              <span className="status-dot-pulse"></span>
              Available for work
            </div>
          </div>

          {/* Description Section */}
          <div className="about-description-new">
            <h3 className="about-heading">Who I Am</h3>
            <p className="about-text-new">
              {data?.description || 'Full-stack developer passionate about creating elegant solutions to complex problems. '}
            </p>
            
            {/* Download CV Button */}
            <a href="/resume.pdf" download className="btn btn-primary btn-download">
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Highlights Section */}
          {highlights.length > 0 && (
            <div className="highlights-section-new">
              <h3 className="about-heading">What I Bring</h3>
              <div className="highlights-grid-new">
                {highlights. map((highlight, idx) => {
                  const Icon = iconMap[highlight.icon] || Code;
                  return (
                    <div key={idx} className="highlight-item-new">
                      <div className="highlight-icon-new" style={{ color: highlight.color }}>
                        <Icon size={20} />
                      </div>
                      <span>{highlight.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Stats Section */}
          {stats.length > 0 && (
            <div className="stats-section-new">
              <h3 className="about-heading">Quick Stats</h3>
              <div className="stats-grid-new">
                {stats.map((stat, idx) => {
                  const Icon = iconMap[stat.icon] || Code;
                  return (
                    <div key={idx} className="stat-item-new">
                      <div className="stat-icon-new" style={{ color: stat.color }}>
                        <Icon size={24} />
                      </div>
                      <div className="stat-content-new">
                        <span className="stat-value-new">{stat.value}</span>
                        <span className="stat-label-new">{stat.label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;