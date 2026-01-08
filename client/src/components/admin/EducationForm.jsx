import { useState, useEffect } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import { educationAPI } from '../../services/api';

const EducationForm = ({ item, onClose }) => {
  const [formData, setFormData] = useState({
    degree: '',
    field: '',
    institution: '',
    location: '',
    duration: '',
    startDate: '',
    endDate:  '',
    grade: '',
    description: '',
    highlights: [],
    icon: 'GraduationCap',
    color: 'from-purple-500 to-pink-500'
  });
  const [highlightInput, setHighlightInput] = useState('');
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
        await educationAPI.update(item._id, formData);
      } else {
        await educationAPI. create(formData);
      }
      onClose();
    } catch (error) {
      console.error('Error saving education:', error);
      alert('Failed to save education');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e. target.value
    });
  };

  const addHighlight = () => {
    if (highlightInput.trim()) {
      setFormData({
        ...formData,
        highlights: [...formData.highlights, highlightInput.trim()]
      });
      setHighlightInput('');
    }
  };

  const removeHighlight = (index) => {
    setFormData({
      ...formData,
      highlights: formData.highlights. filter((_, i) => i !== index)
    });
  };

  return (
    <div className="form-modal-overlay" onClick={onClose}>
      <div className="form-modal" onClick={(e) => e.stopPropagation()}>
        <div className="form-modal-header">
          <h3 className="form-modal-title">{item ? 'Edit Education' : 'Add New Education'}</h3>
          <button onClick={onClose} className="form-close-btn">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group">
            <label htmlFor="degree" className="form-label">Degree/Certificate *</label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Bachelor of Technology"
            />
          </div>

          <div className="form-group">
            <label htmlFor="field" className="form-label">Field of Study</label>
            <input
              type="text"
              id="field"
              name="field"
              value={formData.field}
              onChange={handleChange}
              className="form-input"
              placeholder="Computer Science"
            />
          </div>

          <div className="form-grid form-grid-2">
            <div className="form-group">
              <label htmlFor="institution" className="form-label">Institution *</label>
              <input
                type="text"
                id="institution"
                name="institution"
                value={formData. institution}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="University Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="location" className="form-label">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="form-input"
                placeholder="City, Country"
              />
            </div>
          </div>

          <div className="form-grid form-grid-2">
            <div className="form-group">
              <label htmlFor="startDate" className="form-label">Start Year</label>
              <input
                type="text"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="form-input"
                placeholder="2020"
              />
            </div>

            <div className="form-group">
              <label htmlFor="endDate" className="form-label">End Year</label>
              <input
                type="text"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="form-input"
                placeholder="2024"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="duration" className="form-label">Duration *</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData. duration}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="2020 - 2024"
            />
          </div>

          <div className="form-group">
            <label htmlFor="grade" className="form-label">Grade/CGPA</label>
            <input
              type="text"
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="form-input"
              placeholder="CGPA:  8.5/10 or Percentage: 85%"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="form-textarea"
              placeholder="Brief description of your studies"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Highlights/Achievements</label>
            <div className="highlights-list">
              {formData.highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <input
                    type="text"
                    value={highlight}
                    readOnly
                    className="form-input"
                  />
                  <button
                    type="button"
                    onClick={() => removeHighlight(index)}
                    className="remove-skill-btn"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="text"
                  value={highlightInput}
                  onChange={(e) => setHighlightInput(e. target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addHighlight())}
                  className="form-input"
                  placeholder="Add highlight"
                />
                <button type="button" onClick={addHighlight} className="btn btn-secondary">
                  <Plus size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="form-grid form-grid-2">
            <div className="form-group">
              <label htmlFor="icon" className="form-label">Icon</label>
              <select
                id="icon"
                name="icon"
                value={formData.icon}
                onChange={handleChange}
                className="form-input"
              >
                <option value="GraduationCap">Graduation Cap</option>
                <option value="BookOpen">Book Open</option>
                <option value="Award">Award</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="color" className="form-label">Color Gradient</label>
              <select
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="form-input"
              >
                <option value="from-purple-500 to-pink-500">Purple to Pink</option>
                <option value="from-blue-500 to-cyan-500">Blue to Cyan</option>
                <option value="from-green-500 to-teal-500">Green to Teal</option>
                <option value="from-orange-500 to-red-500">Orange to Red</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Saving.. .' : (item ? 'Update Education' : 'Add Education')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EducationForm;