const Livraison = require("../models/livraison_Model");
const RegisterCoach = require("../models/RegisterCoach");
const Cours = require("../models/Cours_Model");
const Apprenant = require("../models/apprenant_Model");

exports.dashboard = async (req, res) => {
  const livraisons = await Livraison.find({}).populate("project_id").exec();
  const Coach = await RegisterCoach.find({});
  const cours = await Cours.find({});
  const apprenant = await Apprenant.find({});
  const totalCoach = Coach.length;
  const totalCours = cours.length;
  const totalApprenant = apprenant.length;
  var totalMax = 10;
  var totalPourcentage = (totalCoach / totalMax) * 100;
  var totalPourcentageApprenant = totalApprenant * 100/100;
  const total = livraisons.length;

  res.render("Layouts", {
    pages: "/dash",
    livraisons: livraisons,
    total,
    totalCoach,
    totalMax,
    totalPourcentage,
    totalCours,
    totalApprenant,
    totalPourcentageApprenant
  });
};
