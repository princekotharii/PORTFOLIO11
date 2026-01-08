import { useState } from 'react';
import { Eye, Github, ExternalLink, Star, Code } from 'lucide-react';
import './Projects.css';

const Projects = ({ data, isVisible }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = data || [];
  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'Mobile'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className={`projects-section ${isVisible ? 'visible' :  ''}`}>
      <div className="section-bg"></div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Eye size={16} />
            <span>My Work</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="section-divider"></div>
          <p className="section-description">
            A collection of projects I've worked on, showcasing my skills and experience
          </p>
        </div>

        {/* Category Filter */}
        <div className="projects-filter">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`filter-btn ${activeCategory === category ?  'filter-btn-active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project._id} className="project-card">
              <div className="project-card-glow"></div>

              {/* Project Image/Icon */}
              <div className="project-image">
                <div className="project-icon">
                  <span>{project.image || '🚀'}</span>
                </div>
                {project.featured && (
                  <div className="project-featured-badge">
                    <Star size={14} />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>

                <p className="project-description">{project.description}</p>

                {/* Tech Stack */}
                <div className="project-tech-stack">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      <Code size={12} />
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="tech-tag tech-tag-more">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="project-links">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link project-link-github"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link project-link-live"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="projects-empty">
            <Code size={48} className="projects-empty-icon" />
            <p>No projects found in this category</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;