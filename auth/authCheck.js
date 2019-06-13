const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

//middleware to verify key
module.exports=(req,res,next)=>{
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verify = jwt.verify(token, process.env.JWT_KEY);
    req.headers = verify;
    next();
  } catch (error) {
    res.status(400).json("Authentication failed");
  }
};