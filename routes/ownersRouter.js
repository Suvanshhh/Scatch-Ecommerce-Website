const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owners-model");

// Set NODE_ENV in memory if not already defined
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

router.get("/", function(req, res){
    res.send("hey its working");
})

if(process.env.NODE_ENV == "development"){
router.post("/create", function(req,res){
    res.send("hey it's working!")
})
}

module.exports = router;

