const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const registerCoachSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImageUrl: { 
      type: String, 
      default: '/assets/img/profile.jpg' }  // Champ pour l'URL de l'image

  },
  {
    timestamps: true,
  }
);

// Hacher le mot de passe avant de sauvegarder le coach
registerCoachSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const RegisterCoach = mongoose.model("RegisterCoach", registerCoachSchema);
module.exports = RegisterCoach;
