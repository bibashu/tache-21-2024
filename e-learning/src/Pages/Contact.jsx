import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import elearning from "../assets/imgs/learning.png";
import "./Apropos.css";
import thumb from "../assets/imgs/thumb.png";
import about from "../assets/imgs/about.png";
import "../App.css";
import mile from "../assets/imgs/mile.png";
import milestone from "../assets/imgs/milestone.png";
import mentor from "../assets/imgs/mentor.png";
import students from "../assets/imgs/students.png";
import Course from "../assets/imgs/course (1).png";
import award from "../assets/imgs/award.png";
import jiniya from "../assets/imgs/jiniya.png";
import jakaria from "../assets/imgs/jakaria.png";
import learning from "../assets/imgs/learning.png";
import graphique from "../assets/imgs/graphique.jpg";
import web from "../assets/imgs/web.jpg";
import ui from "../assets/imgs/ui.jpg";

const Con = () => {
  const Navigate = useNavigate();

  return (
    <div className="container-fluid Banner">
      <div className="container-fluid fixed-top shadow-lg  ">
        <div className="container-fluid px-0  ">
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
            <div
              className="collapse navbar-collapse bg-white"
              id="navbarCollapse"
            >
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

      <div className="container-fluid BANNER">
        <section class=" ">
          <div class="container ">
            <div class="row align-items-center ">
              <div class="col-lg-6">
                <div class="banner__content">
                  <h2 class="section-title"> À propos</h2>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="banner__breadcrumb d-flex justify-content-start justify-content-lg-end">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <a
                          href=""
                          className="text-decoration-none"
                          onClick={() => Navigate("/Home")}
                        >
                          Accueil
                        </a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">
                        {" "}
                        À propos
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

     
    

      <section className="Newsletter section bg-img">
        <div className="container">
          <div className="row justify-content-center CTN">
            <div className="col-lg-10 col-xxl-8">
              <div className="newsletter__content">
                <div className="section__header text-center">
                  <h2 class="section__title">
                    Restez connecté avec Elearning pour vous tenir informé
                  </h2>
                  <p className="py-3">
                    Abonnez-vous à notre newsletter pour recevoir des offres
                    exceptionnelles et des mises à jour !
                  </p>
                </div>
                <form action="#" method="post" autocomplete="off">
                  <div className="newsletter-inputs py-5">
                    <input
                      type="email"
                      name="newsletter__mail"
                      id="newsletterMail"
                      placeholder="Votre Adresse Email"
                      required="required"
                    />
                    <button type="submit" className="bTN">
                      S'abonner
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="Footer py-5">
        <div className="container">
          <div className="row align-items-center g-5 mb-5">
            <div className="col-lg-3 col-sm-3">
              <div className="footer-item text-start">
                <img
                  src={learning}
                  className="img-fluid mb-1 logo"
                  alt="logo"
                />
                <p className="mb-3 text-start text-white  TXT">
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
            <div className="col-lg-3 col-sm-3 mb-5 ">
              <div className="d-flex flex-column text-start footer-item mb-5 text-white">
                <h2 className="mb-4">Bureau</h2>
                <a
                  className="btn-link text-decoration-none mb-2 text-white"
                  href=""
                >
                  +221778952500
                </a>
                <a
                  className="btn-link text-decoration-none mb-2 text-white"
                  href=""
                >
                  +221772555521
                </a>
                <a
                  className="btn-link text-decoration-none mb-2 text-white"
                  href=""
                >
                  info@example.com
                </a>
                <a
                  className="btn-link text-decoration-none mb-2 text-white"
                  href=""
                >
                  nfo@example.com
                </a>
                <a
                  className="btn-link text-decoration-none mb-2 text-white"
                  href=""
                >
                  2231 Redbud Drive
                </a>
                <a
                  className="btn-link text-decoration-none mb-2 text-white"
                  href=""
                >
                  MON – FRI: 9 AM – 7 PM
                </a>
                <a className="btn-link text-decoration-none text-white" href="">
                  SAT – SUN: CLOSED
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-3 mb-5">
              <div className="d-flex flex-column text-start footer-item mb-5 text-white">
                <h2 className="mb-4">Liens Rapides</h2>
                <a
                  className="btn-link text-decoration-none mb-2 text-white"
                  href=""
                >
                  Accueil
                </a>
                <a
                  className="btn-link text-decoration-none mb-2 text-white"
                  href=""
                >
                  A propos
                </a>
                <a
                  className="btn-link text-decoration-none mb-2 text-white"
                  href=""
                >
                  Cours
                </a>
                <a
                  className="btn-link text-decoration-none mb-2 text-white"
                  href=""
                >
                  Instructeur
                </a>
                <a
                  className="btn-link text-decoration-none mb-2 text-white"
                  href=""
                >
                  FAQ
                </a>
                <a
                  className="btn-link text-decoration-none mb-4 text-white"
                  href=""
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-3 mb-5">
              <div className="footer-item mb-5">
                <h2 className="mb-4 text-white"> Cours Récents</h2>
                <div className="d-flex mb-3 align-items-center">
                  <div className="section-img">
                    <img
                      src={graphique}
                      className="img-fluid IMG"
                      alt="graphique"
                    />
                  </div>
                  <div className="section-title text-start ms-3 text-white">
                    <a>Design Graphique</a>
                    <p className="text-white">
                      <span className="me-2 text-white">$22</span> $30
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-3 align-items-center">
                  <div className="section-img">
                    <img src={web} className="img-fluid IMG" alt="web" />
                  </div>
                  <div className="section-title text-start ms-3 text-white">
                    <a>Developpement Web </a>
                    <p className="text-white">
                      <span className="me-2 text-white">$30</span>$35
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="section-img">
                    <img src={ui} className="img-fluid IMG" alt="ui" />
                  </div>
                  <div className="section-title text-start ms-3 text-white">
                    <a>UI/UX Design</a>
                    <p className="text-white">
                      <span className="me-3 text-white">$$25</span>$32
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <p className="text-black">
                Copyright<i className="bi bi-c-circle text-black"></i>
                <a href="#index.html" className="text-decoration-under-line">
                  2024 Elearning
                </a>
                , All right reserved.
              </p>
            </div>
            <div className="col-lg-6">
              <p className="text-black">
                Designed By{" "}
                <a href="#" className="text-decoration-under-line">
                  HTML Codex
                </a>{" "}
                Distributed By{" "}
                <a href="" className="text-decoration-under-line">
                  ThemeWagon
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
