const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");

router.get("/", function (req, res) {
  let error = req.flash("error");
  res.render("index", { error });
});

router.get("/shop", isLoggedIn, async function (req, res) {
  try {
    let products = await productModel.find(); // Fetch all products from DB

    // Ensure products is an array, even if empty
    if (!products) {
      products = [];
    }

    // console.log("Products fetched successfully:", products); // Debugging log
    res.render("shop", { products }); // Render the shop view and pass the products
  } catch (err) {
    console.error("Error fetching products:", err);
    res.render("shop", { products: [] }); // Pass an empty array if error occurs
  }
});

router.get("/addtocart/:productid", isLoggedIn, async function (req, res) {
  let user = req.user
    ? await userModel.findOne({ email: req.user.email })
    : null;
  if (!user) {
    // Handle the case where user is not found or not logged in
    return res.redirect("/login"); // Or send a proper response
  }
  user.cart.push(req.params.productid);
  await user.save();
  res.redirect("/shop");
});

router.get("/cart", isLoggedIn, async function (req, res) {
  let user = await userModel
    .findOne({ email: req.user.email })
    .populate("cart");

  res.render("cart", { user });
});

router.get("/logout", isLoggedIn, function (req, res) {
  res.cookie("token", "", { maxAge: 0 }); // Clear the token cookie
  res.redirect("/"); // Redirect to the home or login page
});

module.exports = router;
