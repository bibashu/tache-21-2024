const express = require("express");
const router = express.Router();

const livraisonController = require("../controllers/LivraisonController");

// definition des routes
router.get("/", livraisonController.index);
// router.get("/submitLivraion", livraisonController.add);
router.post("/submitLivraion", livraisonController.submitLivraison);
router.post("/:id/accept", livraisonController.accept);
router.post("/:id/rejet", livraisonController.rejet);
router.get("/api_livraison", livraisonController.apiLivraison);

router.get("/:id/voir", livraisonController.voir);
// route archive
// In your routes file (e.g., domaineRoute.js)
// router.post('/:id/toggleArchive', livraisonController.toggleArchive);

module.exports = router;
