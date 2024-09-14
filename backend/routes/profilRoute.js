
const express = require('express');
const RegisterCoach = require('../models/RegisterCoach');
const router = express.Router();

// Route GET /api/profil/
router.get('/', async (req, res) => {
  try {
    const user = await RegisterCoach.findById(req.user.id).select('username email');
    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }

    // Répondre avec les informations de l'utilisateur
    res.json({
      username: user.username,
      email: user.email
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur du serveur" });
  }
});

module.exports = router;
