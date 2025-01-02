const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/generateToken");

module.exports.registerUser = async function (req, res) {
  try {
    let { email, fullname, password } = req.body;

    let user = await userModel.findOne({ email: email });
    if (user)
      {
        req.flash("error", "You already have an account, please Login.");
        return res.redirect("/");
      }

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) return res.send(err.messgae);
        else {
          // res.send(hash);
          let user = await userModel.create({
            email,
            password: hash,
            fullname,
          });

          let token = generateToken(user);
          res.cookie("token", token);

          res.send("User created successfully");
        }
      });
    });

    // let user = await userModel.create({
    //     email,
    //     password,
    //     fullname
    //     });
    // res.send(user);
  } catch (err) {
    res.send(err.message);
  }
};

module.exports.loginUser = async function (req, res) {
  try {
      const { email, password } = req.body;

      // Check if the user exists
      const user = await userModel.findOne({ email });
      if (!user) {
          req.flash("error", "Email or password incorrect");
          return res.redirect("/"); // Redirect to login page
      }

      // Compare the provided password with the hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          req.flash("error", "Email or password incorrect");
          return res.redirect("/"); // Redirect to login page
      }

      // Generate a token and set a cookie
      const token = generateToken(user);
      res.cookie("token", token);

      req.flash("success", "Login successful!");
      return res.redirect("/shop"); // Redirect to the /shop route after login
  } catch (err) {
      console.error(err);
      res.status(500).send("Error logging in: " + err.message);
  }
};

module.exports.logout = function(req,res){
    res.cookie("token", "");
    res.redirect("/");
}
