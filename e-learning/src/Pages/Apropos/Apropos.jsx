import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import Layout from "../../Components/Layout";
import "../Apropos/Apropos.css";
import thumb from "./thumb.png";
import about from "./about.png";
import mile from "./mile.png";
import milestone from "./milestone.png";
import mentor from "./mentor.png";
import students from "./students.png";
import Course from "./course (1).png";
import award from "./award.png";
import jiniya from "./jiniya.png";
import jakaria from "./jakaria.png";

const Apropos = () => {
  const Navigate = useNavigate();

  return (
    <Layout>
      <div className="container-fluid Banner">
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
      </div>

      <div className="container about-thumb py-5">
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
                  <div className="newsletter-inputs py-5 px-5">
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
    </Layout>
  );
};

export default Apropos;
