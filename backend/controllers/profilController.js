// Importer le modèle RegisterCoach 
const RegisterCoach = require('../models/RegisterCoach');

exports.getProfile = async (req, res) => {
    try {
        const user = await RegisterCoach.findById(req.user.id); // req.user.id est défini dans le middleware après vérification du token

        if (!user) {
            return res.status(404).json({ error: 'Utilisateur non trouvé' });
        }

        // Renvoie les informations de profil
        res.status(200).json({
            username: user.username,
            email: user.email,
            
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erreur du serveur, veuillez réessayer plus tard.' });
    }
};
