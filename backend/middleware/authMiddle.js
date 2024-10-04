const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extraire le token

  if (!token) {
    return res.status(401).json({ message: 'Autorisation requise' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token invalide' });
    }

    req.user = decoded; // Ajoute l'utilisateur décodé à la requête
    next();
  });
};


module.exports = requireAuth;
