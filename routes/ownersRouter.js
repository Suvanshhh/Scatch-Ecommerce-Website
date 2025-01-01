const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owners-model");

// Set NODE_ENV in memory if not already defined
process.env.NODE_ENV = process.env.NODE_ENV || "development";

console.log("Current NODE_ENV:", process.env.NODE_ENV);

// Handle POST request to create owner
router.post("/create", async (req, res) => {
  if (process.env.NODE_ENV === "development") {
    try {
      // Check if an owner already exists
      let owners = await ownerModel.find();
      if (owners.length > 0) {
        return res.status(500).send("You don't have permission to create a new owner.");
      }

      // Extract form data
      let { fullname, email, password } = req.body;

      // Create new owner
      let createdOwner = await ownerModel.create({
        fullname,
        email,
        password,
      });

      // Success response
      res.status(201).send(createdOwner);
    } catch (error) {
      console.error("Error creating owner:", error);
      res.status(500).send("An error occurred while creating the owner.");
    }
  } else {
    res.status(400).send("Owner creation is not allowed in this environment.");
  }
});

// Handle GET request to render the admin page
router.get("/admin", function (req, res) {
  // Pass any necessary data (e.g., flash messages) to the view
  let success = req.flash("success");
  res.render("createproducts",{success});
});

module.exports = router;
