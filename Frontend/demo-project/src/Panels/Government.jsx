import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For smooth animations
import { Link } from 'react-router-dom';

const Government = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md"
      >
        <motion.h1
          className="text-3xl font-bold text-center mb-6 text-gray-800"
          whileHover={{ scale: 1.1, color: '#1D4ED8' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Government Portal
        </motion.h1>
        <motion.p
          className="text-center text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Please sign in to access the dashboard
        </motion.p>

        <motion.form
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            />
          </div>

          <motion.button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-transform duration-500 ease-in-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            animate={{
              scale: isHovered ? 1.05 : 1,
              boxShadow: isHovered ? '0px 10px 20px rgba(0, 0, 0, 0.1)' : 'none',
            }}
          >
            Sign In
          </motion.button>
          <div className='text-center'>
            Don't have account ? Please
            <Link to="/signup">

             <span className='text-blue-500 '> Signup</span>
            </Link>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Government;
