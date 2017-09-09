const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");

const PORT = process.env.PORT || 3001;
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
mongoose.Promise = bluebird;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var db = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

//mongodb://heroku_c6lggq5r:4nlrkoc0rughagu6iq8fn95ldq@ds129434.mlab.com:29434/heroku_c6lggq5r

// Connect mongoose to our database
mongoose.connect(db, function(error) {
    // Log any errors connecting with mongoose
    if (error) {
        console.error(error);
    }
    // Or log a success message
    else {
        console.log("mongoose connection is successful");
    }
});

// Serve up static assets if in production (running on Heroku)
console.log('node env', process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
} else {
    app.use(express.static(__dirname + "/public"));
}
app.use("/", routes);


app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});