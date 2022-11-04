import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="chat-navbar">
      <nav className="chat-navbar-inner">
        <div className="chat-navbar-inner-left">
          <button
            onClick={() => navigate('/')}
            className="btn btn-outline-primary me-1">
            Back
          </button>
          <Link to="/settings" className="btn btn-outline-success ml-2">
            Settings
          </Link>
        </div>
        <div className="chat-navbar-inner-right">
          <span className="logged-in-user me-2">Hi User</span>
          <button
            onClick={() => navigate('/register')}
            className="btn btn-outline-danger me-1">
            Register
          </button>
          <Link to="/login" className="btn btn-outline-success me-1">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}
