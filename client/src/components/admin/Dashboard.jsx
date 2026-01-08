import { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  FolderKanban, 
  Award, 
  GraduationCap, 
  Trophy, 
  Settings, 
  LogOut,
  Plus,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { removeToken } from '../../utils/auth';
import { projectAPI, skillAPI, educationAPI, achievementAPI, statusAPI } from '../../services/api';
import ProjectForm from './ProjectForm';
import SkillForm from './SkillForm';
import EducationForm from './EducationForm';
import AchievementForm from './AchievementForm';
import './Dashboard.css';
import './AdminLayout.css';

const Dashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [data, setData] = useState({
    projects: [],
    skills:  [],
    education: [],
    achievements: [],
    status: null
  });
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [profileStatus, setProfileStatus] = useState({
    hireable: true,
    availableForWork: true
  });

  const tabs = [
    { id: 'overview', name: 'Overview', icon: LayoutDashboard },
    { id: 'projects', name:  'Projects', icon: FolderKanban },
    { id: 'skills', name:  'Skills', icon: Award },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'achievements', name: 'Achievements', icon: Trophy },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [projectsRes, skillsRes, educationRes, achievementsRes, statusRes] = await Promise.all([
        projectAPI.getAll(),
        skillAPI.getAll(),
        educationAPI.getAll(),
        achievementAPI. getAll(),
        statusAPI. get()
      ]);

      setData({
        projects: projectsRes.data.data. projects || [],
        skills: skillsRes.data.data.skills || [],
        education: educationRes.data.data.education || [],
        achievements: achievementsRes.data.data.achievements || [],
        status: statusRes. data.data.status || null
      });

      if (statusRes.data.data. status) {
        setProfileStatus({
          hireable: statusRes.data.data.status.hireable,
          availableForWork: statusRes.data.data.status. availableForWork
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    removeToken();
    onLogout();
  };

  const handleDelete = async (type, id) => {
    if (! window.confirm('Are you sure you want to delete this item?')) return;

    try {
      switch (type) {
        case 'projects':
          await projectAPI.delete(id);
          break;
        case 'skills':
          await skillAPI.delete(id);
          break;
        case 'education':
          await educationAPI.delete(id);
          break;
        case 'achievements':
          await achievementAPI. delete(id);
          break;
      }
      fetchData();
    } catch (error) {
      console.error('Error deleting:', error);
      alert('Failed to delete item');
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingItem(null);
    fetchData();
  };

  const handleStatusUpdate = async (field) => {
    try {
      const newStatus = {
        ... profileStatus,
        [field]: ! profileStatus[field]
      };
      await statusAPI.update(newStatus);
      setProfileStatus(newStatus);
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status');
    }
  };

  const renderOverview = () => (
    <div className="overview-grid">
      <div className="stat-card stat-card-purple">
        <div className="stat-icon">
          <FolderKanban size={32} />
        </div>
        <div className="stat-content">
          <p className="stat-value">{data.projects.length}</p>
          <p className="stat-label">Projects</p>
        </div>
      </div>

      <div className="stat-card stat-card-blue">
        <div className="stat-icon">
          <Award size={32} />
        </div>
        <div className="stat-content">
          <p className="stat-value">{data. skills.length}</p>
          <p className="stat-label">Skills</p>
        </div>
      </div>

      <div className="stat-card stat-card-green">
        <div className="stat-icon">
          <GraduationCap size={32} />
        </div>
        <div className="stat-content">
          <p className="stat-value">{data.education. length}</p>
          <p className="stat-label">Education</p>
        </div>
      </div>

      <div className="stat-card stat-card-orange">
        <div className="stat-icon">
          <Trophy size={32} />
        </div>
        <div className="stat-content">
          <p className="stat-value">{data.achievements.length}</p>
          <p className="stat-label">Achievements</p>
        </div>
      </div>

      {/* Status Toggles */}
      <div className="status-section">
        <h3 className="section-subtitle">Profile Status</h3>
        <div className="status-toggles">
          <div className="status-toggle-card">
            <div className="status-toggle-content">
              <div>
                <h4>Hireable</h4>
                <p>Show hiring availability</p>
              </div>
              <button
                onClick={() => handleStatusUpdate('hireable')}
                className={`toggle-button ${profileStatus.hireable ? 'active' : ''}`}
              >
                {profileStatus. hireable ? <CheckCircle size={20} /> : <XCircle size={20} />}
              </button>
            </div>
          </div>

          <div className="status-toggle-card">
            <div className="status-toggle-content">
              <div>
                <h4>Available for Work</h4>
                <p>Open to new opportunities</p>
              </div>
              <button
                onClick={() => handleStatusUpdate('availableForWork')}
                className={`toggle-button ${profileStatus.availableForWork ? 'active' : ''}`}
              >
                {profileStatus. availableForWork ? <CheckCircle size={20} /> : <XCircle size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderList = (items, type) => (
    <div className="admin-list">
      <div className="admin-list-header">
        <h3 className="section-subtitle">{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
        <button onClick={() => setShowForm(true)} className="btn btn-primary">
          <Plus size={18} />
          Add New
        </button>
      </div>

      <div className="admin-table">
        {items.length === 0 ? (
          <div className="empty-state">
            <p>No {type} found.  Add your first one!</p>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                {type === 'projects' && <th>Category</th>}
                {type === 'skills' && <th>Category</th>}
                {type === 'education' && <th>Institution</th>}
                {type === 'achievements' && <th>Date</th>}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id}>
                  <td className="td-title">
                    {item.title || item.degree || item.category}
                  </td>
                  {type === 'projects' && <td>{item.category}</td>}
                  {type === 'skills' && <td>{item.category}</td>}
                  {type === 'education' && <td>{item.institution}</td>}
                  {type === 'achievements' && <td>{item.date}</td>}
                  <td>
                    <div className="action-buttons">
                      <button
                        onClick={() => handleEdit(item)}
                        className="action-btn action-btn-edit"
                        title="Edit"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(type, item._id)}
                        className="action-btn action-btn-delete"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="settings-section">
      <h3 className="section-subtitle">Account Settings</h3>
      <div className="settings-card">
        <p>Change password and other settings coming soon... </p>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="spinner" style={{ width: '48px', height: '48px', borderWidth: '4px' }}></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <div className="admin-logo">
            <LayoutDashboard size={24} />
            <span>Admin Panel</span>
          </div>
        </div>

        <nav className="admin-nav">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab. id);
                setShowForm(false);
                setEditingItem(null);
              }}
              className={`admin-nav-item ${activeTab === tab.id ?  'active' : ''}`}
            >
              <tab.icon size={20} />
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <button onClick={handleLogout} className="admin-logout">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <div className="admin-header">
          <h2 className="admin-title">
            {tabs.find(t => t.id === activeTab)?.name}
          </h2>
          <a href="/" target="_blank" className="btn btn-secondary">
            <Eye size={18} />
            View Portfolio
          </a>
        </div>

        <div className="admin-content">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'projects' && ! showForm && renderList(data. projects, 'projects')}
          {activeTab === 'skills' && !showForm && renderList(data.skills, 'skills')}
          {activeTab === 'education' && !showForm && renderList(data.education, 'education')}
          {activeTab === 'achievements' && !showForm && renderList(data.achievements, 'achievements')}
          {activeTab === 'settings' && renderSettings()}

          {/* Forms */}
          {showForm && activeTab === 'projects' && (
            <ProjectForm item={editingItem} onClose={handleFormClose} />
          )}
          {showForm && activeTab === 'skills' && (
            <SkillForm item={editingItem} onClose={handleFormClose} />
          )}
          {showForm && activeTab === 'education' && (
            <EducationForm item={editingItem} onClose={handleFormClose} />
          )}
          {showForm && activeTab === 'achievements' && (
            <AchievementForm item={editingItem} onClose={handleFormClose} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;