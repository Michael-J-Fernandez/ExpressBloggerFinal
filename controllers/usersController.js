const User = require("../models/Users");

const getAllUsers = async (req, res, next) => {
  const allUsers = await User.find({});

  res.json({ users: allUsers });
};

const loginUser = async (req, res, next) => {
  res.json({
    message: "Login user!",
    user: req.body,
  });
};

const registerUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const newUser = await User.register(email, password);

    res.json({
      message: "New user registered!",
      user: newUser,
    });
  } catch (error) {
    res.json({ error: error.message })
  }
};

module.exports = { getAllUsers, loginUser, registerUser };
