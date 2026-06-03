const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Ensure CORS is required to let frontend communicate
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3002;

// MIDDLEWARE
app.use(cors()); // Allow your React dashboard on port 3000 to fetch data safely
app.use(express.json()); // Parses incoming JSON bodies automatically

// Import your existing models (Matching your structure image)
const { HoldingsModel } = require("./model/HoldingsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

// 1. SIGNUP ROUTE: Checks if user exists, otherwise registers them
app.post("/signup", async (req, res) => {
  const { email, username, password } = req.body;

  try {
    // Check if a user with this email already exists in MongoDB
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists with this email! Try logging in.",
      });
    }

    // If it's a new user, save them to the database
    const newUser = new UserModel({ email, username, password });
    await newUser.save();

    res
      .status(201)
      .json({ message: "Registration successful!", user: { username, email } });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Signup failed internally", error: error.message });
  }
});

// 2. LOGIN ROUTE: Verifies credentials
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "No account found with this email. Please sign up." });
    }

    // Verify password match
    if (user.password !== password) {
      return res
        .status(400)
        .json({ message: "Incorrect password! Please try again." });
    }

    res
      .status(200)
      .json({ message: "Login successful!", username: user.username });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Login failed internally", error: error.message });
  }
});

// 1. GET ROUTE: Fetch All Holdings to show in Dashboard Table
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.status(200).json(allHoldings); // Just send the data right to the frontend
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching holdings data", error: error.message });
  }
});

// 2. POST ROUTE: Receive New Trade Orders from Buy Action Window
app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode || "BUY",
    });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully in database!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to save order to database", error });
  }
});

// Connect to MongoDB using your environment variables
mongoose
  .connect(process.env.MONGO_URL || "your-mongodb-string-here")
  .then(() => console.log("DB Connected successfully!"))
  .catch((err) => console.log("DB Connection failed:", err));

app.listen(PORT, () => {
  console.log(`Backend server running smoothly on port ${PORT}`);
});
