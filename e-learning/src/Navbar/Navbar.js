import React from "react";
import  {useNavigate} from "react-router-dom";
import Button from "../Components/Button";
import learning from "./navbar-img/learning.png";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const Navigate = useNavigate();

  return (
    <div className="container-fluid container-fluid-1 fixed-top bg-white  px-0">
        <nav class="navbar navbar-expand-lg shadow bg-white px-5">
            <div class="container-fluid">
              <a class="navbar-brand me-auto " href="#"><img src={learning}  className="learning img-fluid" alt="logo"/></a>
              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img src={learning}  className="learning img-fluid" alt="logo"/></h5>
                      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                      <li class="nav-item">
                        <Link class="nav-link mx-lg-2 active" aria-current="page" to="/">Accueil</Link>
                      </li>
                      <div class="nav-item dropdown mx-lg-2">
                            <Link to="accueil" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Cous</Link>
                           <div class="dropdown-menu m-0 bg-secondary rounded-0">
                                <Link class="nav-item nav-link" to="/cours" >Cours</Link>
                                <Link class="nav-item nav-link" to="/cours-details">Cours details</Link>
                            </div>
                      </div>
                      <div class="nav-item dropdown mx-lg-2">
                            <Link href="accueil" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Instructeurs</Link>
                           <div class="dropdown-menu m-0 bg-secondary rounded-0">
                                <Link class="nav-item nav-link" to="/instructeurs">Instructeurs</Link>
                                <Link class="nav-item nav-link" to="/inst-details">Instructeurs details</Link>
                          </div>
                      </div>
                      <li class="nav-item">
                        <Link class="nav-link mx-lg-2" to="/apropos" >A propos</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link mx-lg-2" to="/faq">FAQ</Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link mx-lg-2" to="/contact">Contact</Link>
                      </li>
                      
                    </ul>
                    <div class="m-3 me-3">
                        <button class="btn login-button cmn-button cmn-button--secondary rounded me-4"
                        type="button" onClick={() => Navigate("/login")}>
                          Connexion
                        </button>
                    </div>
                  </div>
              </div>
              <div class="m-3 me-3 bouton-dn">
                    <button class="btn login-button  cmn-button--secondary  rounded me-4" type="button" onClick={() => Navigate("/login")}>Connexion</button>
              </div>
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
            </div>
        </nav>
      
    </div>
  );
};

export default Navbar;