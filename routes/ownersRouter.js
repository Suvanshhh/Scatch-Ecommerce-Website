const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owners-model");

// Set NODE_ENV in memory if not already defined
process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "development") {
  console.log("development");
  router.post("/create", async (req, res) => {
    try {
      let owners = await ownerModel.find();
      if (owners.length > 0) {
        return res
          .status(500) // Correctly set the status code
          .send("You don't have permission to create a new owner.");
      }

      let { fullname, email, password } = req.body;

      let createdOwner = await ownerModel.create({
        fullname,
        email,
        password,
      });

      res.status(201).send(createdOwner);
    } catch (error) {
      console.error("Error creating owner:", error);
      res.status(500).send("An error occurred while creating the owner.");
    }
  });
}

console.log("Current NODE_ENV:", process.env.NODE_ENV);

router.get("/", function (req, res) {
  res.send("hey its working");
});

module.exports = router;
