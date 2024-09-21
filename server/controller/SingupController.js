const mongoose = require("mongoose");
const Signup = require("../models/Signup");

exports.SignupController = async (req, res) => {
  try {
    const { name, phone, location, networkStatus } = req.body;  // Extract data from request
    
    // Create a new Signup instance
    const newUser = new Signup({
      name,
      phone,
      location: {
        lat: location.lat,  // Store latitude
        lng: location.lng   // Store longitude
      },
      networkStatus  // Store network status
    });

    // Save the user data in the database
    await newUser.save();

    // Return a success response
    return res.status(201).json({
      success: true,
      message: 'Your signup data has been saved to the database',
      signup: newUser  // Return the saved user data
    });
  } catch (error) {
    // Return an error response
    return res.status(500).json({
      success: false,
      message: 'There was an error saving the user data',
      error: error.message
    });
  }
};
