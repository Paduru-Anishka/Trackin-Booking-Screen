import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TrackingBookings from './pages/TrackingBookings';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/tracking-bookings" element={<TrackingBookings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
