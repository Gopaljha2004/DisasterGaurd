import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaBell, FaExclamationTriangle } from 'react-icons/fa'; // Icons for better user experience

const UserDashboard = () => {
  const [location, setLocation] = useState({ lat: '37.7749', lng: '-122.4194' }); // Dummy location for now
  const [emergencyStatus, setEmergencyStatus] = useState(false);

  const handleEmergencyClick = () => {
    setEmergencyStatus(true);
    // Code to handle emergency request (e.g., send data to server)
    alert('Emergency request sent!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6 mb-10"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-gray-800">Disaster Response Dashboard</h1>
          <button
            onClick={handleEmergencyClick}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-bold flex items-center space-x-2"
          >
            <FaExclamationTriangle />
            <span>Request Emergency Help</span>
          </button>
        </div>

        {/* Section for showing user information */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Current Location */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-3xl mr-4" />
                <h2 className="text-xl font-semibold">Current Location</h2>
              </div>
              <p className="text-lg">{`Latitude: ${location.lat}, Longitude: ${location.lng}`}</p>
              <p className="mt-2 text-sm">This is your live location. Ensure GPS is enabled for better accuracy.</p>
            </motion.div>

            {/* Disaster Alerts */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-6 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <div className="flex items-center mb-4">
                <FaBell className="text-3xl mr-4" />
                <h2 className="text-xl font-semibold">Disaster Alerts</h2>
              </div>
              <p className="text-lg">No new alerts at the moment. Stay safe and follow instructions from local authorities.</p>
              <p className="mt-2 text-sm">Check back frequently for the latest updates during emergencies.</p>
            </motion.div>

            {/* Emergency Contacts */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-3xl mr-4" />
                <h2 className="text-xl font-semibold">Emergency Contacts</h2>
              </div>
              <p className="text-lg">Call: 911 or your local emergency number for immediate assistance.</p>
              <p className="mt-2 text-sm">Make sure you have a charged phone and stable signal.</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Additional Section for Resources or Reports */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Disaster Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Resources can be links, PDFs, or info */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Flood Response Guide</h3>
            <p className="text-sm text-gray-600">
              Learn how to prepare and respond to floods with our comprehensive guide.
            </p>
            <a href="#" className="text-blue-500 hover:underline mt-2 block">View More</a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Earthquake Preparedness</h3>
            <p className="text-sm text-gray-600">
              Stay informed on how to protect yourself during earthquakes.
            </p>
            <a href="#" className="text-blue-500 hover:underline mt-2 block">View More</a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">Hurricane Safety Tips</h3>
            <p className="text-sm text-gray-600">
              Important tips to ensure your safety during hurricanes.
            </p>
            <a href="#" className="text-blue-500 hover:underline mt-2 block">View More</a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserDashboard;
