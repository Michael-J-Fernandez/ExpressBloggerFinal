const User = require('../models/Users')

const loginUser = async (req, res) => {

  res.json({
    message: "Login user!",
    user: req.body
  });
}

const registerUser = async (req, res) => {

  res.json({
    message: "Register user!",
    user: req.body
  });
};

module.exports = { loginUser, registerUser };