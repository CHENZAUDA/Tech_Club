const UserModel = require('../models/userModel')

const newUser = async (req,res)=>{
  const {firstName,lastName,email,phone,github,address,role}= req.body;
  const newUser = new UserModel({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    role:role,
    // password: req.body.password,
    github: github,
    address: address
  });
  try{
      await newUser.save();
      res
      .status(201)
      .json({
          success:true,
          message:"add new user",
          data:newUser
      })
  }
  catch(err){
    res
    .status(400)
    .json({
        success:false,
        message:"failed crete user",
        error:err.message
    })
  }
}

module.exports= {newUser}