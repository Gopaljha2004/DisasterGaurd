import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../Components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-blue-50 to-gray-50">
      <div className="container mx-auto text-gray-800 py-16 px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Contact Details */}
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-blue-900">Contact Us</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're curious about our services, need assistance, or have feedback to share, feel free to reach out to us. We're here to help!
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-800">Customer Support</h3>
                <p className="mb-4">
                  Our support team is available around the clock to address any concerns or queries.
                </p>
                <div className="flex items-center mb-4">
                  <FaPhone className="text-xl text-blue-500 mr-2" />
                  <span className="text-gray-700">+91-9876543210</span>
                </div>
                <div className="flex items-center mb-4">
                  <FaEnvelope className="text-xl text-blue-500 mr-2" />
                  <span className="text-gray-700">info@companyname.com</span>
                </div>
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-xl text-blue-500 mr-2" />
                  <span className="text-gray-700">Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="bg-white p-10 rounded-lg shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-semibold mb-6 text-blue-900">Get in Touch</h3>
            <form className="space-y-6">
              <div className="flex flex-col">
                <label htmlFor="first-name" className="text-lg font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="last-name" className="text-lg font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-lg font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-lg font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
