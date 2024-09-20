import React from 'react';
import { useNavigate } from 'react-router-dom';
import govtimage from '../Images/Features/govt.png';
import user from '../Images/Features/user.png';
import Footer from '../Components/Footer';

const Features = () => {
  const navigate = useNavigate();

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-16 max-w-screen-lg">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-800">Disaster Guard</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Seamlessly manage disaster response with user-friendly panels that allow you to control personal and government information efficiently.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* User Panel Card */}
        <div
          className="cursor-pointer p-8 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl max-w-md mx-auto"
          onClick={() => handleCardClick('/user-panel')}
        >
          <div className="h-40 mb-6">
            <img src={user} alt="User Panel" className="w-full h-full object-contain rounded-lg" />
          </div>
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">User Panel</h3>
          <p className="text-gray-600">
            Access the user panel to manage your personal details and location effectively during disasters.
          </p>
          <p className="text-blue-600 font-medium mt-6 hover:underline">LEARN MORE &rarr;</p>
        </div>

        {/* Government Panel Card */}
        <div
          className="cursor-pointer p-8 bg-white shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl max-w-md mx-auto"
          onClick={() => handleCardClick('/government-panel')}
        >
          <div className="h-40 mb-6">
            <img src={govtimage} alt="Government Panel" className="w-full h-full object-contain rounded-lg" />
          </div>
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Government Panel</h3>
          <p className="text-gray-600">
            Access the government panel to manage department details and oversee disaster response locations.
          </p>
          <p className="text-blue-600 font-medium mt-6 hover:underline">LEARN MORE &rarr;</p>
        </div>
      </div>

      {/* Optional Footer */}
    
    </div>
  );
};

export default Features;
