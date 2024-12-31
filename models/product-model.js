// Product 
// image
// price
// discount
// name
// description
// quantity
// category
// rating
// reviews - Array
// seller - db
// sellerid - db
// productid - db
// bg color
// panel color
// text color

const mongoose = require('mongoose');

// Connect to MongoDB with better error handling
mongoose.connect("mongodb://127.0.0.1:27017/scatch")
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });

// Define the user schema
const productSchema = new mongoose.Schema({
    image: String,
    price: Number,
    discount: {Number, default: 0},
    name: String,
    description: String,
    quantity: Number,
    category: String,
    rating: Number,
    // reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    // seller: { type: mongoose.Schema.Types.ObjectId, ref: 'Seller' },
    // sellerid: String,
    // productid: String,
    bgcolor: String,
    panelcolor: String,
    textcolor: String
});

// Create and export the user model
module.exports = mongoose.model('product', productSchema);