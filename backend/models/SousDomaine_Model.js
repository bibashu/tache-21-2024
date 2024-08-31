const mongoose = require("mongoose");

const sousDomaineSchema = new mongoose.Schema(
  {
    sousdomaine: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    archive: {
      type: Boolean,
      default: false
    },
    domaine: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Domaine",
    },
  },

  {
    timestamps: true,
  }
);
const Sousdomaine = mongoose.model("SousDomaine", sousDomaineSchema);
module.exports = Sousdomaine;
