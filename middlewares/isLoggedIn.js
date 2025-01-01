const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");

module.exports = async function(req, res, next){
    if(!req.cookies.token){
        req.flash("error", "You need to login first");
        return res.redirect("/");
        // In the above three lines we are checking if the user has
        // a token in the cookies(i.e. he is logged in or not).
        //  If not, we are redirecting the user to the "/"
        //  and displaying an error message "You need to login first". 
    }

    try{
        let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
        let user = await userModel.findById({email: decoded.email}).select("-password");
        req.user = user;
        next();

        // In the above three lines
        // we are verifying the token with the secret key( decoded token which will be verified with the JWT_KEY.)
        //  Then we are finding the user with the email from the decoded token
        //  and storing it in the req.user variable.

        }
        catch(err){
            req.flash("error", "Invalid token");
            return res.redirect("/");
            }
            

    }

