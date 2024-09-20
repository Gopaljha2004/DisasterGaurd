import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import googleIcon from "../Images/Logos/google.svg"

const Signup = () => {
  useEffect(() => {
    const handleScroll = () => {
      const form = document.querySelector('.signup-form');
      const formPosition = form.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (formPosition < screenPosition) {
        form.classList.add('animate-fadeInUp');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center w-full md:flex-row min-h-screen">
      {/* Left side - Signup form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <motion.div 
          className="w-full max-w-md signup-form"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >

          <button className="flex items-center justify-center w-full bg-white border-2 border-gray-800 py-2 mb-4 rounded text-sm">
            <img src={googleIcon} alt="Google Icon" className="mr-2 w-8" />
            <span className='font-semibold'>

            Sign in with Google
            </span>
          </button>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-500">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Name*</label>
              <input type="text" className="w-full px-4 py-2 border rounded" placeholder="Enter your name" />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Email*</label>
              <input type="email" className="w-full px-4 py-2 border rounded" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Password*</label>
              <input type="password" className="w-full px-4 py-2 border rounded" placeholder="Enter your password" />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Confirm Password*</label>
              <input type="password" className="w-full px-4 py-2 border rounded" placeholder="Confirm your password" />
            </div>
            <button className="w-full bg-black text-white py-2 rounded">Create Account</button>
          </form>
          <p className="mt-4 text-center text-sm">
            Already have an account? 
            <span >
                <Link to="/government-panel">

             <a href="#" className="text-blue-500"> Login Here</a>
                </Link>

            </span>
          </p>
        </motion.div>
      </div>
     
    </div>
  );
};

export default Signup;
