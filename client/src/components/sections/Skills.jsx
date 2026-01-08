import { Code, Terminal, Globe, Wrench, Layers, Database, Boxes } from 'lucide-react';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava, 
  FaGitAlt, FaGithub, FaDocker, FaAws, FaDatabase, FaNpm, FaFigma, FaCode
} from 'react-icons/fa';
import { 
  SiTypescript, SiRedux, SiTailwindcss, SiNextdotjs, SiExpress, 
  SiMongodb, SiMysql, SiPostgresql, SiPostman, SiVercel, SiNetlify, 
  SiFirebase, SiVite, SiWebpack, SiBootstrap, SiSass, SiGraphql, 
  SiRedis, SiJest, SiJenkins, SiNginx, SiLinux, SiAndroid, 
  SiFlutter, SiDjango, SiFlask, SiLaravel, SiSwagger, SiJira, 
  SiTrello, SiNotion, SiMarkdown, SiYarn
} from 'react-icons/si';
import './Skills.css';

const Skills = ({ data, isVisible }) => {
  const categoryIconMap = {
    Globe,
    Terminal,
    Code,
    Wrench,
    Layers,
    Database,
    Boxes
  };

  // Simplified Technology Icons Mapping - ONLY WORKING ICONS
  const techIconMap = {
    // Frontend
    'React. js': FaReact,
    'React':  FaReact,
    'JavaScript': FaJs,
    'JS': FaJs,
    'TypeScript': SiTypescript,
    'HTML': FaHtml5,
    'HTML5': FaHtml5,
    'HTML & CSS': FaHtml5,
    'CSS': FaCss3Alt,
    'CSS3': FaCss3Alt,
    'Tailwind CSS': SiTailwindcss,
    'TailwindCSS': SiTailwindcss,
    'Redux': SiRedux,
    'Next.js': SiNextdotjs,
    'Bootstrap': SiBootstrap,
    'Sass': SiSass,
    'SCSS': SiSass,
    
    // Backend
    'Node. js': FaNodeJs,
    'Node': FaNodeJs,
    'Express.js':  SiExpress,
    'Express': SiExpress,
    'MongoDB': SiMongodb,
    'MySQL': SiMysql,
    'PostgreSQL': SiPostgresql,
    'GraphQL':  SiGraphql,
    'Redis': SiRedis,
    'REST API': FaCode,
    'REST APIs': FaCode,
    'Django': SiDjango,
    'Flask':  SiFlask,
    'Laravel': SiLaravel,
    'Firebase': SiFirebase,
    
    // Languages
    'Python': FaPython,
    'Java': FaJava,
    'C++': FaCode,
    'C':  FaCode,
    
    // Tools & DevOps
    'Git': FaGitAlt,
    'GitHub':  FaGithub,
    'Git & GitHub': FaGithub,
    'VS Code': FaCode,
    'VSCode': FaCode,
    'Postman': SiPostman,
    'Docker': FaDocker,
    'AWS': FaAws,
    'Vercel': SiVercel,
    'Netlify': SiNetlify,
    'Vite': SiVite,
    'Webpack': SiWebpack,
    'NPM': FaNpm,
    'Yarn': SiYarn,
    'Jest': SiJest,
    'Jenkins': SiJenkins,
    'Nginx': SiNginx,
    'Linux':  SiLinux,
    'Figma': FaFigma,
    'Swagger': SiSwagger,
    'Jira': SiJira,
    'Trello': SiTrello,
    'Notion': SiNotion,
    'Markdown': SiMarkdown,
    
    // Mobile
    'React Native': FaReact,
    'Flutter': SiFlutter,
    'Android': SiAndroid,
    
    // Database
    'Database': FaDatabase,
  };

  const skillCategories = data || [];

  const getSkillIcon = (skillName) => {
    if (techIconMap[skillName]) {
      return techIconMap[skillName];
    }
    
    const normalizedName = skillName.toLowerCase();
    for (const [key, icon] of Object.entries(techIconMap)) {
      if (key.toLowerCase() === normalizedName) {
        return icon;
      }
    }
    
    for (const [key, icon] of Object. entries(techIconMap)) {
      if (normalizedName.includes(key.toLowerCase()) || key.toLowerCase().includes(normalizedName)) {
        return icon;
      }
    }
    
    return FaCode;
  };

  return (
    <section id="skills" className={`skills-section ${isVisible ? 'visible' : ''}`}>
      <div className="section-bg"></div>
      
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Layers size={16} />
            <span>My Expertise</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text-green">Technical Skills</span>
          </h2>
          <div className="section-divider-green"></div>
          <p className="section-description">
            Technologies and tools I work with to build amazing projects
          </p>
        </div>
        
        <div className="skills-categories-grid">
          {skillCategories.map((category, catIdx) => {
            const CategoryIcon = categoryIconMap[category.icon] || Code;
            return (
              <div 
                key={catIdx} 
                className="skill-category-card"
                style={{ animationDelay:  `${catIdx * 0.1}s` }}
              >
                <div className="skill-category-header-new">
                  <div 
                    className="skill-category-icon-wrapper" 
                    style={{ 
                      background: `linear-gradient(135deg, ${category. color}20, ${category.color}40)`,
                      borderColor: category.color 
                    }}
                  >
                    <CategoryIcon size={32} style={{ color: category.color }} />
                  </div>
                  <div className="skill-category-info">
                    <h3 className="skill-category-name">{category.category}</h3>
                    <p className="skill-category-count">{category.items.length} Skills</p>
                  </div>
                </div>

                <div className="skills-grid-new">
                  {category. items.map((skill, skillIdx) => {
                    const SkillIcon = getSkillIcon(skill.name);
                    return (
                      <div key={skillIdx} className="skill-badge">
                        <div className="skill-badge-content">
                          <div className="skill-icon" style={{ color: category. color }}>
                            <SkillIcon size={28} />
                          </div>
                          
                          <span className="skill-badge-name">{skill.name}</span>
                          
                          <div className="skill-badge-level">
                            <div 
                              className="skill-badge-fill" 
                              style={{ 
                                width: `${skill.level}%`,
                                background: category.color 
                              }}
                            />
                          </div>
                          
                          <span className="skill-badge-percentage">{skill.level}%</span>
                        </div>
                      </div>
                    );
                  })}
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