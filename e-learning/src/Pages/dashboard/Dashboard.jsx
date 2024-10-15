import Navbar from "Components/sidebar/Sidebar";
import Layout from "Layouts/Layout";
import s from "./style.module.css";
import Cards from "Components/Cards";
import CardCours from "Components/CardCours";
import { useEffect, useState } from "react";
import axios from "axios";


const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]); // Ajouter un état pour les cours

  useEffect(() => {
    const token = localStorage.getItem("authToken");
   

    const fetchApprenantData = async () => {
      try {
        const response = await axios.get(
          "https://tache-21-2024.onrender.com/apprenant/profile",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          }
        );

        // Récupérer les données de l'apprenant
        const userData = response.data;        
        setUser(userData);

        setCourses(userData.courses); // Assigner les cours récupérés
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de l'apprenant:",
          error
        );
      }
    };

    // Appeler la fonction pour récupérer les données
    fetchApprenantData();
  }, []);

  return (
    <Layout userData={user}>
      <div class="container">
        <div class="page-inner">
          <Cards />
          {/* Les cours inscrites */}
          <div className="container mt-3 mb-5 shadow ps-5">
            <h1 >Mes cours</h1>
            <div className="row ">
              <CardCours userData={user} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
