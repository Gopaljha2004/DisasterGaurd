import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import googleIcon from "../Images/Logos/google.svg"

const Login = () => {
  useEffect(() => {
    const handleScroll = () => {
      const form = document.querySelector('.login-form');
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
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left side - Login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <motion.div 
          className="w-full max-w-md login-form"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-6">Welcome Back</h2>
          <p className="mb-6">Log in to continue</p>
          <button className="flex items-center justify-center w-full bg-white border border-gray-300 py-2 mb-4 rounded text-sm">
            <img src={googleIcon} alt="Google Icon" className="mr-2 w-8 " />
           
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
              <label className="block mb-2 text-sm font-medium">Email*</label>
              <input type="email" className="w-full px-4 py-2 border rounded" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Password*</label>
              <input type="password" className="w-full px-4 py-2 border rounded" placeholder="Enter your password" />
            </div>
            <button className="w-full bg-black text-white py-2 rounded">Login</button>
          </form>
          <p className="mt-4 text-center text-sm">
            Don't have an account?
            <span>
                <Link to="/signup" >
                
                <a href="#" className="text-blue-500"> Create one</a>
                </Link>
                
                </span> 
          </p>
        </motion.div>
      </div>
      {/* Right side - Video background */}
      <div className="relative w-full md:w-1/2 h-full">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50 md:opacity-100" 
          src="/path-to-your-video/background-video.mp4" 
          autoPlay 
          loop 
          muted 
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-60 md:opacity-0"></div>
      </div>
    </div>
  );
};

export default Login;
