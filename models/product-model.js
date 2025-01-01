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

// Define the product schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },  // Correct default definition for discount
  // description: { type: String },           // Uncommented and defined description
  // quantity: { type: Number, default: 0 },  // Added quantity with default value
  // category: { type: String },              // Added category
  // rating: { type: Number, default: 0 },    // Added rating
  // reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }], // Added reviews array (assuming Review is another model)
  // seller: { type: mongoose.Schema.Types.ObjectId, ref: 'Seller' },   // Assuming Seller is another model
  // sellerid: { type: String },              // Added sellerid
  // productid: { type: String },             // Added productid
  bgcolor: { type: String },               // Added bgcolor
  panelcolor: { type: String },            // Added panelcolor
  textcolor: { type: String }              // Added textcolor
});

// Create and export the user model
module.exports = mongoose.model('product', productSchema);