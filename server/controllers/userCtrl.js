const UserModel = require('../models/userModel')
const validateRegisterInput = require('./authorization/registerValidation')
const { SendEmails } = require('../utils/sendEmail')
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
        SendEmails(req, res);
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
    getUsers,
    getUserById
}



