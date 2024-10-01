import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import Layout from "../../Components/Layout";
import "../Contact/Contact.css";

const Contact = () => {
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
                    <h2 class="section-title"> Contact</h2>
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
                          Contact
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

      <div className="container Carte py-5">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="section__header text-center">
              <h2 className="section__title">Contactez-nous</h2>
              <p className="section__sub-title">
                Vous pouvez directement visiter notre bureau pour nous contacter
                pour tout besoin De plus, vous pouvez appeler le numéro de la
                hotline pour connaître toute information relative à la
                formation.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center row-margin py-5">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="contact__map col-margin">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.5659703625347!2d-77.01605992518587!3d38.84239984994922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b754d65e002b%3A0x55349d4b896f7301!2sCastle%20Ave%20SW%2C%20Washington%2C%20DC%2020032%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2ssn!4v1711355187627!5m2!1sfr!2ssn"
                width="550"
                height="700"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-7 col-xl-6 col-md-12 col-sm-12 offset-xl-1 Offset">
            <div className="contact__content">
              <h4>Campus principal</h4>
              <ul className="py-3">
                <li>Angel Plaza (9th Floor)</li>
                <li className="py-2">Opposite of Railway Station</li>
                <li className="py-2">House#7, Road#4, Zam Zam, Man City,</li>
                <li>Man City, England, UK</li>
              </ul>
              <div className="row py-5">
                <div className="col-lg-6 col-md-12 col-sm-12 Contact-Content text-center">
                  <h5 className="py-2">Lors des visites au bureau</h5>
                  <p>Samedi - Vendredi</p>
                  <p>9h à 20h</p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 text-center contact-content mx-4">
                  <h5 className="py-2">Numéro de téléphone</h5>
                  <p>+221 777777777</p>
                  <p>+221 767777777</p>
                </div>
                <div className="row py-5 ">
                  <div className="col-lg-6 col-md-12 col-sm-12 text-center content-group ">
                    <h5 className="py-2">Email</h5>
                    <p>info@example.com</p>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact__form">
        <div className="container">
          <div className="contact__form">
            <h1 className="py-3">Entrer en contact</h1>
            <form id="form" action="#">
              <div className="row">
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <div className="input-wrapper single-input">
                    <input type="text" id="Name" placeholder="Votre Nom" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="input-wrapper single-input">
                    <input type="text" id="number" placeholder="Votre numéro" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 py-3">
                  <div className="input-wrapper single-input">
                    <input type="text" id="email" placeholder="Votre e-mail" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 py-3">
                  <div className="group">
                    <select name="select__ourse" id="selectCourse">
                      <option>Sélectionnez un cours</option>
                      <option>Social Media</option>
                      <option>Graphics Design</option>
                      <option>Web Design</option>
                      <option>Digital Marketing</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 py-3">
                  <div className="input-wrapper single-input">
                    <textarea
                      name="message"
                      id="message"
                      cols="10"
                      rows="5"
                      placeholder="Votre Message"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="btn-area">
                    <Button className="btn Login-button ">
                      Envoyer un message
                    </Button>
                  </div>
                </div>
              </div>
            </form>
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
    </Layout>
  );
};

export default Contact;
