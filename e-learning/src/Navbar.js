import React from "react";
import  {useNavigate} from "react-router-dom";
import Button from "./Components/Button";
import learning from "./assets/imgs/learning.png";

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
                        <a class="nav-link mx-lg-3 active" aria-current="page" href="" onClick={() => Navigate("/Accueil.jsx")}>Accueil</a>
                      </li>
                      <div class="nav-item dropdown mx-lg-3">
                            <a href="#index.html" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Cous</a>
                           <div class="dropdown-menu m-0 bg-secondary rounded-0">
                                <a class="nav-item nav-link" href="/cours" >Cours</a>
                                <a class="nav-item nav-link" href="/cours-details">Cours details</a>
                            </div>
                       </div>
                       <div class="nav-item dropdown mx-lg-3">
                            <a href="#index.html" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Instructeurs</a>
                           <div class="dropdown-menu m-0 bg-secondary rounded-0">
                                <a class="nav-item nav-link" href="/instructeurs">Instructeurs</a>
                                <a class="nav-item nav-link" href="/inst-details">Instructeurs details</a>
                          </div>
                      </div>
                      <li class="nav-item">
                        <a class="nav-link mx-lg-3" href="/apropos" >A propos</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link mx-lg-3" href="/faq">FAQ</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link mx-lg-3" href="/contact">Contact</a>
                      </li>
                      
                    </ul>
                    <div class="m-3 me-3">
                      <Button class="btn login-button border btn-sm rounded bg-white me-4" type="button" onClick={() => Navigate("/contact")}>Connexion</Button>
                    </div>
                  </div>
              </div>
              <div class="m-3 me-3 bouton-dn">
                    <Button class="btn login-button border btn-sm rounded bg-white me-4" type="button" onClick={() => Navigate("/login")}>Connexion</Button>
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