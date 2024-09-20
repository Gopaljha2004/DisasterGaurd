import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import { motion } from 'framer-motion';
import L from 'leaflet';

// Fix marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const User = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 }); // Default location
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Use effect to get user location using browser geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error retrieving location: ', error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []); // Run once

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const userData = {
      name,
      phone,
      location,
    };

    try {
      await axios.post('your-api-endpoint', userData);
      alert('Profile saved successfully!');
      setIsSubmitting(false);
    } catch (error) {
      console.error('There was an error saving the profile!', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl" // Wider card
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-6 text-gray-800"
          whileHover={{ scale: 1.1, color: '#1D4ED8' }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          User Profile
        </motion.h2>
        <motion.p
          className="text-center text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Please fill in your details below
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-gray-700 font-semibold">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                required
                placeholder="Enter your phone"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 font-semibold mb-2">Location</label>
            <MapContainer
              center={location}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: '400px', width: '100%', borderRadius: '8px', overflow: 'hidden' }}
              key={location.lat + location.lng}
            >
              <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={location}>
                <Popup>You are here.</Popup>
              </Marker>
            </MapContainer>
          </div>

          <motion.button
            className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-full transition-transform duration-500 ease-in-out ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {isSubmitting ? 'Submitting...' : 'Save Profile'}
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default User;
