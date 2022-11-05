import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import HomeView from './views/Home';
import ChatView from './views/Chat';
import WelcomeView from './views/Welcome';
import SettingsView from './views/Settings';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="content-wrapper">
          <Navbar />
          <Routes>
            <Route path="/home" element={<HomeView />} />
            <Route path="/chat/:id" element={<ChatView />} />
            <Route path="/settings" element={<SettingsView />} />
            <Route path="/" element={<WelcomeView />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}
