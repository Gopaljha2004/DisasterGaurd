import React from 'react';
import { motion } from 'framer-motion';
import background from '../videos/background.mp4';
import gsap from 'gsap';

const Home = () => {
  React.useEffect(() => {
    gsap.fromTo(".fade-in", { opacity: 0 }, { opacity: 1, duration: 1.5 });
  }, []);

  return (
    <div>
      {/* Section 1: Hero */}
      <div className="relative h-screen">
        <video className="absolute top-0 left-0 w-full h-full object-cover opacity-50" src={background} autoPlay loop muted />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="mb-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">The AI-Driven Disaster Management System</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="w-[80%] mt-3">
            <p className="text-lg md:text-2xl mb-6">Harness the power of AI to predict, manage, and mitigate disasters. Our system provides real-time insights and solutions for effective disaster response.</p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
      </div>

      {/* Section 2: Features Overview */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 md:px-8">
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Features Overview</h2>
            <p className="text-lg text-gray-700 mb-8">Discover the key features of our AI-Driven Disaster Management System.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <img src="feature1.png" alt="Real-Time Monitoring" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2">Real-Time Monitoring</h3>
                <p className="text-gray-700">Stay updated with real-time monitoring of disaster-prone areas using advanced AI algorithms.</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <img src="feature2.png" alt="Predictive Analytics" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2">Predictive Analytics</h3>
                <p className="text-gray-700">Predict potential disasters and mitigate risks with our cutting-edge predictive analytics.</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <img src="feature3.png" alt="Automated Response" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2">Automated Response</h3>
                <p className="text-gray-700">Implement automated response strategies to efficiently manage disaster situations.</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <img src="feature4.png" alt="Comprehensive Reports" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2">Comprehensive Reports</h3>
                <p className="text-gray-700">Generate detailed reports and insights for better decision-making and planning.</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Section 3: How It Works */}
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg mb-8">Understand the process behind our AI-Driven Disaster Management System.</p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="p-6 bg-white text-gray-800 shadow-lg rounded-lg w-80">
                <img src="process1.png" alt="Data Collection" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2">Step 1: Data Collection</h3>
                <p>Gather data from various sources, including weather stations, satellites, and sensors.</p>
              </div>
              <div className="p-6 bg-white text-gray-800 shadow-lg rounded-lg w-80">
                <img src="process2.png" alt="AI Analysis" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2">Step 2: AI Analysis</h3>
                <p>Analyze collected data using AI algorithms to identify patterns and predict disasters.</p>
              </div>
              <div className="p-6 bg-white text-gray-800 shadow-lg rounded-lg w-80">
                <img src="process3.png" alt="Real-Time Alerts" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2">Step 3: Real-Time Alerts</h3>
                <p>Send real-time alerts to relevant authorities and stakeholders for immediate action.</p>
              </div>
              <div className="p-6 bg-white text-gray-800 shadow-lg rounded-lg w-80">
                <img src="process4.png" alt="Automated Response" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2">Step 4: Automated Response</h3>
                <p>Execute pre-defined response plans to mitigate the impact of the disaster.</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Section 4: Testimonials */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 md:px-8">
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-700 mb-8">Hear from users who have benefited from our system.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <img src="user1.jpg" alt="Jane Doe" className="w-20 h-20 rounded-full object-cover mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">Jane Doe</h3>
                <p className="text-gray-700 text-center">"The AI-Driven Disaster Management System has revolutionized our emergency response strategies. Highly recommended!"</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <img src="user2.jpg" alt="John Smith" className="w-20 h-20 rounded-full object-cover mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">John Smith</h3>
                <p className="text-gray-700 text-center">"Thanks to the predictive analytics, we were able to prepare in advance and minimize damage during recent floods."</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <img src="user3.jpg" alt="Emily Davis" className="w-20 h-20 rounded-full object-cover mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">Emily Davis</h3>
                <p className="text-gray-700 text-center">"Real-time alerts have made a significant difference in our disaster management operations. A game-changer!"</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Section 5: Call to Action */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-center">
            <h2 className="text-4xl font-bold mb-4">Get Started Today</h2>
            <p className="text-lg mb-8">Sign up now and harness the power of AI for effective disaster management.</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300">Create an Account</button>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Home;
