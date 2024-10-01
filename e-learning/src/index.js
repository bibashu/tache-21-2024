import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import './Pages/Accueil/accueil.css';
import './Navbar/navbar.css';
import Navbar from "./Navbar/Navbar";
import App from './App';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './Pages/Form';
// import Users from "./Pages/Users";
// import Home from './Pages/Home';
import Dashboard from 'Pages/dashboard/Dashboard';
import Livraison from 'Pages/dashboard/Livraison';

import Accueil from './Pages/Accueil/Accueil';
import Faq from "Pages/Faq/Faq";
import CoursDetails from './Pages/Cours-details/Cours-details';
import Instructeurs from './Pages/Instructeurs/Instructeurs';
import InstDetails from './Pages/Instructeurs-details/Inst-details';
import Contact from "./Pages/Contacts/Contact";
import Cours from "./Pages/Cours/Cours";
import Apropos from './Pages/Apropos/Apropos';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>

        <Route path='/' element={ <App />}> 
        </Route>

        <Route path='/login' element={ <Form />}> 
        </Route>
       {/* <Route path='/Users' element={ <Users />}> 
        </Route>*/}
       
        <Route path='/dashboard' element={ <Dashboard />}> 
        </Route>
        <Route path='/livraison' element={ <Livraison />}> 
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
     

      </Routes>

  </BrowserRouter>

);