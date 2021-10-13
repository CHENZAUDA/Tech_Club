const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true,
            default: 'User'
        },
        userName: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        github: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: false,
            default: ''
        },
        pref: {
            type: [
                {
                    option_1: {
                        type: String,
                        required: false
                    }
                },
                {
                    option_2: {
                        type: String,
                        required: false
                    }
                },
                {
                    option_3: {
                        type: String,
                        required: false
                    }
                }

            ]

        },
        isApprove: {
            type: Boolean,
            default: false
        },
        posts: [{ type: Schema.Types.ObjectId, ref: "posts" }]
    },
    { timestamps: true }
);
const User = mongoose.model("users", userSchema);
module.exports = User;
