const express = require("express");
const router = express.Router();

const domaineController = require("../controllers/domaineControllers");

// definition des routes
router.get("/", domaineController.index);
router.get("/add", domaineController.add);
router.post("/submitDomaine", domaineController.submitDomaine);
router.get("/:id/edit", domaineController.edit);
router.put("/:id/editDomaine", domaineController.submitEdit);
router.get("/api_domaine", domaineController.apiDomaine);

router.delete("/:id/supprimer", domaineController.supprimerDomaine);
// route archive
// In your routes file (e.g., domaineRoute.js)
router.post('/:id/toggleArchive', domaineController.toggleArchive);

module.exports = router;
