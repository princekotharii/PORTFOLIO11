import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/admin/Login';
import Dashboard from '../components/admin/Dashboard';
import { isAuthenticated } from '../utils/auth';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/admin');
  };

  return (
    <div className="admin-page">
      {isLoggedIn ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default Admin;