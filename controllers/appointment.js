const appointment = require("../models/appointment");
const _ = require("lodash");

exports.bookAppointment=(req,res)=>{
  const Appointment = new appointment(req.body);
  Appointment.save((error,result)=>{
    if(error){
      res.status(400).json(error);
    }
    res.json(result);
  });
};

exports.appointmentById=(req,res,next,id)=>{
  appointment.findById(id).exec((error,data)=>{
    if(error){
      res.status(400).json({error:"Please try after some time"})
    }
    req.appointments = data;
    next();
  });
};

exports.updateAppointment=(req,res)=>{
  let appointments = req.appointments;
  appointments = _.extend(appointments,req.body);
  appointments.save((error,result)=>{
    if(error){
      res.status(400).json(error);
    }
    res.json(result);
  });
};