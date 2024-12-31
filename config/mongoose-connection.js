const mongoose = require('mongoose');
const config = require("config");
const dbgr = require("debug")("development: mongoose");


// ("development: mongoose") -> Generally, we can write anything in the place of development but we wrote it because to show in which phase our project is in.
// we use debugger in our project to see the logs of our project in the console.
// Then we can replace console.log with dbgr

// Debugger is helpful because it will print nothing if the environment variable is not set
// i.e.Will not print anything unless DEBUG=development:mongoose is set

// When to Use debug vs console.log
// Use debug:
// For structured and manageable debugging in complex applications.
// When you need logs specific to a particular module or feature.
// In production environments where logs must be controlled and not clutter the console.
// Use console.log:
// For quick debugging or prototyping.
// When creating simple scripts or small applications without complex logging needs.
// For always-visible logs that don’t require suppression.


// Connect to MongoDB with better error handling
mongoose.connect(`${config.get("MONGODB_URI")}/scatch`)
  .then(() => {
    // console.log("Connected to MongoDB successfully!");
    dbgr("Connected to MongoDB successfully!");
  })
  .catch(err => {
    dbgr("MongoDB connection error:", err);
  });

  module.exports = mongoose.connection;