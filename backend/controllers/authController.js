const LoginCoach = require('../models/LoginCoach');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

// Clé secrète avec crypto
const jwtSecret = process.env.JWT_SECRET;

// une fonction du login

exports.loginCoach = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Tous les champs sont obligatoires' });
    }
    try {
        const coach = await LoginCoach.findOne({ email });
        if (!coach) {
            return res.status(400).json({ error: 'Email ou mot de passe incorrect' });
        }

        const isMatch = await bcrypt.compare(password, coach.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Email ou mot de passe incorrect' });
        }

        const token = jwt.sign({ id: coach._id }, jwtSecret, { expiresIn: '1h' });

        // Renvoie le token pour stockage dans localStorage
        return res.status(200).json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur du serveur, veuillez réessayer plus tard.' });
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
            name: 'E-Learning',
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

// mis en place du nouveau password
exports.postResetPassword = async (req, res) => {
    const { token } = req.params;
    const { password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).render('authentification/resetPassword', { error: 'Les mots de passe ne correspondent pas.', token });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);

        const coach = await LoginCoach.findById(decoded.id);
        if (!coach) {
            return res.status(400).render('authentification/resetPassword', { error: 'Utilisateur non trouvé.', token });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        coach.password = hashedPassword;
        await coach.save();

        // Générer un nouveau token
        const newToken = jwt.sign({ id: coach._id }, jwtSecret, { expiresIn: '1h' });
        
        // Au lieu de définir un cookie, on renvoie le token pour le stocker dans localStorage côté client
        return res.status(200).json({ token: newToken, message: 'Mot de passe réinitialisé avec succès.' });

    } catch (err) {
        console.error(err);
        res.status(500).render('authentification/resetPassword', { error: 'Erreur du serveur, veuillez réessayer plus tard.', token });
    }
};


