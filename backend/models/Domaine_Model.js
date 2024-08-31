const mongoose = require("mongoose");

const domaineSchema = new mongoose.Schema(
  {
    nom_domaine: {
      type: String,
      required: true,
      unique:true,

    },
    description: {
      type: String,
    },
    archive: {
      type: Boolean,
      default: false
    },
  },
  {
    timestamps: true,
  }
);
const Domaine = mongoose.model("Domaine", domaineSchema)
module.exports = Domaine