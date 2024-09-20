import React from 'react';
import { motion } from 'framer-motion';
import background from '../videos/background.mp4';
import gsap from 'gsap';
import datacollectionimage from "../Images/section3/datacollection.jpg";
import aianalisisimage from "../Images/section3/aianalysis.jpg";
import automatedimage from "../Images/section3/automated.png";
import realtimealerts from "../Images/section3/realtimealerts.jpg";
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';


const Home = () => {
  React.useEffect(() => {
    gsap.fromTo(".fade-in", { opacity: 0 }, { opacity: 1, duration: 1.5 });
  }, []);

  return (
    <div>
      {/* Section 1: Hero */}
      <div className="relative h-screen">
        <video className="absolute top-0 left-0 w-full h-full object-cover opacity-70" src={background} autoPlay loop muted />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 md:px-12 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="mb-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide mb-6 leading-tight">AI-Driven Disaster Management</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="w-[85%] max-w-[800px] mt-4">
            <p className="text-lg md:text-xl lg:text-2xl mb-6 font-medium leading-relaxed">Leverage cutting-edge AI to predict, manage, and mitigate disasters in real-time.</p>
            <Link to="/features" >
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-lg">Get Started</button>
            </Link>
           
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
      </div>

      {/* Section 2: Stats and Impact */}
      <div className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600 mb-8">Empowering communities through AI-driven insights and action.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow-lg rounded-lg transition hover:shadow-xl">
                <h3 className="text-3xl font-bold mb-2 text-blue-600">50+</h3>
                <p className="text-gray-600">Disasters Predicted</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg transition hover:shadow-xl">
                <h3 className="text-3xl font-bold mb-2 text-blue-600">10,000+</h3>
                <p className="text-gray-600">Lives Saved</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg transition hover:shadow-xl">
                <h3 className="text-3xl font-bold mb-2 text-blue-600">24/7</h3>
                <p className="text-gray-600">Real-Time Monitoring</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Section 3: How It Works */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg mb-8 text-gray-600">Our system utilizes advanced AI algorithms to provide comprehensive disaster management.</p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="p-6 bg-gray-50 text-gray-800 shadow-lg rounded-lg w-full md:w-80 transition hover:shadow-xl">
                <img src={datacollectionimage} alt="Data Collection" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2">Step 1: Data Collection</h3>
                <p>Gathering real-time data from multiple sources, including satellites and weather stations.</p>
              </div>
              <div className="p-6 bg-gray-50 text-gray-800 shadow-lg rounded-lg w-full md:w-80 transition hover:shadow-xl">
                <img src={aianalisisimage} alt="AI Analysis" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2">Step 2: AI Analysis</h3>
                <p>Analyzing patterns to predict and forecast potential disasters with precision.</p>
              </div>
              <div className="p-6 bg-gray-50 text-gray-800 shadow-lg rounded-lg w-full md:w-80 transition hover:shadow-xl">
                <img src={realtimealerts} alt="Real-Time Alerts" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2">Step 3: Real-Time Alerts</h3>
                <p>Instant alerts to authorities and responders for immediate action.</p>
              </div>
              <div className="p-6 bg-gray-50 text-gray-800 shadow-lg rounded-lg w-full md:w-80 transition hover:shadow-xl">
                <img src={automatedimage} alt="Automated Response" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2">Step 4: Automated Response</h3>
                <p>Predefined response plans are triggered to minimize the impact of disasters.</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Section 4: Testimonials */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600 mb-8">Trusted by governments, NGOs, and emergency response teams worldwide.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow-lg rounded-lg transition hover:shadow-xl">
                <img src="https://images.unsplash.com/photo-1719603785926-84d214438120?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jane Doe" className="w-20 h-20 rounded-full object-cover mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">Jane Doe</h3>
                <p className="text-gray-700 text-center">"This system has transformed the way we respond to emergencies."</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg transition hover:shadow-xl">
                <img src="https://images.unsplash.com/photo-1670025386291-ed763877fa87?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="John Smith" className="w-20 h-20 rounded-full object-cover mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">John Smith</h3>
                <p className="text-gray-700 text-center">"Incredible accuracy and response speed in disaster warnings."</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg transition hover:shadow-xl">
                <img src="https://images.unsplash.com/photo-1553867745-6e038d085e86?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sarah Connor" className="w-20 h-20 rounded-full object-cover mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">Sarah Connor</h3>
                <p className="text-gray-700 text-center">"A vital tool for disaster preparedness and management."</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
