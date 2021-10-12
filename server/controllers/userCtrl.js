const UserModel = require('../models/userModel')
const validateRegisterInput = require('./authorization/registerValidation')
const bcrypt = require("bcrypt");
const { SendEmails } = require('../utils/sendEmail')
const Validator = require("validator");
const isEmpty = require("is-empty");


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
        const { firstName, lastName, email, phone, github, address, role, isApprove, userName } = req.body;
        const newUser = new UserModel({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            role: role,
            userName: userName,
            // password: req.body.password,
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

    })
}

const enterPassword = async (req, res) => {
    if (Validator.isEmpty(req.body.password)) {
        errors.password = "Password field is required";
    }
    if (!Validator.isLength(req.body.password, { min: 8, max: 20 })) {
        errors.password = "Password must be at least 8 characters";
    }
    SendEmails(req, res);
    //Password Encryption Before That it enters to the database
    bcrypt.genSalt(12, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(req.body.password, salt, async (err, hash) => {
            if (err) throw err;
            req.body.password = hash;
            console.log(req.body.password)
            try {
                const password = { $set: { password: req.body.password } };
                await UserModel.findByIdAndUpdate(req.body.id,
                    password,
                    { new: true },
                    (err, result) => {
                        console.log(result)
                        if (err) console.log(err)
                        res
                            .status(200)
                            .json({
                                success: true,
                                message: "send email",
                                data: result
                            })
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

const getUsers = async (req, res, next) => {
    try {
        const oneUser = await UserModel.find({})
        res.send(oneUser)
    } catch (error) {
        console.log(error)
    }
}
const getUserById = async (req, res, next) => {
    try {
        const oneUser = await UserModel.find({ _id: req.params.id })
        res.send(oneUser)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    newUser,
    enterPassword,
    getUsers,
    getUserById
}



