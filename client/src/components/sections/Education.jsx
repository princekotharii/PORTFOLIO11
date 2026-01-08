import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle } from 'lucide-react';
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
            <GraduationCap size={16} />
            <span>My Journey</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text-orange">Education</span>
          </h2>
          <div className="section-divider-orange"></div>
          <p className="section-description">
            My academic background and qualifications
          </p>
        </div>

        {/* Compact Education Grid */}
        <div className="education-grid-compact">
          {education.map((edu, idx) => {
            const Icon = iconMap[edu.icon] || GraduationCap;
            
            return (
              <div 
                key={idx} 
                className="edu-card-compact"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Left Side - Icon */}
                <div className={`edu-icon-compact ${edu.color || 'gradient-purple'}`}>
                  <Icon size={24} />
                </div>

                {/* Right Side - Content */}
                <div className="edu-content-compact">
                  {/* Title Row */}
                  <div className="edu-title-row">
                    <div>
                      <h3 className="edu-degree-compact">{edu. degree}</h3>
                      {edu.field && (
                        <p className="edu-field-compact">{edu.field}</p>
                      )}
                    </div>
                    {edu.grade && (
                      <span className="edu-grade-compact">{edu.grade}</span>
                    )}
                  </div>

                  {/* Institution & Meta */}
                  <div className="edu-institution-compact">{edu.institution}</div>
                  
                  <div className="edu-meta-compact">
                    {edu.location && (
                      <span>
                        <MapPin size={12} />
                        {edu.location}
                      </span>
                    )}
                    {edu.duration && (
                      <span>
                        <Calendar size={12} />
                        {edu.duration}
                      </span>
                    )}
                  </div>

                  {/* Highlights */}
                  {edu.highlights && edu.highlights. length > 0 && (
                    <div className="edu-highlights-compact">
                      {edu.highlights.map((highlight, hIdx) => (
                        <span key={hIdx} className="highlight-badge">
                          <CheckCircle size={12} />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {education.length === 0 && (
          <div className="education-empty">
            <GraduationCap size={48} />
            <p>No education information available</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;