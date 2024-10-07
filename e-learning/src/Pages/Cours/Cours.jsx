import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import React from "react";
import { Link } from "react-router-dom";
import courseone from "./cours-img/courseone.png";
import coursetwo from "./cours-img/coursetwo.png";
import coursethree from "./cours-img/coursethree.png";
import special1 from "./cours-img/special1.png";
import special2 from "./cours-img/special2.png";
import special3 from "./cours-img/special3.png";
import laravel from "./cours-img/laravel.png";
import wordpress from "./cours-img/wordpress.png";
import facebook from "./cours-img/facebook.png";
import motion from "./cours-img/motion.png";
import seo from "./cours-img/seo.png";
import microsoft from "./cours-img/microsoft.png";
import marketing from "./cours-img/marketing.png";
import Layout from "../../Components/Layout";

const Cours = () => {
  const Navigate = useNavigate();

  return (
    <Layout>
      {/* BREADCRUMB*/}
      <div className=" Course py-5">
        <div className="container  pt-5">
          <div className="row pt-5 align-items-center">
            <div className="col-lg-6">
              <div className="banner-content">
                <h1 className="section-title">Cours</h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-breadcrumb d-flex justify-content-start justify-content-lg-end">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/" className="text-decoration-none">
                        Accueil
                      </Link>
                    </li>
                    <li
                      className="breadcrumb-item active"
                      aria-current="cours"
                      onClick={() => Navigate("/Cours")}
                    >
                      Cours
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BREADCRUMB*/}
      {/* TOUS LES COURS*/}
      <div className="all-courses">
        <section className="section course pb-5">
          <div className="container">
            <div className="course-intro">
              <div className="row align-items-center row-margin py-4">
                <div className="col-lg-9 col-xl-8 col-xxl-6">
                  <div className="section-header text-start col-margin mb-3">
                    <h1 className="section-title text-start mb-3">
                      Cours sur le design
                    </h1>
                    <p className="section-sub-title text-start py-3">
                      Notre liste de cours est organisée en fonction des
                      compétences les plus demandées actuellement dans le pays
                      et à l'extérieur du pays.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-xl-4 col-xxl-6">
                  <div className="course-more text-start text-lg-end col-margin mb-3">
                    <a
                      href="/login"
                      className="cmn-button text-decoration-none"
                      onClick={() => Navigate("/login")}
                    >
                      Voir plus
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-margin py-5">
              <div className="col-md-6 col-lg-4 col-xxl-4">
                <div className="course-single col-margin">
                  <div className="course-single-thumb">
                    <img
                      src={courseone}
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
                        <i className="fa-solid fa-eye"></i>3.5k Views
                      </a>
                      <span>
                        <i className="fa-solid fa-clock"></i>7 hr 27 min
                      </span>
                    </div>
                    <div className="course-single-content-title">
                      <h5>Graphic Design</h5>
                      <span>
                        <i className="fa-solid fa-star"></i>4.5
                      </span>
                    </div>
                    <p>Master Course</p>
                   
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xxl-4">
                <div className="course-single col-margin">
                  <div className="course-single-thumb">
                    <img
                      src={coursetwo}
                      alt="Image"
                      className="rounded w-100"
                    />
                    <span className="tag">
                      <i className="fa-solid fa-video"></i>22+ VIDEOS
                    </span>
                  </div>
                  <div className="course-single-content p-3">
                    <div className="course-single-content-meta">
                      <a href="#" className="text-decoration-none">
                        <i className="fa-solid fa-eye"></i>2.5k Views
                      </a>
                      <span>
                        <i className="fa-solid fa-clock"></i>6 hr 07 min
                      </span>
                    </div>
                    <div className="course-single-content-title">
                      <h5>UI/UX Design</h5>
                      <span>
                        <i className="fa-solid fa-star"></i>4.7
                      </span>
                    </div>
                    <p>Creative Course</p>
                   
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xxl-4">
                <div className="course-single col-margin">
                  <div className="course-single-thumb">
                    <img src={motion} alt="Image" className="rounded w-100" />
                    <span className="tag">
                      <i className="fa-solid fa-video"></i>32+ VIDEOS
                    </span>
                  </div>
                  <div className="course-single-content p-3">
                    <div className="course-single-content-meta">
                      <a href="#" className="text-decoration-none">
                        <i className="fa-solid fa-eye"></i>4.5k Views
                      </a>
                      <span>
                        <i className="fa-solid fa-clock"></i>9 hr 27 min
                      </span>
                    </div>
                    <div className="course-single-content-title">
                      <h5>Motion Design</h5>
                      <span>
                        <i className="fa-solid fa-star"></i>4.2
                      </span>
                    </div>
                    <p>Animation Video</p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section course py-5 pb-0">
          <div className="container">
            <div className="course-intro">
              <div className="row align-items-center row-margin py-4">
                <div className="col-lg-9 col-xl-8 col-xxl-6">
                  <div className="section-header text-start col-margin">
                    <h1 className="section-title mb-3">Programmation Web</h1>
                    <p className="section-sub-title mb-3 py-3">
                    Notre liste de cours est organisée avec les compétences qui sont
                      actuellement le plus demandé dans le pays et en dehors du
                      pays.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-xl-4 col-xxl-6">
                  <div className="course-more text-start text-lg-end col-margin">
                    <a
                      href="/login"
                      className="cmn-button text-decoration-none"
                      onClick={() => Navigate("/login")}
                    >
                    Voir plus
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-margin py-5">
              <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                <div className="course-single col-margin">
                  <div className="course-single-thumb">
                    <img
                      src={coursethree}
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
                        <i className="fa-solid fa-eye"></i>3.5k Views
                      </a>
                      <span>
                        <i className="fa-solid fa-clock"></i>7 hr 27 min
                      </span>
                    </div>
                    <div className="course-single-content-title">
                      <h5>Web Design</h5>
                      <span>
                        <i className="fa-solid fa-star"></i>4.5
                      </span>
                    </div>
                    <p>Web Programming</p>
                    
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                <div className="course-single col-margin">
                  <div className="course-single-thumb">
                    <img
                      src={wordpress}
                      alt="Image"
                      className=" rounded w-100"
                    />
                    <span className="tag">
                      <i className="fa-solid fa-video"></i>22+ VIDEOS
                    </span>
                  </div>
                  <div className="course-single-content p-3">
                    <div className="course-single-content-meta">
                      <a href="#" className="text-decoration-none">
                        <i className="fa-solid fa-eye"></i>2.5k Views
                      </a>
                      <span>
                        <i className="fa-solid fa-clock"></i>6 hr 07 min
                      </span>
                    </div>
                    <div className="course-single-content-title">
                      <h5>Wordpress Theme</h5>
                      <span>
                        <i className="fa-solid fa-star"></i>4.7
                      </span>
                    </div>
                    <p>Coading Mastar</p>
                    
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-lg-4 col-xxl-4">
                <div className="course-single col-margin">
                  <div className="course-single-thumb">
                    <img src={laravel} alt="Image" className="rounded w-100" />
                    <span className="tag">
                      <i className="fa-solid fa-video"></i>32+ VIDEOS
                    </span>
                  </div>
                  <div className="course-single-content p-3">
                    <div className="course-single-content-meta">
                      <a href="#" className="text-decoration-none">
                        <i className="fa-solid fa-eye"></i>4.5k Views
                      </a>
                      <span>
                        <i className="fa-solid fa-clock"></i>9 hr 27 min
                      </span>
                    </div>
                    <div className="course-single-content-title">
                      <h5>PHP &amp; Laravel</h5>
                      <span>
                        <i className="fa-solid fa-star"></i>4.2
                      </span>
                    </div>
                    <p>Software Design</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section course py-5 pb-0">
          <div className="container">
            <div className="course-intro">
              <div className="row align-items-center row-margin py-4">
                <div className="col-lg-9 col-xl-8 col-xxl-6">
                  <div className="section-header text-start  col-margin">
                    <h1 className="section-title">Digital Marketing</h1>
                    <p className="section-sub-title text-start py-3">
                    Notre liste de cours est organisée avec les compétences qui sont
                      actuellement le plus demandé dans le pays et en dehors du
                      pays.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-xl-4 col-xxl-6">
                  <div className="course-more text-start text-lg-end col-margin">
                    <a
                      href="/login"
                      className="cmn-button text-decoration-none"
                      onClick={() => Navigate("/login")}
                    >
                   Voir plus
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-margin py-5">
              <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                <div className="course-single col-margin">
                  <div className="course-single-thumb">
                    <img
                      src={facebook}
                      alt="Image"
                      className=" rounded w-100"
                    />
                    <span className="tag">
                      <i className="fa-solid fa-video"></i>25+ VIDEOS
                    </span>
                  </div>
                  <div className="course-single-content p-3">
                    <div className="course-single-content-meta">
                      <a href="#" className="text-decoration-none">
                        <i className="fa-solid fa-eye"></i>3.5k Views
                      </a>
                      <span>
                        <i className="fa-solid fa-clock"></i>7 hr 27 min
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
              <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                <div className="course-single col-margin">
                  <div className="course-single-thumb">
                    <img src={seo} alt="Image" className="roundedw-100" />
                    <span className="tag">
                      <i className="fa-solid fa-video"></i>22+ VIDEOS
                    </span>
                  </div>
                  <div className="course-single-content p-3">
                    <div className="course-single-content-meta">
                      <a href="#" className="text-decoration-none">
                        <i className="fa-solid fa-eye"></i>2.5k Views
                      </a>
                      <span>
                        <i className="fa-solid fa-clock"></i>6 hr 07 min
                      </span>
                    </div>
                    <div className="course-single-content-title">
                      <h5>SEO for E-commerce</h5>
                      <span>
                        <i className="fa-solid fa-star"></i>4.7
                      </span>
                    </div>
                    <p>Digital Marketplace</p>
                   
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                <div className="course-single col-margin">
                  <div className="course-single-thumb">
                    <img
                      src={marketing}
                      alt="Image"
                      className="rounded w-100"
                    />
                    <span className="tag">
                      <i className="fa-solid fa-video"></i>32+ VIDEOS
                    </span>
                  </div>
                  <div className="course-single-content p-3">
                    <div className="course-single-content-meta">
                      <a href="#" className="text-decoration-none">
                        <i className="fa-solid fa-eye"></i>4.5k Views
                      </a>
                      <span>
                        <i className="fa-solid fa-clock"></i>9 hr 27 min
                      </span>
                    </div>
                    <div className="course-single-content-title">
                      <h5>Digital Marketing</h5>
                      <span>
                        <i className="fa-solid fa-star"></i>4.2
                      </span>
                    </div>
                    <p>With Fiverr &amp; Up Work</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section course py-5 pb-0">
          <div className="container">
            <div className="course-intro">
              <div className="row align-items-center row-margin py-4">
                <div className="col-lg-9 col-xl-8 col-xxl-6">
                  <div className="section-header text-start col-margin">
                    <h1 className="section-title">Microsoft Office</h1>
                    <p className="section-sub-title text-start py-3">
                    Notre liste de cours est organisée avec les compétences qui sont
                      actuellement le plus demandé dans le pays et en dehors du
                      pays.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-xl-4 col-xxl-6">
                  <div className="course-more text-start text-lg-end col-margin">
                    <a
                      href="/login"
                      className="cmn-button text-decoration-none"
                      onClick={() => Navigate("/login")}
                    >
                      Voir plus
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-margin py-5">
              <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                <div className="course-single col-margin">
                  <div className="course-single-thumb">
                    <img
                      src={microsoft}
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
                        <i className="fa-solid fa-eye"></i>3.5k Views
                      </a>
                      <span>
                        <i className="fa-solid fa-clock"></i>7 hr 27 min
                      </span>
                    </div>
                    <div className="course-single-content-title">
                      <h5>Microsoft Word</h5>
                      <span>
                        <i className="fa-solid fa-star"></i>4.5
                      </span>
                    </div>
                    <p>Microsoft Office</p>
                   
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                <div className="course-single col-margin">
                  <div className="course-single-thumb">
                    <img src={seo} alt="Image" className="rounded w-100" />
                    <span className="tag">
                      <i className="fa-solid fa-video"></i>22+ VIDEOS
                    </span>
                  </div>
                  <div className="course-single-content p-3">
                    <div className="course-single-content-meta">
                      <a href="#" className="text-decoration-none">
                        <i className="fa-solid fa-eye"></i>2.5k Views
                      </a>
                      <span>
                        <i className="fa-solid fa-clock"></i>6 hr 07 min
                      </span>
                    </div>
                    <div className="course-single-content-title">
                      <h5>SEO for E-commerce</h5>
                      <span>
                        <i className="fa-solid fa-star"></i>4.7
                      </span>
                    </div>
                    <p>Digital Marketplace</p>
                   
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                <div className="course-single col-margin">
                  <div className="course-single-thumb">
                    <img
                      src={marketing}
                      alt="Image"
                      className="rounded w-100"
                    />
                    <span className="tag">
                      <i className="fa-solid fa-video"></i>32+ VIDEOS
                    </span>
                  </div>
                  <div className="course-single-content p-3">
                    <div className="course-single-content-meta">
                      <a href="#" className="text-decoration-none">
                        <i className="fa-solid fa-eye"></i>4.5k Views
                      </a>
                      <span>
                        <i className="fa-solid fa-clock"></i>9 hr 27 min
                      </span>
                    </div>
                    <div className="course-single-content-title">
                      <h5>Digital Marketing</h5>
                      <span>
                        <i className="fa-solid fa-star"></i>4.2
                      </span>
                    </div>
                    <p>With Fiverr &amp; Up Work</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section course py-5 pb-0">
          <div className="container">
            <div className="course-intro">
              <div className="row align-items-center row-margin py-4">
                <div className="col-lg-9 col-xl-8 col-xxl-6">
                  <div className="section-header text-start col-margin">
                    <h1 className="section-title">Robotics Automation</h1>
                    <p className="section-sub-title text-start py-3">
                    Notre liste de cours est organisée avec les compétences qui sont
                      actuellement le plus demandé dans le pays et en dehors du
                      pays.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-xl-4 col-xxl-6">
                  <div className="course-more text-start text-lg-end col-margin">
                    <a
                      href="/login"
                      className="cmn-button text-decoration-none"
                      onClick={() => Navigate("/login")}
                    >
                      Voir plus
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-margin py-5">
              <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                <div className="course-single col-margin">
                  <div className="course-single-thumb">
                    <img
                      src={microsoft}
                      alt="Image"
                      className="rounded w-100"
                    />
                    <span className="tag">
                      <i className="fa-solid fa-video"></i>25+ VIDEOS
                    </span>
                  </div>
                  <div className="course-single-content p-3">
                    <div className="course-single-content-meta">
                      <a href="#" className="text-decoartion-none">
                        <i className="fa-solid fa-eye"></i>3.5k Views
                      </a>
                      <span>
                        <i className="fa-solid fa-clock"></i>7 hr 27 min
                      </span>
                    </div>
                    <div className="course-single-content-title">
                      <h5>Microsoft Word</h5>
                      <span>
                        <i className="fa-solid fa-star"></i>4.5
                      </span>
                    </div>
                    <p>Microsoft Office</p>
                   
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                <div className="course-single col-margin">
                  <div className="course-single-thumb">
                    <img src={seo} alt="Image" className="rounded w-100" />
                    <span className="tag">
                      <i className="fa-solid fa-video"></i>22+ VIDEOS
                    </span>
                  </div>
                  <div className="course-single-content p-3 ">
                    <div className="course-single-content-meta">
                      <a href="#" className="text-decoration-none">
                        <i className="fa-solid fa-eye"></i>2.5k Views
                      </a>
                      <span>
                        <i className="fa-solid fa-clock"></i>6 hr 07 min
                      </span>
                    </div>
                    <div className="course-single-content-title">
                      <h5>SEO for E-commerce</h5>
                      <span>
                        <i className="fa-solid fa-star"></i>4.7
                      </span>
                    </div>
                    <p>Digital Marketplace</p>
                   
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                <div className="course-single col-margin">
                  <div className="course-single-thumb">
                    <img
                      src={marketing}
                      alt="Image"
                      className="rounded w-100"
                    />
                    <span className="tag">
                      <i className="fa-solid fa-video"></i>32+ VIDEOS
                    </span>
                  </div>
                  <div className="course-single-content p-3">
                    <div className="course-single-content-meta">
                      <a href="#" className="text-decoration-none">
                        <i className="fa-solid fa-eye etxt-decoartion-none"></i>
                        4.5k Views
                      </a>
                      <span>
                        <i className="fa-solid fa-clock"></i>9 hr 27 min
                      </span>
                    </div>
                    <div className="course-single-content-title">
                      <h5>Digital Marketing</h5>
                      <span>
                        <i className="fa-solid fa-star"></i>4.2
                      </span>
                    </div>
                    <p>With Fiverr &amp; Up Work</p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section course py-5 pb-0">
          <div className="container">
            <div className="course-intro">
              <div className="row align-items-center row-margin py-4">
                <div className="col-lg-9 col-xl-8 col-xxl-6">
                  <div className="section-header text-start col-margin">
                    <h1 className="section-title">
                    Apprendre la langue</h1>
                    <p className="section-sub-title text-start py-3">
                    Notre liste de cours est organisée avec les compétences qui sont
                      actuellement le plus demandé dans le pays et en dehors du
                      pays.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-xl-4 col-xxl-6">
                  <div className="course-more text-start text-lg-end col-margin">
                    <a
                      href="/login"
                      className="cmn-button text-decoration-none"
                      onClick={() => Navigate("/login")}
                    >
                      Voir plus
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-margin py-5">
              <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                <div className="course-single col-margin">
                  <div className="course-single-thumb">
                    <img src={special1} alt="Image" className="rounded w-100" />
                    <span className="tag">
                      <i className="fa-solid fa-video"></i>25+ VIDEOS
                    </span>
                  </div>
                  <div className="course-single-content p-3">
                    <div className="course-single-content-meta">
                      <a href="#" className="text-decoration-none">
                        <i className="fa-solid fa-eye text-decoration-none"></i>
                        9.5k Views
                      </a>
                      <span>
                        <i className="fa-solid fa-clock"></i>9 hr 27 min
                      </span>
                    </div>
                    <div className="course-single-content-title">
                      <h5>Learning Holy Quran</h5>
                      <span>
                        <i className="fa-solid fa-star"></i>4.5
                      </span>
                    </div>
                    <p>With Arabic Language</p>
                  
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                <div className="course-single col-margin">
                  <div className="course-single-thumb">
                    <img src={special2} alt="Image" className="rounded w-100" />
                    <span className="tag">
                      <i className="fa-solid fa-video"></i>22+ VIDEOS
                    </span>
                  </div>
                  <div className="course-single-content p-3">
                    <div className="course-single-content-meta">
                      <a href="#" className="text-decoration-none">
                        <i className="fa-solid fa-eye text-decoration-none"></i>
                        2.5k Views
                      </a>
                      <span>
                        <i className="fa-solid fa-clock"></i>6 hr 07 min
                      </span>
                    </div>
                    <div className="course-single-content-title">
                      <h5>Spoken English</h5>
                      <span>
                        <i className="fa-solid fa-star"></i>4.7
                      </span>
                    </div>
                    <p>International English</p>
                   
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                <div className="course-single col-margin">
                  <div className="course-single-thumb">
                    <img
                      src={special3}
                      alt="Image"
                      className=" rounded w-100"
                    />
                    <span className="tag">
                      <i className="fa-solid fa-video"></i>32+ VIDEOS
                    </span>
                  </div>
                  <div className="course-single-content p-3">
                    <div className="course-single-content-meta">
                      <a href="#" className="text-decoration-none">
                        <i className="fa-solid fa-eye text-decoration-none"></i>
                        4.5k Views
                      </a>
                      <span>
                        <i className="fa-solid fa-clock"></i>9 hr 27 min
                      </span>
                    </div>
                    <div className="course-single-content-title">
                      <h5>Learning Japanese</h5>
                      <span>
                        <i className="fa-solid fa-star"></i>4.2
                      </span>
                    </div>
                    <p>Learning Language</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container py-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="pagination-wrapper">
                <nav aria-label="...">
                  <ul className="pagination justify-content-center">
                    <li className="page-item me-2">
                      <a className="page-link" href="#">
                        <i className="fa-solid fa-angles-left"></i>
                      </a>
                    </li>
                    <li className="page-item me-2">
                      <a className="page-link active" href="#" tabindex="-1">
                        1
                      </a>
                    </li>
                    <li className="page-item me-2">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item me-2 ">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item ms-2">
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

      {/* --FOOTER--  */}
    </Layout>
  );
};

export default Cours;
