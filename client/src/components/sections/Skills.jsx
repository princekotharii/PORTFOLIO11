import { Code, Terminal, Globe, Wrench, Layers, Database } from 'lucide-react';
import './Skills.css';

const Skills = ({ data, isVisible }) => {
  const iconMap = {
    Globe,
    Terminal,
    Code,
    Wrench,
    Layers,
    Database
  };

  const skillCategories = data || [
    {
      category: 'Frontend',
      icon: 'Globe',
      color: '#a855f7',
      items: [
        { name: 'React. js', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML & CSS', level: 95 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Redux', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className={`skills-section ${isVisible ? 'visible' : ''}`}>
      <div className="section-bg"></div>
      
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Layers size={16} />
            <span>What I Know</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text-green">Skills & Expertise</span>
          </h2>
          <div className="section-divider-green"></div>
          <p className="section-description">
            Here's a comprehensive overview of my technical skills and expertise across various domains
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, catIdx) => {
            const Icon = iconMap[category.icon] || Code;
            return (
              <div key={catIdx} className="skill-category">
                <div 
                  className="skill-category-glow" 
                  style={{ background: `linear-gradient(to right, ${category.color}, ${category.color}40)` }}
                ></div>
                
                <div className="skill-category-inner">
                  {/* Category Header */}
                  <div className="skill-category-header">
                    <div className="skill-category-icon" style={{ background: category.color }}>
                      <Icon size={28} />
                    </div>
                    <div>
                      <h3 className="skill-category-title">{category.category}</h3>
                      <p className="skill-category-subtitle">{category.items.length} Skills</p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="skills-list">
                    {category.items.map((skill, skillIdx) => (
                      <div key={skillIdx} className="skill-item">
                        <div className="skill-item-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level">{skill.level}%</span>
                        </div>
                        <div className="skill-progress-bar">
                          <div 
                            className="skill-progress-fill" 
                            style={{ 
                              width: `${skill.level}%`,
                              background: category.color 
                            }}
                          >
                            <div className="skill-progress-shine"></div>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default Skills;