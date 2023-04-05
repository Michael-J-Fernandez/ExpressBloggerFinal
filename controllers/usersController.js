const User = require("../models/usersModel");

const { generateToken } = require("../middleware/auth");

const getAllUsers = async (req, res, next) => {
  const allUsers = await User.find({});

  res.json({ users: allUsers });
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email.toLowerCase(), password);

    const token = generateToken(user.id);

    res.json({
      success: true,
      message: "User logged in!",
      name: user.fName,
      token,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const registerUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const newUser = await User.register(req.body);

    const token = generateToken(newUser.id);

    res.json({
      success: true,
      message: "New user registered!",
      name: newUser.fName,
      token,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { getAllUsers, loginUser, registerUser };
