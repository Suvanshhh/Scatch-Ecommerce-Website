const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");

router.get("/", function(req, res){
    let error = req.flash("error");
    res.render("index", {error});
});

router.get("/shop",isLoggedIn, function(req, res){
    res.render("shop");
});

router.get("/logout", isLoggedIn, function (req, res) {
    res.cookie("token", "", { maxAge: 0 }); // Clear the token cookie
    res.redirect("/"); // Redirect to the home or login page
});

module.exports = router;
