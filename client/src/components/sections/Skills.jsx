import { Code, Terminal, Globe, Wrench, Layers, Database, Boxes } from 'lucide-react';
import { 
  // React & JavaScript
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava, FaGitAlt, FaGithub, FaDocker, FaAws,
  // Databases & Tools
  FaDatabase, FaNpm, FaFigma, FaSlack,
  // Other
  FaCode
} from 'react-icons/fa';
import { 
  // Modern frameworks & tools
  SiTypescript, SiRedux, SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql,
  SiPostman, SiVisualstudiocode, SiVercel, SiNetlify, SiFirebase, SiVite, SiWebpack,
  SiMui, // ✅ FIXED: Changed from SiMaterialui to SiMui
  SiBootstrap, SiSass, SiGraphql, SiRedis, SiDocker, SiKubernetes,
  SiJest, SiCypress, SiJenkins, SiGit, SiNginx, SiLinux, SiUbuntu, SiWindows,
  SiAndroid, SiIos, SiReactrouter, SiFramer, SiStyledcomponents, SiSocketdotio,
  SiJquery, SiAngular, SiVuedotjs, SiFlutter, SiDart, SiCplusplus, SiC, SiPhp,
  SiDjango, SiFlask, SiLaravel, SiSpring, SiRabbitmq, SiElasticsearch, SiSwagger,
  SiJira, SiTrello, SiNotion, SiMarkdown, SiYarn, SiPnpm
} from 'react-icons/si';
import { TbBrandCpp, TbBrandReactNative } from 'react-icons/tb';
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

  // Technology Icons Mapping
  const techIconMap = {
    // Frontend
    'React.js': FaReact,
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
    'Material-UI': SiMui, // ✅ FIXED:  Using SiMui
    'MUI': SiMui, // ✅ FIXED:  Using SiMui
    'Bootstrap': SiBootstrap,
    'Sass': SiSass,
    'SCSS': SiSass,
    'jQuery': SiJquery,
    'Angular': SiAngular,
    'Vue.js': SiVuedotjs,
    'Vue':  SiVuedotjs,
    'Styled Components': SiStyledcomponents,
    'Framer Motion': SiFramer,
    'React Router': SiReactrouter,
    
    // Backend
    'Node. js': FaNodeJs,
    'Node': FaNodeJs,
    'Express. js': SiExpress,
    'Express': SiExpress,
    'MongoDB': SiMongodb,
    'MySQL': SiMysql,
    'PostgreSQL': SiPostgresql,
    'GraphQL': SiGraphql,
    'Redis': SiRedis,
    'Socket.io': SiSocketdotio,
    'REST API': FaCode,
    'REST APIs': FaCode,
    'Django': SiDjango,
    'Flask': SiFlask,
    'Laravel': SiLaravel,
    'Spring': SiSpring,
    'RabbitMQ': SiRabbitmq,
    'Elasticsearch': SiElasticsearch,
    'Firebase': SiFirebase,
    
    // Languages
    'Python': FaPython,
    'Java':  FaJava,
    'C++': TbBrandCpp,
    'C': SiC,
    'PHP': SiPhp,
    'Dart': SiDart,
    
    // Tools & DevOps
    'Git': FaGitAlt,
    'GitHub': FaGithub,
    'Git & GitHub': FaGithub,
    'VS Code': SiVisualstudiocode,
    'VSCode': SiVisualstudiocode,
    'Postman': SiPostman,
    'Docker': FaDocker,
    'Kubernetes': SiKubernetes,
    'AWS': FaAws,
    'Vercel': SiVercel,
    'Netlify': SiNetlify,
    'Vite': SiVite,
    'Webpack': SiWebpack,
    'NPM': FaNpm,
    'Yarn': SiYarn,
    'pnpm': SiPnpm,
    'Jest': SiJest,
    'Cypress': SiCypress,
    'Jenkins': SiJenkins,
    'Nginx': SiNginx,
    'Linux': SiLinux,
    'Ubuntu': SiUbuntu,
    'Windows': SiWindows,
    'Figma': FaFigma,
    'Swagger': SiSwagger,
    'Jira': SiJira,
    'Trello': SiTrello,
    'Notion': SiNotion,
    'Markdown':  SiMarkdown,
    
    // Mobile
    'React Native': TbBrandReactNative,
    'Flutter': SiFlutter,
    'Android': SiAndroid,
    'iOS': SiIos,
    
    // Database (generic)
    'Database': FaDatabase,
  };

  const skillCategories = data || [];

  // Function to get icon for a skill
  const getSkillIcon = (skillName) => {
    // Try exact match first
    if (techIconMap[skillName]) {
      return techIconMap[skillName];
    }
    
    // Try case-insensitive match
    const normalizedName = skillName.toLowerCase();
    for (const [key, icon] of Object.entries(techIconMap)) {
      if (key.toLowerCase() === normalizedName) {
        return icon;
      }
    }
    
    // Try partial match
    for (const [key, icon] of Object.entries(techIconMap)) {
      if (normalizedName.includes(key. toLowerCase()) || key.toLowerCase().includes(normalizedName)) {
        return icon;
      }
    }
    
    // Default icon
    return FaCode;
  };

  return (
    <section id="skills" className={`skills-section ${isVisible ? 'visible' : ''}`}>
      <div className="section-bg"></div>
      
      <div className="container">
        {/* Section Header */}
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
        
        {/* Skills Categories Grid */}
        <div className="skills-categories-grid">
          {skillCategories.map((category, catIdx) => {
            const CategoryIcon = categoryIconMap[category. icon] || Code;
            return (
              <div 
                key={catIdx} 
                className="skill-category-card"
                style={{ animationDelay: `${catIdx * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="skill-category-header-new">
                  <div 
                    className="skill-category-icon-wrapper" 
                    style={{ 
                      background: `linear-gradient(135deg, ${category.color}20, ${category.color}40)`,
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

                {/* Skills Grid */}
                <div className="skills-grid-new">
                  {category.items.map((skill, skillIdx) => {
                    const SkillIcon = getSkillIcon(skill. name);
                    return (
                      <div key={skillIdx} className="skill-badge">
                        <div className="skill-badge-content">
                          {/* Skill Icon */}
                          <div className="skill-icon" style={{ color: category.color }}>
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