const mongoose = require("mongoose");

const coursSchema = new mongoose.Schema(
  {
    nom_cours: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    duree:{
        type: String,
        required: true,
    },
    archive: {
      type: Boolean,
      default: false
    },
    sous_domaine: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SousDomaine",
    },
  },

  {
    timestamps: true,
  }
);
const Cours = mongoose.model("Cours", coursSchema);
module.exports = Cours;
