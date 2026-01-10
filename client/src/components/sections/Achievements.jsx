import { useState } from 'react';
import { Trophy, Award, Github, Sparkles, Star, ExternalLink, Calendar, Building2, Medal } from 'lucide-react';
import './Achievements.css';

const Achievements = ({ data, isVisible }) => {
  const [showAll, setShowAll] = useState(false);
  
  const achievements = data || [];
  const displayedAchievements = showAll ?  achievements : achievements.slice(0, 3);
  const hasMore = achievements.length > 3;

  const getIcon = (iconName) => {
    const icons = {
      Trophy,
      Award,
      Github,
      Sparkles,
      Medal,
      Star
    };
    return icons[iconName] || Trophy;
  };

  return (
    <section id="achievements" className={`achievements-section ${isVisible ? 'visible' : ''}`}>
      {/* Animated Background
      <div className="achievements-bg">
        <div className="achievements-gradient-1"></div>
        <div className="achievements-gradient-2"></div>
      </div> */}
      
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="achievements-badge-header">
            <Trophy className="trophy-icon-pulse" size={20} />
            <span>Achievements & Certificates</span>
          </div>
          <h2 className="achievements-main-title">
            <span className="shine-text">Awards & Recognition</span>
          </h2>
          <div className="achievements-title-underline"></div>
          <p className="achievements-subtitle">
            Celebrating milestones, certifications, and accomplishments
          </p>
        </div>

        {achievements.length > 0 ?  (
          <>
            {/* Achievements Grid */}
            <div className="achievements-showcase">
              {displayedAchievements.map((achievement, idx) => {
                const Icon = getIcon(achievement.icon);
                return (
                  <div 
                    key={achievement._id || idx} 
                    className="achievement-certificate"
                    style={{ 
                      animationDelay:  `${idx * 0.15}s`
                    }}
                  >
                    {/* Certificate Border Effect */}
                    <div className="certificate-border" style={{ '--cert-color': achievement.color }}></div>
                    
                    {/* Certificate Content */}
                    <div className="certificate-content">
                      {/* Top Badge */}
                      <div className="certificate-top-badge" style={{ background: achievement.color }}>
                        <Icon size={24} />
                      </div>

                      {/* Category & Year */}
                      <div className="certificate-meta">
                        <span className="certificate-category">{achievement.category}</span>
                        <span className="certificate-year">
                          <Calendar size={12} />
                          {achievement. date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="certificate-title">{achievement.title}</h3>

                      {/* Badge Label */}
                      <div className="certificate-badge-label" style={{ 
                        background: `${achievement.color}15`,
                        color: achievement.color,
                        borderColor: `${achievement.color}40`
                      }}>
                        {achievement.badge}
                      </div>

                      {/* Description */}
                      <p className="certificate-description">{achievement. description}</p>

                      {/* Organization */}
                      {achievement.organization && (
                        <div className="certificate-organization">
                          <Building2 size={16} />
                          <span>{achievement.organization}</span>
                        </div>
                      )}

                      {/* Certificate Link */}
                      {achievement.certificateLink ?  (
                        <a
                          href={achievement.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="certificate-view-btn"
                          style={{ 
                            '--btn-color': achievement.color 
                          }}
                        >
                          <ExternalLink size={18} />
                          <span>View Certificate</span>
                          <div className="btn-shine"></div>
                        </a>
                      ) : (
                        <div className="certificate-no-link">
                          <Star size={16} />
                          <span>Achievement Unlocked</span>
                        </div>
                      )}
                    </div>

                    {/* Decorative Corner Stars */}
                    <div className="certificate-star star-1">⭐</div>
                    <div className="certificate-star star-2">✨</div>
                  </div>
                );
              })}
            </div>

            {/* Show More Button */}
            {hasMore && (
              <div className="achievements-toggle">
                <button 
                  onClick={() => setShowAll(!showAll)}
                  className="toggle-achievements-btn"
                >
                  <span className="toggle-icon">
                    {showAll ?  '▲' : '▼'}
                  </span>
                  <span className="toggle-text">
                    {showAll 
                      ? 'Show Less' 
                      : `View ${achievements.length - 3} More Achievement${achievements.length - 3 > 1 ?  's' : ''}`
                    }
                  </span>
                  <span className="toggle-count">{showAll ? '' : `+${achievements.length - 3}`}</span>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="achievements-empty-state">
            <div className="empty-icon">
              <Trophy size={64} />
            </div>
            <h3>No Achievements Yet</h3>
            <p>Check back soon for upcoming awards and certifications!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;