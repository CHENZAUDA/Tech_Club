const UserModel = require('../models/userModel')
const validateRegisterInput = require('./authorization/registerValidation')
const { SendEmails } = require('../utils/sendEmail')
<<<<<<< HEAD
const { nullError, isEmptyId } = require("../utils/Errors");
=======
>>>>>>> 58df41e4f07e3cc64e889e8b12f6d6e8f1dda960
const bcrypt = require('bcrypt')


const newUser = async (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
        return res
            .status(401)
            .json({
                success: false,
                message: "there is error with validation",
                errors: errors
            });
    }

    await UserModel.findOne({ userName: req.body.userName }, async (err, result) => {
        if (err) throw err;
        if (result) {
            return res
                .status(401)
                .json({
                    success: false,
                    message: "userName already exists",
                    data: result
                });
        }
        // SendEmails(req, res);
        //Password Encryption Before That it enters to the database
        bcrypt.genSalt(12, (err, salt) => {
            if (err) throw err;
            bcrypt.hash(req.body.password, salt, async (err, hash) => {
                if (err) throw err;
                req.body.password = hash;

                const { firstName, lastName, email, phone, github, address, role, isApprove, userName } = req.body;
                const newUser = new UserModel({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phone: phone,
                    role: role,
                    userName: userName,
                    password: req.body.password,
                    github: github,
                    address: address,
                    isApprove: isApprove
                });
                try {
                    await newUser.save()
                    res
                        .status(201)
                        .json({
                            success: true,
                            message: "add new user",
                            data: newUser
                        })
                }
                catch (err) {
                    res
                        .status(400)
                        .json({
                            success: false,
                            message: "failed crete user",
                            error: err.message
                        })
                }
            });
        });
    });
}


const getAllUsers = async (req, res) => {
    try {
        await UserModel.find({}, (err, result) => {
          if (err) throw err;
          nullError(result, res);
        });
      } catch (err) {
        res
          .status(500)
          .json({
            success: false,
            message: "get all users field",
            error: err.message
          });
      }

}
const getUserById = async (req, res) => {
    try {
        isEmptyId(req.body.id)
        await UserModel.findById(req.body.id, (err, result) => {
            if (err) throw err;
            nullError(result, res);
        });
    } catch (err) {
        res
            .status(400)
            .json({
                success: false,
                message: "get user by id field",
                error: err.message
            });
    }
}

const updateUser = async (req, res) => {
    isEmptyId(req.body.id)
    try {
        await UserModel.findByIdAndUpdate(req.body.id,
            { $set: req.body },
            { new: true },
            (err, result) => {
                if (err) throw err;
                nullError(result, res);
            }
        );
    }
    catch (err) {
        res
            .status(400)
            .json({
                success: false,
                message: "update event field",
                error: err.message
            });
    }
}

const prefUpdate = async (req, res) => {
    isEmptyId(req.body.id)
    try {
        await UserModel.findByIdAndUpdate(req.body.id,
            { $set: req.body.pref },
            { new: true },
            (err, result) => {
                if (err) throw err;
                nullError(result, res);
            }
        );
    }
    catch (err) {
        res
            .status(400)
            .json({
                success: false,
                message: "update event field",
                error: err.message
            });
    }
}

const deleteUser = async(req,res)=>{
    try {
        isEmptyId(req.params.id)
        await UserModel.findByIdAndDelete(req.params.id, (err, result) => {
          if (err) throw err;
          nullError(result, res);
    
        });
      } catch (err) {
        res
          .status(500)
          .json({
            success: false,
            message: "deleted user field",
            error: err.message
          });
      }
}
module.exports = {
    newUser,
<<<<<<< HEAD
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    prefUpdate
=======
    getUsers,
    getUserById
>>>>>>> 58df41e4f07e3cc64e889e8b12f6d6e8f1dda960
}



