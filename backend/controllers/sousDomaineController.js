
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
    res.render('sousDomaine/index', { sousDomaines, message, archivedCount, unArchivedCount, totalDomaine, pages: '/sousDomaine' });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// pages  les ajoues

exports.add = async (req, res) => {
    const domaines = await Domaine.find({});
    

  res.render("sousDomaine/add", {domaines: domaines, pages: "/sousDomaine"});
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
      
      const nom= "Sous Domaine"
      // Rediriger vers la liste des sous-domaines ou une page de succès
      res.redirect(`/sousDomaine?alert=success&nom=${encodeURIComponent(nom)}`);
    } catch (error) {
      console.error('Erreur lors de l\'ajout du sous-domaine:', error);
      res.status(500).send('Erreur serveur');
    }
  };
  

// Edit domaine
exports.edit = async (req, res) => {
  try {
    const id = req.params.id; // Récupère l'ID du domaine depuis les paramètres de la requête
    // Récupérer les détails du sous-domaine spécifique et son domaine associé
    const sousdomaine = await SousDomaine.findById(id).populate('domaine').exec();
    const domaines = await Domaine.find({});
     // Trouve le domaine spécifique par son ID

    if (!sousdomaine) {
      return res.status(404).send('Sous domaine non trouvé');
    }

    res.render("sousDomaine/edit", { sousdomaine: sousdomaine, domaines: domaines, pages: "/sousDomaine" }); // Rendu de la vue d'édition avec les détails du domaine
  } catch (error) {
    console.error('Erreur lors de la récupération du domaine:', error);
    res.status(500).send('Erreur serveur');
  }
};
// action modification
exports.editModule = async (req, res) =>{
  try {
  
    const id = req.params.id;
    const { sousdomaine, description, domaineId } = req.body;
    const domaine = await Domaine.findById(domaineId);

    const updatedSousDomaine = await SousDomaine.findByIdAndUpdate(id, {
        sousdomaine,
        description,
        domaine: domaineId
    }, { new: true });

    if (!updatedSousDomaine) {
      return res.status(404).send('Domaine non trouvé');
    }
    const nom = "Sous domaine"
    res.redirect(`/sousDomaine?modifier=success&nom=${encodeURIComponent(nom)}`);
  } catch (error) {
    console.error('Erreur lors de la mise à jour du domaine:', error);
    res.status(500).send('Erreur serveur');
  }
} 

exports.supprimerSousDomaine = async (req, res) =>{
  try {


    const id = req.params.id;
    const Sousdomaine = await SousDomaine.findByIdAndDelete(id);
    const nom = Sousdomaine.sousdomaine
    res.redirect(`/sousDomaine?suppression=success&nom=${encodeURIComponent(nom)}`);
  } catch (error) {
    console.error('Erreur lors de la suppression du domaine:', error);
    res.status(500).send('Erreur serveur');
  }
}
// recupération des données domaine avec json 
exports.apiSousDomaine = async (req, res) =>{
  try {
    const sousdomaines = await SousDomaine.find({});
    res.status(200).json(sousdomaines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
// arhcive
exports.toggleArchive = async (req, res) => {
  try {
    const id = req.params.id;
    const sousdomaine = await SousDomaine.findById(id);

    if (!sousdomaine) {
      return res.status(404).send('sousdomaine not found');
    }

    // Toggle the archive status
    sousdomaine.archive = !sousdomaine.archive;
    await sousdomaine.save();
   const nom = sousdomaine.sousdomaine;
res.redirect(`/sousDomaine?nom=${encodeURIComponent(nom)}&message=${sousdomaine.archive ? 'archived' : 'unarchived'}`);

  } catch (error) {
    console.error('Error toggling archive status:', error);
    res.status(500).send('Server error');
  }
};