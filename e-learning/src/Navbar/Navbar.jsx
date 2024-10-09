import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import learning from "./navbar-img/learning.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();

  return (
    <div className="container-fluid container-fluid-1 fixed-top bg-white  px-0">
      <nav className="navbar navbar-expand-lg shadow bg-white px-5">
        <div className="container-fluid">
          <a className="navbar-brand me-auto " href="#">
            <img src={learning} className="learning img-fluid" alt="logo" />
          </a>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img src={learning} className="learning img-fluid" alt="logo" />
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    className="nav-link mx-lg-2 active"
                    aria-current="page"
                    to="/"
                  >
                    Accueil
                  </Link>
                </li>
                <div className="nav-item dropdown mx-lg-2">
                  <Link
                    to="accueil"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Cours
                  </Link>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <Link className="nav-item nav-link" to="/cours">
                      Cours
                    </Link>
                    <Link className="nav-item nav-link" to="/cours-details">
                      Cours details
                    </Link>
                  </div>
                </div>
                <div className="nav-item dropdown mx-lg-2">
                  <Link
                    href="accueil"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Instructeurs
                  </Link>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <Link className="nav-item nav-link" to="/instructeurs">
                      Instructeurs
                    </Link>
                    <Link className="nav-item nav-link" to="/inst-details">
                      Instructeurs details
                    </Link>
                  </div>
                </div>
                <li className="nav-item">
                  <Link className="nav-link mx-lg-2" to="/apropos">
                    A propos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-lg-2" to="/faq">
                    FAQ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-lg-2" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="m-3 me-3">
                <button
                  className="btn login-button cmn-button cmn-button--secondary rounded me-4"
                  type="button"
                  onClick={() => Navigate("/login")}
                >
                  Connexion
                </button>
              </div>
            </div>
          </div>
          <div className="m-3 me-3 bouton-dn">
            <Button
              className="btn Login-button border-orange me-2 btn-lg px-4"
              onClick={() => Navigate("/login")}
            >
              Connexion{" "}
            </Button>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;