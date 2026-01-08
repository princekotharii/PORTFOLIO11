import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { achievementAPI } from '../../services/api';

const AchievementForm = ({ item, onClose }) => {
  const [formData, setFormData] = useState({
    title:  '',
    description: '',
    date: '',
    icon: 'Trophy',
    color: '#f59e0b',
    badge: '🏆',
    category: 'Award',
    organization: '',
    link: ''
  });
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
        await achievementAPI.update(item._id, formData);
      } else {
        await achievementAPI.create(formData);
      }
      onClose();
    } catch (error) {
      console.error('Error saving achievement:', error);
      alert('Failed to save achievement');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="form-modal-overlay" onClick={onClose}>
      <div className="form-modal" onClick={(e) => e.stopPropagation()}>
        <div className="form-modal-header">
          <h3 className="form-modal-title">{item ? 'Edit Achievement' :  'Add New Achievement'}</h3>
          <button onClick={onClose} className="form-close-btn">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-group">
            <label htmlFor="title" className="form-label">Achievement Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Hackathon Winner"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="3"
              className="form-textarea"
              placeholder="Description of the achievement"
            />
          </div>

          <div className="form-grid form-grid-2">
            <div className="form-group">
              <label htmlFor="date" className="form-label">Date/Year *</label>
              <input
                type="text"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="2024"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category" className="form-label">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-input"
              >
                <option value="Award">Award</option>
                <option value="Certification">Certification</option>
                <option value="Competition">Competition</option>
                <option value="Publication">Publication</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="organization" className="form-label">Organization/Issuer</label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="form-input"
              placeholder="Google, Microsoft, etc."
            />
          </div>

          <div className="form-group">
            <label htmlFor="link" className="form-label">Certificate/Link (Optional)</label>
            <input
              type="url"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className="form-input"
              placeholder="https://..."
            />
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
                <option value="Trophy">Trophy</option>
                <option value="Award">Award</option>
                <option value="Medal">Medal</option>
                <option value="Star">Star</option>
                <option value="Github">Github</option>
                <option value="Target">Target</option>
                <option value="Zap">Zap</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="badge" className="form-label">Badge Emoji</label>
              <input
                type="text"
                id="badge"
                name="badge"
                value={formData.badge}
                onChange={handleChange}
                className="form-input"
                placeholder="🏆"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="color" className="form-label">Color</label>
            <input
              type="color"
              id="color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="form-input"
              style={{ height: '50px', cursor: 'pointer' }}
            />
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ?  'Saving...' : (item ? 'Update Achievement' :  'Add Achievement')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AchievementForm;