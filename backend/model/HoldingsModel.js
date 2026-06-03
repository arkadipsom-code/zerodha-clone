const mongoose = require("mongoose");
const { Schema } = mongoose;

const HoldingsSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

// Pay close attention to how this is named and exported!
const HoldingsModel = mongoose.model("holding", HoldingsSchema);

module.exports = { HoldingsModel };
