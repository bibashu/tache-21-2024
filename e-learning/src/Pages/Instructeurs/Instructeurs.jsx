import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import one from "./inst-img/one.png";
import two from "./inst-img/two.png";
import three from "./inst-img/three.png";
import four from "./inst-img/four.png";
import five from "./inst-img/five.png";
import six from "./inst-img/six.png";
import coverone from "./inst-img/coverone.png";
import covertwo from "./inst-img/covertwo.png";
import coverthree from "./inst-img/coverthree.png";
import coverfour from "./inst-img/coverfour.png";
import coverfive from "./inst-img/coverfive.png";
import coversix from "./inst-img/coversix.png";
import Layout from "../../Components/Layout";

const Instructeurs = () => {
  const Navigate = useNavigate();

  return (
    <Layout>
      {/* BREADCRUMB*/}
      <div className="breadcrumb py-5">
        <div class="container pt-5">
          <div class="row pt-5 align-items-center">
            <div class="col-lg-6">
              <div class="banner-content">
                <h1 class="section-title">Instructeurs</h1>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="banner-breadcrumb d-flex justify-content-start justify-content-lg-end">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/" className="text-decoration-none">
                        Accueil
                      </Link>
                    </li>
                    <li
                      class="breadcrumb-item active"
                      aria-current="instructeus"
                      onClick={() => Navigate("/Instructeurs")}
                    >
                      Instructeurs
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BREADCRUMB*/}

      {/* SECTION-INSTRUCTEURS*/}
      <section className="section instructor">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-header justify-content-center">
                <h1 className="section-title text-center">
                Notre meilleur instructeur
                </h1>
                <p className="section-sub-title text-center py-3">
                À l'ère de « tout est possible », pourquoi appelez-vous ?
                  vous-même « impossible » ? Développez vos compétences à la maison dès maintenant - à partir de
                  les meilleurs experts !
                </p>
              </div>
            </div>
          </div>
          <div className="row row-margin py-5">
            <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
              <div className="instructor-single col-margin">
                <div className="instructor-cover">
                  <img src={coverone} alt="Image" className="img-fluid w-100" />
                  <div className="profile">
                    <a href="/inst-details">
                      <img src={one} className="rounded-pill" alt="Image" />
                    </a>
                  </div>
                </div>
                <div className="instructor-meta">
                  <h5>
                    <a href="/inst-details">Genelia D’Suza</a>
                  </h5>
                  <p>
                    <i className="fa-solid fa-location-dot"></i>Warszawa, Poland
                  </p>
                </div>
                <div className="instructor-overview d-flex align-items-center justify-content-center">
                  <div className="instructor-overview-item  me-2">
                    <h5>51.5k</h5>
                    <p>Appreciations</p>
                  </div>
                  <div className="instructor-overview-item ms-2 me-2">
                    <h5>6.5k</h5>
                    <p>Followers</p>
                  </div>
                  <div className="instructor-overview-item ms-2">
                    <h5>51.5k</h5>
                    <p>Project views</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-4 col-lg-4 col-sm-12">
              <div className="instructor-single col-margin">
                <div className="instructor-cover">
                  <img src={covertwo} alt="Image" className="img-fluid w-100" />
                  <div className="profile">
                    <a href="/inst-details">
                      <img src={two} className="rounded-pill" alt="Image" />
                    </a>
                  </div>
                </div>
                <div className="instructor-meta">
                  <h5>
                    <a href="/inst-details">Glean Maxwell</a>
                  </h5>
                  <p>
                    <i class="fa-solid fa-location-dot"></i>New York
                  </p>
                </div>
                <div className="instructor-overview d-flex align-items-center justify-content-center">
                  <div className="instructor-overview-item me-2">
                    <h5>51.5k</h5>
                    <p>Appreciations</p>
                  </div>
                  <div className="instructor-overview-item ms-2 me-2">
                    <h5>6.5k</h5>
                    <p>Followers</p>
                  </div>
                  <div className="instructor-overview-item ms-2">
                    <h5>51.5k</h5>
                    <p>Project views</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-4 col-lg-4 col-sm-12">
              <div className="instructor-single col-margin">
                <div class="instructor-cover">
                  <img
                    src={coverthree}
                    alt="Image"
                    className="img-fluid w-100"
                  />
                  <div className="profile">
                    <a href="/inst-details">
                      <img src={three} className="rounded-pill" alt="Image" />
                    </a>
                  </div>
                </div>
                <div className="instructor-meta">
                  <h5>
                    <a href="/inst-details">Devid Warner</a>
                  </h5>
                  <p>
                    <i className="fa-solid fa-location-dot"></i>Canada
                  </p>
                </div>
                <div className="instructor-overview d-flex align-items-center justify-content-center">
                  <div className="instructor-overview-item me-2">
                    <h5>51.5k</h5>
                    <p>Appreciations</p>
                  </div>
                  <div class="instructor-overview-item  ms-2 me-2">
                    <h5>6.5k</h5>
                    <p>Followers</p>
                  </div>
                  <div class="instructor-overview-item ms-2">
                    <h5>51.5k</h5>
                    <p>Project views</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-4 col-lg-4 col-sm-12">
              <div className="instructor-single col-margin">
                <div className="instructor-cover">
                  <img
                    src={coverfour}
                    alt="Image"
                    className="img-fluid w-100"
                  />
                  <div className="profile">
                    <a href="/inst-details">
                      <img src={four} className="rounded-pill" alt="Image" />
                    </a>
                  </div>
                </div>
                <div className="instructor-meta">
                  <h5>
                    <a href="/inst-details">Sarika Sabas</a>
                  </h5>
                  <p>
                    <i className="fa-solid fa-location-dot"></i>Bangladesh
                  </p>
                </div>
                <div className="instructor-overview d-flex align-items-center justify-content-center">
                  <div className="instructor-overview-item me-2">
                    <h5>51.5k</h5>
                    <p>Appreciations</p>
                  </div>
                  <div className="instructor-overview-item ms-2 me-2">
                    <h5>6.5k</h5>
                    <p>Followers</p>
                  </div>
                  <div className="instructor-overview-item ms-2">
                    <h5>51.5k</h5>
                    <p>Project views</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-4 col-lg-4 col-sm-12">
              <div className="instructor-single col-margin">
                <div className="instructor-cover">
                  <img
                    src={coverfive}
                    alt="Image"
                    className="img-fluid w-100"
                  />
                  <div className="profile">
                    <a href="/inst-details">
                      <img src={five} className="rounded-pill" alt="Image" />
                    </a>
                  </div>
                </div>
                <div className="instructor-meta">
                  <h5>
                    <a href="/inst-details">Drean Semuels</a>
                  </h5>
                  <p>
                    <i className="fa-solid fa-location-dot"></i>Germany
                  </p>
                </div>
                <div className="instructor-overview d-flex align-items-center justify-content-center">
                  <div className="instructor-overview-item me-2">
                    <h5>51.5k</h5>
                    <p>Appreciations</p>
                  </div>
                  <div className="instructor-overview-item me-2 ms-2">
                    <h5>6.5k</h5>
                    <p>Followers</p>
                  </div>
                  <div className="instructor-overview-item ms-2">
                    <h5>51.5k</h5>
                    <p>Project views</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-4 col-lg-4 col-sm-12">
              <div className="instructor-single col-margin">
                <div className="instructor-cover">
                  <img src={coversix} alt="Image" className="img-fluid w-100" />
                  <div className="profile">
                    <a href="inst-details">
                      <img src={six} className="rounded-pill" alt="Image" />
                    </a>
                  </div>
                </div>
                <div class="instructor-meta">
                  <h5>
                    <a href="/inst-details">Luck Wright</a>
                  </h5>
                  <p>
                    <i class="fa-solid fa-location-dot"></i>England
                  </p>
                </div>
                <div class="instructor-overview d-flex align-items-center justify-content-center">
                  <div class="instructor-overview-item me-2">
                    <h5>51.5k</h5>
                    <p>Appreciations</p>
                  </div>
                  <div class="instructor-overview-item ms-2 me-2">
                    <h5>6.5k</h5>
                    <p>Followers</p>
                  </div>
                  <div class="instructor-overview-item ms-2">
                    <h5>51.5k</h5>
                    <p>Project views</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-lg-12">
              <div className="pagination-wrapper">
                <nav aria-label="...">
                  <ul className="pagination justify-content-center">
                    <li className="page-item text-center">
                      <a className="page-link" href="#">
                        <i class="fa-solid fa-angles-left"></i>
                      </a>
                    </li>
                    <li className="page-item text-center">
                      <a className="page-link active" href="#" tabindex="-1">
                        1
                      </a>
                    </li>
                    <li class="page-item text-center">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item text-center">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item text-center">
                      <a className="page-link" href="#">
                        <i className="fa-solid fa-angles-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
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

      {/* SECTION-NEWSLETTERS*/}
    </Layout>
  );
};

export default Instructeurs;
