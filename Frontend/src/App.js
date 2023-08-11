import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; // Corrected import statement
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/login';
import Forgot from './pages/Forgot';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<Forgot />} />
      </Routes>
    </Router>
  );
};

const rootContainer = createRoot(document.getElementById('root')); // Use createRoot
rootContainer.render(<App />);

export default App;
