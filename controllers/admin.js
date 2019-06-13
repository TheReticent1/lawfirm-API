const admin = require("../models/admin");
const bcrypt = require("bcrypt-node");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

exports.signUp = (req, res) => {
  const { name, email, password, authKey } = req.body;
  admin
    .findOne({ email })
    .exec((error, result) => {
      if (result || error) {
        res.json("Already registered");
      } else {
        const hash = bcrypt.hashSync(password);
        const skey = bcrypt.hashSync(authKey);
        const pkey = process.env.REGISTER_KEY;
        const auth = bcrypt.compareSync(pkey, skey);
        if (auth) {
          const Admin = new admin({
            name,
            email,
            password: hash
          });
          Admin.save((error, result) => {
            if (error) {
              res.status(400).json(error);
            }
            res.json("Registered successfully");
          });
        } else {
          res.status(400).json("Auth failed");
        }
      }
    });
}

exports.singIn = (req, res) => {
  const { email, password } = req.body;
  admin
    .find({ email }, { email: 1, password: 1 })
    .exec((error, result) => {
      if (result.length >= 1) {
        const hash = result[0].password;
        const passKey = bcrypt.compareSync(password, hash);
        if (passKey) {
          admin
            .find({ email }, { name: 1, email: 1 })
            .exec()
            .then(data => {
              //token generation
              const token = jwt.sign(
                //payload
                {
                  email: data[0].email,
                  _id: data[0]._id
                },
                //screte key
                process.env.JWT_KEY,
                //expire
                {
                  expiresIn:"1h"
                }
              );
              return res.json({
                result:data,
                token:token
              });
            })
            .catch(error => {
              res.json(error);
            })
        } else {
          res.json("Invalid password");
        }
      } else if (error) {
        res.json(error);
      } else {
        res.json("invalid credentials");
      }
    });
};