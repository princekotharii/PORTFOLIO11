import { GraduationCap, BookOpen, Award, MapPin, Calendar, TrendingUp } from 'lucide-react';
import './Education.css';

const Education = ({ data, isVisible }) => {
  const iconMap = {
    GraduationCap,
    BookOpen,
    Award
  };

  const education = data || [];

  return (
    <section id="education" className={`education-section ${isVisible ? 'visible' : ''}`}>
      <div className="section-bg"></div>
      
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <TrendingUp size={16} />
            <span>My Academic Journey</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text-blue">Education</span>
          </h2>
          <div className="section-divider-blue"></div>
        </div>
        
        {/* Timeline */}
        <div className="timeline">
          {/* Vertical Line */}
          <div className="timeline-line"></div>
          
          {education.map((edu, idx) => {
            const Icon = iconMap[edu.icon] || GraduationCap;
            return (
              <div 
                key={idx} 
                className={`timeline-item ${idx % 2 === 0 ?  'timeline-item-left' : 'timeline-item-right'}`}
              >
                {/* Timeline Dot */}
                <div className="timeline-dot">
                  <div className="timeline-dot-inner" style={{ background: `linear-gradient(135deg, ${edu.color || '#a855f7'})` }}></div>
                </div>
                
                <div className="education-card">
                  <div className="education-card-glow" style={{ background: `linear-gradient(to right, ${edu.color || '#a855f7'})` }}></div>
                  
                  <div className="education-card-inner">
                    <div className="education-content">
                      {/* Icon */}
                      <div className="education-icon" style={{ background: `linear-gradient(135deg, ${edu.color || '#a855f7'})` }}>
                        <Icon size={32} />
                      </div>
                      
                      <div className="education-details">
                        {/* Header */}
                        <div className="education-header">
                          <div className="education-title-section">
                            <h3 className="education-degree">{edu.degree}</h3>
                            {edu.field && <p className="education-field">{edu.field}</p>}
                            <p className="education-institution">{edu.institution}</p>
                            <div className="education-meta">
                              {edu.location && (
                                <span className="education-location">
                                  <MapPin size={14} />
                                  {edu.location}
                                </span>
                              )}
                              <span className="education-duration">
                                <Calendar size={14} />
                                {edu.duration}
                              </span>
                            </div>
                          </div>
                          
                          {edu.grade && (
                            <div className="education-grade">
                              <Award size={20} />
                              <span>{edu.grade}</span>
                            </div>
                          )}
                        </div>

                        {/* Description */}
                        {edu.description && (
                          <p className="education-description">{edu.description}</p>
                        )}

                        {/* Highlights */}
                        {edu.highlights && edu.highlights.length > 0 && (
                          <div className="education-highlights">
                            {edu.highlights.map((highlight, hIdx) => (
                              <span key={hIdx} className="education-highlight">
                                ✨ {highlight}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
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

export default Education;