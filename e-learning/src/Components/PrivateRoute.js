import React from "react";
import { Navigate } from "react-router-dom";

// Fonction pour vérifier si l'utilisateur est authentifié
const isAuthenticated = () => {
  const token = localStorage.getItem("authToken"); // Vérifie si un token est présent dans le localStorage
  return !!token; // Retourne true si le token existe, sinon false
};

// Composant PrivateRoute pour protéger les routes
const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
