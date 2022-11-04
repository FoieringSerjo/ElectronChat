import React from 'react';
import HomeView from './views/Home';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="content-wrapper">
        <Navbar />
        <Routes>
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<HomeView />} />
        </Routes>
      </div>
    </Router>
  );
}

function Settings() {
  return <h1>Settings View</h1>;
}

function Login() {
  return <h1>Login View</h1>;
}

function Register() {
  return <h1>Register View</h1>;
}
