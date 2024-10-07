const Project = require("../models/project_Model");
const Cours = require("../models/Cours_Model");
const Apprenant = require("../models/apprenant_Model");
const mongoose = require("mongoose");

exports.index = async (req, res) => {
  try {
    // Récupérer les domaines depuis la base de données
    const projects = await Project.find().populate("cours").exec();

    const message = req.query.message || "";
    const archivedCount = projects.filter((project) => project.archive === true).length;
    const unArchivedCount = projects.filter(
      (project) => project.archive === false
    ).length;
    const totalModule = projects.length;
    // Formater les dates
    projects.forEach((project) => {
      const dateUpdated = new Date(project.updatedAt);
      const dateCreated = new Date(project.createdAt);

      project.formattedUpdatedAt = dateUpdated.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      project.formattedCreatedAt = dateCreated.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    });

    // Rendre la vue avec les données
    res.render("project/index", {
      projects,
      message,
      archivedCount,
      unArchivedCount,
      totalModule,
      pages: "/project"
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// pages  les ajoues

exports.add = async (req, res) => {
  const cours = await Cours.find({});

  res.render("project/add", { cours: cours, pages: "/project" });
};
// Ajouter des données
exports.submitModule = async (req, res) => {
  try {
    // Extraction des données du corps de la requête
    const { titre,  description, coursId } = req.body;

    // Vérifier si le domaine existe
    const cours = await Cours.findById(coursId);
    // console.log(cours);
    if (!cours) {
      return res.status(404).send("cours non trouvé");
    }

    // Créer une nouvelle instance du modèle SousDomaine
    const newProject = new Project({
      titre,
     
      description,
      cours: cours._id, // Référence au cours
    });

     // Sauvegarder le projet dans la base de données
     await newProject.save();
    
  
    // Rediriger vers la liste des sous-domaines ou une page de succès
    const nom= "Project"
    res.redirect(`/project?alert=success&nom=${encodeURIComponent(nom)}`);
  } catch (error) {
    console.error("Erreur lors de l'ajout du projects:", error);
    res.status(500).send("Erreur serveur");
  }
};

// Edit domaine
exports.edit = async (req, res) => {
  try {
    const id = req.params.id; // Récupère l'ID du domaine depuis les paramètres de la requête
    // Récupérer les détails du sous-domaine spécifique et son domaine associé
    const project = await Project.findById(id).populate("cours").exec();
    const cours = await Cours.find({});
    // Trouve le domaine spécifique par son ID

    if (!project) {
      return res.status(404).send("projects non trouvé");
    }

    res.render("project/edit", { cours: cours, project: project, pages: "/project" }); // Rendu de la vue d'édition avec les détails du domaine
  } catch (error) {
    console.error("Erreur lors de la récupération du project:", error);
    res.status(500).send("Erreur serveur");
  }
};
// action modification
exports.editModule = async (req, res) => {
  try {
    const id = req.params.id;
    const { titre, description, coursId } = req.body;
    console.log(req.body);
    const cours = await Cours.findById(coursId);

    const updatedModule = await Project.findByIdAndUpdate(
      id,
      {
        titre,
       

        description,
        cours: coursId,
      },
      { new: true }
    );
    // console.log(updatedModule);

    if (!updatedModule) {
      return res.status(404).send("cours non trouvé");
    }
    // console.log(projects);

    //
    
const nom = "Project"
    res.redirect(`/project?modifier=success&nom=${encodeURIComponent(nom)}`);
  } catch (error) {
    console.error("Erreur lors de la mise à jour du domaine:", error);
    res.status(500).send("Erreur serveur");
  }
};

exports.supprimerModule = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.findByIdAndDelete(id);
    const nom = project.titre
    res.redirect(`/project?suppression=success&nom=${encodeURIComponent(nom)}`);
  } catch (error) {
    console.error("Erreur lors de la suppression du cours:", error);
    res.status(500).send("Erreur serveur");
  }
};
// recupération des données domaine avec json
// exports.apiproject = async (req, res) => {
//   try {
//     const project = await Project.find({}).populate("cours").exec();
//     res.status(200).json(project);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
exports.apiproject = async (req, res) => {
  try {
    const { studentId } = req.params;

    // Vérifier si l'ID de l'étudiant est valide
    if (!mongoose.Types.ObjectId.isValid(studentId)) {
      return res.status(400).json({ message: "ID de l'étudiant non valide" });
    }


    // Récupérer l'étudiant en fonction de l'ID
    const etudiant = await Apprenant.findById(req.params.studentId).populate("cours").exec();

    if (!etudiant) {
      return res.status(404).json({ message: "Étudiant non trouvé" });
    }

    // Obtenir les IDs des cours de l'étudiant
    const coursIds = etudiant.cours.map(cour => cour._id);

    // Trouver les projets liés aux cours de l'étudiant
    const project = await Project.find({ cours: { $in: coursIds } }).populate("cours").exec();

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// arhcive
exports.toggleArchive = async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.findById(id);

    if (!project) {
      return res.status(404).send("projects not found");
    }

    // Toggle the archive status
    project.archive = !project.archive;
    const projectar = await project.save();
    const nom = projectar.titre

    // Redirect back to the previous page or a confirmation page
    res.redirect(`/project?nom=${encodeURIComponent(nom)}&message=${project.archive ? 'archived' : 'unarchived'}`);
  } catch (error) {
    console.error("Error toggling archive status:", error);
    res.status(500).send("Server error");
  }
};
exports.voirModule = async(req, res) =>{
  try {
    const id = req.params.id;
    const project = await Project.findById(id).populate("cours").exec();
    
    res.render('project/voir',{project: project,  pages: "/project"})
  } catch (error) {
    
  }
}
