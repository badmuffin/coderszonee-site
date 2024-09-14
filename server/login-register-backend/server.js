const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = "mongodb://localhost:27017/authentication";
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// User Schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true }, // Changed to String
});

const User = mongoose.model("User", UserSchema);

// Signup Route
app.post("/api/signup", async (req, res) => {
  const { name, email, password, phone } = req.body;
  console.log("Signup request received:", req.body);

  // Input Validation
  if (!name || !email || !password || !phone) {
    return res.status(400).json({ msg: "Please enter all required fields." });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists." });
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create New User
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
    });

    // Save User to DB
    await newUser.save();
    console.log("New user created:", newUser);

    // Generate JWT Token
    const token = jwt.sign({ id: newUser._id }, "your_jwt_secret", {
      expiresIn: "1h",
    });

    res.status(201).json({
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
      },
    });
  } catch (err) {
    console.error("Error during signup:", err);
    res.status(500).json({ msg: "Server error during signup." });
  }
});

// Signin Route
app.post("/api/signin", async (req, res) => {
  const { email, password } = req.body;
  console.log("Signin request received:", req.body);

  // Input Validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all required fields." });
  }

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials." });
    }

    // Check Password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials." });
    }

    // Generate JWT Token
    const token = jwt.sign({ id: user._id }, "your_jwt_secret", {
      expiresIn: "2h",
    });

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (err) {
    console.error("Error during signin:", err);
    res.status(500).json({ msg: "Server error during signin." });
  }
});

// Protected Route Example
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "No token provided." });

  jwt.verify(token, "your_jwt_secret", (err, user) => {
    if (err) return res.status(403).json({ msg: "Invalid token." });
    req.user = user;
    next();
  });
};
app.get("/api/users", authenticateToken, async (req, res) => {
  try {
    // Fetch all users except the password field
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ msg: "Server error fetching users." });
  }
});

app.get("/api/profile", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ msg: "User not found." });
    res.status(200).json(user);
  } catch (err) {
    console.error("Error fetching profile:", err);
    res.status(500).json({ msg: "Server error fetching profile." });
  }
});

// Root Route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Authentication API");
});

// Start Server
// const PORT = process.env.PORT || 5002;
const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
