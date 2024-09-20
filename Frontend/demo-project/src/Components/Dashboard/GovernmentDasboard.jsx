import React, { useState, useEffect } from 'react';
import { FaUsers, FaMapMarkerAlt, FaBell, FaExclamationTriangle } from 'react-icons/fa';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import axios from 'axios';
import { motion } from 'framer-motion';

const containerStyle = {
  width: '100%',
  height: '400px'
};

// Dummy center of the map
const center = {
  lat: 37.7749,
  lng: -122.4194
};

const GovernmentDashboard = () => {
  const [emergencyUsers, setEmergencyUsers] = useState([]); // Default to empty array
  const [location, setLocation] = useState(center); // Current map center
  const [alertData, setAlertData] = useState([]); // Disaster alerts data

  useEffect(() => {
    // Fetch users requesting help (can be from an API)
    axios.get('/api/emergency-users')
      .then((response) => {
        // Ensure we have an array before setting the state
        setEmergencyUsers(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => {
        console.error('Error fetching emergency users:', error);
        setEmergencyUsers([]); // Fall back to an empty array in case of error
      });

    // Fetch disaster alerts (can be from an API)
    axios.get('/api/disaster-alerts')
      .then((response) => {
        setAlertData(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => {
        console.error('Error fetching disaster alerts:', error);
        setAlertData([]); // Fall back to an empty array in case of error
      });
  }, []);

  const handleFetchData = () => {
    // Action to fetch updated emergency data
    alert('Fetching latest data...');
    // You can implement the actual fetch logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Dashboard Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Government Emergency Dashboard</h1>
          <button
            onClick={handleFetchData}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-bold flex items-center space-x-2"
          >
            <FaExclamationTriangle />
            <span>Fetch Latest Data</span>
          </button>
        </div>

        {/* Emergency Data and Map Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* User Data Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-4">
              <FaUsers className="text-3xl mr-4" />
              <h2 className="text-xl font-semibold">Users Requesting Help</h2>
            </div>
            <ul className="text-lg">
              {emergencyUsers && emergencyUsers.length > 0 ? (
                emergencyUsers.map((user, index) => (
                  <li key={index} className="mb-2">
                    {user.name} - {user.phone} - Location: {user.location.lat}, {user.location.lng}
                  </li>
                ))
              ) : (
                <li>No users requesting help at the moment.</li>
              )}
            </ul>
          </motion.div>

          {/* Disaster Alerts Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-4">
              <FaBell className="text-3xl mr-4" />
              <h2 className="text-xl font-semibold">Disaster Alerts</h2>
            </div>
            <ul className="text-lg">
              {alertData && alertData.length > 0 ? (
                alertData.map((alert, index) => (
                  <li key={index} className="mb-2">
                    {alert.type} - {alert.message}
                  </li>
                ))
              ) : (
                <li>No active alerts.</li>
              )}
            </ul>
          </motion.div>
        </div>

        {/* Google Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 bg-white shadow-lg rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4">Live Disaster Map</h2>
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={location}
              zoom={10}
            >
              {emergencyUsers.map((user, index) => (
                <Marker key={index} position={user.location} />
              ))}
            </GoogleMap>
          </LoadScript>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GovernmentDashboard;
