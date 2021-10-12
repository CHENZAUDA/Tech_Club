const UserModel = require('../models/userModel')
const { validateRegisterInput } = require('./authorization/registerValidation')
const bcrypt = require("bcrypt");
const { SendEmails } = require('../utils/sendEmail')
const { nullError } = require("../utils/Errors");


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
    const { firstName, lastName, email, phone, github, address, role, isApprove } = req.body;
    const newUser = new UserModel({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        role: role,
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

}


const enterPassword = async (req, res) => {
    SendEmails(req, res);
    //Password Encryption Before That it enters to the database
    bcrypt.genSalt(12, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(req.body.password, salt, async (err, hash) => {
            if (err) throw err;
            req.body.password = hash;
            try {
            const userName = { $set: { userName: req.body.userName } }
            const password = { $set: { password: req.body.password } };
            const isApprove = { $set: { isApprove: true } };
            await UserModel.findByIdAndUpdate(req.body.id,
                password, isApprove, userName,
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
    newUser,
    getUsers,
    getUserById
}



