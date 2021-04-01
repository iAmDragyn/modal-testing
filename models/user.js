const mongoose = require("mongoose"),
    userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        dateOfBirth: Date,
        username: String,
        email: String,
        password: String,
        securityQuestion1: String,
        securityAnswer1: String,
        securityQuestion2: String,
        securityAnswer2: String,
        securityQuestion3: String,
        securityAnswer3: String,
    });

module.exports = mongoose.model("User", userSchema);