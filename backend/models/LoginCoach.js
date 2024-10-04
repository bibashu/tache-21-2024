const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const loginSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: { type: String, default: "coach" },
  },
  {
    timestamps: true,
  }
);

// Hacher le mot de passe avant de sauvegarder le coach
loginSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const LoginCoach = mongoose.model("LoginCoach", loginSchema);
module.exports = LoginCoach;
