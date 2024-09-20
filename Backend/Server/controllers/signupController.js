const bcrypt = require('bcrypt');
const Signup = require('../models/SignUp'); // Correct path to model

const signupController = async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;

  if (!name || !email || !password || !confirmpassword) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (password !== confirmpassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    // Check if the user already exists
    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new Signup({
      name,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = signupController;
