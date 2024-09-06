const express = require("express");
const router = express.Router();

const QuizzController = require("../controllers/quizzController");

// definition des routes
router.get("/", QuizzController.index);
router.get("/add", QuizzController.add);
router.post("/submitModule", QuizzController.submitModule);
router.get("/:id/edit", QuizzController.edit);
router.put("/:id/editModule", QuizzController.editModule);
router.get("/api_quizz", QuizzController.apiModule);

router.delete("/:id/supprimer", QuizzController.supprimerModule);
// // route archive
// // In your routes file (e.g., domaineRoute.js)
router.post('/:id/toggleArchive', QuizzController.toggleArchive);
// pour géré les tentaive
router.post('/submitAttempt', QuizzController.submitAttempt);
module.exports = router;