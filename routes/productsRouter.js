const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");

router.post("/create", upload.single("image"), async function(req, res) {
    try {
        let { image, price, discount, name, bgcolor, panelcolor, textcolor } = req.body;

        let product = await productModel.create({
            image: req.file.buffer,
            price,
            discount,
            name,
            bgcolor,
            panelcolor,
            textcolor,
        });
        // res.send(product)
        req.flash("success", "Product created successfully.");
        res.redirect("/owners/admin");  // Redirect to an admin page or wherever necessary
    } catch (err) {
        res.send(err.message);  // Properly catch and handle the error
    }
});

// router.get("/shop", async (req, res) => {
//     try {
//         // Fetch all products from the database
//         const products = await productModel.find();

//         // Render shop.ejs and pass products as a variable
//         res.render("shop", { products });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Error fetching products");
//     }
// });


module.exports = router;
