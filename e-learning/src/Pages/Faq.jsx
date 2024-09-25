import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import elearning from "../assets/imgs/learning.png";
import "./Apropos.css";
import thumb from "../assets/imgs/thumb.png";
import about from "../assets/imgs/about.png";
import "../App.css";

import mentor from "../assets/imgs/mentor.png";
import students from "../assets/imgs/students.png";
import Course from "../assets/imgs/course (1).png";
import award from "../assets/imgs/award.png";

import learning from "../assets/imgs/learning.png";
import graphique from "../assets/imgs/graphique.jpg";
import web from "../assets/imgs/web.jpg";
import ui from "../assets/imgs/ui.jpg";

const Faq = () => {
  const Navigate = useNavigate();

  return (
    <div className="container-fluid BannerI">
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
                <a className="nav-item nav-link active" href=""
                   onClick={() => Navigate("/")}>
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
        <section className=" ">
          <div className="container ">
            <div className="row align-items-center ">
              <div className="col-lg-6">
                <div className="banner__content">
                  <h2 className="section-title">FAQ</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner__breadcrumb d-flex justify-content-start justify-content-lg-end">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a
                          href=""
                          className="text-decoration-none"
                          onClick={() => Navigate("/Home")}
                        >
                          Accueil
                        </a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        {" "}
                        FAQ
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="faq section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section__header">
                <h4 className="section__title">Question fréquemment posée</h4>
                <p className="section__sub-title py-4">
                
                   À l'ère de « tout est possible », pourquoi appelez-vous ?
                  vous-même « impossible » ? Développez vos compétences à la maison dès maintenant - à partir de
                  les meilleurs experts !
                </p>
              </div>
            </div>
          </div>
          <div className="row row-margin">
            <div className="col-lg-6">
              <div className="faq__content col-margin">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item py-3">
                    <h5 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                       Que doit inclure un site Web d'apprentissage en ligne ?
                      </button>
                    </h5>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    
                    >
                      <div className="accordion-body">
                        <p>
                          {" "}
                          Si vous oubliez vos informations de connexion RQA, veuillez vous rendre sur la page
                          Site RQA et cliquez sur 'Mon compte', Mes coordonnées puis
                          changer le mot de passe.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item py-3">
                    <h5 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                       Comment acheter un cours ?
                      </button>
                    </h5>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    
                    >
                      <div className="accordion-body">
                        <p>
                          {" "}
                          Si vous oubliez vos informations de connexion RQA, veuillez vous rendre sur la page
                          Site RQA et cliquez sur 'Mon compte', Mes coordonnées puis
                          changer le mot de passe.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item py-3">
                    <h5 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                       Dois-je payer la TVA ?
                      </button>
                    </h5>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    
                    >
                      <div className="accordion-body">
                        <p>
                          {" "}
                          Si vous oubliez vos informations de connexion RQA, veuillez vous rendre sur la page
                          Site RQA et cliquez sur 'Mon compte', Mes coordonnées puis
                          changer le mot de passe.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item py-3">
                    <h5 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                       Comment accéder aux cours que j'ai payés ?
                      </button>
                    </h5>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          {" "}
                          Si vous oubliez vos informations de connexion RQA, veuillez vous rendre sur la page
                          Site RQA et cliquez sur 'Mon compte', Mes coordonnées puis
                          changer le mot de passe.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq__content col-margin">
                <div className="accordion" id="accordionExampleTwo">
                  <div className="accordion-item py-3">
                    <h5 className="accordion-header" id="headingTwoOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwoOne"
                        aria-expanded="true"
                        aria-controls="collapseTwoOne"
                      >
                      Que doit inclure un site Web d'apprentissage en ligne ?

                      </button>
                    </h5>
                    <div
                      id="collapseTwoOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingTwoOne"
                      data-bs-parent="#accordionExampleTwo"
                    >
                      <div className="accordion-body">
                        <p>
                          {" "}
                          Si vous oubliez vos informations de connexion RQA, veuillez vous rendre sur la page
                          Site RQA et cliquez sur 'Mon compte', Mes coordonnées puis
                          changer le mot de passe.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item py-3">
                    <h5 className="accordion-header" id="headingTwoTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwoTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwoTwo"
                      >
                        Comment acheter un cours ?
                      </button>
                    </h5>
                    <div
                      id="collapseTwoTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwoTwo"
                      data-bs-parent="#accordionExampleTwo"
                    >
                      <div className="accordion-body">
                        <p>
                          {" "}
                          Si vous oubliez vos informations de connexion RQA, veuillez vous rendre sur la page
                          Site RQA et cliquez sur 'Mon compte', Mes coordonnées puis
                          changer le mot de passe.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item py-3">
                    <h5 className="accordion-header" id="headingTwoThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwoThree"
                        aria-expanded="false"
                        aria-controls="collapseTwoThree"
                      >
                       Dois-je payer la TVA ?
                      </button>
                    </h5>
                    <div
                      id="collapseTwoThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwoThree"
                      data-bs-parent="#accordionExampleTwo"
                    >
                      <div className="accordion-body">
                        <p>
                          {" "}
                          Si vous oubliez vos informations de connexion RQA, veuillez vous rendre sur la page
                          Site RQA et cliquez sur 'Mon compte', Mes coordonnées puis
                          changer le mot de passe.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item py-3">
                    <h5 className="accordion-header" id="headingTwoFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwoFour"
                        aria-expanded="false"
                        aria-controls="collapseTwoFour"
                      >
                      Comment accéder aux cours que j'ai payés ?
                      </button>
                    </h5>
                    <div
                      id="collapseTwoFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwoFour"
                      data-bs-parent="#accordionExampleTwo"
                    >
                      <div className="accordion-body">
                        <p>
                          {" "}
                          Si vous oubliez vos informations de connexion RQA, veuillez vous rendre sur la page
                          Site RQA et cliquez sur 'Mon compte', Mes coordonnées puis
                          changer le mot de passe.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default Faq;
