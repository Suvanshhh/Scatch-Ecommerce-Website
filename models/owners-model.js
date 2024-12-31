const mongoose = require("mongoose");

// Define the user schema
const ownerSchema = new mongoose.Schema({
  fullname: { type: String, minLength: 3, trim: true },
  email: { type: String },
  password: { type: String },
  products: { type: Array, default: [] },
  picture: { type: String },
  gstin: { type: String },
});

// Create and export the user model
module.exports = mongoose.model("owner", ownerSchema);
