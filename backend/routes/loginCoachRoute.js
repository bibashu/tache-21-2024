const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const LoginCoach = require('../models/LoginCoach');

// Afficher la page de login
router.get('/login', (req, res) => {
    res.render('login');
});

// Traitement de la connexion
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).render('authentification/login', { error: 'Tous les champs sont obligatoires' });
    }
    
    try {
        console.log('Données reçues :', req.body);

        // Vérifier si l'email existe
        const coach = await LoginCoach.findOne({ email });
        if (!coach) {
            return res.status(400).render('authentification/login', { error: 'Email ou mot de passe incorrect' });
        }

        // Comparer le mot de passe
        const isMatch = await bcrypt.compare(password, coach.password);
        if (!isMatch) {
            return res.status(400).render('authentification/login', { error: 'Email ou mot de passe incorrect' });
        }

        // Créer un token JWT
        const token = jwt.sign({ id: coach._id }, 'votreCleSecrete', { expiresIn: '1h' });

        // Stocker le token dans un cookie
        res.cookie('token', token, { httpOnly: true });

        // Rediriger vers la page principale ou tableau de bord
        res.redirect('Layouts');
    } catch (err) {
        console.error(err);
        res.status(500).render('authentification/login', { error: 'Erreur du serveur, veuillez réessayer plus tard.' });
    }
});

module.exports = router;


