const express = require("express");
const router = express.Router();
const requireAuth = require('../middleware/authMiddle');
const apprenantController = require("../controllers/apprenantController");
// definition des routes
router.get("/", apprenantController.index);
router.get("/add", apprenantController.add);
router.post("/submitModule", apprenantController.submitModule);
router.get("/:id/edit", apprenantController.edit);
router.put("/:id/editModule", apprenantController.editModule);
router.get("/api_apprenant", apprenantController.apiapprenant);
router.delete("/:id/supprimer", apprenantController.supprimerModule);
router.get("/:id/voir", apprenantController.voirModule);
router.post("/login", apprenantController.login);
router.get("/profile", requireAuth, apprenantController.profile);
router.post("/demarrerCours", apprenantController.demarrerCours

);
// // route archive
// // In your routes file (e.g., domaineRoute.js)
router.post('/:id/toggleArchive', apprenantController.toggleArchive);

module.exports = router;
