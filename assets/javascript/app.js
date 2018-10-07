const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

//This app is running on express server
const app = express();

//bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(3000, () => console.log("Server started"));