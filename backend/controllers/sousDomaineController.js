
const SousDomaine = require("../models/SousDomaine_Model");
const Domaine = require("../models/Domaine_Model");



exports.index = async (req, res) => {
  try {
    // Récupérer les domaines depuis la base de données
    const sousDomaines = await SousDomaine.find().populate('domaine').exec();
    const message = req.query.message || '';
    const archivedCount = sousDomaines.filter(domaine => domaine.archive === true).length;
    const unArchivedCount = sousDomaines.filter(domaine => domaine.archive === false).length;
    const totalDomaine = sousDomaines.length
    // Formater les dates
    sousDomaines.forEach((sousDomaines) => {
      const dateUpdated = new Date(sousDomaines.updatedAt);
      const dateCreated = new Date(sousDomaines.createdAt);

      sousDomaines.formattedUpdatedAt = dateUpdated.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      sousDomaines.formattedCreatedAt = dateCreated.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    });

    // Rendre la vue avec les données
    res.render('sousDomaine/index', { sousDomaines, message, archivedCount, unArchivedCount, totalDomaine });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// pages  les ajoues

exports.add = async (req, res) => {
    const domaines = await Domaine.find({});
    

  res.render("sousDomaine/add", {domaines: domaines});
};
// Ajouter des données
exports.submitSousDomaine = async (req, res) => {
    try {
      // Extraction des données du corps de la requête
      const { sousdomaine, description, domaineId } = req.body;
  
      // Vérifier si le domaine existe
      const domaine = await Domaine.findById(domaineId);
      if (!domaine) {
        return res.status(404).send('Domaine non trouvé');
      }
  
      // Créer une nouvelle instance du modèle SousDomaine
      const newSousDomaine = new SousDomaine({
        sousdomaine: sousdomaine,
        description: description,
        domaine: domaine._id // Référence au domaine
      });
  
      // Sauvegarder le sous-domaine dans la base de données
      await newSousDomaine.save();
  
      // Rediriger vers la liste des sous-domaines ou une page de succès
      res.redirect('/sousDomaine?success=true');
    } catch (error) {
      console.error('Erreur lors de l\'ajout du sous-domaine:', error);
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