const express = require("express");

const router = express.Router();
const {
  getAllUsers,
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/usersController");

router.get("/", getAllUsers);

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

module.exports = router;
