import express from "express";
import bodyParser from "body-parser"; // Corrected the casing


const app = express();
const port = 3000;

app.use(bodyParser.json());



app.get("/", (req, res) => {
    res.send("Hello Express");
});

app.post("/cars/brand", (req, res) => {
    const { name, brand } = req.body;
    console.log(name);
    console.log(brand);
    res.send("Submitted Successfully");
});

app.listen(port, () => {
    console.log(`Your server has started on port ${port}`);
});

// Connect to the database
const dbConnect = require("./config/database")
dbConnect();
