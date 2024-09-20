import React from 'react';

const CardData = () => {
  let data = [
    {
      "disasterType": "Earthquake",
      "location": "San Francisco, USA",
      "date": "2023-05-10",
      "time": "14:35:00",
      "magnitude": 7.8,
      "casualties": 250,
      "injuries": 1200,
      "description": "A severe earthquake struck the San Francisco Bay Area causing significant damage to buildings and infrastructure.",
    },
    {
      "disasterType": "Flood",
      "location": "Jakarta, Indonesia",
      "date": "2023-02-27",
      "time": "03:15:00",
      "rainfall": "300 mm",
      "evacuations": 5000,
      "casualties": 30,
      "description": "Heavy monsoon rains caused severe flooding in several parts of Jakarta, displacing thousands of residents.",
    },
    {
      "disasterType": "Hurricane",
      "location": "Miami, USA",
      "date": "2023-09-18",
      "time": "21:00:00",
      "category": 4,
      "windSpeed": "140 mph",
      "evacuations": 200000,
      "casualties": 45,
      "injuries": 300,
      "description": "Hurricane Olivia made landfall in Miami, causing widespread destruction with strong winds and heavy rainfall.",
    },
  ];

  return (
    <div className="flex mt-5  justify-center gap-6 p-6 ">
      {data.map((item, index) => (
        <div key={index} className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-md p-6 w-full max-w-sm transform transition duration-200 hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-2 text-white">{item.disasterType}</h2>
          <p className="text-white"><strong>Location:</strong> {item.location}</p>
          <p className="text-white"><strong>Date:</strong> {item.date}</p>
          <p className="text-white"><strong>Time:</strong> {item.time}</p>
          {item.magnitude && <p className="text-white"><strong>Magnitude:</strong> {item.magnitude}</p>}
          {item.rainfall && <p className="text-white"><strong>Rainfall:</strong> {item.rainfall}</p>}
          {item.category && <p className="text-white"><strong>Category:</strong> {item.category}</p>}
          {item.windSpeed && <p className="text-white"><strong>Wind Speed:</strong> {item.windSpeed}</p>}
          {item.affectedArea && <p className="text-white"><strong>Affected Area:</strong> {item.affectedArea}</p>}
          {item.evacuations && <p className="text-white"><strong>Evacuations:</strong> {item.evacuations}</p>}
          <p className="text-white"><strong>Casualties:</strong> {item.casualties}</p>
          <p className="text-white"><strong>Injuries:</strong> {item.injuries}</p>
          <p className="text-white text-sm mt-2">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CardData;
