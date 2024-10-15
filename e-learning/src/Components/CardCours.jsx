import React, { useEffect, useState } from "react";
import { sousDomaineAPI } from "api/api_sousDomaine"; // Mettez à jour le chemin en conséquence
import axios from "axios";

const CardCours = ({ userData }) => {
  const cours = userData?.cours;
  const [sousDomaines, setSousDomaines] = useState([]);
  const [demarreCours, setDemarreCours] = useState(null);
  const [message, setMessage] = useState(""); // État pour les messages d'alerte

  // Récupération des sous-domaines
  useEffect(() => {
    const fetchSousDomaines = async () => {
      try {
        const data = await sousDomaineAPI.fetchAll();
        setSousDomaines(data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des sous-domaines :",
          error
        );
      }
    };

    fetchSousDomaines();
  }, []);

  // Récupérer l'ID du cours démarré à partir de localStorage
  useEffect(() => {
    const storedCoursId = localStorage.getItem("demarreCours");
    if (storedCoursId) {
      setDemarreCours(storedCoursId);
    }
  }, []);

  // Vérifiez si cours est un tableau et s'il n'est pas vide
  if (!cours || !Array.isArray(cours) || cours.length === 0) {
    return <div>Aucun cours disponible</div>; // Message par défaut
  }

  // Fonction pour démarrer le cours
  const demarrageCours = async (coursId) => {
    try {
      const response = await axios.post(
        `https://tache-21-2024.onrender.com/apprenant/demarrerCours`,
        {
          userId: userData._id,
          coursId: coursId,
        }
      );
      console.log("Réponse du serveur:", response.data);

      setDemarreCours(coursId);
      localStorage.setItem("demarreCours", coursId); // Sauvegarder dans localStorage
      setMessage("Le cours a été démarré avec succès."); // Mettez à jour le message
    } catch (error) {
      console.error("Erreur lors du démarrage du cours :", error);
      setMessage(
        `Une erreur est survenue lors du démarrage du cours : ${
          error.response?.data.message || "Erreur inconnue."
        }`
      );
    }
  };

  return (
    <div>
      {message && <div className="alert alert-info">{message}</div>}{" "}
      {/* Affichage du message */}
      <div className="row">
        {cours.map((coursItem, index) => {
          console.log("Cours item:", coursItem); // Log pour déboguer
          console.log("ID du cours démarré:", demarreCours); // Log pour déboguer

          // Trouver le sous-domaine correspondant dans les données récupérées
          const sousDomaine =
            sousDomaines.find((sd) => sd._id === coursItem.sous_domaine) || {};
          const sousDomaineNom = sousDomaine.sousdomaine; // Accédez au nom du sous-domaine
          // Vérifiez si le cours a été démarré
          const isCoursDemarre = demarreCours === coursItem._id;
          console.log("Cours démarré?", isCoursDemarre); // Log pour déboguer

          return (
            <div className="col-md-4" key={index}>
              <div className="card card-post card-round">
                <img
                  className="card-img-top"
                  src="assets/img/blogpost.jpg"
                  alt="Card image cap"
                />
                <div class="progress progress-sm">
                  <div
                    className="progress-bar bg-warning w-25"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="card-body">
                  <div className="separator-solid"></div>
                  <p className="card-category text-black mb-1 fs-4 ">
                    <a href="#">
                      {coursItem.nom_cours || "Nom du cours indisponible"}
                      {sousDomaineNom ? ` (${sousDomaineNom})` : " "}
                    </a>
                  </p>
                  <h3 className="card-title fs-6 float-end mb-3">
                    <a href="#">
                      {" "}
                      Durée du cours: {coursItem.duree || "Durée non spécifiée"}
                    </a>
                  </h3>
                  <button
                    onClick={() => demarrageCours(coursItem._id)}
                    className="btn btn-success btn-rounded btn-sm fs-5"
                  >
                    {isCoursDemarre ? "Reprendre" : "Démarrer"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardCours;
