const express = require("express");
const cors = require('cors');
const app = express();

//body parser
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173' // Replace with your frontend's URL
  }));

require("dotenv").config
const PORT = 3000 || process.env.PORT

//routes
const singup = require("./routes/signup");
//mounting
app.use("/api/v1/" , singup);

app.listen(PORT , () =>{
    console.log("Server has started on port")
})

const dbConnect = require("./config/database")
dbConnect();