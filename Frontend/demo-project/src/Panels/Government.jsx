import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';

const Government = () => {
  const [isHovered, setIsHovered] = useState(false);

  const pageVariants = {
    initial: { opacity: 0, y: -50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: 50 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  const inputVariants = {
    focus: { scale: 1.05, boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)' }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-md"
      >
        <motion.h1
          className="text-4xl font-bold text-center mb-8 text-gray-800"
          whileHover={{ scale: 1.05, color: '#1E40AF' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Government Portal
        </motion.h1>

        <motion.form
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div variants={inputVariants} whileFocus="focus">
            <label className="block text-gray-700 font-semibold mb-2">
              <FaUser className="inline mr-2" />
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition duration-300"
              placeholder="Enter your email"
            />
          </motion.div>

          <motion.div variants={inputVariants} whileFocus="focus">
            <label className="block text-gray-700 font-semibold mb-2">
              <FaLock className="inline mr-2" />
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition duration-300"
              placeholder="Enter your password"
            />
          </motion.div>

          <motion.button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-all duration-300 ease-in-out flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FaSignInAlt className="mr-2" />
            Sign In
          </motion.button>

          <motion.div
            className="text-center text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline font-semibold">
              Sign Up
            </Link>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Government;
