require("dotenv").config();
const express = require("express");
const app = express();
const { connectDB, disconnectDB, prisma } = require('./DBConnection/dbConnection'); 
const userController =  require("./Controller/user")
const admin =  require("./Controller/admin")
const __port  = process.env.PORT || 4900;
const cors = require('cors');


app.use(express.json());
app.use(cors());

connectDB();


//for the user related services transfer the call on user controller
app.use("/user",userController)
app.use("/admin",admin)

//TESTING APP
app.get("", async (req, res) => {
    return res.send("Hi this from the server");
});


//if in case db got shutdonw
process.on('SIGINT', async () => {
    console.log('Server shutting down...');
    await disconnectDB();  // Disconnect the database
    process.exit();  // Exit the process
  });

app.listen(__port, () => {
    console.log(`Server is running now! Click on http://localhost:${__port}`);
});
