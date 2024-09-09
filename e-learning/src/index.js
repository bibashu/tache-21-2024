 import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './Pages/Form';
import Sign from './Pages/Sign';
import Users from './Pages/Users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>

        <Route path='/' element={ <App />}> 
        </Route>

        <Route path='/login' element={ <Form />}> 
        </Route>
        <Route path='/sign' element={ <Sign />}> 
        </Route>
        <Route path='/Users' element={ <Users />}> 
        </Route>

      </Routes>

  </BrowserRouter>

);