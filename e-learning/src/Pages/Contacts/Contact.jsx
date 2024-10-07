import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Layout from "../../Components/Layout";

const Contact = () => {
  const Navigate = useNavigate();

  return (
    <Layout>
      {/* BREADCRUMB*/}
      <div className="py-5">
        <div className="container pt-5">
          <div className="row pt-5 align-items-center">
            <div className="col-lg-6 col-sm-6">
              <div className="banner-content">
                <h1 className="section-title">Contact</h1>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="banner-breadcrumb d-flex justify-content-sm-end justify-content-lg-end">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-sm-end">
                    <li className="breadcrumb-item ">
                      <Link
                        to="/"
                        className="text-decoration-none"
                        onClick={() => Navigate("/")}
                      >
                        Accueil
                      </Link>
                    </li>
                    <li
                      className="breadcrumb-item active"
                      aria-current="contact"
                      onClick={() => Navigate("/Contact")}
                    >
                      Contact
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BREADCRUMB END*/}

      {/* SECTION-BANNIERE START */}
      <section className="section pb-0 contact">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-sm-12 col-md-12">
              <div className="section-header justify-content-center">
                <h2 className="sectio-title text-center mb-3">
                  Contactez-nous
                </h2>
                <p className="section-sub-title text-center mb-3">
                  Vous pouvez vous rendre directement à notre bureau pour nous
                  contacter en cas de besoin. De plus, vous pouvez appeler le
                  numéro de la hotline pour connaître toute information relative
                  à la formation.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center row-margin">
            <div className="col-lg-5 col-sm-12 col-md-3 p-md-3">
              <div className="contact-map col-margin">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20342.411046372905!2d-74.16638039276373!3d40.719832743885284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1649562691355!5m2!1sen!2sbd"
                  width="100%"
                  height="650px"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-7 col-sm-12 col-xl-6 col-md-9 p-md-5 offset-xl-1">
              <div className="contact-content col-margin">
                <h4>Campus principal, Manchester City, Royaume-Uni</h4>
                <ul>
                  <li className="mb-3">Angel Plaza (9e étage)</li>
                  <li className="mb-3">En face de la gare</li>
                  <li className="mb-3">
                    Maison n°7, Route n°4, Zam Zam, Manchester City,
                  </li>
                  <li className="mb-3">
                    Manchester City, Angleterre, Royaume-Uni
                  </li>
                </ul>
                <div className="contact-content-group">
                  <div className="row d-flex align-items-center mb-3">
                    <div className="contact-content-group-item px-md-0 me-3 text-center">
                      <h5 className="mb-md-3">Lors des visites au bureau</h5>
                      <p>Samedi - Vendredi</p>
                      <p>9h à 20h</p>
                    </div>
                    <div className="contact-content-group-item text-center  plo">
                      <h5 className="mb-md-3">Numéro de téléphone</h5>
                      <p>+9859552952</p>
                      <p>+7779292652</p>
                    </div>
                  </div>
                  <div className="row justify-content-start">
                    <div className="col-lg-12 p-0">
                      <div className="contact-content-group-item text-center plt">
                        <h5 className="mb-md-3">E-mail</h5>
                        <p>info@example.com</p>
                        <p>info@example.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <div className="container">
            <div className="contact-form">
              <h2>Entrer en contact</h2>
              <form id="form" action="#">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="input-wrapper single-input">
                      <input type="text" id="Name" placeholder="Votre Nom" required/>
                      <small>Name must be at least 3 characters</small>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-wrapper single-input">
                      <input
                        type="text"
                        id="number"
                        placeholder="Votre Numéro"
                      />
                      <small>Number Phone Number Not Valid</small>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="input-wrapper single-input">
                      <input type="text" id="email" placeholder="Votre Email" required/>
                      <small>Email is not valid</small>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="group">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Sélectionnez un cours</option>
                        <option value="1"> Social Media</option>
                        <option value="2"> Graphics Design</option>
                        <option value="3"> Web Design</option>
                        <option value="4"> Digital Marketing</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="input-wrapper single-input">
                      <textarea
                        className="message"
                        id="message"
                        cols="10"
                        rows="5"
                        placeholder="Votre Message"
                        required
                      ></textarea>
                      <small>Message must be at least 10 characters</small>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="thank-you mb-2">
                      <p>Your Message is successfully sent !</p>
                    </div>
                    <div className="btn-area">
                      <button type="submit" className="cmn-button">
                        Envoyer un message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION-BANNIERE END */}

      {/*  --SECTION-NEWSLETTERER--  */}
      <section className="newsletter section bg-img py-5">
        <div className="container">
          <div className="row justify-content-center CTN">
            <div className="col-lg-10 col-xxl-8 col-sm-12 col-md 12">
              <div className="newsletter__content">
                <div className="section__header text-center">
                  <h2 className="section__title">
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

      {/*SECTION-NEWSLETTERS*/}

      {/* --FOOTER--  */}
    </Layout>
  );
};

export default Contact;
