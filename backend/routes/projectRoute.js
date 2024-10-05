const express = require("express");
const router = express.Router();

const projectController = require("../controllers/projectController");

// definition des routes
router.get("/", projectController.index);
router.get("/add", projectController.add);
router.post("/submitModule", projectController.submitModule);
router.get("/:id/edit", projectController.edit);
router.put("/:id/editModule", projectController.editModule);
// router.get("/api_project", projectController.apiproject);
router.get("/api_project/:studentId", projectController.apiproject);
router.delete("/:id/supprimer", projectController.supprimerModule);
router.get("/:id/voir", projectController.voirModule);
// // route archive
// // In your routes file (e.g., domaineRoute.js)
router.post('/:id/toggleArchive', projectController.toggleArchive);

module.exports = router;
