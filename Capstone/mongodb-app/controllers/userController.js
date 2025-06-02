// controllers/userController.js
const User = require("../models/user");

// Signup without hashing
const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Save user with plain password (not secure)
    const user = await User.create({ email, password });

    res.status(201).json({ message: "User created", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Signin without hashing
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // Direct password comparison (not secure)
    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  register,
  signin,
};
