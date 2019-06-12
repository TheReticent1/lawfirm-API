const mongoose = require("mongoose");

const appointment = mongoose.Schema({
  fname: { type: String, lowercase: true, required: true },
  lname: { type: String, lowercase: true, required: true },
  mobile: { type: Number, required: true },
  email: { type: String, lowercase: true, required: true },
  message: { type: String, lowercase: true },
  bookDate: { type: Date, default: Date.now()},
  appointDate: { type: String, default: null },
  timeSlot: { type: String, default: null },
  status: { type: String, default: null }
});

module.exports = mongoose.model("appointment", appointment);