const express = require("express");
const router = express.Router();

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
// // route archive
// // In your routes file (e.g., domaineRoute.js)
router.post('/:id/toggleArchive', apprenantController.toggleArchive);

module.exports = router;
