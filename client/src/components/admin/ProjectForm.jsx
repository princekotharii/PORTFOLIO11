import { useState, useEffect } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';

const ProfileForm = ({ data, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    // Hero Data
    name: '',
    role: '',
    tagline: '',
    description: '',
    email: '',
    githubLink: '',
    linkedinLink:  '',
    twitterLink: '',
    
    // About Data
    profileImage: '',
    aboutDescription: '',
    location: '',
    phone: '',
    highlights: [],
    stats: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [highlightInput, setHighlightInput] = useState({ icon: 'Zap', text: '', color: '#eab308' });
  const [statInput, setStatInput] = useState({ icon: 'Code', value: '', label: '', color: '#a855f7' });

  useEffect(() => {
    if (data) {
      setFormData({
        name: data.hero?. name || '',
        role: data.hero?.role || '',
        tagline: data.hero?.tagline || '',
        description: data.hero?.description || '',
        email: data.hero?.email || '',
        githubLink: data.hero?.githubLink || '',
        linkedinLink: data.hero?. linkedinLink || '',
        twitterLink: data.hero?.twitterLink || '',
        profileImage: data.about?.profileImage || '',
        aboutDescription: data.about?.description || '',
        location: data. about?.location || '',
        phone: data.about?.phone || '',
        highlights: data.about?. highlights || [],
        stats: data.about?.stats || []
      });
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await onSave(formData);
      onClose();
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Failed to save profile');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target. name]: e.target.value
    });
  };

  const addHighlight = () => {
    if (highlightInput.text.trim()) {
      setFormData({
        ...formData,
        highlights: [...formData. highlights, highlightInput]
      });
      setHighlightInput({ icon: 'Zap', text: '', color: '#eab308' });
    }
  };

  const removeHighlight = (index) => {
    setFormData({
      ...formData,
      highlights: formData.highlights.filter((_, i) => i !== index)
    });
  };

  const addStat = () => {
    if (statInput.value && statInput.label) {
      setFormData({
        ...formData,
        stats: [...formData.stats, statInput]
      });
      setStatInput({ icon: 'Code', value: '', label: '', color: '#a855f7' });
    }
  };

  const removeStat = (index) => {
    setFormData({
      ...formData,
      stats: formData.stats. filter((_, i) => i !== index)
    });
  };

  return (
    <div className="form-modal-overlay" onClick={onClose}>
      <div className="form-modal" style={{ maxWidth: '800px' }} onClick={(e) => e.stopPropagation()}>
        <div className="form-modal-header">
          <h3 className="form-modal-title">Edit Personal Information</h3>
          <button onClick={onClose} className="form-close-btn">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="form-grid">
          {/* HERO SECTION */}
          <div style={{ gridColumn: '1 / -1' }}>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.125rem' }}>
              Hero Section
            </h4>
          </div>

          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData. name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="role" className="form-label">Role/Title *</label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Full Stack Developer"
            />
          </div>

          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label htmlFor="tagline" className="form-label">Tagline *</label>
            <input
              type="text"
              id="tagline"
              name="tagline"
              value={formData.tagline}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Building scalable web applications"
            />
          </div>

          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label htmlFor="description" className="form-label">Hero Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="2"
              className="form-textarea"
              placeholder="Short description for hero section"
            />
          </div>

          <div className="form-grid form-grid-2" style={{ gridColumn: '1 / -1' }}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="your. email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="+1 234 567 8900"
              />
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1rem' }}>
              Social Links
            </h4>
          </div>

          <div className="form-group">
            <label htmlFor="githubLink" className="form-label">GitHub URL</label>
            <input
              type="url"
              id="githubLink"
              name="githubLink"
              value={formData.githubLink}
              onChange={handleChange}
              className="form-input"
              placeholder="https://github.com/username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="linkedinLink" className="form-label">LinkedIn URL</label>
            <input
              type="url"
              id="linkedinLink"
              name="linkedinLink"
              value={formData.linkedinLink}
              onChange={handleChange}
              className="form-input"
              placeholder="https://linkedin.com/in/username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="twitterLink" className="form-label">Twitter URL</label>
            <input
              type="url"
              id="twitterLink"
              name="twitterLink"
              value={formData.twitterLink}
              onChange={handleChange}
              className="form-input"
              placeholder="https://twitter.com/username"
            />
          </div>

          {/* ABOUT SECTION */}
          <div style={{ gridColumn: '1 / -1', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.125rem' }}>
              About Section
            </h4>
          </div>

          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label htmlFor="profileImage" className="form-label">Profile Image URL</label>
            <input
              type="url"
              id="profileImage"
              name="profileImage"
              value={formData.profileImage}
              onChange={handleChange}
              className="form-input"
              placeholder="https://avatars.githubusercontent.com/u/..."
            />
            {formData.profileImage && (
              <img 
                src={formData. profileImage} 
                alt="Profile preview" 
                style={{ width: '100px', height: '100px', borderRadius: '50%', marginTop: '0.5rem', objectFit: 'cover' }}
              />
            )}
          </div>

          <div className="form-group" style={{ gridColumn: '1 / -1' }}>
            <label htmlFor="aboutDescription" className="form-label">About Description *</label>
            <textarea
              id="aboutDescription"
              name="aboutDescription"
              value={formData.aboutDescription}
              onChange={handleChange}
              required
              rows="4"
              className="form-textarea"
              placeholder="Tell visitors about yourself..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="location" className="form-label">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData. location}
              onChange={handleChange}
              className="form-input"
              placeholder="City, Country"
            />
          </div>

          {/* HIGHLIGHTS */}
          <div style={{ gridColumn: '1 / -1', marginTop:  '1rem' }}>
            <h4 style={{ color: 'var(--color-text)', marginBottom: '0.75rem', fontSize: '1rem' }}>
              Highlights
            </h4>
            <div className="skill-items-list">
              {formData.highlights.map((highlight, idx) => (
                <div key={idx} className="skill-item-row" style={{ gridTemplateColumns: '100px 1fr 100px 40px' }}>
                  <input
                    type="text"
                    value={highlight. icon}
                    readOnly
                    className="skill-item-input"
                    style={{ fontSize: '0.875rem' }}
                  />
                  <input
                    type="text"
                    value={highlight.text}
                    readOnly
                    className="skill-item-input"
                  />
                  <input
                    type="color"
                    value={highlight.color}
                    readOnly
                    className="skill-item-input"
                  />
                  <button
                    type="button"
                    onClick={() => removeHighlight(idx)}
                    className="form-icon-btn"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
              <div className="skill-item-row" style={{ gridTemplateColumns: '100px 1fr 100px 40px' }}>
                <select
                  value={highlightInput.icon}
                  onChange={(e) => setHighlightInput({ ...highlightInput, icon: e.target.value })}
                  className="skill-item-input"
                  style={{ fontSize: '0.875rem' }}
                >
                  <option value="Zap">Zap</option>
                  <option value="Target">Target</option>
                  <option value="Heart">Heart</option>
                  <option value="Code">Code</option>
                  <option value="Award">Award</option>
                  <option value="Trophy">Trophy</option>
                </select>
                <input
                  type="text"
                  value={highlightInput.text}
                  onChange={(e) => setHighlightInput({ ...highlightInput, text: e.target.value })}
                  placeholder="Fast Learner"
                  className="skill-item-input"
                />
                <input
                  type="color"
                  value={highlightInput.color}
                  onChange={(e) => setHighlightInput({ ...highlightInput, color: e.target.value })}
                  className="skill-item-input"
                />
                <button
                  type="button"
                  onClick={addHighlight}
                  className="form-icon-btn"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
            <h4 style={{ color: 'var(--color-text)', marginBottom: '0.75rem', fontSize: '1rem' }}>
              Quick Stats
            </h4>
            <div className="skill-items-list">
              {formData.stats.map((stat, idx) => (
                <div key={idx} className="skill-item-row" style={{ gridTemplateColumns: '100px 100px 1fr 100px 40px' }}>
                  <input
                    type="text"
                    value={stat. icon}
                    readOnly
                    className="skill-item-input"
                    style={{ fontSize: '0.875rem' }}
                  />
                  <input
                    type="text"
                    value={stat.value}
                    readOnly
                    className="skill-item-input"
                  />
                  <input
                    type="text"
                    value={stat. label}
                    readOnly
                    className="skill-item-input"
                  />
                  <input
                    type="color"
                    value={stat.color}
                    readOnly
                    className="skill-item-input"
                  />
                  <button
                    type="button"
                    onClick={() => removeStat(idx)}
                    className="form-icon-btn"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
              <div className="skill-item-row" style={{ gridTemplateColumns: '100px 100px 1fr 100px 40px' }}>
                <select
                  value={statInput.icon}
                  onChange={(e) => setStatInput({ ...statInput, icon: e.target.value })}
                  className="skill-item-input"
                  style={{ fontSize:  '0.875rem' }}
                >
                  <option value="Code">Code</option>
                  <option value="Award">Award</option>
                  <option value="Users">Users</option>
                  <option value="Trophy">Trophy</option>
                </select>
                <input
                  type="text"
                  value={statInput.value}
                  onChange={(e) => setStatInput({ ...statInput, value: e.target.value })}
                  placeholder="50+"
                  className="skill-item-input"
                />
                <input
                  type="text"
                  value={statInput.label}
                  onChange={(e) => setStatInput({ ... statInput, label: e.target.value })}
                  placeholder="Projects"
                  className="skill-item-input"
                />
                <input
                  type="color"
                  value={statInput.color}
                  onChange={(e) => setStatInput({ ...statInput, color: e. target.value })}
                  className="skill-item-input"
                />
                <button
                  type="button"
                  onClick={addStat}
                  className="form-icon-btn"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* FORM ACTIONS */}
          <div className="form-actions" style={{ gridColumn: '1 / -1' }}>
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;