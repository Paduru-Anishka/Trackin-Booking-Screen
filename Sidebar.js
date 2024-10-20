import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Taxi Dispatch Panel</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
        <li><Link to="/tracking-bookings">Tracking Bookings</Link></li>
        {/* Add more navigation links as needed */}
      </ul>
    </div>
  );
}

export default Sidebar;
