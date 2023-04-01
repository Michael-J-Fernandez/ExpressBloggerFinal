const User = require("../models/usersModel");

const { generateToken, verifyToken } = require("../middleware/auth");

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
    const newUser = await User.register(email.toLowerCase(), password);

    const token = generateToken(newUser.id);

    res.json({
      success: true,
      message: "New user registered!",
      user: newUser.email,
      token,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { getAllUsers, loginUser, registerUser };
