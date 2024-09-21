import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGoogle, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { VscOrganization } from "react-icons/vsc";


const Signup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -50 }
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
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="flex flex-col justify-center w-full md:flex-row min-h-screen bg-gradient-to-br from-blue-100 to-purple-100"
        >
          <div className="w-full md:w-1/2 flex items-center justify-center p-8">
            <motion.div 
              className="w-full max-w-md bg-white p-8 rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2
                className="text-3xl font-bold text-center mb-8 text-gray-800"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Create Your Account
              </motion.h2>

              <motion.button
                className="flex items-center justify-center w-full bg-white border-2 border-gray-300 py-2 px-4 rounded-lg text-gray-700 transition duration-300 ease-in-out hover:bg-gray-100 hover:border-gray-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGoogle className="mr-2" />
                <span className="font-semibold">Sign up with Google</span>
              </motion.button>

              <div className="flex items-center my-6">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="px-3 text-gray-500 text-sm">or</span>
                <hr className="flex-grow border-t border-gray-300" />
              </div>

              <form>
                <motion.div className="mb-4" variants={inputVariants}>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    <FaUser className="inline mr-2" />
                    Name
                  </label>
                  <motion.input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    placeholder="Enter your name"
                    whileFocus="focus"
                  />
                </motion.div>

                <motion.div className="mb-4" variants={inputVariants}>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    <FaEnvelope className="inline mr-2" />
                    Email
                  </label>
                  <motion.input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    placeholder="Enter your email"
                    whileFocus="focus"
                  />
                </motion.div>

                <motion.div className="mb-4" variants={inputVariants}>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    <VscOrganization className="inline mr-2" />

                    Organization
                  </label>
                  <motion.input
                    type="organization"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    placeholder="Enter your organization"
                    whileFocus="focus"
                  />
                </motion.div>

                <motion.div className="mb-4" variants={inputVariants}>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    <FaLock className="inline mr-2" />
                    Password
                  </label>
                  <motion.input
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    placeholder="Enter your password"
                    whileFocus="focus"
                  />
                </motion.div>

                <motion.div className="mb-6" variants={inputVariants}>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    <FaLock className="inline mr-2" />
                    Confirm Password
                  </label>
                  <motion.input
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    placeholder="Confirm your password"
                    whileFocus="focus"
                  />
                </motion.div>

                <motion.button
                  className="w-full bg-blue-600 text-white py-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Create Account
                </motion.button>
              </form>

              <motion.p
                className="mt-6 text-center text-sm text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Already have an account?{' '}
                <Link to="/government-panel" className="text-blue-500 hover:underline font-semibold">
                  Login Here
                </Link>
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Signup;
