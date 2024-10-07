import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import one from "./inst-det-img/one.png";
import one1 from "./inst-det-img/one1.png";
import two2 from "./inst-det-img/two2.png";
import three3 from "./inst-det-img/three3.png";
import facebook from "./inst-det-img/facebook.png";
import Layout from "../../Components/Layout";

const InstDetails = () => {
  const Navigate = useNavigate();

  return (
    <Layout>
      {/* BREADCRUMB*/}
      <div className="py-5">
        <div class="container pt-5">
          <div class="row pt-5 align-items-center">
            <div class="col-lg-6">
              <div class="banner-content">
                <h1 class="section-title">Instructeurs details</h1>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="banner-breadcrumb d-flex justify-content-sm-end justify-content-lg-end">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/" className="text-decoration-none">
                        Accueil
                      </Link>
                    </li>
                    <li
                      class="breadcrumb-item active"
                    >
                      <Link
                        to="/instructeurs"
                        className="text-decoration-none"
                        onClick={() => Navigate("/instructeurs")}
                      >
                        Instructeurs
                      </Link>
                    </li>
                    <li
                      class="breadcrumb-item active"
                      aria-current="/inst-details"
                      onClick={() => Navigate("/Instdetails")}
                    >
                      Instructeurs detailes
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BREADCRUMB*/}

      {/* SECTION-INSTRUCTEURS-DETAILS*/}

      <div className="container py-5">
        <div className="row row-margin">
          <div className="col-xl-8 col-lg-8 col-sm-12">
            <div className="instructor-details-content col-margin">
              <div className="row row-margin">
                <div className="col-md-6">
                  <div className="course-single col-margin">
                    <div className="course-single-thumb">
                      <img src={three3} alt="Image" className="rounded w-100" />
                      <span className="tag">
                        <i className="fa-solid fa-video"></i>25+ VIDEOS
                      </span>
                    </div>
                    <div className="course-single-content p-3">
                      <div className="course-single-content-meta">
                        <a href="#" className="text-decoration-none">
                          <i className="fa-solid fa-eye"></i>9.5k Views
                        </a>
                        <span>
                          <i className="fa-solid fa-clock"></i>9 hr 27 min
                        </span>
                      </div>
                      <div className="course-single-content-title">
                        <h5>
                          <a href="/inst-details">Graphic Design</a>
                        </h5>
                        <span>
                          <i className="fa-solid fa-star"></i>4.5
                        </span>
                      </div>
                      <p>Master Course</p>
                     
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="course-single col-margin">
                    <div className="course-single-thumb">
                      <img
                        src={facebook}
                        alt="Image"
                        className="rounded w-100"
                      />
                      <span className="tag">
                        <i className="fa-solid fa-video"></i>25+ VIDEOS
                      </span>
                    </div>
                    <div className="course-single-content p-3">
                      <div className="course-single-content-meta">
                        <a href="#" className="text-decoration-none">
                          <i className="fa-solid fa-eye"></i>9.5k Views
                        </a>
                        <span>
                          <i className="fa-solid fa-clock"></i>9 hr 27 min
                        </span>
                      </div>
                      <div className="course-single-content-title">
                        <h5>Facebook Marketing</h5>
                        <span>
                          <i className="fa-solid fa-star"></i>4.5
                        </span>
                      </div>
                      <p>Social Media</p>
                     
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="course-single col-margin">
                    <div className="course-single-thumb">
                      <img src={one1} alt="Image" className="rounded w-100" />
                      <span className="tag">
                        <i className="fa-solid fa-video"></i>25+ VIDEOS
                      </span>
                    </div>
                    <div className="course-single-content p-3">
                      <div className="course-single-content-meta">
                        <a href="#" className="text-decoration-none">
                          <i className="fa-solid fa-eye"></i>9.5k Views
                        </a>
                        <span>
                          <i className="fa-solid fa-clock"></i>9 hr 27 min
                        </span>
                      </div>
                      <div className="course-single-content-title">
                        <h5>
                          <a href="/inst-details">Microsoft Word</a>
                        </h5>
                        <span>
                          <i className="fa-solid fa-star"></i>4.5
                        </span>
                      </div>
                      <p>Microsoft Office</p>
                     
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="course-single col-margin">
                    <div className="course-single-thumb">
                      <img src={two2} alt="Image" className="rounded w-100" />
                      <span className="tag">
                        <i className="fa-solid fa-video"></i>25+ VIDEOS
                      </span>
                    </div>
                    <div className="course-single-content p-3">
                      <div className="course-single-content-meta">
                        <a href="#" className="text-decoration-none">
                          <i className="fa-solid fa-eye"></i>9.5k Views
                        </a>
                        <span>
                          <i className="fa-solid fa-clock"></i>9 hr 27 min
                        </span>
                      </div>
                      <div className="course-single-content-title">
                        <h5>PCB Design</h5>
                        <span>
                          <i className="fa-solid fa-star"></i>4.5
                        </span>
                      </div>
                      <p>Robotics Automation</p>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="row py-5">
                <div className="col-lg-12 mx-auto">
                  <div className="pagination-wrapper">
                    <nav aria-label="...">
                      <ul className="pagination justify-content-center">
                        <li className="page-item text-center">
                          <a className="page-link" href="#">
                            <i className="fa-solid fa-angles-left"></i>
                          </a>
                        </li>
                        <li className="page-item text-center">
                          <a
                            className="page-link active"
                            href="#"
                            tabindex="-1"
                          >
                            1
                          </a>
                        </li>
                        <li className="page-item text-center">
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
          </div>
          <div className="col-md-8 col-lg-6 col-sm-12 col-xl-4">
            <div className="instructor-details-sidebar">
              <div className="instructor-sidebar-profile text-center">
                <img src={one} alt="Image" />
                <h4>Katya Tsygankova</h4>
                <p>Art &amp; Design</p>
                <p>
                  <i className="fa-solid fa-location-dot"></i>Warszawa, Poland
                </p>
                <a href="/" className="cmn-button btn btn-lg">
                  Follow
                </a>
                <a href="/" className="cmn-button message btn btn-lg">
                  Message
                </a>
              </div>
              <div className="instructor-sidebar-meta mb-5">
                <p>
                  <span>Project Views</span> <span>294,711</span>
                </p>
                <p>
                  <span>Appreciations</span> <span>30,097</span>
                </p>
                <p>
                  <span>Followers</span> <span>7811</span>
                </p>
                <p>
                  <span>Following</span> <span>605</span>
                </p>
                <a href="" className="cmn-button btn btn-lg message"
                onClick={() => Navigate("/inst-details")}>
                  Facebook
                </a>
              </div>
              <div className="instructor-sidebar-footer">
                <p>Art Director</p>
                <p>Art &amp; Visuals</p>
                <p className="report pb-5">Report</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* INSTRUCTEURS-DETAILS END*/}

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

      {/*SECTION-NEWSLETTERS*/}
    </Layout>
  );
};

export default InstDetails;
