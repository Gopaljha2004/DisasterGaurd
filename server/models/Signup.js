const mongoose = require("mongoose");

const SignupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    location: {
        lat: {
            type: Number,
            required: true,
        },
        lng: {
            type: Number,
            required: true,
        }
    },
    networkStatus: {
        type: String,
        required: true,
        enum: ['online', 'offline'], // Ensure it is either online or offline
    }
});

module.exports = mongoose.model("Signup", SignupSchema);
