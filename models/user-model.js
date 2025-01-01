// userModel
// full name - String
// email - String
// password - String
// cart - Array
// isadmin - Boolean
// orders - Array
// contact - Number
// picture - db

const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    cart: { type: Array , default: []},
    orders: { type: Array , default: [] },
    contact: { type: Number },
    picture: { type: String }
});

// Create and export the user model
module.exports = mongoose.model('user', userSchema);



