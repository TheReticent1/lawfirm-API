"use strict"
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser:true,
    useCreateIndex:true
  },
  ()=>console.log("connection established")
);

module.exports={mongoose};