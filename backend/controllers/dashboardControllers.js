
const Livraison = require('../models/livraison_Model')

exports.dashboard = async (req, res) => {
    const livraisons = await Livraison.find({}).populate("project_id").exec();
    const total = livraisons.length
    console.log(total);
    res.render("Layouts", {pages: '/dash', livraisons: livraisons, total});
  };