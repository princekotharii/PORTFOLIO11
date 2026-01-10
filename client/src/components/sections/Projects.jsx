import { useState } from 'react';
import { ExternalLink, Github, Folder, Code, Star, ChevronDown, ChevronUp, Layers, X, Check, Sparkles } from 'lucide-react';
import './Projects.css';

const Projects = ({ data, isVisible }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState('All');

  const projects = data || [];
  
  // Get unique categories
  const categories = ['All', ...new Set(projects. map(p => p.category))];
  
  // Filter projects
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects. filter(p => p.category === filter);
  
  // Show only 3 initially
  const displayedProjects = showAll 
    ? filteredProjects 
    : filteredProjects.slice(0, 3);
  
  const hasMore = filteredProjects.length > 3;

  return (
    <section id="projects" className={`projects-section ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="projects-badge-header">
            <Sparkles size={18} />
            <span>My Work</span>
          </div>
          <h2 className="projects-main-title">
            <span className="gradient-text-projects">Featured Projects</span>
          </h2>
          <div className="projects-divider"></div>
          <p className="projects-subtitle">
            Explore my latest work and creative solutions
          </p>
        </div>

        {/* Filter Pills */}
        {categories.length > 1 && (
          <div className="projects-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-pill ${filter === category ? 'filter-pill-active' : ''}`}
                onClick={() => {
                  setFilter(category);
                  setShowAll(false);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        {displayedProjects.length > 0 ? (
          <>
            <div className="projects-showcase-grid">
              {displayedProjects.map((project, idx) => (
                <div
                  key={project._id || idx}
                  className="project-showcase-card"
                  style={{ animationDelay: `${idx * 0.12}s` }}
                >
                  {/* Featured Star */}
                  {project. featured && (
                    <div className="project-star-badge">
                      <Star size={16} fill="currentColor" />
                    </div>
                  )}

                  {/* Project Thumbnail */}
                  <div className="project-thumbnail">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-img"
                      />
                    ) : (
                      <div className="project-img-placeholder">
                        <Layers size={56} />
                      </div>
                    )}
                    
                    {/* Hover Overlay */}
                    <div className="project-hover-overlay">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="project-details-btn"
                      >
                        <Code size={20} />
                        <span>View Details</span>
                      </button>
                      <div className="project-quick-links">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="quick-link-icon"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="quick-link-icon"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="project-cat-badge">{project.category}</div>
                  </div>

                  {/* Project Info */}
                  <div className="project-info-section">
                    <h3 className="project-showcase-title">{project.title}</h3>
                    <p className="project-showcase-desc">{project.description}</p>

                    {/* Tech Pills */}
                    <div className="project-tech-pills">
                      {project.techStack?. slice(0, 3).map((tech, i) => (
                        <span key={i} className="tech-pill">{tech}</span>
                      ))}
                      {project. techStack?.length > 3 && (
                        <span className="tech-pill tech-pill-more">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="project-action-btns">
                      {project.liveLink && (
                        <a
                          href={project. liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-action-link project-action-primary"
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-action-link"
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More Button */}
            {hasMore && (
              <div className="projects-show-more-container">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="projects-show-more-btn"
                >
                  <span className="show-more-icon">
                    {showAll ?  <ChevronUp size={22} /> : <ChevronDown size={22} />}
                  </span>
                  <span className="show-more-label">
                    {showAll
                      ? 'Show Less Projects'
                      : `Explore ${filteredProjects.length - 3} More Project${filteredProjects.length - 3 > 1 ?  's' : ''}`
                    }
                  </span>
                  {! showAll && (
                    <span className="show-more-badge">+{filteredProjects.length - 3}</span>
                  )}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="projects-empty-state">
            <Folder size={64} />
            <h3>No Projects Found</h3>
            <p>No projects available in this category</p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

// Enhanced Project Detail Modal
const ProjectDetailModal = ({ project, onClose }) => {
  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div className="project-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="project-modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        {/* Modal Content */}
        <div className="project-modal-wrapper">
          {/* Left Side - Image */}
          <div className="modal-left-panel">
            <div className="modal-image-container">
              {project.image ?  (
                <img src={project.image} alt={project.title} className="modal-project-image" />
              ) : (
                <div className="modal-image-placeholder">
                  <Layers size={80} />
                </div>
              )}
            </div>

            {/* Quick Info Cards */}
            <div className="modal-quick-info">
              <div className="quick-info-card">
                <span className="quick-info-label">Category</span>
                <span className="quick-info-value">{project.category}</span>
              </div>
              <div className="quick-info-card">
                <span className="quick-info-label">Status</span>
                <span className="quick-info-value status-completed">
                  <Check size={14} />
                  {project.status || 'Completed'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="modal-right-panel">
            {/* Header */}
            <div className="modal-project-header">
              {project.featured && (
                <div className="modal-featured-badge">
                  <Star size={14} fill="currentColor" />
                  <span>Featured Project</span>
                </div>
              )}
              <h2 className="modal-project-title">{project.title}</h2>
              <p className="modal-project-description">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Technologies Section */}
            <div className="modal-section">
              <h3 className="modal-section-heading">
                <Code size={18} />
                Technologies Used
              </h3>
              <div className="modal-tech-grid">
                {project.techStack?. map((tech, i) => (
                  <div key={i} className="modal-tech-item">
                    <div className="tech-item-dot"></div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features (if available) */}
            {project. features && project.features.length > 0 && (
              <div className="modal-section">
                <h3 className="modal-section-heading">
                  <Sparkles size={18} />
                  Key Features
                </h3>
                <ul className="modal-features-list">
                  {project.features. map((feature, i) => (
                    <li key={i} className="modal-feature-item">
                      <Check size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="modal-actions">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-action-btn modal-action-primary"
                >
                  <ExternalLink size={20} />
                  <span>View Live Demo</span>
                </a>
              )}
              {project. githubLink && (
                <a
                  href={project. githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-action-btn modal-action-secondary"
                >
                  <Github size={20} />
                  <span>View Source Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;