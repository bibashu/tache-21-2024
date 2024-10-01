import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Pages/Form/Form";
import Home from "./Pages/Home/Home";

import Apropos from "./Pages/Apropos/Apropos";
import Faq from "./Pages/Faq/Faq";
import Contact from "./Pages/Contact/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>

      <Route path="/login" element={<Form />}></Route>

      <Route path="/Apropos" element={<Apropos />}></Route>

      <Route path="/Faq" element={<Faq />}></Route>

      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  </BrowserRouter>
);
