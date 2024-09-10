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
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    archive: {
        type: Boolean,
        default: false,
      },
    // Référence à plusieurs cours
    cours: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cours", // Nom du modèle auquel vous faites référence
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Apprenant = mongoose.model("Apprenant", apprenantSchema);
module.exports = Apprenant;
