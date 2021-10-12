const UserModel = require('../models/userModel')
const { adminVerified } = require('../utils/sendEmail')
const bcrypt = require("bcrypt");
const { nullError, isEmptyId, nullVariable } = require("../utils/Errors");


const newUser = async (req, res) => {
    adminVerified(req, res)
    const { firstName, lastName, email, phone, github, address, role, userName,isApprove } = req.body;
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
        isApprove:isApprove
    });
    try {
        await newUser.save();
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
}


const enterPassword = async (req, res) => {
    bcrypt.genSalt(12, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(req.body.password, salt, async (err, hash) => {
            if (err) throw err;
            req.body.password = hash;
            try {
                const password = { $set:{password:req.body.password}};
                const isApprove = { $set: {isApprove:true} };
                await UserModel.findByIdAndUpdate(req.body.id,
                    password,isApprove,
                    { new: true },
                    (err, result) => {
                        if (err) throw err
                        nullError(result, res);
                    })
            }
            catch (err) {
                res
                    .status(400)
                    .json({
                        success: false,
                        message: "Enter password field",
                        error: err.message
                    });
            }
        })


    })
}

module.exports = { newUser, enterPassword }