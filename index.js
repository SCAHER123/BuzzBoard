const express = require("express");
const https=require('https');
const BuzzBoard = require("./controller/BuzzBoard");
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

app.use(bodyParser.json())
app.use("/orders", BuzzBoard);



mongoose.connect('mongodb://localhost:27017/BuzzBoard').then(() => { 
    console.log('Connected To DB') }).catch((err) => console.log(err));
app.listen(2000, () => {
    console.log("Server Is Running");
});