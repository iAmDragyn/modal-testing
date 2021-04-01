const User = require("../models/user");

exports.postedSignUpForm = (req, res) => {
    res.render("index")
}

exports.postedLogInForm = (req, res) => {
    res.render("index")
}

// retrives the posted data from the req body and saves a new user
exports.saveUser = (req, res) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        zipCode: req.body.zipCode
    })
    newUser.save()
        .then(() => {
            res.render("thanks"); // make a modal to let them know they're signed up?
        })
        .catch(error => {
            res.send(error);
        })
};