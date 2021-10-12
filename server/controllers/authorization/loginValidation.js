const Validator = require("validator");
const isEmpty = require("is-empty");

const validateLoginInput = (data) => {
    let errors = {};

    data.userName = !isEmpty(data.userName) ? data.userName : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if (Validator.isEmpty(data.userName)) {
        errors.userName = "First Name field is required";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
};

module.exports = {
    validateLoginInput
};
