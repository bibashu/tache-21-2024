import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Pages/Contacts/contact.css';
import './Pages/Accueil/accueil.css';
import './Navbar/navbar.css';
import './Pages/Footer/footer.css';
import Navbar from "./Navbar/Navbar";
import App from './App';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Pages/Form/Form";
import Dashboard from "Pages/dashboard/Dashboard";
import Livraison from "Pages/dashboard/Livraison";
import PrivateRoute from "./Components/PrivateRoute";
import Projet from "Pages/dashboard/Projet";

import Accueil from './Pages/Accueil/Accueil';
import Faq from "Pages/Faq/Faq";
import CoursDetails from './Pages/Cours-details/Cours-details';
import Instructeurs from './Pages/Instructeurs/Instructeurs';
import InstDetails from './Pages/Instructeurs-details/Inst-details';
import Contact from "./Pages/Contacts/Contact";
import Cours from "./Pages/Cours/Cours";
import Apropos from './Pages/Apropos/Apropos';
import Quiz from './Pages/dashboard/Quizz/Quiz';
import CoursDash from 'Pages/dashboard/CoursDash';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>

      <Route path='/' element={<App />}>
      </Route>

        <Route path='/Accueil' element={ <Accueil />}> 
        </Route>

        <Route path='/login' element={ <Form />}> 
        </Route>
       
        <Route path='/faq' element={ <Faq />} > 
        </Route>

        <Route path='/cours' element={ <Cours/>} > 
        </Route>

        <Route path='/cours-details' element={ <CoursDetails/>} > 
        </Route>
        <Route path='/inst-details' element={ <InstDetails/>} > 
        </Route>

        <Route path='/instructeurs' element={ <Instructeurs/>} > 
        </Route>

        <Route path='/contact' element={ <Contact/>} > 
        </Route>

        <Route path='/apropos' element={ <Apropos/>} > 
        </Route>
       
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
   <Route
        path="/Quiz"
        element={
          <PrivateRoute>
            <Quiz />
          </PrivateRoute>
        }
      />      <Route
        path="/coursdash"
        element={
          <PrivateRoute>
            <CoursDash />
          </PrivateRoute>
        }
      />


     

    </Routes>

  </BrowserRouter>
);