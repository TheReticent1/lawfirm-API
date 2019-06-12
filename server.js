const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//invoke express
let app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.listen(3000,()=>{
  console.log("server running on port 3000");
})