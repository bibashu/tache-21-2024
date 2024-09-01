const SousDomaine = require("../models/SousDomaine_Model");
const Cours = require("../models/Cours_Model");

exports.index = async (req, res) => {
  try {
    // Récupérer les domaines depuis la base de données
    const cours = await Cours.find().populate("sous_domaine").exec();

    const message = req.query.message || "";
    const archivedCount = cours.filter((cour) => cour.archive === true).length;
    const unArchivedCount = cours.filter(
      (cour) => cour.archive === false
    ).length;
    const total = cours.length;
    // Formater les dates
    cours.forEach((cour) => {
      const dateUpdated = new Date(cour.updatedAt);
      const dateCreated = new Date(cour.createdAt);

      cour.formattedUpdatedAt = dateUpdated.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      cour.formattedCreatedAt = dateCreated.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    });

    // Rendre la vue avec les données
    res.render("cours/index", {
      cours,
      message,
      archivedCount,
      unArchivedCount,
      total,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// pages  les ajoues

exports.add = async (req, res) => {
  const sousdomaines = await SousDomaine.find({});

  res.render("cours/add", { sousdomaines: sousdomaines });
};
// Ajouter des données
exports.submitModule = async (req, res) => {
  try {
    // Extraction des données du corps de la requête
    const { cours, duree, description, sousdomaineId } = req.body;

    // Vérifier si le domaine existe
    const sousdomaine = await SousDomaine.findById(sousdomaineId);
    console.log(sousdomaine);
    if (!sousdomaine) {
      return res.status(404).send("sousDomaine non trouvé");
    }

    // Créer une nouvelle instance du modèle SousDomaine
    const newCours = new Cours({
      nom_cours: cours,
      duree: duree,
      description: description,
      sous_domaine: sousdomaine._id, // Référence au domaine
    });

    // Sauvegarder le sous-domaine dans la base de données
    await newCours.save();

    // Rediriger vers la liste des sous-domaines ou une page de succès
    res.redirect("/cours?success=true");
  } catch (error) {
    console.error("Erreur lors de l'ajout du cours:", error);
    res.status(500).send("Erreur serveur");
  }
};

// Edit domaine
exports.edit = async (req, res) => {
  try {
    const id = req.params.id; // Récupère l'ID du domaine depuis les paramètres de la requête
    // Récupérer les détails du sous-domaine spécifique et son domaine associé
    const cours = await Cours.findById(id).populate("sous_domaine").exec();
    const sousdomaines = await SousDomaine.find({});
    // Trouve le domaine spécifique par son ID

    if (!cours) {
      return res.status(404).send("cours non trouvé");
    }

    res.render("cours/edit", { sousdomaines: sousdomaines, cours: cours }); // Rendu de la vue d'édition avec les détails du domaine
  } catch (error) {
    console.error("Erreur lors de la récupération du domaine:", error);
    res.status(500).send("Erreur serveur");
  }
};
// action modification
exports.editModule = async (req, res) => {
  try {
    const id = req.params.id;
    const { cours, duree, description, sousdomaineId } = req.body;
    console.log(req.body);
    const sousdomaine = await SousDomaine.findById(sousdomaineId);

    const updatedModule = await Cours.findByIdAndUpdate(
      id,
      {
        nom_cours: cours,
        duree,

        description,
        sous_domaine: sousdomaineId,
      },
      { new: true }
    );
    // console.log(updatedModule);

    if (!updatedModule) {
      return res.status(404).send("cours non trouvé");
    }
    // console.log(cours);

    //
    res.redirect("/cours");
  } catch (error) {
    console.error("Erreur lors de la mise à jour du domaine:", error);
    res.status(500).send("Erreur serveur");
  }
};

exports.supprimerModule = async (req, res) => {
  try {
    const id = req.params.id;
    await Cours.findByIdAndDelete(id);
    res.redirect("/cours");
  } catch (error) {
    console.error("Erreur lors de la suppression du domaine:", error);
    res.status(500).send("Erreur serveur");
  }
};
// recupération des données domaine avec json
exports.apiSousDomaine = async (req, res) => {
  try {
    const cours = await SousDomaine.find({});
    res.status(200).json(cours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// arhcive
exports.toggleArchive = async (req, res) => {
  try {
    const id = req.params.id;
    const cours = await Cours.findById(id);

    if (!cours) {
      return res.status(404).send("cours not found");
    }

    // Toggle the archive status
    cours.archive = !cours.archive;
    await cours.save();

    // Redirect back to the previous page or a confirmation page
    res.redirect(`/cours?message=${cours.archive ? "archived" : "unarchived"}`);
  } catch (error) {
    console.error("Error toggling archive status:", error);
    res.status(500).send("Server error");
  }
};
