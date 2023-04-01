const User = require("../models/usersModel");

const {
  generateToken,
  verifyToken,
  validatePassword,
} = require("../middleware/auth");

const getAllUsers = async (req, res, next) => {
  const allUsers = await User.find({});

  res.json({ users: allUsers });
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email.toLowerCase(), password);

    const token = generateToken(user.id);

    res
      .cookie("loginToken", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .json({
        success: true,
        message: "User logged in!",
        user: user.email,
        token,
      });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const registerUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const newUser = await User.register(email.toLowerCase(), password);

    const token = generateToken(newUser.id);

    res
      .cookie("loginToken", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .json({
        success: true,
        message: "New user registered!",
        user: newUser.email,
        token,
      });
  } catch (error) {
    res.json({ error: error.message });
  }
};

const logoutUser = (req, res, next) => {
  res
  .cookie("userToken", "", {
    httpOnly: true,
    maxAge: 1,
    secure: true,
    sameSite: "none",
  })
  .json({
    success: true,
    message: "User logged out!"
  });
}

module.exports = { getAllUsers, loginUser, registerUser, logoutUser };
