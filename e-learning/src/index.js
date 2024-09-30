import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Pages/Form";
import Users from "./Pages/Users";
import Dashboard from "Pages/dashboard/Dashboard";
import Livraison from "Pages/dashboard/Livraison";
import PrivateRoute from "./Components/PrivateRoute";
import Projet from "Pages/dashboard/Projet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Form />} />
      <Route path="/Users" element={<Users />} />

      {/* Routes protégées */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/livraison"
        element={
          <PrivateRoute>
            <Livraison />
          </PrivateRoute>
        }
      />
      <Route
        path="/projet"
        element={
          <PrivateRoute>
            <Projet />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);
