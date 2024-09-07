const Quizz = require("../models/quizz_Model");
const Cours = require("../models/Cours_Model");

exports.index = async (req, res) => {
  try {
    // Récupérer les domaines depuis la base de données
    const quizzs = await Quizz.find().populate("cours").exec();

    const message = req.query.message || "";
    const archivedCount = quizzs.filter(
      (quizz) => quizz.archive === true
    ).length;
    const unArchivedCount = quizzs.filter(
      (quizz) => quizz.archive === false
    ).length;
    const totalModule = quizzs.length;
    // Formater les dates
    quizzs.forEach((quizz) => {
      const dateUpdated = new Date(quizz.updatedAt);
      const dateCreated = new Date(quizz.createdAt);

      quizz.formattedUpdatedAt = dateUpdated.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      quizz.formattedCreatedAt = dateCreated.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    });

    // Rendre la vue avec les données
    res.render("quizz/index", {
      quizzs,
      message,
      archivedCount,
      unArchivedCount,
      totalModule,
      pages: "/quizz",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// pages  les ajoues

exports.add = async (req, res) => {
  const cours = await Cours.find({});

  res.render("quizz/add", { cours: cours, pages: "/quizz" });
};
// Ajouter des données
exports.submitModule = async (req, res) => {
  try {
    // Extraction des données du corps de la requête
    const { titre, questions, description, coursId } = req.body;
    // Transformer les options et les questions en format attendu
    const formattedQuestions = questions.map((question) => ({
      questionText: question.questionText,
      options: question.options.map((option) => ({
        optionText: option.optionText,
        isCorrect: option.isCorrect,
      })),
      correctAnswer: question.correctAnswer,
    }));

    //   console.log(req.body.questions[0].options);    // Vérifier si le domaine existe
    const cours = await Cours.findById(coursId);

    if (!cours) {
      return res.status(404).send("quizz non trouvé");
    }

    // Créer une nouvelle instance du modèle SousDomaine
    const newQuizz = new Quizz({
      titre,
      questions: formattedQuestions,
      description,
      cours: cours._id, // Référence au cours
    });

    // Sauvegarder le sous-domaine dans la base de données
    await newQuizz.save();

    // Rediriger vers la liste des sous-domaines ou une page de succès
    const nom = "Quizz";
    res.redirect(`/quizz?alert=success&nom=${encodeURIComponent(nom)}`);
  } catch (error) {
    console.error("Erreur lors de l'ajout du quizz:", error);
    res.status(500).send("Erreur serveur");
  }
};

// Edit domaine
exports.edit = async (req, res) => {
  try {
    const id = req.params.id;
    // Récupère l'ID du domaine depuis les paramètres de la requête

    const quizz = await Quizz.findById(id).populate("cours").exec();
    const cours = await Cours.find({});
    // Trouve le domaine spécifique par son ID

    if (!quizz) {
      return res.status(404).send("quizz non trouvé");
    }

    res.render("quizz/edit", { quizz: quizz, cours: cours, pages: "/cours" });
    // Rendu de la vue d'édition avec les détails du domaine
  } catch (error) {
    console.error("Erreur lors de la récupération du quizz:", error);
    res.status(500).send("Erreur serveur");
  }
};
// action modification
exports.editModule = async (req, res) => {
  try {
    const id = req.params.id;
    const { titre, questions, description, coursId } = req.body;

    console.log(req.body);
    const cours = await Cours.findById(coursId);

    const updatedModule = await Quizz.findByIdAndUpdate(
      id,
      {
        titre,
        questions,

        description,
        cours: coursId,
      },
      { new: true }
    );
    // console.log(updatedModule);

    if (!updatedModule) {
      return res.status(404).send("quizz non trouvé");
    }
    // console.log(cours);

    const nom = "Quizz";
    res.redirect(`/quizz?modifier=success&nom=${encodeURIComponent(nom)}`);
  } catch (error) {
    console.error("Erreur lors de la mise à jour du domaine:", error);
    res.status(500).send("Erreur serveur");
  }
};

exports.supprimerModule = async (req, res) => {
  try {
    const id = req.params.id;
    const quizz = await Quizz.findByIdAndDelete(id);
    const nom = quizz.titre;
    res.redirect(`/quizz?suppression=success&nom=${encodeURIComponent(nom)}`);
  } catch (error) {
    console.error("Erreur lors de la suppression du quizz:", error);
    res.status(500).send("Erreur serveur");
  }
};
// recupération des données domaine avec json
exports.apiModule = async (req, res) => {
  try {
    const quizz = await Quizz.find({});
    res.status(200).json(quizz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// arhcive
exports.toggleArchive = async (req, res) => {
  try {
    const id = req.params.id;
    const quizz = await Quizz.findById(id);

    if (!quizz) {
      return res.status(404).send("quizz not found");
    }

    // Toggle the archive status
    quizz.archive = !quizz.archive;
    const quizzz = await quizz.save();
    const nom = quizz.titre;

    // Redirect back to the previous page or a confirmation page
    res.redirect(
      `/quizz?nom=${encodeURIComponent(nom)}&message=${
        quizz.archive ? "archived" : "unarchived"
      }`
    );
  } catch (error) {
    console.error("Error toggling archive status:", error);
    res.status(500).send("Server error");
  }
};
// gerer les tentative
exports.submitAttempt = async (req, res) => {
  try {
    const { quizzId, answers } = req.body;

    // Trouver le quiz
    const quizz = await Quizz.findById(quizzId);
    if (!quizz) {
      return res.status(404).send("Quiz non trouvé");
    }

    // Vérifier les réponses et calculer le score
    let score = 0;
    quizz.questions.forEach((question, index) => {
      const correctAnswer = question.correctReponse;
      const userAnswer = answers[index].selectedOption;
      if (userAnswer === correctAnswer) {
        score++;
      }
    });

    // Incrémenter le nombre de tentatives
    quizz.nombreTentatives++;
    await quizz.save();

    // Sauvegarder la tentative si nécessaire
    // const attempt = new Attempt({
    //   user: req.user._id,
    //   quizz: quizz._id,
    //   answers,
    //   score,
    // });
    // await attempt.save();

    res.json({
      score,
      totalQuestions: quizz.questions.length,
      nombreTentatives: quizz.nombreTentatives,
    });
  } catch (error) {
    console.error("Erreur lors de la soumission de la tentative:", error);
    res.status(500).send("Erreur serveur");
  }
};
