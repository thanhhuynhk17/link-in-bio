require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const profilesRoute = require("./routes/profiles");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5001;

console.log('node env',process.env.NODE_ENV);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan());

app.use('/profiles',profilesRoute);

app.listen(PORT, ()=>{
    connectDB().then(()=>{
        console.log(`Running on ${PORT}`);
    })
});