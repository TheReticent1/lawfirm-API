exports.errorNext=(req,res,next)=>{
  const error = req.validationErrors();
  if(error){
    const firstError = error.map(error=>error.msg)[0];
    return res.status(400).json({error:firstError});
  }
  next();
}

exports.signUpValidator=(req,res,next)=>{
  req.check("name","please enter your name").notEmpty();
  req.check("name","Name must be more than 3 characters").isLength({
    min:3,
    max:50
  })
  req.check("email","Please enter email").notEmpty();
  req.check("email","Please enter proper mail id").isEmail();
  req.check("password","Please enter your password").notEmpty();
  req.check("password","Password must be 6 or more character long").isLength({
    min:6,
    max:50
  });
  req.check("authKey","Please enter key to proceed").notEmpty();
  this.errorNext(req,res,next);
}

exports.signInValidator=(req,res,next)=>{
  req.check("email","Please enter proper mail id").isEmail();
  req.check("password","Please enter your password").notEmpty();
  req.check("password","Password must be 6 or more character long").isLength({
    min:6,
    max:50
  });
  this.errorNext(req,res,next);
}