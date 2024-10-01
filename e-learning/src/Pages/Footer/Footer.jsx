import React from "react";
import "../Footer/Footer.css";
import graphique from "./graphique.jpg";
import web from "./web.jpg";
import ui from "./ui.jpg";
import learning from "./learning.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const Navigate = useNavigate();
  return (
    <div>
      <footer className="footer py-5">
        <div className="container">
          <div className="row align-items-center g-5 mb-5">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer-item text-start">
                <img
                  src={learning}
                  className="img-fluid mb-1 logo"
                  alt="logo"
                />
                <p className="mb-3 text-start  TXT">
                  Elearning est l'une des principales plateformes de
                  développement des compétences en e-learning au monde. Nous
                  nous engageons à éradiquer le chômage dans le monde et à créer
                  des ressources humaines mondiales grâce au développement des
                  compétences.
                </p>
                <div className="d-flex justify-content-end ICON">
                  <a className="btn me-2 hover" href="">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a className="btn me-2" href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a className="btn me-2" href="">
                    <i className="bi bi-youtube"></i>
                  </a>
                  <a className="btn" href="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-5">
              <div className="d-flex flex-column text-start footer-item mb-5">
                <h2 className="mb-4">Bureau</h2>
                <a className="btn-link text-decoration-none mb-2" href="">
                  +221778952500
                </a>
                <a className="btn-link text-decoration-none mb-2" href="">
                  +221772555521
                </a>
                <a className="btn-link text-decoration-none mb-2" href="">
                  info@example.com
                </a>
                <a className="btn-link text-decoration-none mb-2" href="">
                  nfo@example.com
                </a>
                <a className="btn-link text-decoration-none mb-2" href="">
                  2231 Redbud Drive
                </a>
                <a className="btn-link text-decoration-none mb-2" href="">
                  MON – FRI: 9 AM – 7 PM
                </a>
                <a className="btn-link text-decoration-none" href="">
                  SAT – SUN: CLOSED
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-5">
              <div className="d-flex flex-column text-start footer-item mb-5">
                <h2 className="mb-4">Liens Rapides</h2>
                <a className="btn-link text-decoration-none mb-2" href="">
                  Accueil
                </a>
                <a className="btn-link text-decoration-none mb-2" href="">
                  A propos
                </a>
                <a className="btn-link text-decoration-none mb-2" href="">
                  Cours
                </a>
                <a className="btn-link text-decoration-none mb-2" href="">
                  Instructeur
                </a>
                <a className="btn-link text-decoration-none mb-2" href="">
                  FAQ
                </a>
                <a className="btn-link text-decoration-none mb-4" href="">
                  Contact
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-5">
              <div className="footer-item mb-5">
                <h2 className="mb-4"> Cours Récents</h2>
                <div className="d-flex mb-3 align-items-center">
                  <div className="section-img">
                    <img
                      src={graphique}
                      className="img-fluid IMG"
                      alt="graphique"
                    />
                  </div>
                  <div className="section-title text-start ms-3">
                    <a>Design Graphique</a>
                    <p>
                      <span className="me-2">$22</span> $30
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-3 align-items-center">
                  <div className="section-img">
                    <img src={web} className="img-fluid IMG" alt="web" />
                  </div>
                  <div className="section-title text-start ms-3">
                    <a>Developpement Web </a>
                    <p>
                      <span className="me-2">$30</span>$35
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="section-img">
                    <img src={ui} className="img-fluid IMG" alt="ui" />
                  </div>
                  <div className="section-title text-start ms-3">
                    <a>UI/UX Design</a>
                    <p>
                      <span className="me-3">$$25</span>$32
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-10 col-md-12 col-sm-12">
              <p className="text-black text-end">
                Copyright<i className="bi bi-c-circle text-black"></i>
                <a
                  href=""
                  className="text-decoration-none"
                  onClick={() => Navigate("/")}
                >
                  2024 Elearning
                </a>
                , All right reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
