const fs = require("fs");
const Domaine = require("../models/Domaine_Model");
const path = require("path");

exports.index = async (req, res) => {
  try {
    // Récupérer les domaines depuis la base de données
    const domaines = await Domaine.find({});
    const message = req.query.message || '';
    const archivedCount = domaines.filter(domaine => domaine.archive === true).length;
    const unArchivedCount = domaines.filter(domaine => domaine.archive === false).length;
    const totalDomaine = domaines.length
    // Formater les dates
    domaines.forEach((domaine) => {
      const dateUpdated = new Date(domaine.updatedAt);
      const dateCreated = new Date(domaine.createdAt);

      domaine.formattedUpdatedAt = dateUpdated.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      domaine.formattedCreatedAt = dateCreated.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    });

    // Rendre la vue avec les données
    res.render('domaine/index', { domaines, message, archivedCount, unArchivedCount, totalDomaine });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// pages  les ajoues

exports.add = (req, res) => {
  res.render("domaine/add");
};
// Ajouter des données
exports.submitDomaine = async (req, res) => {
  try {
   
    const { nom_domaine, description } = req.body;

    // Créer une nouvelle instance du modèle Domaine
    const newDomaine = new Domaine({
        nom_domaine: nom_domaine,
        description: description
    });

    // Sauvegarder le domaine dans la base de données
    await newDomaine.save();

    // Rediriger vers la liste des domaines ou une page de succès
    res.redirect('/domaine?success=true');
} catch (error) {
    console.error('Erreur lors de l\'ajout du domaine:', error);
    res.status(500).send('Erreur serveur');
}


};

// Edit domaine
exports.edit = async (req, res) => {
  try {
    const id = req.params.id; // Récupère l'ID du domaine depuis les paramètres de la requête
    const domaine = await Domaine.findById(id); // Trouve le domaine spécifique par son ID

    if (!domaine) {
      return res.status(404).send('Domaine non trouvé');
    }

    res.render("domaine/edit", { domaine: domaine }); // Rendu de la vue d'édition avec les détails du domaine
  } catch (error) {
    console.error('Erreur lors de la récupération du domaine:', error);
    res.status(500).send('Erreur serveur');
  }
};
// action modification
exports.submitEdit = async (req, res) =>{
  try {
    console.log('ID:', req.params.id);
    console.log('Body:', req.body);
    const id = req.params.id;
    const { nom_domaine, description } = req.body;

    const updatedDomaine = await Domaine.findByIdAndUpdate(id, {
      nom_domaine,
      description
    }, { new: true });

    if (!updatedDomaine) {
      return res.status(404).send('Domaine non trouvé');
    }
// 
    res.redirect('/domaine');
  } catch (error) {
    console.error('Erreur lors de la mise à jour du domaine:', error);
    res.status(500).send('Erreur serveur');
  }
} 

exports.supprimerDomaine = async (req, res) =>{
  try {


    const id = req.params.id;
    await Domaine.findByIdAndDelete(id);
    res.redirect('/domaine');
  } catch (error) {
    console.error('Erreur lors de la suppression du domaine:', error);
    res.status(500).send('Erreur serveur');
  }
}
// recupération des données domaine avec json 
exports.apiDomaine = async (req, res) =>{
  try {
    const domaines = await Domaine.find({});
    res.status(200).json(domaines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
// arhcive
exports.toggleArchive = async (req, res) => {
  try {
    const id = req.params.id;
    const domaine = await Domaine.findById(id);

    if (!domaine) {
      return res.status(404).send('Domaine not found');
    }

    // Toggle the archive status
    domaine.archive = !domaine.archive;
    await domaine.save();

    // Redirect back to the previous page or a confirmation page
    res.redirect(`/domaine?message=${domaine.archive ? 'archived' : 'unarchived'}`);
  } catch (error) {
    console.error('Error toggling archive status:', error);
    res.status(500).send('Server error');
  }
};