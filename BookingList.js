import React from 'react';

const bookings = [
  { id: "TRPAA001", type: "Sedan", status: "Active Trip", pickup: "Location A", dropoff: "Location B" },
  { id: "TRPAA002", type: "Mini", status: "Active Trip", pickup: "Location A", dropoff: "Location B" },
  // Add more bookings
];

function BookingList() {
  return (
    <div className="booking-list">
      <input type="text" placeholder="Search" />
      <select>
        <option value="all">Status</option>
        <option value="active">Active Trip</option>
      </select>
      <div className="bookings">
        {bookings.map((booking) => (
          <div key={booking.id} className="booking-card">
            <p><strong>{booking.id}</strong> - {booking.type}</p>
            <p>{booking.pickup} ➝ {booking.dropoff}</p>
            <span className="status">{booking.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingList;
