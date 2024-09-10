
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

// Middleware pour vérifier le token
exports.verifyToken = (req, res, next) => {
  console.log('Headers reçus:', req.headers); // Log des headers reçus

  const token = req.headers['authorization']?.split(' ')[1]; // Extraire le token

  if (!token) {
    return res.status(401).json({ message: 'Accès non autorisé, token manquant' });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      console.log('Erreur de vérification du token:', err); // Log des erreurs de vérification
      return res.status(403).json({ message: 'Token invalide ou expiré' });
    }
    req.user = decoded; // Stocker les informations de l'utilisateur dans req.user
    next(); // Continuer vers la prochaine étape
  });
};
