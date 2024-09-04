const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Afficher la page "Mot de passe oublié"
router.get('/forgot-password', (req, res) => {
    res.render('authentification/forgotPassword');
});

// Traiter la demande de réinitialisation
router.post('/forgot-password', authController.forgotPassword);

module.exports = router;
