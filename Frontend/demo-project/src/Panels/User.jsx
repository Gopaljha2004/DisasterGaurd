import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => setValue(e.target.value);
  return { value, onChange: handleChange };
};

const StyledInput = ({ icon: Icon, ...props }) => (
  <motion.div
    className="relative"
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    <motion.input
      {...props}
      className="w-full pl-10 pr-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white shadow-sm"
      whileFocus={{ scale: 1.02, boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)' }}
    />
  </motion.div>
);

const StyledLabel = ({ children }) => (
  <motion.label
    className="block text-sm font-medium text-gray-700 mb-1"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.label>
);

window.addEventListener('online', function() {
  fetch('/update-network-status', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId: 'your_user_id', onlineStatus: true })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error updating network status:', error));
});

window.addEventListener('offline', function() {
  fetch('/update-network-status', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId: 'your_user_id', onlineStatus: false })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error updating network status:', error));
  });

const User = () => {
  const name = useFormInput('');
  const phone = useFormInput('');
  const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [networkStatus, setNetworkStatus] = useState(navigator.onLine ? 'online' : 'offline');
  const navigate = useNavigate();

  useEffect(() => {
    // Get user's geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
          setIsMapLoaded(true);
        },
        (error) => {
          console.error('Error retrieving location: ', error);
          setIsMapLoaded(true);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
      setIsMapLoaded(true);
    }

    // Network status event listeners
    const updateNetworkStatus = () => {
      setNetworkStatus(navigator.onLine ? 'online' : 'offline');
    };

    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('online', updateNetworkStatus);
      window.removeEventListener('offline', updateNetworkStatus);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // User data payload
    const userData = {
      name: name.value,
      phone: phone.value,
      location, // location as { lat, lng }
      networkStatus, // online or offline status
    };

    try {
      // Post data to the API endpoint
      await axios.post('http://localhost:3000/api/v1/user', userData);
      alert('Profile updated successfully!');
      navigate('/user-dashboard'); // Navigate to another page after successful submission
    } catch (error) {
      console.error('There was an error updating the profile!', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-3xl"
      >
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          User Profile
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div>
              <StyledLabel>Name</StyledLabel>
              <StyledInput icon={FaUser} {...name} required placeholder="Enter your name" />
            </div>

            <div>
              <StyledLabel>Phone Number</StyledLabel>
              <StyledInput icon={FaPhone} {...phone} required placeholder="Enter your phone" type="tel" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <StyledLabel>Location</StyledLabel>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400 z-10" />
              <AnimatePresence>
                {isMapLoaded && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MapContainer
                      center={location}
                      zoom={13}
                      scrollWheelZoom={false}
                      style={{ height: '250px', width: '100%', borderRadius: '0.375rem', overflow: 'hidden' }}
                      key={location.lat + location.lng}
                    >
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      />
                      <Marker position={location}>
                        <Popup>Your current location</Popup>
                      </Marker>
                    </MapContainer>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full bg-blue-500 text-white font-semibold py-3 px-4 mt-5 rounded-md transition-all duration-300 ease-in-out ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600 shadow-lg'}`}
            disabled={isSubmitting}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {isSubmitting ? 'Updating Profile...' : 'Update Profile'}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default User;
