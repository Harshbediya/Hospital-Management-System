import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './patientlogin.css';

const PatientLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    const result = await login(email, password);
    
    if (result.success) {
      navigate('/patientdasboard');
    } else {
      setError(result.message);
    }
    setLoading(false);
  };

  return (
    <div className="login-page animate-fade">
      <div className="login-card glass">
        <div className="login-header">
          <div className="login-logo">
            <span className="logo-text">LIFE<span className="text-secondary">CARE</span></span>
          </div>
          <h2>Welcome Back</h2>
          <p>Access your health dashboard securely</p>
        </div>

        {error && <div className="error-alert">{error}</div>}

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <div className="form-footer">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Remember me
            </label>
            <Link to="/forgot-password" stroke="currentColor" className="forgot-link">Forgot password?</Link>
          </div>

          <button type="submit" className="btn-login" disabled={loading}>
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>

          <p className="auth-footer">
            New to LifeCare? <Link to="/patient">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default PatientLogin;