const express = require("express");
const router = express.Router();
const multer = require("multer");

// Configurer multer pour stocker les fichiers uploadés dans le dossier "uploads/"
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); 
  }
});

const upload = multer({ storage: storage }); 

const livraisonController = require("../controllers/LivraisonController");

// Route pour soumettre une livraison avec upload de fichiers
router.post("/submitLivraison", upload.array("screenshots"), livraisonController.submitLivraison);

// Définition des autres routes
router.get("/", livraisonController.index);
router.post("/:id/accept", livraisonController.accept);
router.post("/:id/rejet", livraisonController.rejet);
router.get("/api_livraison", livraisonController.apiLivraison);
router.get("/:id/voir", livraisonController.voir);

module.exports = router;
