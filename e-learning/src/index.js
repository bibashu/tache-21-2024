import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './Pages/Form';
import Dashboard from 'Pages/dashboard/Dashboard';
import Livraison from 'Pages/dashboard/Livraison';
import Home from './Pages/Home';
 import Apropos from './Pages/Apropos';
 import Faq from './Pages/Faq';
 import Contact from './Pages/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>

        <Route path='/' element={ <App />}> 
        </Route>

        <Route path='/login' element={ <Form />}> 
        </Route> 

       <Route path='/Apropos' element={ <Apropos />}> 
        </Route> 
     
        <Route path='/Faq' element={ <Faq />}> 
        </Route> 

        <Route path='/Contact' element={ <Contact />}> 
        </Route> 
        <Route path='/' element={ <Home />}> 
        </Route> 
        <Route path='/dashboard' element={ <Dashboard />}> 
        </Route>
        <Route path='/livraison' element={ <Livraison />}> 
        </Route>

      

      </Routes>

  </BrowserRouter>

);