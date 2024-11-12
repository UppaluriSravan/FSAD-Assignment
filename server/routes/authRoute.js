const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

router.post("/login", async (req, res) => {
  const {email, password} = req.body;

  try {
    const user = await User.findOne({email});
    if (!user) {
      return res.status(400).send({error: "Invalid email or password."});
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send({error: "Invalid email or password."});
    }

    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.send({token});
  } catch (error) {
    res.status(500).send({error: "Something went wrong."});
  }
});

module.exports = router;
