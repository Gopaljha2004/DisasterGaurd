import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import background from '../videos/background.mp4';

const Home = () => {
  useEffect(() => {
    gsap.fromTo(".features", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
    gsap.fromTo(".how-it-works", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
    gsap.fromTo(".testimonials", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 1 });
  }, []);

  return (
    <div>
      {/* Section 1 Code (Unchanged) */}
      <div className="relative h-screen">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50" 
          src={background} 
          autoPlay 
          loop 
          muted 
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">The AI-Driven Disaster Management System</h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-[80%] mt-3"
          >
            <p className="text-lg md:text-2xl mb-6">
              Harness the power of AI to predict, manage, and mitigate disasters. Our system provides real-time insights and solutions for effective disaster response.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
      </div>

      {/* Section 2: Features Overview */}
      <section className="relative h-screen w-full bg-gradient-to-b from-gray-100 to-gray-200 py-16 features">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">Features Overview</h2>
          <p className="text-lg text-gray-700 mb-8 text-center">Discover the key features of our AI-Driven Disaster Management System.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <FeatureCard title="Real-Time Monitoring" description="Stay updated with real-time monitoring of disaster-prone areas using advanced AI algorithms." />
            <FeatureCard title="Predictive Analytics" description="Predict potential disasters and mitigate risks with our cutting-edge predictive analytics." />
            <FeatureCard title="Automated Response" description="Implement automated response strategies to efficiently manage disaster situations." />
            <FeatureCard title="Comprehensive Reports" description="Generate detailed reports and insights for better decision-making and planning." />
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="relative h-screen w-full bg-gradient-to-b from-gray-200 to-gray-300 py-16 how-it-works">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">How It Works</h2>
          <p className="text-lg text-gray-700 mb-8 text-center">Understand the process behind our AI-Driven Disaster Management System.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <ProcessCard step="1" title="Data Collection" description="Gather data from various sources, including weather stations, satellites, and sensors." />
            <ProcessCard step="2" title="AI Analysis" description="Analyze collected data using AI algorithms to identify patterns and predict disasters." />
            <ProcessCard step="3" title="Real-Time Alerts" description="Send real-time alerts to relevant authorities and stakeholders for immediate action." />
            <ProcessCard step="4" title="Automated Response" description="Execute pre-defined response plans to mitigate the impact of the disaster." />
          </div>
        </div>
      </section>

      {/* Section 4: What Our Users Say */}
      <section className="relative h-screen w-full bg-gradient-to-b from-gray-300 to-gray-400 py-16 testimonials">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">What Our Users Say</h2>
          <p className="text-lg text-gray-700 mb-8 text-center">Hear from users who have benefited from our system.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <TestimonialCard name="Jane Doe" feedback="The AI-Driven Disaster Management System has revolutionized our emergency response strategies. Highly recommended!" />
            <TestimonialCard name="John Smith" feedback="Thanks to the predictive analytics, we were able to prepare in advance and minimize damage during recent floods." />
            <TestimonialCard name="Emily Davis" feedback="Real-time alerts have made a significant difference in our disaster management operations. A game-changer!" />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }} 
    className="bg-white p-6 rounded-lg shadow-lg w-80 hover:bg-gray-50 transition-colors duration-300"
  >
    <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </motion.div>
);

const ProcessCard = ({ step, title, description }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }} 
    className="bg-white p-6 rounded-lg shadow-lg w-80 hover:bg-gray-50 transition-colors duration-300"
  >
    <h3 className="text-2xl font-bold mb-2 text-gray-800">Step {step}: {title}</h3>
    <p className="text-gray-700">{description}</p>
  </motion.div>
);

const TestimonialCard = ({ name, feedback }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }} 
    className="bg-white p-6 rounded-lg shadow-lg w-80 hover:bg-gray-50 transition-colors duration-300"
  >
    <p className="text-gray-700 mb-4">"{feedback}"</p>
    <h4 className="text-lg font-bold text-gray-800">- {name}</h4>
  </motion.div>
);

export default Home;
