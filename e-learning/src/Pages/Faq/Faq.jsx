import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
//import recentone from "../assets/imgs/recentone.png";
//import recenttwo from "../assets/imgs/recenttwo.png";
//import recentthree from "../assets/imgs/recentthree.png";

const Faq = () => {
  const Navigate = useNavigate();

  return (
    <Layout>
      {/* BREADCRUMB*/}
      <div className="py-5">
        <div class="container pt-5">
          <div class="row pt-5 align-items-center">
            <div class="col-lg-6 col-sm-6">
              <div class="banner-content">
                <h1 class="section-title">Faq</h1>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="banner-breadcrumb d-flex justify-content-lg-end justify-content-sm-end">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/" className="text-decoration-none">
                        Accueil
                      </Link>
                    </li>
                    <li
                      class="breadcrumb-item active"
                      aria-current="faq"
                      onClick={() => Navigate("/Faq")}
                    >
                      Faq
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BREADCRUMB*/}

      <section className="faq section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-sm-12">
              <div className="section-header justify-content-center">
                <h2 className="section-title text-center mb-3">
                  Question fréquemment posée
                </h2>
                <p className="section-sub-title text-center mb-3">
                À l'ère de « tout est possible », pourquoi appelez-vous ?
                  vous-même « impossible » ? Développez vos compétences à la maison dès maintenant - à partir de
                  les meilleurs experts !
                </p>
              </div>
            </div>
          </div>
          <div className="row row-margin">
            <div className="col-lg-6 col-sm-12">
              <div className="faq-content col-margin">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                       
                Que doit inclure un site Web d'apprentissage en ligne ?
                      </button>
                    </h5>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p>
                          {" "}
                          Si vous oubliez vos informations de connexion RQA, veuillez vous rendre sur la page
                          Site RQA et cliquez sur 'Mon compte', Mes coordonnées puis
                          changer le mot de passe.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h5 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Comment suivre un cours ?
                      </button>
                    </h5>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p>
                          {" "}
                          Si vous oubliez vos informations de connexion RQA, veuillez vous rendre sur la page
                          Site RQA et cliquez sur 'Mon compte', Mes coordonnées puis
                          changer le mot de passe.

                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Dois-je payer la TVA ?
                      </button>
                    </h5>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
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
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingFour">
                      <button
                        class="accordion-button collapsed"
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
            <div className="col-lg-6 col-sm-12">
              <div className="faq-content col-margin">
                <div className="accordion" id="accordionExampleTwo">
                  <div className="accordion-item">
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
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingTwoTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwoTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwoTwo"
                      >
                      Comment suivre un cours ?
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
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="headingTwoThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwoThree"
                        aria-expanded="false"
                        aria-controls="collapseTwoThree"
                      >
                    Comment s'inscrire ?
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
                  <div className="accordion-item">
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
                      <div class="accordion-body">
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

      {/*  --SECTION-NEWSLETTERER--  */}
      <section className="newsletter section bg-img py-5">
        <div className="container">
          <div className="row justify-content-center CTN">
            <div className="col-lg-10 col-xxl-8 col-sm-12 col-md 12">
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
    </Layout>
  );
};

export default Faq;
