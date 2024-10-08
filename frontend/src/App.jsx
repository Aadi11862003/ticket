import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FrontPage from './components/FrontPage'; // Import FrontPage
import LoginPage from './components/LoginPage';
import Sign from './components/SignupCard';
import Concert from './components/ConcertDetail';
import Finished from './components/FinishedEventDetail';
import Finish from './components/detailsFinished';

import Live from './components/LiveEventsPage';
import Contact from './components/ContactPage';
import About from './components/AboutUsPage';
import Chatbot from './components/chatbot'
import Price from './components/price'
import UpcomingDetailed from './components/detailsUpcomingConcerts'
import Index from './components/index' 
import Home from './components/home'
import Book from './components/ticketbook'
import Detail from './components/detailsFinished'



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<FrontPage />} /> {/* Render FrontPage on root path */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Sign />} />
{/*           <Route path="/update" element={<Update />} /> */}
          <Route path="/Concert/:id" element={<Concert />} />
          <Route path="/finish" element={<Finished />} />
          <Route path="/details" element={<Finish />}/>
          
          <Route path="/live" element={<Live />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/chat" element={<Chatbot />} />
          <Route path="/price" element={<Price />} />
          <Route path="/index" element={<Index />} />
          <Route path="/book" element={<Book />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/Concert/detailsUpcomingConcerts" element={<UpcomingDetailed />} />
          
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;


