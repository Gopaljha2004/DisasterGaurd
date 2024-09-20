import React from 'react';
import { useNavigate } from 'react-router-dom';
import govtimage from '../Images/Features/govt.png';
import user from '../Images/Features/user.png';

const Features = () => {
  const navigate = useNavigate();

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-16">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Disaster Guard</h2>
        <p className="text-lg text-gray-700 mt-2">Manage disaster response effectively through our panels.</p>
      </div>

      <div className="flex flex-wrap justify-evenly">
        <div
          className="cursor-pointer p-6 bg-white shadow-lg rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl w-80 md:w-96"
          onClick={() => handleCardClick('/user-panel')}
        >
          <div className="h-40 overflow-hidden rounded-t-lg mb-4">
            <img src={user} alt="User Panel" className="w-full h-full object-contain" />
          </div>
          <h3 className="text-2xl font-bold mb-2">User Panel</h3>
          <p className="text-gray-700">Access the user panel to manage your personal details and location.</p>
          <p className="text-blue-600 mt-4">LEARN MORE &rarr;</p>
        </div>

        <div
          className="cursor-pointer p-6 bg-white shadow-lg rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl w-80 md:w-96"
          onClick={() => handleCardClick('/government-panel')}
        >
          <div className="h-40 overflow-hidden rounded-t-lg mb-4">
            <img src={govtimage} alt="Government Panel" className="w-full h-full object-contain" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Government Panel</h3>
          <p className="text-gray-700">Access the government panel to manage department details and location.</p>
          <p className="text-blue-600 mt-4">LEARN MORE &rarr;</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
