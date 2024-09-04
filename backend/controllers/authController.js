const LoginCoach = require('../models/LoginCoach');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


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
        const token = jwt.sign({ id: coach._id }, 'votreCleSecrete', { expiresIn: '1h' });
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

  
exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const coach = await LoginCoach.findOne({ email });
        if (!coach) {
            return res.status(400).render('authentification/forgotPassword', { error: 'Aucun compte trouvé avec cet email.' });
        }

        // Générer un token de réinitialisation (ceci est un exemple simple)
        const resetToken = jwt.sign({ id: coach._id }, 'votreCleSecrete', { expiresIn: '15m' });

        // Stocker le token dans la base de données ou envoyer un email
        // (Ici, nous le simulerons simplement)

        // Envoi de l'email de réinitialisation (simulation)
        console.log(`Réinitialisation du mot de passe : ${resetToken}`);

        res.render('authentification/forgotPassword', { message: 'Un email de réinitialisation a été envoyé.' });
    } catch (err) {
        console.error(err);
        res.status(500).render('authentification/forgotPassword', { error: 'Erreur du serveur, veuillez réessayer plus tard.' });
    }
};



