import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Footer from '../Components/Footer';

const Contact = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return (
    <motion.div 
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
              <span className="block">Get in Touch</span>
              <span className="block text-indigo-600 mt-2">We're Here to Help</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-xl text-gray-500 sm:text-2xl md:mt-8 md:max-w-3xl">
              Have questions about our services? Need support? Or just want to share your thoughts? We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div 
              className="bg-white rounded-xl shadow-xl overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                {[
                  { icon: FaPhone, title: 'Phone', content: '+91 98765 43210' },
                  { icon: FaEnvelope, title: 'Email', content: 'support@disasterguard.com' },
                  { icon: FaMapMarkerAlt, title: 'Address', content: '123 Disaster St, Mumbai, MH 400001' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center mb-4">
                    <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3 mr-4">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">{item.title}</p>
                      <p className="text-lg font-semibold text-gray-900">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-white shadow-2xl rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                    {['First name', 'Last name', 'Email', 'Phone'].map((label, index) => (
                      <div key={index} className={index > 1 ? "sm:col-span-2" : ""}>
                        <label htmlFor={label.toLowerCase().replace(' ', '_')} className="block text-sm font-medium text-gray-700">
                          {label}
                        </label>
                        <input
                          type={label === 'Email' ? 'email' : label === 'Phone' ? 'tel' : 'text'}
                          name={label.toLowerCase().replace(' ', '_')}
                          id={label.toLowerCase().replace(' ', '_')}
                          className="mt-1 block w-full border-gray-300 h-10 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    ))}
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Connect with us</h2>
            <div className="flex justify-center space-x-8">
              {[FaFacebook, FaTwitter, FaLinkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-8 w-8" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Contact;
