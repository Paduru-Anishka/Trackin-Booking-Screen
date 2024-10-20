import React from 'react';
import BookingList from '../components/BookingList';
import BookingMap from '../components/BookingMap';

function TrackingBookings() {
  return (
    <div className="tracking-bookings">
      <header>
        <h2>Welcome Back, Dispatcher!</h2>
        <div className="user-profile">
          <img src="path_to_profile_pic" alt="User Profile" />
          <span>Dispatcher Name</span>
        </div>
      </header>
      <div className="content">
        <BookingList />
        <BookingMap />
      </div>
    </div>
  );
}

export default TrackingBookings;
