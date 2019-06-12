exports.errorNext=(req,res,next)=>{
  const error = req.validationErrors();
  if(error){
    const firstError = error.map(error=>error.msg)[0];
    return res.status(400).json({error:firstError});
  }
  next();
}

exports.bookAppointValidator=(req,res,next)=>{
  req.check("fname","Please enter first name").notEmpty();
  req.check("fname","First name must be 3 characters or more").isLength({
    min:3,
    max:30
  });
  req.check("lname","Please enter last name").notEmpty();
  req.check("lname","last name must be 3 characters or more").isLength({
    min:3,
    max:30
  });
  req.check("mobile","Please enter mobile number").notEmpty();
  req.check("mobile","Please enter proper mobile number").isLength({min:10,max:10});
  req.check("email","Please enter email id").notEmpty();
  req.check("email","Please enter proper mail id").isEmail();

  this.errorNext(req,res,next);
}

exports.updateAppointValidator=(req,res,next)=>{
  req.check("appointDate","Please assign appointment date").notEmpty();
  req.check("timeSlot","Please assign time slot of appointment").notEmpty();
  req.check("status","Please enter status as 'confirmed'").notEmpty();
  this.errorNext(req,res,next);
}