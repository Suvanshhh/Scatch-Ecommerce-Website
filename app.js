const express = require("express");
const app = express();
const db = require("./config/mongoose-connection");
const cookieParser = require("cookie-parser");
const ownersRouter = require("./routes/ownersRouter");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

// Set the view engine to EJS
app.set("view engine", "ejs");
// Middleware to serve static files (if needed)
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// // Route to render the home page
// app.get("/", (req, res) => {
//     console.log("Hello");
//     res.send("Hey");
// });

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);


// Handle 404 - Route not found
app.use((req, res) => {
    res.status(404).send("Route not found!");
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
