import { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, Terminal, AlertCircle } from 'lucide-react';
import { authAPI } from '../../services/api';
import { setToken } from '../../utils/auth';
import './Login.css';

const Login = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await authAPI.login(formData);
      const { token } = response. data. data;
      
      setToken(token);
      onLoginSuccess();
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Invalid credentials.  Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target. name]: e.target.value
    });
  };

  return (
    <div className="login-container">
      {/* Background Effects */}
      <div className="login-bg">
        <div className="login-gradient-1"></div>
        <div className="login-gradient-2"></div>
      </div>

      {/* Login Card */}
      <div className="login-card">
        <div className="login-card-glow"></div>

        <div className="login-header">
          <div className="login-icon">
            <Terminal size={32} />
          </div>
          <h1 className="login-title">Admin Panel</h1>
          <p className="login-subtitle">Sign in to manage your portfolio</p>
        </div>

        {error && (
          <div className="login-error">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              <Mail size={16} />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@portfolio.com"
              required
              className="form-input"
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              <Lock size={16} />
              Password
            </label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData. password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                className="form-input"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary login-submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner"></span>
                Signing in...
              </>
            ) : (
              <>
                <Lock size={18} />
                Sign In
              </>
            )}
          </button>
        </form>

        <div className="login-footer">
          <p className="login-footer-text">
            🔒 Secure admin access only
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;