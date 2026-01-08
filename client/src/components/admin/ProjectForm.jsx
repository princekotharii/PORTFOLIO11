import { useState, useEffect } from 'react';
import { X, Plus } from 'lucide-react';
import { projectAPI } from '../../services/api';

const ProjectForm = ({ item, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    longDescription: '',
    techStack: [],
    category: 'Full Stack',
    githubLink:  '',
    liveLink: '',
    image: '🚀',
    featured: false,
    status: 'Completed'
  });
  const [techInput, setTechInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (item) {
      setFormData(item);
    }
  }, [item]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (item) {
        await projectAPI.update(item._id, formData);
      } else {
        await projectAPI. create(formData);
      }
      onClose();
    } catch (error) {
      console.error('Error saving project:', error);
      alert('Failed to save project');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const addTech = () => {
    if (techInput.trim()) {
      setFormData({
        ...formData,
        techStack: [...formData.techStack, techInput.trim()]
      });
      setTechInput('');
    }
  };

  const removeTech = (index) => {
    setFormData({
      ...formData,
      techStack: formData.techStack.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="form-modal-overlay" onClick={onClose}>
      <div className="form-modal" onClick={(e) => e.stopPropagation()}>
        <div className="form-modal-header">
          <h3 className="form-modal-title">{item ? 'Edit Project' : 'Add New Project'}</h3>
          <button onClick={onClose} className="form-close-btn">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group">
            <label htmlFor="title" className="form-label">Project Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData. title}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="My Awesome Project"
            />
          </div>

          <div className="form-grid form-grid-2">
            <div className="form-group">
              <label htmlFor="category" className="form-label">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Full Stack">Full Stack</option>
                <option value="Mobile">Mobile</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="status" className="form-label">Status</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="form-input"
              >
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
                <option value="Planned">Planned</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">Short Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="3"
              className="form-textarea"
              placeholder="Brief description of your project"
            />
          </div>

          <div className="form-group">
            <label htmlFor="longDescription" className="form-label">Long Description</label>
            <textarea
              id="longDescription"
              name="longDescription"
              value={formData.longDescription}
              onChange={handleChange}
              rows="4"
              className="form-textarea"
              placeholder="Detailed description (optional)"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Tech Stack *</label>
            <div className="tech-stack-input">
              {formData.techStack. map((tech, index) => (
                <div key={index} className="tech-tag-item">
                  <span>{tech}</span>
                  <button
                    type="button"
                    onClick={() => removeTech(index)}
                    className="remove-tag-btn"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())}
                className="form-input"
                placeholder="Add technology"
              />
              <button type="button" onClick={addTech} className="btn btn-secondary">
                <Plus size={18} />
              </button>
            </div>
          </div>

          <div className="form-grid form-grid-2">
            <div className="form-group">
              <label htmlFor="githubLink" className="form-label">GitHub Link</label>
              <input
                type="url"
                id="githubLink"
                name="githubLink"
                value={formData.githubLink}
                onChange={handleChange}
                className="form-input"
                placeholder="https://github.com/..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="liveLink" className="form-label">Live Demo Link</label>
              <input
                type="url"
                id="liveLink"
                name="liveLink"
                value={formData.liveLink}
                onChange={handleChange}
                className="form-input"
                placeholder="https://..."
              />
            </div>
          </div>

          <div className="form-grid form-grid-2">
            <div className="form-group">
              <label htmlFor="image" className="form-label">Emoji/Icon</label>
              <input
                type="text"
                id="image"
                name="image"
                value={formData. image}
                onChange={handleChange}
                className="form-input"
                placeholder="🚀"
              />
            </div>

            <div className="checkbox-group">
              <input
                type="checkbox"
                id="featured"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
              />
              <label htmlFor="featured">Featured Project</label>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Saving.. .' : (item ? 'Update Project' : 'Add Project')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;