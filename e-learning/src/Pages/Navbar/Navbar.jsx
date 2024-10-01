import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import learning from "./learning.png";

import "../Navbar/Navbar.css";

const Navbar = () => {
  const Navigate = useNavigate();

  return (
    <div className="container-fluid fixed-top shadow-lg  ">
      <div className="container-fluid px-0  ">
        <nav className="navbar navbar-light bg-white navbar-expand-xl mx-5 Nav">
          <a className="navbar-brand" href="" onClick={() => Navigate("/")}>
            <img className="learning img-fluid" src={learning} />
          </a>
          <button
            className="navbar-toggler py-2 px-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars text-primary"></span>
          </button>
          <div
            className="collapse navbar-collapse bg-white"
            id="navbarCollapse"
          >
            <div className="navbar-nav mx-auto">
              <a
                className="nav-item nav-link active"
                href=""
                onClick={() => Navigate("/")}
              >
                Accueil
              </a>
              <div className="nav-item dropdown mx-3">
                <a
                  href=""
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Cours
                </a>
                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                  <a className="nav-item nav-link" href="">
                    Cours
                  </a>
                  <a className="nav-item nav-link" href="">
                    Details Cours
                  </a>
                </div>
              </div>
              <div className="nav-item dropdown mx-3">
                <a
                  href=""
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Instructeur
                </a>
                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                  <a className="nav-item nav-link" href="">
                    Instructeur
                  </a>
                  <a className="nav-item nav-link" href="">
                    Details Instructeur
                  </a>
                </div>
              </div>
              <a
                className="nav-item nav-link mx-3"
                href=""
                onClick={() => Navigate("/Apropos")}
              >
                À propos
              </a>
              <a
                className="nav-item nav-link "
                href=""
                onClick={() => Navigate("/Faq")}
              >
                FAQ
              </a>
              <a
                className="nav-item nav-link "
                href=""
                onClick={() => Navigate("/Contact")}
              >
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
    </div>
  );
};

export default Navbar;
