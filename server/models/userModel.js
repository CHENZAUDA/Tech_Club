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
            required: true,
        },
        github: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: false,
        },
        messages: [{ type: Schema.Types.ObjectId, ref: "posts" }],
    },
    { timestamps: true }
);
const User = mongoose.model("users", userSchema);
module.exports =User;
