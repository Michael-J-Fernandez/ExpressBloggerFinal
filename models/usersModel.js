const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const { validatePassword } = require("../middleware/auth");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      default: uuidv4,
    },
  },
  { timestamps: true, strictQuery: true }
);

userSchema.statics.register = async function (email, password) {
  const userExists = await this.findOne({ email });

  if (userExists) {
    throw Error("Email already exists.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await this.create({ email, password: hashedPassword });

  return newUser;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Email and password must be submitted.");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("User does not exist.");
  }

  const match = validatePassword(password, user.password);

  if (!match) {
    throw Error("Incorrect password.");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
