"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var cookie = require("cookie-parser");
var engine = require("ejs-mate");
var routes_1 = require("./Routes/routes");
var users_1 = require("./Routes/users");
var app = express();
var PORT = process.env.PORT || 80;
app.engine("ejs", engine);
app.use(cookie());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public"));
app.use("/", routes_1["default"]);
app.use("/users", users_1["default"]);
app.set("view engine", "ejs");
app.listen(PORT, function () {
    console.log("Listening on port: " + PORT);
});
