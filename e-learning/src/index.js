import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './Pages/Form';
import Users from './Pages/Users';
import Home from './Pages/Home';
import Dashboard from 'Pages/dashboard/Dashboard';
import Livraison from 'Pages/dashboard/Livraison';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>

        <Route path='/' element={ <App />}> 
        </Route>

        <Route path='/login' element={ <Form />}> 
        </Route>
       
        <Route path='/Users' element={ <Users />}> 
        </Route>
        <Route path='/dashboard' element={ <Dashboard />}> 
        </Route>
        <Route path='/livraison' element={ <Livraison />}> 
        </Route>
     

      </Routes>

  </BrowserRouter>

);