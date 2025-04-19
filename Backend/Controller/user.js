const express = require("express");
const router = express.Router();
const { prisma } = require("../DBConnection/dbConnection");
const {generateToken} =  require("./../Auth/jwt")

router.post("/newuser", async (req, res) => {
  const { name, email, mobile, password } = req.body;

  try {
    // Checking if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    // Creating the new user
    const newUser = await prisma.user.create({
      data: { name, email, mobile, password },
    });
    const token = generateToken(newUser);
    res.status(201).json({
        "token" : token,
        "user" : newUser
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ error: "Failed to create user", details: error.message });
  }
});

//user login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
console.log(email,req.body);

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email, password },
    });
console.log(existingUser,existingUser != null);

    if (existingUser != null) {
   { const token = generateToken(existingUser);
    console.log(token,"token");
    
    res.status(200).json({
        "token" : token,
        "user": existingUser
    });}
    } else {
      return res.status(404).json({ message: "no user found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to get user", details: error.message });
  }
});

module.exports = router;
