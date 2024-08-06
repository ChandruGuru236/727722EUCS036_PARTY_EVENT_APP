import React, { useState } from 'react';
import './auth.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AdminLoginForm = () => {
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminUsername === 'admin' && adminPassword === 'admin123') {
      console.log('Admin logged in successfully');
      navigate('/dashboard'); // Use navigate to redirect
      // Redirect or perform further actions upon successful login
    } else {
      console.log('Invalid admin credentials');
      // Handle login failure (e.g., show an error message)
    }
    console.log('Admin logging in:', { adminUsername, adminPassword });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Admin Login</h2>
        <form onSubmit={handleAdminLogin}>
          <div className="input-group">
            <FaUser className="icon" />
            <input 
              type="text" 
              placeholder="Admin Username" 
              value={adminUsername} 
              onChange={(e) => setAdminUsername(e.target.value)} 
            />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input 
              type="password" 
              placeholder="Admin Password" 
              value={adminPassword} 
              onChange={(e) => setAdminPassword(e.target.value)} 
            />
          </div>
          <button className='new_button' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginForm;
