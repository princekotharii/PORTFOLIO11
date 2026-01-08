import { useState, useEffect } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import { skillAPI } from '../../services/api';

const SkillForm = ({ item, onClose }) => {
  const [formData, setFormData] = useState({
    category: '',
    icon: 'Code',
    color: '#a855f7',
    items: [{ name: '', level: 50 }]
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
        await skillAPI.update(item._id, formData);
      } else {
        await skillAPI. create(formData);
      }
      onClose();
    } catch (error) {
      console.error('Error saving skill:', error);
      alert('Failed to save skill');
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

  const addSkillItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { name: '', level: 50 }]
    });
  };

  const removeSkillItem = (index) => {
    setFormData({
      ...formData,
      items: formData.items.filter((_, i) => i !== index)
    });
  };

  const updateSkillItem = (index, field, value) => {
    const updatedItems = [...formData. items];
    updatedItems[index][field] = value;
    setFormData({
      ... formData,
      items: updatedItems
    });
  };

  return (
    <div className="form-modal-overlay" onClick={onClose}>
      <div className="form-modal" onClick={(e) => e.stopPropagation()}>
        <div className="form-modal-header">
          <h3 className="form-modal-title">{item ? 'Edit Skill Category' : 'Add New Skill Category'}</h3>
          <button onClick={onClose} className="form-close-btn">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="form-grid">
          <div className="form-grid form-grid-2">
            <div className="form-group">
              <label htmlFor="category" className="form-label">Category Name *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="form-input"
              >
                <option value="">Select Category</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Languages">Languages</option>
                <option value="Tools & Others">Tools & Others</option>
                <option value="Database">Database</option>
                <option value="DevOps">DevOps</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="icon" className="form-label">Icon</label>
              <select
                id="icon"
                name="icon"
                value={formData.icon}
                onChange={handleChange}
                className="form-input"
              >
                <option value="Code">Code</option>
                <option value="Globe">Globe</option>
                <option value="Terminal">Terminal</option>
                <option value="Database">Database</option>
                <option value="Wrench">Wrench</option>
                <option value="Layers">Layers</option>
              </select>
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

          <div className="form-group">
            <label className="form-label">Skills *</label>
            <div className="skill-items-list">
              {formData.items.map((skill, index) => (
                <div key={index} className="skill-item-row">
                  <input
                    type="text"
                    value={skill.name}
                    onChange={(e) => updateSkillItem(index, 'name', e.target.value)}
                    placeholder="Skill name"
                    required
                    className="skill-item-input"
                  />
                  <input
                    type="number"
                    value={skill.level}
                    onChange={(e) => updateSkillItem(index, 'level', parseInt(e.target.value))}
                    min="0"
                    max="100"
                    placeholder="Level"
                    required
                    className="skill-item-input"
                  />
                  {formData.items.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSkillItem(index)}
                      className="remove-skill-btn"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              ))}
              <button type="button" onClick={addSkillItem} className="add-skill-btn">
                <Plus size={18} />
                Add Skill
              </button>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Saving.. .' : (item ? 'Update Category' : 'Add Category')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SkillForm;