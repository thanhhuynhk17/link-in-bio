require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const profilesRoute = require("./routes/profiles");

mongoose
    .connect("mongodb://mongo-db:27017/ProfileCollections")
    .then(() => console.log("Connected"))
    .catch(() => console.log("Not connected"));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan());

app.use(profilesRoute);

app.listen(5000, console.log("Running on 5000"));