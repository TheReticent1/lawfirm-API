const { signUp, singIn } = require("../controllers/admin");
const { signUpValidator,signInValidator } = require("../validators/admin");
const express = require("express");

const router = express.Router();

router.post("/super/signup", signUpValidator, signUp);
router.post("/super/signin",signInValidator,singIn);

module.exports = router;
