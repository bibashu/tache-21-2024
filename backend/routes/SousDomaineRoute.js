const express = require("express");
const router = express.Router();

const sousDomaineController = require("../controllers/sousDomaineController");

// definition des routes
router.get("/", sousDomaineController.index);
router.get("/add", sousDomaineController.add);
router.post("/submitSousDomaine", sousDomaineController.submitSousDomaine);
router.get("/:id/edit", sousDomaineController.edit);
router.put("/:id/editModule", sousDomaineController.editModule);
router.get("/api_sousdomaine", sousDomaineController.apiSousDomaine);

router.delete("/:id/supprimer", sousDomaineController.supprimerSousDomaine);
// route archive
// In your routes file (e.g., domaineRoute.js)
router.post('/:id/toggleArchive', sousDomaineController.toggleArchive);

module.exports = router;
