import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import  {useNavigate} from "react-router-dom";
import Button from "./Components/Button";
import learning from "./assets/imgs/learning.png";

const Navbar = () => {

  const Navigate = useNavigate();

  return (
    <div class="container-fluid fixed-top shadow-lg bg-white">
        <div class="container container-1 py-3 topbar d-none entete-navbar d-lg-block">
            <div class="d-flex justify-content-between px-3">
                <div class="top-info ps-2">
                    <small class="me-3"><i class="fas fa-map-marker-alt me-2 text-warning"></i> <a href="#" class="text-white text-decoration-none">BAKELI, Senegal</a></small>
                    <small class="me-3"><i class="fas fa-envelope me-2 text-warning"></i><a href="#" class="text-white text-decoration-none">Email@Example.com</a></small>
                </div>
                <div class="top-link pe-2">
                    <a href="#" class="text-white text-decoration-none text-lead"><small class="mx-2 "><i class="bi bi-facebook text-white"></i></small>/</a>
                    <a href="#" class="text-white text-decoration-none text-lead"><small class="mx-2"><i class="bi bi-twitter text-white"></i></small>/</a>
                    <a href="#" class="text-white text-decoration-none text-lead"><small class="ms-2"><i class="bi bi-linkedin text-white"></i></small></a>
                </div>
            </div>
        </div>
        <div class="container-fluid px-0 container-fluide">
            <nav class="navbar navbar-light bg-white navbar-expand-xl mx-5">
                <a class="navbar-brand" href="index.html"><img src={learning} className="img-fluid learning"/> </a>
                <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars text-primary"></span>
                </button>
                <div class="collapse navbar-collapse bg-white" id="navbarCollapse">
                    <div class="navbar-nav mx-auto">
                        <a class="nav-item nav-link  mx-3 active" href="index.html">Accueil</a>
                        <a class="nav-item nav-link mx-3" href="shop.html">Cours</a>
                        <div class="nav-item dropdown">
                            <a href="#index.html" class="nav-link mx-4 dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu m-0 bg-secondary rounded-0">
                                <a class="nav-item nav-link" href="cart.html">Cart</a>
                                <a class="nav-item nav-link" href="checkout.html">Chackout</a>
                                <a class="nav-item nav-link" href="testimonial.html">Testimonial</a>
                                <a class="nav-item nav-link" href="404-page.html">404 Page</a>
                            </div>
                        </div>
                        <a class="nav-item nav-link  mx-3" href="index.html">A Propos</a>
                        <a class="nav-item nav-link mx-3" href="contact.html">Contact</a>
                    </div>
                    <div class="m-3 me-0">
                        <button class="btn border btn-md-square rounded-pill bg-white me-4" onClick={() => Navigate("/user")}>Connexion</button>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  );
};

export default Navbar;