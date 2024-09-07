// const RegisterCoach = require('../models/RegisterCoach');

// exports.getProfile = async (req, res) => {
//     try {
//         const userId = req.user.id; // Utilise l'ID de l'utilisateur stocké dans req.user

//         const coach = await RegisterCoach.findById(userId);
//         if (!coach) {
//             return res.status(404).json({ error: 'Utilisateur non trouvé.' });
//         }

//         res.render('authentification/profile', {
//             username: coach.username,
//             email: coach.email
//             // Ajoute ici d'autres informations si nécessaire
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Erreur du serveur, veuillez réessayer plus tard.' });
//     }
// };

// profilController.js

const RegisterCoach = require('../models/RegisterCoach'); // Assure-toi d'utiliser le bon modèle

exports.getProfile = async (req, res) => {
    try {
        const coachId = req.user.id; // ID de l'utilisateur extrait du token
        const coach = await RegisterCoach.findById(coachId);

        if (!coach) {
            return res.status(404).json({ error: 'Utilisateur non trouvé.' });
        }

        // Réponse avec les informations du profil
        res.status(200).json({
            username: coach.username,
            email: coach.email
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erreur du serveur, veuillez réessayer plus tard.' });
    }
};

