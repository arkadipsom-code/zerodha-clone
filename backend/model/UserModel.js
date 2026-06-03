const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true }, // In production, we would hash this, but let's keep it simple for now!
  createdAt: { type: Date, default: Date.now },
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = { UserModel };
