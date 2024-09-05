const LoginCoach = require('../models/LoginCoach');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Clé secrète avec crypto
const jwtSecret = crypto.randomBytes(32).toString('hex');

// une fonction du login
exports.loginCoach = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).render('authentification/login', { error: 'Tous les champs sont obligatoires' });
    }
    try {
        const coach = await LoginCoach.findOne({ email });
        if (!coach) {
            return res.status(400).render('authentification/login', { error: 'Email ou mot de passe incorrect' });
        }
        const isMatch = await bcrypt.compare(password, coach.password);
        if (!isMatch) {
            return res.status(400).render('authentification/login', { error: 'Email ou mot de passe incorrect' });
        }
        const token = jwt.sign({ id: coach._id }, jwtSecret, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/domaine');
    } catch (err) {
        console.error(err);
        res.status(500).render('authentification/login', { error: 'Erreur du serveur, veuillez réessayer plus tard.' });
    }
};


// une fonction du register
exports.registerCoach = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        let coach = await LoginCoach.findOne({ email });
        if (coach) {
            return res.status(400).render('authentification/register', { error: 'Cet email est déjà utilisé.' });
        }
        coach = await LoginCoach.findOne({ username });
        if (coach) {
            return res.status(400).render('authentification/register', { error: 'Ce nom d\'utilisateur est déjà utilisé.' });
        }
        coach = new LoginCoach({ username, email, password });
        await coach.save();
        res.redirect('/domaine');
    } catch (err) {
        console.error(err);
        res.status(500).render('authentification/register', { error: 'Erreur du serveur, veuillez réessayer plus tard.' });
    }
};

// Configurer Nodemailer pour Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'group.school.learning@gmail.com',  // Remplace par ton adresse Gmail
        pass: 'vfysdhgqfyubezef'  // Mot de passe d'application généré par google
    }
});



// Fonction de d'envoi de mail du mot de passe oublié
exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const coach = await LoginCoach.findOne({ email });
        if (!coach) {
            return res.status(400).render('authentification/forgotPassword', { error: 'Aucun compte trouvé avec cet email.' });
        }

        // Générer un token de réinitialisation
        const resetToken = jwt.sign({ id: coach._id }, jwtSecret, { expiresIn: '15m' });

        // URL de réinitialisation
        const resetURL = `http://localhost:5000/authentification/resetPassword/${resetToken}`;

        // Configurer l'email
        const mailOptions = {
            name:'E-Learning',
            from: 'no-reply@e-learning.com',
            to: email,
            subject: 'Réinitialisation de mot de passe',
            text: `Vous avez demandé une réinitialisation de mot de passe. Cliquez sur le lien suivant pour réinitialiser votre mot de passe : ${resetURL}`
        };
        console.log(mailOptions);
        
        // Envoyer l'email via Gmail
        await transporter.sendMail(mailOptions);

        res.render('authentification/forgotPassword', { message: 'Un email de réinitialisation a été envoyé.' });
    } catch (err) {
        console.error(err);
        res.status(500).render('authentification/forgotPassword', { error: 'Erreur du serveur, veuillez réessayer plus tard.' });
    }
};

// Fonction de réinitialisation du mot de passe
exports.resetPassword = async (req, res) => {
    const { token } = req.params;
    try {
        // Vérifier la validité du token
        const decoded = jwt.verify(token, jwtSecret);

        // Si le token est valide, afficher la page de réinitialisation
        res.render('authentification/resetPassword', { token });
    } catch (err) {
        console.error(err);
        return res.status(400).render('authentification/forgotPassword', { error: 'Le lien de réinitialisation est invalide ou a expiré.' });
    }
}

// Page de réinitialisation du mot de passe


// mis en place du nouveau password
exports.postResetPassword = async (req, res) => {
    const { token } = req.params;
    const { password, confirmPassword } = req.body;

    // Vérifier que les mots de passe correspondent
    if (password !== confirmPassword) {
        return res.status(400).render('authentification/resetPassword', { error: 'Les mots de passe ne correspondent pas.', token });
    }

    try {
        // Vérifier la validité du token
        const decoded = jwt.verify(token, jwtSecret);

        // Rechercher le coach par ID
        const coach = await LoginCoach.findById(decoded.id);
        if (!coach) {
            return res.status(400).render('authentification/resetPassword', { error: 'Utilisateur non trouvé.', token });
        }

        // Hasher le nouveau mot de passe
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Mettre à jour le mot de passe dans la base de données
        coach.password = hashedPassword;
        await coach.save();

        res.redirect('/authentification/login');  // Rediriger vers la page de connexion après succès
    } catch (err) {
        console.error(err);
        res.status(500).render('authentification/resetPassword', { error: 'Erreur du serveur, veuillez réessayer plus tard.', token });
    }
};
