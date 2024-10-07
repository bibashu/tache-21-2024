const express = require("express");
const router = express.Router();

const coursController = require("../controllers/CoursController");

// definition des routes
router.get("/", coursController.index);
router.get("/add", coursController.add);
router.post("/submitModule", coursController.submitModule);
router.get("/:id/edit", coursController.edit);
router.put("/:id/editModule", coursController.editModule);
router.get("/api_cours", coursController.apiCours);


router.delete("/:id/supprimer", coursController.supprimerModule);
// // route archive
// // In your routes file (e.g., domaineRoute.js)
router.post('/:id/toggleArchive', coursController.toggleArchive);

module.exports = router;
