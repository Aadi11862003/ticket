import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FrontPage from './components/FrontPage'; // Import FrontPage
import LoginPage from './components/LoginPage';
import Sign from './components/SignupCard';
import Update from './components/UpcomingEvents';
import Concert from './components/ConcertDetail';
import Finished from './components/FinishedEventDetail';
import Live from './components/LiveEventsPage';
import Contact from './components/ContactPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<FrontPage />} /> {/* Render FrontPage on root path */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Sign />} />
          <Route path="/update" element={<Update />} />
          <Route path="/Concert/:id" element={<Concert />} />
          <Route path="/finish" element={<Finished />} />
          <Route path="/live" element={<Live />} />
          <Route path="/contact" element={<Contact />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;


