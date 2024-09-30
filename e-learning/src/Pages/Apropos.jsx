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

const Apropos = () => {
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
                    href="#index.html"
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

      <div className="container-fluid BANNER">
        <section class=" ">
          <div class="container ">
            <div class="row align-items-center ">
              <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="banner__content">
                  <h2 class="section-title"> À propos</h2>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="banner__breadcrumb d-flex justify-content-start justify-content-lg-end">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <a
                          href=""
                          className="text-decoration-none"
                          onClick={() => Navigate("/")}
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

      <div className="container about-thumb">
        <div className="row align-items-center">
          <div className="col-lg-8 col-xxl-6 col-md-12 col-sm-12 text-start">
            <div className="about__content">
              <img className="thumb img-fluid" src={thumb} />
              <div className="py-2">
                <h1 className="fw">
                  Connaître toutes les informations À propos de nous
                </h1>
                <p className="para">
                  Elearning est une entreprise de confiance qui se consacre à la
                  création de percées dans le domaine de l'informatique. Depuis
                  sa création, Elearning a connu un succès multiforme en 6
                  longues années. Contribuer à la construction du monde
                  numérique. L'une des principales sociétés informatiques au
                  monde joue un rôle important dans l'élimination du problème du
                  chômage depuis 2016.
                </p>

                <Button
                  className="BTN text-white btn-lg rounded px-3 me-2 "
                  type="button"
                  onClick={() => Navigate("")}
                >
                  Cours sur navigateur
                </Button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xxl-6 col-md-6 col-sm-12">
            <img className="about img-fluid" src={about} />
          </div>
        </div>
      </div>

      <section class="container-fluid  ">
        <div class="container-fluid milestone">
          <div class="row align-items-center row-margin">
            <div class="col-lg-6 col-md-12 col-sm-12">
              <div class="milestone__thumb  text-start text-lg-center">
                <img className="milestone img-fluid IMGE" src={milestone} />
              </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
              <div class="milestone__content col-margin">
                <img className="mile img-fluid" src={mile} />
                <h2 className="py-4 ">Notre étape</h2>
                <p>
                  Elearning a dispensé une formation informatique à plus de 99
                  000 personnes en plus de fournir une formation informatique de
                  qualité à des personnes de tous horizons dans le pays pendant
                  6 ans.
                </p>
                <Button
                  className="BTN text-white btn-lg rounded px-3 me-2 "
                  type="button"
                  onClick={() => Navigate("")}
                >
                  Cours sur navigateur
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid Counter">
        <div className="container">
          <div className="row align-items-start py-5 iCon">
            <div className="col-sm-12 col-lg-3 col-md-6">
              <div className="counter__single  text-center">
                <img className="mentor img-fluid" src={mentor} />
                <h2 className="section__title text-white">
                  <span className="counter-number text-white">555</span>+
                </h2>
                <p className="text-white PG">Nos mentor</p>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3 col-md-6">
              <div className="counter__single  text-center">
                <img className="students img-fluid" src={students} />
                <h2 className="section__title text-white">
                  <span className="counter-number text-white">99</span>k+
                </h2>
                <p className="text-white PG">Nos étudiants</p>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3 col-md-6">
              <div className="counter__single  text-center">
                <img className="Course img-fluid" src={Course} />
                <h2 className="section__title text-white">
                  <span className="counter-number text-white">107</span>+
                </h2>
                <p className="text-white PG">Nos cours</p>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3 col-md-6">
              <div className="counter__single  text-center">
                <img className="award img-fluid" src={award} />
                <h2 className="section__title text-white">
                  <span className="counter-number text-white">28</span>+
                </h2>
                <p className="text-white PG">Nos Primes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-2  p-0">
        <div className="container-fluid  Sct">
          <div className="container text-center SCT1">
            <div class="row ustify-content-center  mb-3">
              <div class="col-lg-12 col-md-12 col-sm-12 p-0">
                <h1 className="display-4 fw-bold mb-2">
                  Voyons ce que notre <br />
                  disent les étudiants ?
                </h1>
                <p class="mb-4">
                  Amenez votre carrière à des sommets uniques dans ce marché du
                  travail compétitif. Tout le <br />
                  les catégories dont vous avez besoin sont ici.
                </p>
              </div>
            </div>
            <div className="row">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div className="row">

                      <div className="col-lg-4 col-md-4 col-sm-12 testimonials ">
                        <div className="py-3">
                          <div className="testimonials-slider text-start">
                            <i class="bi bi-quote Slider"></i>
                          </div>
                          <div className="rating">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                          </div>
                          <p className="py-2">
                            J'ai suivi des cours sur quelques plateformes
                            d'apprentissage qui se concentraient trop sur des
                            sujets pertinents sujets et détournés de
                            l'essentiel, mais les cours d'Elearning
                          </p>
                          <div className="testimonials__slider-item__content-author d-flex  mx-2 py-4">
                            <img
                              className="jiniya img-fluid jin"
                              src={jiniya}
                            />
                            <div className="testimonials__slider mx-2 ">
                              <p>Jiniya Rahman</p>
                              <p className="designation">Font End Developer</p>
                              <div className="testimonials-slider text-end">
                                <i class="bi bi-quote Slider1"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-12 testimonials mx-3">
                        <div className="py-3">
                          <div className="testimonials-slider text-start">
                            <i class="bi bi-quote Slider"></i>
                          </div>
                          <div className="rating">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                          </div>
                          <p className="py-2">
                            Je ne connaissais pas grand chose en freelance.
                            Familiarisez-vous avec la conception et les projets
                            en prenant Cours Elearning Freelancing avec Adobe
                            Illustrator. À la fin
                          </p>
                          <div className="testimonials__slider-item__content-author d-flex  mx-2 py-4">
                            <img
                              className="jakaria img-fluid jin"
                              src={jakaria}
                            />
                            <div className="testimonials__slider mx-2 ">
                              <p>Mr Jakariya Hossen</p>
                              <p className="designation">Graphic Designer</p>
                              <div className="testimonials-slider text-end">
                                <i class="bi bi-quote Slider1"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-12 testimonials ">
                        <div className="py-3">
                          <div className="testimonials-slider text-start">
                            <i class="bi bi-quote Slider"></i>
                          </div>
                          <div className="rating">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                          </div>
                          <p className="py-4">
                            Nous trouvons généralement divers tutoriels en ligne
                            en anglais. Mais maintenant, sur la plateforme
                            Elearning, je peux apprenez facilement des cours
                            standards internationaux. Et à la fin du cours,
                          </p>
                          <div className="testimonials__slider-item__content-author d-flex  mx-2">
                            <img
                              className="jiniya img-fluid jin"
                              src={jiniya}
                            />
                            <div className="testimonials__slider mx-2">
                              <p>Huye Alvira</p>
                              <p className="designation">Student</p>
                              <div className="testimonials-slider text-end">
                                <i class="bi bi-quote Slider2"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div class="carousel-item">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12 testimonials ">
                        <div className="py-3">
                          <div className="testimonials-slider text-start">
                            <i class="bi bi-quote Slider"></i>
                          </div>
                          <div className="rating">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                          </div>
                          <p className="py-2">
                            J'ai suivi des cours sur quelques plateformes
                            d'apprentissage qui se concentraient trop sur des
                            sujets pertinents sujets et détournés de
                            l'essentiel, mais les cours d'Elearning
                          </p>
                          <div className="testimonials__slider-item__content-author d-flex  mx-2 py-4">
                            <img
                              className="jiniya img-fluid jin"
                              src={jiniya}
                            />
                            <div className="testimonials__slider mx-2 ">
                              <p>Jiniya Rahman</p>
                              <p className="designation">Font End Developer</p>
                              <div className="testimonials-slider text-end">
                                <i class="bi bi-quote Slider1"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-12 testimonials mx-3">
                        <div className="py-3">
                          <div className="testimonials-slider text-start">
                            <i class="bi bi-quote Slider"></i>
                          </div>
                          <div className="rating">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                          </div>
                          <p className="py-2">
                            Je ne connaissais pas grand chose en freelance.
                            Familiarisez-vous avec la conception et les projets
                            en prenant Cours Elearning Freelancing avec Adobe
                            Illustrator. À la fin
                          </p>
                          <div className="testimonials__slider-item__content-author d-flex  mx-2 py-4">
                            <img
                              className="jakaria img-fluid jin"
                              src={jakaria}
                            />
                            <div className="testimonials__slider mx-2 ">
                              <p>Mr Jakariya Hossen</p>
                              <p className="designation">Graphic Designer</p>
                              <div className="testimonials-slider text-end">
                                <i class="bi bi-quote Slider1"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-12 testimonials">
                        <div className="py-3">
                          <div className="testimonials-slider text-start">
                            <i class="bi bi-quote Slider"></i>
                          </div>
                          <div className="rating">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                          </div>
                          <p className="py-4">
                            Nous trouvons généralement divers tutoriels en ligne
                            en anglais. Mais maintenant, sur la plateforme
                            Elearning, je peux apprenez facilement des cours
                            standards internationaux. Et à la fin du cours,
                          </p>
                          <div className="testimonials__slider-item__content-author d-flex  mx-2">
                            <img
                              className="jiniya img-fluid jin"
                              src={jiniya}
                            />
                            <div className="testimonials__slider mx-2">
                              <p>Huye Alvira</p>
                              <p className="designation">Student</p>
                              <div className="testimonials-slider text-end">
                                <i class="bi bi-quote Slider2"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12 testimonials">
                        <div className="py-3">
                          <div className="testimonials-slider text-start">
                            <i class="bi bi-quote Slider"></i>
                          </div>
                          <div className="rating">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                          </div>
                          <p className="py-2">
                            J'ai suivi des cours sur quelques plateformes
                            d'apprentissage qui se concentraient trop sur des
                            sujets pertinents sujets et détournés de
                            l'essentiel, mais les cours d'Elearning
                          </p>
                          <div className="testimonials__slider-item__content-author d-flex  mx-2 py-4">
                            <img
                              className="jiniya img-fluid jin"
                              src={jiniya}
                            />
                            <div className="testimonials__slider mx-2 ">
                              <p>Jiniya Rahman</p>
                              <p className="designation">Font End Developer</p>
                              <div className="testimonials-slider text-end">
                                <i class="bi bi-quote Slider1"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-12 testimonials mx-3">
                        <div className="py-3">
                          <div className="testimonials-slider text-start">
                            <i class="bi bi-quote Slider"></i>
                          </div>
                          <div className="rating">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                          </div>
                          <p className="py-2">
                            Je ne connaissais pas grand chose en freelance.
                            Familiarisez-vous avec la conception et les projets
                            en prenant Cours Elearning Freelancing avec Adobe
                            Illustrator. À la fin
                          </p>
                          <div className="testimonials__slider-item__content-author d-flex  mx-2 py-4">
                            <img
                              className="jakaria img-fluid jin"
                              src={jakaria}
                            />
                            <div className="testimonials__slider mx-2 ">
                              <p>Mr Jakariya Hossen</p>
                              <p className="designation">Graphic Designer</p>
                              <div className="testimonials-slider text-end">
                                <i class="bi bi-quote Slider1"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-12 testimonials ">
                        <div className="py-3">
                          <div className="testimonials-slider text-start">
                            <i class="bi bi-quote Slider"></i>
                          </div>
                          <div className="rating">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                          </div>
                          <p className="py-4">
                            Nous trouvons généralement divers tutoriels en ligne
                            en anglais. Mais maintenant, sur la plateforme
                            Elearning, je peux apprenez facilement des cours
                            standards internationaux. Et à la fin du cours,
                          </p>
                          <div className="testimonials__slider-item__content-author d-flex  mx-2">
                            <img
                              className="jiniya img-fluid jin"
                              src={jiniya}
                            />
                            <div className="testimonials__slider mx-2">
                              <p>Huye Alvira</p>
                              <p className="designation">Student</p>
                              <div className="testimonials-slider text-end">
                                <i class="bi bi-quote Slider2"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Next</span>
                            </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 


         



      <section className="Newsletter section bg-img">
        <div className="container">
          <div className="row justify-content-center CTN">
            <div className="col-lg-10 col-xxl-8 col-md-12 col-sm-12">
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
            <div className="col-lg-3 col-sm-12 col-md-6">
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
            <div className="col-lg-3 col-sm-12 col-md-6 mb-5 ">
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
            <div className="col-lg-3 col-sm-12 col-md-6 mb-5">
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
            <div className="col-lg-3 col-sm-12 col-md-6 mb-5">
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
          <div className="col-lg-10 col-md-12 col-sm-12">
              <p className="text-black text-end">
                Copyright<i className="bi bi-c-circle text-black"></i>
                <a href="#index.html" className="text-decoration-none"  onClick={() => Navigate("/")}>
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

export default Apropos;
