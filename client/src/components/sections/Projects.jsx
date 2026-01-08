import { useState } from 'react';
import { Rocket, ExternalLink, Github, X, Calendar, Tag, Check } from 'lucide-react';
import './Projects.css';

const Projects = ({ data, isVisible }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const projects = data || [];
  
  // Get unique categories
  const categories = ['All', ...new Set(projects. map(p => p.category))];
  
  // Filter projects
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className={`projects-section ${isVisible ? 'visible' :  ''}`}>
      <div className="section-bg"></div>
      
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Rocket size={16} />
            <span>Portfolio</span>
          </div>
          <h2 className="section-title">
            <span className="gradient-text-purple">Featured Projects</span>
          </h2>
          <div className="section-divider-purple"></div>
          <p className="section-description">
            Showcasing my best work and personal projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="projects-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="project-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => openModal(project)}
            >
              {/* Project Image */}
              <div className="project-image-wrapper">
                <img
                  src={project.image || '/placeholder-project.png'}
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400/1a1a2e/a855f7?text=' + encodeURIComponent(project.title);
                  }}
                />
                <div className="project-overlay">
                  <span className="project-overlay-text">View Details</span>
                </div>
                {project.featured && (
                  <div className="project-featured-badge">
                    <Check size={16} />
                    Featured
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="project-info">
                <div className="project-category">
                  <Tag size={14} />
                  {project.category}
                </div>
                <h3 className="project-title">{project. title}</h3>
                <p className="project-description">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="project-tech-stack">
                  {project. techStack?. slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                  {project.techStack?.length > 3 && (
                    <span className="tech-tag">+{project.techStack.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="projects-empty">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="modal-content">
              {/* Modal Image */}
              <div className="modal-image-wrapper">
                <img
                  src={selectedProject.image || '/placeholder-project.png'}
                  alt={selectedProject.title}
                  className="modal-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x500/1a1a2e/a855f7?text=' + encodeURIComponent(selectedProject.title);
                  }}
                />
              </div>

              <div className="modal-details">
                {/* Title & Category */}
                <div className="modal-header">
                  <div>
                    <div className="project-category">
                      <Tag size={14} />
                      {selectedProject.category}
                    </div>
                    <h2 className="modal-title">{selectedProject.title}</h2>
                  </div>
                  {selectedProject.status && (
                    <span className={`project-status status-${selectedProject.status.toLowerCase()}`}>
                      {selectedProject.status}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="modal-description">
                  {selectedProject.longDescription || selectedProject.description}
                </p>

                {/* Tech Stack */}
                <div className="modal-section">
                  <h3 className="modal-section-title">Technologies Used</h3>
                  <div className="modal-tech-stack">
                    {selectedProject.techStack?.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="modal-actions">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <Github size={20} />
                      View Code
                    </a>
                  )}
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;