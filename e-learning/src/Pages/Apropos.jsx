import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import elearning from "../assets/imgs/learning.png";

import '../App.css';

const Apropos = () => {
  const Navigate = useNavigate();

  return (
    <div className="container-fluid fixed-top shadow-lg  ">
      <div className="container-fluid px-0  " >
        <nav className="navbar navbar-light bg-white navbar-expand-xl mx-5 Nav">
          <a className="navbar-brand" href="index.html">
          <img className="elearning img-fluid" src={elearning} />
          </a>
          <button
            className="navbar-toggler py-2 px-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars text-primary"></span>
          </button>
          <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
            <div className="navbar-nav mx-auto">
              <a className="nav-item nav-link active" href="index.html">
                Accueil
              </a>
              <div className="nav-item dropdown mx-3">
                <a
                  href="#index.html"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Cours
                </a>
                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                  <a className="nav-item nav-link" href="cart.html">
                    Cours
                  </a>
                  <a className="nav-item nav-link" href="checkout.html">
                    Details Cours
                  </a>
                </div>
              </div>
              <div className="nav-item dropdown mx-3">
                <a
                  href="#index.html"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Instructeur
                </a>
                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                  <a className="nav-item nav-link" href="cart.html">
                    Instructeur
                  </a>
                  <a className="nav-item nav-link" href="checkout.html">
                    Details Instructeur
                  </a>
                </div>
              </div>
              <a className="nav-item nav-link mx-3" href=""  onClick={() => Navigate("/Apropos")}>
                 À propos
              </a>
              <a className="nav-item nav-link " href="" onClick={() => Navigate("/Faq.jsx")}>
                 FAQ
              </a>
              <a className="nav-item nav-link " href="" onClick={() => Navigate("/Contact.jsx")}>
                 Contact
              </a>
            </div>
               <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Button
              className="btn Login-button border-orange me-2 btn-lg px-4"
             onClick={() => Navigate("/login")}
           >
            Connexion{" "}
           </Button>
            </div>
          </div>
        </nav>

      </div>
   
        <section class="banner  py-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="banner__content">
                        <h2 class="section-title">  À propos</h2>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="banner__breadcrumb d-flex justify-content-start justify-content-lg-end">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="" className="text-decoration-none"
                                     onClick={() => Navigate("/Home")}>Accueil</a>
                                    </li>
                                <li class="breadcrumb-item active" aria-current="page">  À propos</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>





  );
};

export default Apropos;
