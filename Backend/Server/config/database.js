const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
        mongoose.connect(process.env.DATABASE_URL , {

        }).then(()=>{
            console.log("Database has connected")
        })
        .catch((err) =>{
            console.error(err);
            console.log("Issue while connecting database")
            process.exit(1)
        })
}

module.exports = dbConnect