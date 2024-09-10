// middleware/globalData.js
const Livraison = require('../models/livraison_Model'); // Assurez-vous que le chemin est correct

const globalDataMiddleware = async (req, res, next) => {
    try {
        const livraisons = await Livraison.find({}).populate("project_id").exec();
        res.locals.livraisons = livraisons;
        res.locals.total = livraisons.length;


        next();
    } catch (error) {
        next(error); // Passer les erreurs au gestionnaire d'erreurs
    }
};

module.exports = globalDataMiddleware;
