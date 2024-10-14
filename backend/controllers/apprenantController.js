const Apprenant = require("../models/apprenant_Model");
const Cours = require("../models/Cours_Model");
const { sendEmail } = require("../Service/emailService");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
// Clé secrète pour signer les tokens (devrait être stockée dans un fichier de configuration)
const JWT_SECRET =
  "dclkdncjdnsbcshCDN?QC?QDNCCBHBCJKZNJZENDZEBDZENJZNZ654513156451532154548987851";
exports.index = async (req, res) => {
  try {
    // Récupérer les domaines depuis la base de données
    const apprenants = await Apprenant.find().populate("cours").exec();

    const message = req.query.message || "";
    const archivedCount = apprenants.filter(
      (apprenant) => apprenant.archive === true
    ).length;
    const unArchivedCount = apprenants.filter(
      (apprenant) => apprenant.archive === false
    ).length;
    const totalModule = apprenants.length;
    // Formater les dates
    apprenants.forEach((apprenant) => {
      const dateUpdated = new Date(apprenant.updatedAt);
      const dateCreated = new Date(apprenant.createdAt);

      apprenant.formattedUpdatedAt = dateUpdated.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      apprenant.formattedCreatedAt = dateCreated.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    });

    // Rendre la vue avec les données
    res.render("apprenant/index", {
      apprenants,
      message,
      archivedCount,
      unArchivedCount,
      totalModule,
      pages: "/apprenant",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// pages  les ajoues

exports.add = async (req, res) => {
  const cours = await Cours.find({});

  res.render("apprenant/add", { cours: cours, pages: "/apprenant" });
};
// Ajouter des données
exports.submitModule = async (req, res) => {
  try {
    const { nom, prenom, email, password, coursIds } = req.body;

    // Hachage du mot de passe avant de le stocker
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel apprenant avec le mot de passe haché
    const newApprenant = new Apprenant({
      nom,
      prenom,
      email,
      password: hashedPassword,
    });

    // Sauvegarder le nouvel apprenant
    await newApprenant.save();

    // Si des cours sont sélectionnés
    if (coursIds && coursIds.length > 0) {
      // Mettre à jour l'apprenant avec les cours sélectionnés
      newApprenant.cours = coursIds;
      await newApprenant.save();

      // Mettre à jour les cours pour inclure le nouvel apprenant
      await Cours.updateMany(
        { _id: { $in: coursIds } },
        { $push: { apprenants: newApprenant._id } } // Ajouter l'ID de l'apprenant aux cours
      );
    }

    // Envoyer un email à l'apprenant avec ses informations de connexion
    const emailSubject = "Bienvenue !";
    const emailText = `
          Bonjour ${prenom},

          Votre compte a été créé avec succès. Voici vos informations de connexion :
          
          Email : ${email}
          Mot de passe : ${password}

          

          Cordialement,
          L'équipe
        `;

    await sendEmail(email, emailSubject, emailText);

    res.redirect(`/apprenant?alert=success&nom=${encodeURIComponent(nom)}`);
  } catch (error) {
    console.error("Erreur lors de la création de l'apprenant :", error);
    res.status(500).send("Erreur serveur");
  }
};

// Edit
exports.edit = async (req, res) => {
  try {
    const apprenant = await Apprenant.findById(req.params.id);
    const cours = await Cours.find();

    // Préparer les IDs des cours de l'apprenant pour la vue
    const apprenantCoursIds = apprenant.cours.map((id) => id.toString());

    res.render("apprenant/edit", {
      apprenant,
      cours,
      apprenantCoursIds,
      pages: "/apprenant", // Envoyer les IDs préparés à la vue
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    res.status(500).send("Erreur serveur");
  }
};
// action modification
// Assurez-vous que la fonction d'envoi d'email est correctement importée

exports.editModule = async (req, res) => {
  try {
    const id = req.params.id;
    const { nom, prenom, email, password, coursIds } = req.body;

    // Trouver l'apprenant actuel
    const currentApprenant = await Apprenant.findById(id);

    if (!currentApprenant) {
      return res.status(404).send("Apprenant non trouvé");
    }

    // Vérifier si l'email a changé
    const emailChanged = currentApprenant.email !== email;

    // Vérifier si le mot de passe a changé
    let passwordChanged = false;
    let hashedPassword = currentApprenant.password;

    // Conserver l'ancien mot de passe haché par défaut
    if (password && password.trim() !== "") {
      // Hacher le nouveau mot de passe
      const salt = await bcrypt.genSalt(10); // Définir salt ici
      hashedPassword = await bcrypt.hash(password, salt);

      // Vérifier si le mot de passe haché est différent de l'ancien mot de passe haché
      if (currentApprenant.password !== hashedPassword) {
        passwordChanged = true;
      }
    }

    // Convertir les IDs de cours en chaînes de caractères pour comparaison
    const newCoursIds = Array.isArray(coursIds) ? coursIds : [coursIds];
    const currentCoursIds = currentApprenant.cours.map((id) => id.toString());

    // Mettre à jour l'apprenant
    const updatedModule = await Apprenant.findByIdAndUpdate(
      id,
      {
        nom,
        prenom,
        email,
        password: hashedPassword, // Utiliser le mot de passe haché
        cours: newCoursIds, // Met à jour les cours sélectionnés
      },
      { new: true }
    );

    if (!updatedModule) {
      return res.status(404).send("Apprenant non trouvé");
    }

    // Mettre à jour les cours pour inclure ou exclure l'apprenant
    await Cours.updateMany(
      {
        _id: { $in: currentCoursIds.filter((id) => !newCoursIds.includes(id)) },
      },
      { $pull: { apprenants: id } } // Retirer l'apprenant des cours non sélectionnés
    );

    await Cours.updateMany(
      {
        _id: { $in: newCoursIds.filter((id) => !currentCoursIds.includes(id)) },
      },
      { $push: { apprenants: id } } // Ajouter l'apprenant aux cours sélectionnés
    );

    // Envoyer un email si l'email ou le mot de passe ont changé
    if (emailChanged || passwordChanged) {
      const emailSubject = "Mise à jour de votre compte";
      const emailText = `
        Bonjour ${prenom},

        ${
          emailChanged
            ? `Votre adresse email a été mise à jour avec succès. Nouvelle adresse email : ${email}`
            : ""
        }
        ${
          passwordChanged
            ? `Votre mot de passe a été mis à jour avec succès.`
            : ""
        }

        Veuillez vous connecter avec vos nouvelles informations.

        Cordialement,
        L'équipe
      `;

      await sendEmail(email, emailSubject, emailText); // Fonction d'envoi d'email
    }

    res.redirect(`/apprenant?modifier=success&nom=${encodeURIComponent(nom)}`);
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'apprenant :", error);
    res.status(500).send("Erreur serveur");
  }
};

exports.supprimerModule = async (req, res) => {
  try {
    const id = req.params.id;
    const apprenant = await Apprenant.findByIdAndDelete(id);
    const nom = apprenant.prenom + " " + apprenant.nom;
    res.redirect(
      `/apprenant?suppression=success&nom=${encodeURIComponent(nom)}`
    );
  } catch (error) {
    console.error("Erreur lors de la suppression du cours:", error);
    res.status(500).send("Erreur serveur");
  }
};
// recupération des données domaine avec json
exports.apiapprenant = async (req, res) => {
  try {
    const apprenant = await Apprenant.find({}).populate("cours").exec();
    res.status(200).json(apprenant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// arhcive
exports.toggleArchive = async (req, res) => {
  try {
    const id = req.params.id;
    const apprenant = await Apprenant.findById(id);

    if (!apprenant) {
      return res.status(404).send("apprenants not found");
    }

    // Toggle the archive status
    apprenant.archive = !apprenant.archive;
    const apprenantar = await apprenant.save();
    const nom = apprenantar.prenom + " " + apprenantar.nom;

    // Redirect back to the previous page or a confirmation page
    res.redirect(
      `/apprenant?nom=${encodeURIComponent(nom)}&message=${
        apprenant.archive ? "archived" : "unarchived"
      }`
    );
  } catch (error) {
    console.error("Error toggling archive status:", error);
    res.status(500).send("Server error");
  }
};
exports.voirModule = async (req, res) => {
  try {
    const id = req.params.id;
    const apprenant = await Apprenant.findById(id).populate("cours").exec();

    res.render("apprenant/voir", { apprenant: apprenant, pages: "/apprenant" });
  } catch (error) {}
};
// Middleware pour valider les entrées
const validateLogin = [
  body("email").isEmail().withMessage("Email invalide"),
  body("password").notEmpty().withMessage("Mot de passe requis"),
];

exports.login = async (req, res) => {
  try {
    // Validation des données
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Trouver l'apprenant par email
    const apprenant = await Apprenant.findOne({ email });
    if (!apprenant) {
      return res
        .status(401)
        .json({ message: "Email ou mot de passe incorrect" });
    }

    // Comparer le mot de passe
    const isMatch = await bcrypt.compare(password, apprenant.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Email ou mot de passe incorrect" });
    }

    // Générer un token JWT
    const token = jwt.sign(
      { id: apprenant._id, email: apprenant.email },
      process.env.JWT_SECRET, // Assurez-vous que JWT_SECRET est défini dans vos variables d'environnement
      { expiresIn: "1h" } // Durée de validité du token
    );

    // Envoyer la réponse
    res.json({
      message: "Connexion réussie!",
      token, // Envoyer le token au client
      user: {
        id: apprenant._id,
        email: apprenant.email,
        nom: apprenant.nom,
        prenom: apprenant.prenom,
      },
    });
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
// Contrôleur pour récupérer le profil d'un apprenant
// Méthode pour récupérer le profil de l'apprenant
exports.profile = async (req, res) => {
  try {
    // On suppose que req.user.id contient l'ID de l'apprenant connecté, par exemple via un middleware d'authentification
    const apprenant = await Apprenant.findById(req.user.id).populate("cours"); // Récupérer les cours associés à l'apprenant

    if (!apprenant) {
      return res.status(404).json({ message: "Apprenant non trouvé" });
    }

    // Renvoyer les informations de l'apprenant
    res.json(apprenant);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération du profil de l'apprenant:",
      error
    );
    res.status(500).json({ message: "Erreur serveur" });
  }
};
exports.demarrerCours = async (req, res) => {
  const { userId, coursId } = req.body;

  try {
    // Trouver l'apprenant par son ID
    const apprenant = await Apprenant.findById(userId);

    if (!apprenant) {
      return res.status(404).json({ message: "Apprenant non trouvé" });
    }

    // Vérifier si le cours a déjà été démarré
    if (!apprenant.coursDemarres.includes(coursId)) {
      apprenant.coursDemarres.push(coursId); // Ajouter le cours à la liste des cours démarrés
    } else {
      return res.status(400).json({ message: "Le cours a déjà été démarré" });
    }

    // Sauvegarder l'apprenant mis à jour
    await apprenant.save();

    res.json({ message: "Cours démarré avec succès", apprenant });
  } catch (error) {
    console.error("Erreur lors du démarrage du cours :", error);
    res.status(500).json({ message: "Erreur lors du démarrage du cours" });
  }
};

exports.profile = async (req, res) => {
  try {
    // On suppose que req.user.id contient l'ID de l'apprenant connecté, par exemple via un middleware d'authentification
    const apprenant = await Apprenant.findById(req.user.id).populate("cours"); // Récupérer les cours associés à l'apprenant

    if (!apprenant) {
      return res.status(404).json({ message: "Apprenant non trouvé" });
    }

    // Renvoyer les informations de l'apprenant
    res.json(apprenant);
  } catch (error) {
    console.error(
      "Erreur lors de la récupération du profil de l'apprenant:",
      error
    );
    res.status(500).json({ message: "Erreur serveur" });
  }
};
exports.demarrerCours = async (req, res) => {
  const { userId, coursId } = req.body;

  try {
    // Trouver l'apprenant par son ID
    const apprenant = await Apprenant.findById(userId);

    if (!apprenant) {
      return res.status(404).json({ message: "Apprenant non trouvé" });
    }

    // Vérifier si le cours a déjà été démarré
    if (!apprenant.coursDemarres.includes(coursId)) {
      apprenant.coursDemarres.push(coursId); // Ajouter le cours à la liste des cours démarrés
    } else {
      return res.status(400).json({ message: "Le cours a déjà été démarré" });
    }

    // Sauvegarder l'apprenant mis à jour
    await apprenant.save();

    res.json({ message: "Cours démarré avec succès", apprenant });
  } catch (error) {
    console.error("Erreur lors du démarrage du cours :", error);
    res.status(500).json({ message: "Erreur lors du démarrage du cours" });
  }
};
