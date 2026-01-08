import { Trophy, Award, Github, Star, Medal, Target, Zap } from 'lucide-react';
import './Achievements.css';

const Achievements = ({ data, isVisible }) => {
  const iconMap = {
    Trophy,
    Award,
    Github,
    Star,
    Medal,
    Target,
    Zap
  };

  const achievements = data || [];

  return (
    <section id="achievements" className={`achievements-section ${isVisible ? 'visible' : ''}`}>
      <div className="section-bg"></div>
      
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Target size={16} />
            <span>My Milestones</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text-yellow">Achievements & Awards</span>
          </h2>
          <div className="section-divider-yellow"></div>
          <p className="section-description">
            Recognition and accomplishments throughout my journey as a developer
          </p>
        </div>
        
        {/* Achievements Grid */}
        <div className="achievements-grid">
          {achievements.map((achievement, idx) => {
            const Icon = iconMap[achievement.icon] || Trophy;
            return (
              <div key={idx} className="achievement-card">
                <div 
                  className="achievement-card-glow" 
                  style={{ background: `linear-gradient(to bottom right, ${achievement.color || '#f59e0b'}, ${achievement.color}40)` }}
                ></div>
                
                <div className="achievement-card-inner">
                  {/* Icon */}
                  <div className="achievement-header">
                    <div className="achievement-icon" style={{ background: achievement.color || '#f59e0b' }}>
                      <Icon size={40} />
                    </div>
                    {/* Badge */}
                    <div className="achievement-badge">
                      {achievement.badge || '🏆'}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="achievement-content">
                    <div className="achievement-title-row">
                      <h3 className="achievement-title">{achievement.title}</h3>
                      <span className="achievement-date">{achievement.date}</span>
                    </div>
                    
                    <p className="achievement-description">
                      {achievement.description}
                    </p>

                    {achievement.organization && (
                      <p className="achievement-organization">
                        <Award size={14} />
                        {achievement.organization}
                      </p>
                    )}

                    {achievement.link && (
                      <a 
                        href={achievement.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="achievement-link"
                      >
                        View Certificate →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;