const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboardControllers");

// definition des routes
router.get("/", dashboardController.dashboard);

module.exports = router;
