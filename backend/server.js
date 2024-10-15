const express = require('express');
const mongoose = require('mongoose');
const { sendEmail } = require('./Service/emailService');
const cors = require('cors'); // Importer cors
const app = express();
const path = require('path');
const methodOverride = require('method-override');
require('dotenv').config();
const http = require('http');
const socketIo = require('socket.io');
const socket = require('./socket');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const fs = require('fs');
const router = express.Router();
const jwtSecret = process.env.JWT_SECRET
const jwt = require('jsonwebtoken');
// imprter le mode d'inscription du 
const RegisterCoach = require('./models/RegisterCoach'); 


app.use(cookieParser());
// Créer une instance de serveur HTTP et l'attacher à l'application Express
const server = http.createServer(app);
// Attacher Socket.IO au serveur HTTP
const io = socket.init(server);

io.on('connection', (socket) => {
  console.log('Un utilisateur est connecté');
  socket.on('disconnect', () => {
    console.log('Utilisateur déconnecté');
  });
});

const { requireAuth } = require('./middleware/middleware_coach');
const globalDataMiddleware = require('./middleware/middleware_livraisons');
// Configurer CORS pour permettre toutes les origines ou spécifiquement l'origine de ton frontend
const allowedOrigins = ['https://tache-21-2024.onrender.com', 'https://localhost:5000'];


// Utiliser le middleware CORS
app.use(cors({
  origin: 'allowedOrigins', // Remplace par l'origine de ton frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Authorization,Content-Type',
}));

// Utiliser le middleware globalDataMiddleware
app.use(globalDataMiddleware);




// Importer les routes
const authMiddleware = require('./middleware/authMiddleware');
const domaineRoutes = require('./routes/domaineRoute');
const sousDomaineRoute = require("./routes/SousDomaineRoute");
const coursRoute = require("./routes/coursRoute");
const loginRoute = require('./routes/loginCoachRoute');
const registerRoute = require('./routes/registerRoute');
const forgotPasswordRoute = require('./routes/forgotPasswordRoute');
const quizzRoute = require("./routes/quizz_Route");
const projectRoute = require('./routes/projectRoute');
const livraisonRoute = require('./routes/livraisonRoute');
const dashboard = require('./routes/dashboard');
const profilRoute= require('./routes/profilRoute')
const apprenantRoute = require('./routes/apprenantRoute');

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Middleware pour parser les données des formulaires
app.use(express.urlencoded({ extended: true }));
// Middleware pour gérer les requêtes DELETE et PUT dans les formulaires
app.use(methodOverride('_method'));

// Configurer le dossier public pour les fichiers statiques
app.use(express.static('public'));

// Configurer le moteur de templates EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware pour injecter des pages
app.use((req, res, next) => {
  res.locals.pages = req.path;
  next();
});



// Route principale
app.get('/', (req, res) => {
  res.render('./authentification/register');
});

// Routes d'authentification
app.use('/authentification', loginRoute);
app.use('/authentification', registerRoute);
app.use('/authentification', forgotPasswordRoute);
app.use('/authentification', profilRoute);

// Routes protégées
app.use('/dash', dashboard);

// Autres routes
app.use('/domaine', domaineRoutes);
app.use('/sousDomaine', sousDomaineRoute);
app.use('/cours', coursRoute);
app.use('/quizz', quizzRoute);
app.use('/project', projectRoute);

// Utiliser la route des livraisons
app.use('/livraison', livraisonRoute);

// Monter les routes API sous /api
app.use('/api/profil', authMiddleware.verifyToken, profilRoute);


// Route API qui renvoie les données utilisateur en JSON
app.get('/api/profile', async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, jwtSecret);
    const coachId = decoded.id;

    const coach = await RegisterCoach.findById(coachId);
    if (!coach) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Renvoie les informations de l'utilisateur, y compris l'URL de l'image de profil
    res.json({
      username: coach.username || 'Invité',
      email: coach.email || 'inconnu',
      profileImageUrl: coach.profileImageUrl || '/assets/img/profile.jpg'
    });
  } catch (err) {
    console.error('Erreur lors de la récupération du profil:', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});



// Route pour rendre la vue HTML
app.get('/profile', (req, res) => {
  res.render('authentification/profil', { pages: '/profil' });
});


// Création du dossier 'uploads' s'il n'existe pas
const uploadDir = path.join(__dirname, 'public/uploads/');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configuration de multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); // Dossier de destination des fichiers uploadés
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Générer un nom unique pour chaque fichier
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limite de taille : 5MB
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error('Le format du fichier est invalide. Seuls les fichiers JPG, JPEG et PNG sont acceptés.'));
    }
  }
});



// Route pour uploader et mettre à jour l'image de profil
app.post('/upload-profile-picture', upload.single('profilePicture'), async (req, res) => {
  try {
    // Vérifier la présence du fichier
    if (!req.file) {
      return res.status(400).json({ message: 'Aucun fichier téléchargé' });
    }

    // Vérifier la présence du header Authorization
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Authorization token manquant ou invalide' });
    }

    // Extraire le token en supprimant "Bearer "
    const token = authHeader.split(' ')[1];

    // Décoder le token JWT pour obtenir l'ID de l'utilisateur
    const decoded = jwt.verify(token, jwtSecret); 
    const coachId = decoded.id;

    // Mise à jour de l'image de profil dans la base de données
    const updatedCoach = await RegisterCoach.findByIdAndUpdate(
      coachId,
      { profileImageUrl: `/uploads/${req.file.filename}` },
      { new: true }
    );

    if (!updatedCoach) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Retourner le chemin de l'image mise à jour
    res.json({ filePath: `/uploads/${req.file.filename}` });

  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'image:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

app.use('/uploads', express.static('public/uploads'));

// Retourner le chemin de l'image mise à jour dans uploads pour les livraisons
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//les fichiers statics
app.use(express.static(path.join(__dirname, 'public')));


// Gestion des erreurs liées à multer
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // Gérer les erreurs de multer
    return res.status(400).json({ message: `Erreur Multer: ${err.message}` });
  } else if (err) {
    // Gérer les autres erreurs
    return res.status(400).json({ message: err.message });
  }
  next();
});

// Middleware pour vérifier le token JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401); // Si aucun token n'est fourni

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Si le token n'est pas valide
    req.user = user;
    next(); // Passer à la prochaine fonction
  });
}

//modifier mes informations 
app.put('/api/profile/update', authenticateToken, (req, res) => {
  const { username, email } = req.body;

  // Utiliser ton modèle RegisterCoach pour mettre à jour les informations
  RegisterCoach.findByIdAndUpdate(req.user.id, { username, email }, { new: true })
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
      res.json({ username: user.username, email: user.email });
    })
    .catch(err => {
      res.status(500).json({ message: 'Erreur lors de la mise à jour des informations' });
    });
});



app.use('/apprenant', apprenantRoute);
const port = process.env.PORT || 5000; 
// Connexion à MongoDB et démarrage du serveur
mongoose
  .connect("mongodb+srv://menzamenza90:5o4KyFBCKNZmXeGj@e-learning.dn30h.mongodb.net/?retryWrites=true&w=majority&appName=E-learning")
  .then(() => {

    console.log("Connecté à la base de données MongoDB");
    app.listen(port, () => {
      console.log("Serveur démarré sur le port 5000");
    });
  })
  .catch((error) => {
    console.log("Erreur lors de la connexion à la base de données :", error);
  });


  
