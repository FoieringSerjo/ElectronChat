import React from 'react';
import HomeView from './views/Home';
import ChatView from './views/Chat';
import LoginView from './views/Login';
import RegisterView from './views/Register';
import SettingsView from './views/Settings';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="content-wrapper">
        <Navbar />
        <Routes>
          <Route path="/chat/:id" element={<ChatView />} />
          <Route path="/settings" element={<SettingsView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/" element={<HomeView />} />
        </Routes>
      </div>
    </Router>
  );
}
