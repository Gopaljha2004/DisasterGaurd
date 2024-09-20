import React, { useState } from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import axios from 'axios';
import { motion } from 'framer-motion'; // For animations

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const User = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState(center);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const userData = {
      name,
      phone,
      location
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

  const handleMapClick = (event) => {
    setLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md"
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
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div>
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Location</label>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={10}
                onClick={handleMapClick}
              >
                <Marker position={location} />
              </GoogleMap>
            </LoadScript>
          </div>

          <motion.button
            className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-transform duration-500 ease-in-out ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
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
