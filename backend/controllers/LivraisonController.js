const mongoose = require('mongoose')
const Livraison = require("../models/livraison_Model");
const socket = require('../socket');
const { ObjectId } = mongoose.Types;


// Fonction submitLivraison
exports.submitLivraison = async (req, res) => {
  try {
    const { project_id, delivery_link } = req.body;
    const screenshots = req.files.map(file => file.path); // Récupérer les chemins des fichiers uploadés
    console.log("Requête reçue avec ces données :", req.body);

    // Vérifiez que project_id et delivery_link sont bien définis
    if (!project_id || !delivery_link) {
      return res.status(400).json({ error: "Le project_id et le delivery_link sont requis." });
    }

    // Convertir project_id en ObjectId si nécessaire
    const validProjectId = mongoose.Types.ObjectId.isValid(project_id)
      ? new mongoose.Types.ObjectId(project_id) 
      : null;

    if (!validProjectId) {
      return res.status(400).json({ error: "L'identifiant du projet est invalide." });
    }

    // Créer une nouvelle soumission de livraison
    const newSubmission = new Livraison({
      project_id: validProjectId, // Utilisez validProjectId ici
      delivery_link,
      screenshots,
    });

    // Sauvegarder la livraison
    await newSubmission.save();

    // Récupérer l'instance de io
    const io = socket.getIo();

    // Envoyer une notification instantanée au coach via Socket.IO
    io.emit('newDelivery', {
      message: `Nouvelle livraison soumise pour le projet ${project_id}`,
      project_id,
      delivery_link,
      screenshots,
    });

    res.status(201).json({ message: "Projet soumis avec succès" });
  } catch (error) {
    console.error("Erreur lors de la soumission du projet :", error);
    res.status(500).json({ error: "Erreur lors de la soumission du projet" });
  }
};


exports.apiLivraison = async (req, res) => {
  try {
    const livraison = await Livraison.find({}).populate("project_id").exec();
    res.status(200).json(livraison);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.index = async (req, res) => {
  try {
    // Récupérer les domaines depuis la base de données
    const livraison = await Livraison.find().populate("project_id").exec();

    // Formater les dates
    livraison.forEach((livraison) => {
      const dateUpdated = new Date(livraison.submitted_at);
      const dateCreated = new Date(livraison.createdAt);

      livraison.formattedUpdatedAt = dateUpdated.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      livraison.formattedCreatedAt = dateCreated.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    });

    // Rendre la vue avec les données
    res.render("livraison/index", {
      livraison,

      pages: "/livraison",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
exports.accept = async (req, res) => {
  try {
    const livraisonId = req.params.id;


    // Trouver la livraison par son ID
    const livraison = await Livraison.findById(livraisonId);

    // Vérifier si la soumission existe
    if (!livraison) {
      return res.status(404).send("Soumission non trouvée");
    }

    // Mettre à jour le statut de la soumission à "accepted"
    livraison.status = "accepted";
    livraison.reviewed_at = Date.now(); // Date d'acceptation
    await livraison.save(); // Appeler save() sur l'instance

    // Rediriger avec un message de succès ou retourner une réponse JSON
    res.redirect(`/livraison?status=accepted&nom=${encodeURIComponent(livraison.delivery_link)}`);
  } catch (error) {
    console.error("Erreur lors de l'acceptation de la soumission :", error);
    res.status(500).send("Erreur serveur");
  }
};
exports.rejet = async (req, res) => {
  try {
    const livraisonId = req.params.id;
    console.log(livraisonId);

    // Trouver la livraison par son ID
    const livraison = await Livraison.findById(livraisonId);

    // Vérifier si la soumission existe
    if (!livraison) {
      return res.status(404).send("Soumission non trouvée");
    }

    // Mettre à jour le statut de la soumission à "accepted"
    livraison.status = "rejected";
    livraison.reviewed_at = Date.now(); // Date d'acceptation
    await livraison.save(); // Appeler save() sur l'instance

    // Rediriger avec un message de succès ou retourner une réponse JSON
    res.redirect(`/livraison?status=rejected&nom=${encodeURIComponent(livraison.delivery_link)}`);
  } catch (error) {
    console.error("Erreur lors de l'acceptation de la soumission :", error);
    res.status(500).send("Erreur serveur");
  }
};
exports.voir = async (req, res) => {
  try {
    const id = req.params.id;
    // Récupère l'ID du domaine depuis les paramètres de la requête

    const livraison = await Livraison.findById(id).populate("project_id").exec();
    //   const cours = await Cours.find({});
    // Trouve le domaine spécifique par son ID

    if (!livraison) {
      return res.status(404).send("quizz non trouvé");
    }

    res.render("livraison/voir", { livraison: livraison, pages: "/livraison" });
    // Rendu de la vue d'édition avec les détails du domaine
  } catch (error) {
    console.error("Erreur lors de la récupération du quizz:", error);
    res.status(500).send("Erreur serveur");
  }
};
