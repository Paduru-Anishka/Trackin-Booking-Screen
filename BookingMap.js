import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: "100%",
  height: "100%"
};

const center = {
  lat: 40.7128,
  lng: -74.0060
};

function BookingMap() {
  return (
    <div className="map-container">
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={14} center={center}>
        {/* Example of Pickup and Dropoff Markers */}
        <Marker position={{ lat: 40.7128, lng: -74.0060 }} />
        <Marker position={{ lat: 40.7308, lng: -73.9973 }} />
      </GoogleMap>
    </div>
  );
