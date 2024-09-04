const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// afficher la page de login
router.get('/login', (req, res) => {
    res.render('authentification/login');
});

// traiter la connexion de login
router.post('/login', authController.loginCoach);

module.exports = router;
