const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owners-model");

// Set NODE_ENV in memory if not already defined
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV === "development"){
    console.log("development")
    router.post("/create", (req, res) => {
        res.send("Owner created!");
    });
}




console.log("Current NODE_ENV:", process.env.NODE_ENV);

router.get("/", function(req, res){
    res.send("hey its working");
});




module.exports = router;

