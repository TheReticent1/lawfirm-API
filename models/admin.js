const mongoose = require("mongoose");

const admin = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    regDate: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("admin", admin);