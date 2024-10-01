import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import Layout from "../../Components/Layout";
import "../Faq/Faq.css";

const Faq = () => {
  const Navigate = useNavigate();

  return (
    <Layout>
      <div className="container-fluid Banner">
        <div className="container-fluid BANNER">
          <section className=" ">
            <div className="container ">
              <div className="row align-items-center ">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="banner__content">
                    <h2 className="section-title">FAQ</h2>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="banner__breadcrumb d-flex justify-content-start justify-content-lg-end">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a
                            href=""
                            className="text-decoration-none"
                            onClick={() => Navigate("/")}
                          >
                            Accueil
                          </a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
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
      </div>

      <section className="faq section ">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="section__header">
                <h4 className="section__title">Question fréquemment posée</h4>
                <p className="section__sub-title py-4">
                  À l'ère de « tout est possible », pourquoi appelez-vous ?
                  vous-même « impossible » ? Développez vos compétences à la
                  maison dès maintenant - à partir de les meilleurs experts !
                </p>
              </div>
            </div>
          </div>
          <div className="row row-margin">
            <div className="col-lg-6 col-md-12 col-sm-12">
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
                          Si vous oubliez vos informations de connexion RQA,
                          veuillez vous rendre sur la page Site RQA et cliquez
                          sur 'Mon compte', Mes coordonnées puis changer le mot
                          de passe.
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
                          Si vous oubliez vos informations de connexion RQA,
                          veuillez vous rendre sur la page Site RQA et cliquez
                          sur 'Mon compte', Mes coordonnées puis changer le mot
                          de passe.
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
                          Si vous oubliez vos informations de connexion RQA,
                          veuillez vous rendre sur la page Site RQA et cliquez
                          sur 'Mon compte', Mes coordonnées puis changer le mot
                          de passe.
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
                          Si vous oubliez vos informations de connexion RQA,
                          veuillez vous rendre sur la page Site RQA et cliquez
                          sur 'Mon compte', Mes coordonnées puis changer le mot
                          de passe.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
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
                          Si vous oubliez vos informations de connexion RQA,
                          veuillez vous rendre sur la page Site RQA et cliquez
                          sur 'Mon compte', Mes coordonnées puis changer le mot
                          de passe.
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
                          Si vous oubliez vos informations de connexion RQA,
                          veuillez vous rendre sur la page Site RQA et cliquez
                          sur 'Mon compte', Mes coordonnées puis changer le mot
                          de passe.
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
                          Si vous oubliez vos informations de connexion RQA,
                          veuillez vous rendre sur la page Site RQA et cliquez
                          sur 'Mon compte', Mes coordonnées puis changer le mot
                          de passe.
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
                          Si vous oubliez vos informations de connexion RQA,
                          veuillez vous rendre sur la page Site RQA et cliquez
                          sur 'Mon compte', Mes coordonnées puis changer le mot
                          de passe.
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

      <section className="Newsletter section bg-img ">
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
    </Layout>
  );
};

export default Faq;
