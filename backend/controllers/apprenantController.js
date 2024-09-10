const Apprenant = require("../models/apprenant_Model");
const Cours = require("../models/Cours_Model");
const { sendEmail } = require('../Service/emailService');
exports.index = async (req, res) => {
  try {
    // Récupérer les domaines depuis la base de données
    const apprenants = await Apprenant.find().populate("cours").exec();

    const message = req.query.message || "";
    const archivedCount = apprenants.filter((apprenant) => apprenant.archive === true).length;
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
      pages: "/apprenant"
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
    
        // Créer un nouvel apprenant
        const newApprenant = new Apprenant({
          nom,
          prenom,
          email,
          password
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
    const emailSubject = 'Bienvenue !';
    const emailText = `
      Bonjour ${prenom},

      Votre compte a été créé avec succès. Voici vos informations de connexion :
      
      Email : ${email}
      Mot de passe : ${password}

      Veuillez changer votre mot de passe dès que possible pour des raisons de sécurité.

      Cordialement,
      L'équipe
    `;

    await sendEmail(email, emailSubject, emailText);
    
    
    res.redirect(`/apprenant?alert=success&nom=${encodeURIComponent(nom)}`);
      } catch (error) {
        console.error('Erreur lors de la création de l\'apprenant :', error);
        res.status(500).send('Erreur serveur');
      }
};

// Edit 
exports.edit = async (req, res) => {
    try {
        const apprenant = await Apprenant.findById(req.params.id);
        const cours = await Cours.find();
    
        // Préparer les IDs des cours de l'apprenant pour la vue
        const apprenantCoursIds = apprenant.cours.map(id => id.toString());
    
        res.render('apprenant/edit', {
          apprenant,
          cours,
          apprenantCoursIds ,
          pages: "/apprenant" // Envoyer les IDs préparés à la vue
        });
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        res.status(500).send('Erreur serveur');
      }
    };
// action modification
exports.editModule = async (req, res) => {
    try {
      const id = req.params.id;
      const { nom, prenom, email, password, coursIds } = req.body;
  
      // Trouver l'apprenant actuel
      const currentApprenant = await Apprenant.findById(id);
  
      if (!currentApprenant) {
        return res.status(404).send("Apprenant non trouvé");
      }
  
      // Convertir les IDs de cours en chaînes de caractères pour comparaison
      const newCoursIds = Array.isArray(coursIds) ? coursIds : [coursIds];
      const currentCoursIds = currentApprenant.cours.map(id => id.toString());
  
      // Mettre à jour l'apprenant
      const updatedModule = await Apprenant.findByIdAndUpdate(
        id,
        {
          nom,
          prenom,
          email,
          password,
          cours: newCoursIds, // Met à jour les cours sélectionnés
        },
        { new: true }
      );
  
      if (!updatedModule) {
        return res.status(404).send("Apprenant non trouvé");
      }
  
      // Mettre à jour les cours pour inclure ou exclure l'apprenant
      await Cours.updateMany(
        { _id: { $in: currentCoursIds.filter(id => !newCoursIds.includes(id)) } },
        { $pull: { apprenants: id } } // Retirer l'apprenant des cours non sélectionnés
      );
  
      await Cours.updateMany(
        { _id: { $in: newCoursIds.filter(id => !currentCoursIds.includes(id)) } },
        { $push: { apprenants: id } } // Ajouter l'apprenant aux cours sélectionnés
      );
  
     
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
    const nom = apprenant.prenom + ' ' + apprenant.nom
    res.redirect(`/apprenant?suppression=success&nom=${encodeURIComponent(nom)}`);
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
    const nom = apprenantar.prenom + ' '+ apprenantar.nom

    // Redirect back to the previous page or a confirmation page
    res.redirect(`/apprenant?nom=${encodeURIComponent(nom)}&message=${apprenant.archive ? 'archived' : 'unarchived'}`);
  } catch (error) {
    console.error("Error toggling archive status:", error);
    res.status(500).send("Server error");
  }
};
exports.voirModule = async(req, res) =>{
  try {
    const id = req.params.id;
    const apprenant = await Apprenant.findById(id).populate("cours").exec();
    
    res.render('apprenant/voir',{apprenant: apprenant,  pages: "/apprenant"})
  } catch (error) {
    
  }
}
