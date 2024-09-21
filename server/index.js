const express = require("express");
const cors = require('cors');
const app = express();

//body parser
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:4000' || "http://3.110.88.130:4000" // Replace with your frontend's URL
  }));

require("dotenv").config
const PORT = 3000 || process.env.PORT

//routes
const singup = require("./routes/signup");
const UserNetworkStatus = require("./routes/UserNetworkStatus")
//mounting
app.use("/api/v1/" , singup);
app.use("/api/v1/" , UserNetworkStatus)



app.listen(PORT , () =>{
    console.log("Server has started on port")
})

const dbConnect = require("./config/database")
dbConnect();

app.get('/fetch-user-data', (req, res) => {
    User.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        console.error('Error fetching user data:', err);
        res.status(500).json({ error: 'Failed to fetch user data' });
      });
  });

app.post('/update-network-status', (req, res) => {
    const userId = req.body.userId;
    const onlineStatus = req.body.onlineStatus;
  
    UserNetworkStatus.findOneAndUpdate(
      { userId },
      { onlineStatus, lastUpdated: Date.now() },
      { upsert: true } // Create the document if it doesn't exist
    )
    .then(() => {
      res.json({ message: 'Network status updated successfully' });
    })
    .catch(err => {
      res.status(500).json({ error: 'Error updating network status' });
    });
  });