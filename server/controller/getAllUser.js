const { Signup } = require("../models/Signup");

exports.getAllUser = async (req, res) => {
    try {
        const users = await Signup.find({name , phone});  // Fetch all users from the database

        return res.json({
            success: true,
            message: "Fetched all user data",
            users,  // Return the fetched users
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error while fetching user data",
            error: err.message,
        });
    }
};
