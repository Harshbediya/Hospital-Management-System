import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Superlogin.css'; 

function Superlogin() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage('');

  try {
    const response = await axios.post('http://127.0.0.1:8000/superadmin/superlogin/', {
      name: name.trim(),
      psw: password.trim()
    }, {
      headers: { "Content-Type": "application/json" }
    });

    if (response.data.message === 'Login successful') {
      sessionStorage.setItem('Superuser', name.trim()); 
      setMessage('Login successful');
      setTimeout((e) => {
        navigate('/Superdashboard');
      }, 4000);
      return; 
    } else {
      setMessage('Unexpected error');
    }

  } catch (error) {
    if (error.response) {
      setMessage(error.response.data.error || "Login failed");
    } else {
      setMessage("Server error or no response");
    }
  } finally {
    setLoading(false);
    setPassword('');
  }
};

  return (
    <div className="superlogin-container">
      <div className="login-card">
        <h2>Superadmin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="superlogin-form">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="superlogin-form">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {message && (
          <p className={`message ${message === 'Login successful' ? 'success' : 'error'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Superlogin;
