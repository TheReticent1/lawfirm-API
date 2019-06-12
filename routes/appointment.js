const express = require("express");
const { bookAppointment,updateAppointment,appointmentById } = require("../controllers/appointment");
const { bookAppointValidator,updateAppointValidator } = require("../validators/appointment");

const router = express.Router();

router.post("/appointment/book", bookAppointValidator, bookAppointment);
router.put("/appointment/:appointmentId",updateAppointValidator,updateAppointment);

router.param("appointmentId",appointmentById);
module.exports = router;