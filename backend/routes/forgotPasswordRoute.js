const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Afficher la page "Mot de passe oublié"
router.get('/forgotPassword', (req, res) => {
    res.render('authentification/forgotPassword');
});

// Traiter la demande de réinitialisation
router.post('/forgotPassword', authController.forgotPassword);

// Afficher la page de réinitialisation du mot de passe
router.get('/resetPassword/:token', authController.resetPassword);

// Traiter la réinitialisation du mot de passe
router.post('/resetPassword/:token', authController.postResetPassword);


module.exports = router;
