// profilRoute.js

const express = require('express');
const router = express.Router();
const { verifyToken } = require('../controllers/authController');
const { getProfile } = require('../controllers/profilController');

// Route protégée pour obtenir les informations du profil
router.get('/profil', verifyToken, getProfile);

module.exports = router;
