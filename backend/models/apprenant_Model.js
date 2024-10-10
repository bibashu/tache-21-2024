const mongoose = require("mongoose");

const apprenantSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    coursDemarres: {
      type: [String], 
      default: [], 
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
    role: { type: String, default: "apprenant" },
    archive: {
      type: Boolean,
      default: false,
    },
    // Référence à plusieurs cours
    cours: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cours", 
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Apprenant = mongoose.model("Apprenant", apprenantSchema);
module.exports = Apprenant;
