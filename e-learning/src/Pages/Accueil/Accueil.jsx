import React from "react";
import heroillustration from "./acueil-img/heroillustration.png";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import courseone from "./acueil-img/courseone.png";
import coursetwo from "./acueil-img/coursetwo.png";
import coursethree from "./acueil-img/coursethree.png";
import aboutillustration from "./acueil-img/aboutillustration.png";
import aboutthumb from "./acueil-img/aboutthumb.png";
import huya from "./acueil-img/huya.png";
import course1 from "./acueil-img/course1.png";
import special1 from "./acueil-img/special1.png";
import special2 from "./acueil-img/special2.png";
import special3 from "./acueil-img/special3.png";
import appdevelopment from "./acueil-img/appdevelopment.png";
import webdevelopment from "./acueil-img/webdevelopment.png";
import digitalmarketing from "./acueil-img/digitalmarketing.png";
import robotics from "./acueil-img/robotics.png";
import graphics from "./acueil-img/graphics.png";
import uiux from "./acueil-img/uiux.png";
import virtual from './acueil-img/virtual.png';
import seminarillustration from "./acueil-img/aboutillustration.png";
import { queryAllByAttribute } from "@testing-library/react";
import onlinesupport from "./acueil-img/onlinesupport.png";
import language from "./acueil-img/language.png";
import support from "./acueil-img/support.png";
import course from "./acueil-img/course.png";
import award from "./acueil-img/award.png";
import buy from "./acueil-img/buy.png";
import skill from "./acueil-img/skill.png";
import account from "./acueil-img/account.png";
import jakaria from "./acueil-img/jakaria.png"
import jiniya from "./acueil-img/jiniya.png";
//import mentor from "../assets/imgs/mentor.png";
import students from "./acueil-img/students.png";
import mentor from "./acueil-img/mentor.png";
import Layout from "../../Components/Layout";





const Accueil = () => {

  const Navigate = useNavigate();

  return (
    <Layout>
        {/* --SECTION-1-- */}
        <div className="container-fluid bg-light py-5">
            <section className="hero overflow-hidden section-1 bg-img py-5">
                <div className="container">
                    <div className="row align-items-center row-margin">
                        <div className="col-lg-8 col-sm-12 col-xl-6">
                            <div className="hero-content col-margin">
                                <h1 className="hero-title text-start">Apprenez une nouvelle <span className="text-bg">compétence</span> <br/> chaque jour, à tout moment et n’importe où.</h1>
                                <p className="primary-text text-start">Plus de <span className="fw-bold">1000+</span> cours couvrant tous les domaines technologiques pour vous permettre d'
                                apprendre et d'explorer de nouvelles opportunités. Apprenez auprès
                                d'experts du secteur et décrochez l'emploi de vos rêves.</p>
                                <form action="#" method="post">
                                    <div className="hero-search">
                                        <input type="search" name="hero_search" id="heroSearch" placeholder="Rechercher votre cours" />
                                        <button type="submit" className="cmn-button"><i className="fa-solid fa-magnifying-glass text-white"></i></button>
                                    </div>
                                </form>
                                <div className="hero-cta">
                                    <a href="/" className="cmn-button text-decoration-none">Parcourir le cours</a>
                                    <a href="/" className="cmn-button cmn-button--secondary text-decoration-none">Join Free Seminer</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 col-xl-6">
                            <div className="hero-thumb col-margin">
                                <img src={heroillustration} alt="Image" className="width-unset" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        {/* --SECTION-COURS-START-- */}
        <div className="section-2 py-5 p-0">
            <div className="container-fluid bg-white ">
                <div className="container text-center">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="section-header">
                                <h2 class="section-title">Cours populaires</h2>
                                <p class="section-sub-title">Notre liste de cours est organisée en fonction des compétences les plus demandées actuellement dans le pays et à l'extérieur du pays. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item  p-3 active">
                                    <div className="row row-margin">
                                        <div className="col-md-6 col-lg-4 col-xxl-4">
                                            <div className="course-single col-margin">
                                                <div className="course-single-thumb">
                                                    <img src={courseone} alt="Image" className="rounded w-100"/>
                                                    <span className="tag"><i className="fa-solid fa-video"></i>25+ VIDEOS</span>
                                                </div>
                                                <div className="course-single-content p-3">
                                                    <div className="course-single-content-meta">
                                                        <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye"></i>3.5k Views</a>
                                                        <span><i className="fa-solid fa-clock"></i>7 hr 27 min</span>
                                                    </div>
                                                    <div className="course-single-content-title">
                                                        <h5>Graphic Design</h5>
                                                        <span><i className="fa-solid fa-star"></i>4.5</span>
                                                    </div>
                                                    <p className="text-start">Master Course</p>
                                                    <div className="course-single-content-cta">
                                                        <h5>$15.00 <span  className='text-decoration-line-through'>$20.00</span></h5>
                                                        <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xxl-4">
                                            <div className="course-single col-margin">
                                                <div className="course-single-thumb">
                                                    <img src={coursetwo} alt="Image" className="rounded w-100" />
                                                    <span className="tag"><i className="fa-solid fa-video"></i>22+ VIDEOS</span>
                                                </div>
                                                <div className="course-single-content p-3">
                                                    <div className="course-single-content-meta">
                                                        <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>2.5k Views</a>
                                                        <span><i className="fa-solid fa-clock"></i>6 hr 07 min</span>
                                                    </div>
                                                    <div className="course-single-content-title">
                                                        <h5>UI/UX Design</h5>
                                                        <span><i className="fa-solid fa-star"></i>4.7</span>
                                                    </div>
                                                    <p className="text-start">Creative Course</p>
                                                    <div className="course-single-content-cta">
                                                        <h5>$25.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                                        <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xxl-4">
                                            <div className="course-single col-margin">
                                                <div className="course-single-thumb">
                                                    <img src={coursethree} alt="Image" className="rounded w-100" />
                                                    <span className="tag"><i className="fa-solid fa-video"></i>32+ VIDEOS</span>
                                                </div>
                                                <div className="course-single-content p-3">
                                                    <div className="course-single-content-meta">
                                                        <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>4.5k Views</a>
                                                        <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                                    </div>
                                                    <div className="course-single-content-title">
                                                        <h5>Web Design</h5>
                                                        <span><i className="fa-solid fa-star"></i>4.2</span>
                                                    </div>
                                                    <p className="text-start">Web Design</p>
                                                    <div className="course-single-content-cta">
                                                        <h5>$22.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                                        <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item  p-3 ">
                                    <div className="row row-margin">
                                        <div className="col-md-6 col-lg-4 col-xxl-4">
                                            <div className="course-single col-margin">
                                                <div className="course-single-thumb">
                                                    <img src={courseone} alt="Image" className="rounded w-100"/>
                                                    <span className="tag"><i className="fa-solid fa-video"></i>25+ VIDEOS</span>
                                                </div>
                                                <div className="course-single-content p-3">
                                                    <div className="course-single-content-meta">
                                                        <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye"></i>3.5k Views</a>
                                                        <span><i className="fa-solid fa-clock"></i>7 hr 27 min</span>
                                                    </div>
                                                    <div className="course-single-content-title">
                                                        <h5>Graphic Design</h5>
                                                        <span><i className="fa-solid fa-star"></i>4.5</span>
                                                    </div>
                                                    <p className="text-start">Master Course</p>
                                                    <div className="course-single-content-cta">
                                                        <h5>$15.00 <span  className='text-decoration-line-through'>$20.00</span></h5>
                                                        <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xxl-4">
                                            <div className="course-single col-margin">
                                                <div className="course-single-thumb">
                                                    <img src={coursetwo} alt="Image" className="rounded w-100" />
                                                    <span className="tag"><i className="fa-solid fa-video"></i>22+ VIDEOS</span>
                                                </div>
                                                <div className="course-single-content p-3">
                                                    <div className="course-single-content-meta">
                                                        <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>2.5k Views</a>
                                                        <span><i className="fa-solid fa-clock"></i>6 hr 07 min</span>
                                                    </div>
                                                    <div className="course-single-content-title">
                                                        <h5>UI/UX Design</h5>
                                                        <span><i className="fa-solid fa-star"></i>4.7</span>
                                                    </div>
                                                    <p className="text-start">Creative Course</p>
                                                    <div className="course-single-content-cta">
                                                        <h5>$25.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                                        <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xxl-4">
                                            <div className="course-single col-margin">
                                                <div className="course-single-thumb">
                                                    <img src={coursethree} alt="Image" className="rounded w-100" />
                                                    <span className="tag"><i className="fa-solid fa-video"></i>32+ VIDEOS</span>
                                                </div>
                                                <div className="course-single-content p-3">
                                                    <div className="course-single-content-meta">
                                                        <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>4.5k Views</a>
                                                        <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                                    </div>
                                                    <div className="course-single-content-title">
                                                        <h5>Web Design</h5>
                                                        <span><i className="fa-solid fa-star"></i>4.2</span>
                                                    </div>
                                                    <p className="text-start">Web Programming</p>
                                                    <div className="course-single-content-cta">
                                                        <h5>$22.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                                        <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="carousel-item  p-3 ">
                                    <div className="row row-margin">
                                        <div className="col-md-6 col-lg-4 col-xxl-4">
                                            <div className="course-single col-margin">
                                                <div className="course-single-thumb">
                                                    <img src={courseone} alt="Image" className="rounded w-100"/>
                                                    <span className="tag"><i className="fa-solid fa-video"></i>25+ VIDEOS</span>
                                                </div>
                                                <div className="course-single-content p-3">
                                                    <div className="course-single-content-meta">
                                                        <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye"></i>3.5k Views</a>
                                                        <span><i className="fa-solid fa-clock"></i>7 hr 27 min</span>
                                                    </div>
                                                    <div className="course-single-content-title">
                                                        <h5>Graphic Design</h5>
                                                        <span><i className="fa-solid fa-star"></i>4.5</span>
                                                    </div>
                                                    <p className="text-start">Master Course</p>
                                                    <div className="course-single-content-cta">
                                                        <h5>$15.00 <span  className='text-decoration-line-through'>$20.00</span></h5>
                                                        <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xxl-4">
                                            <div className="course-single col-margin">
                                                <div className="course-single-thumb">
                                                    <img src={coursetwo} alt="Image" className="rounded w-100" />
                                                    <span className="tag"><i className="fa-solid fa-video"></i>22+ VIDEOS</span>
                                                </div>
                                                <div className="course-single-content p-3">
                                                    <div className="course-single-content-meta">
                                                        <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>2.5k Views</a>
                                                        <span><i className="fa-solid fa-clock"></i>6 hr 07 min</span>
                                                    </div>
                                                    <div className="course-single-content-title">
                                                        <h5>UI/UX Design</h5>
                                                        <span><i className="fa-solid fa-star"></i>4.7</span>
                                                    </div>
                                                    <p className="text-start">Creative Course</p>
                                                    <div className="course-single-content-cta">
                                                        <h5>$25.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                                        <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xxl-4">
                                            <div className="course-single col-margin">
                                                <div className="course-single-thumb">
                                                    <img src={coursethree} alt="Image" className="rounded w-100" />
                                                    <span className="tag"><i className="fa-solid fa-video"></i>32+ VIDEOS</span>
                                                </div>
                                                <div className="course-single-content p-3">
                                                    <div className="course-single-content-meta">
                                                        <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>4.5k Views</a>
                                                        <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                                    </div>
                                                    <div className="course-single-content-title">
                                                        <h5>WebDesign</h5>
                                                        <span><i className="fa-solid fa-star"></i>4.2</span>
                                                    </div>
                                                    <p className="text-start">Web Programming</p>
                                                    <div className="course-single-content-cta">
                                                        <h5>$22.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                                        <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* --SECTION-COURS-END-- */}

        {/* --FEATURES-START-- */}
        <div className="lg-carrousel section-3">
            <div className="container-fluid">
                <div className="row">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item  p-3 active">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="features-slider-single slick-slide slick-cloned">
                                            <div class="features-slider-single-content bg-one">
                                                <div class="features-slider-thumb">
                                                    <img src={robotics} alt="Icon" />
                                                </div>
                                                <h5>Robotics Automation</h5>
                                                <p>Le matériel de cours pour chaque sujet est conçu par des experts</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                         <div className="features-slider-single slick-slide slick-active">
                                            <div class="features-slider-single-content bg-two">
                                                <div class="features-slider-thumb">
                                                    <img src={graphics} alt="Icon" />
                                                </div>
                                                <h5>Graphic Design</h5>
                                                <p>Le matériel de cours pour chaque sujet est conçu par des experts</p>
                                            </div>
                                         </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div class="features-slider-single slick-slide slick-cloned">
                                            <div class="features-slider-single-content bg-one">
                                                <div class="features-slider-thumb">
                                                    <img src={webdevelopment} alt="Icon" />
                                                </div>
                                                <h5>Web Development</h5>
                                                <p>Le matériel de cours pour chaque sujet est conçu par des experts</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                       <div className="features-slider-single slick-slide slick-active">
                                        <div class="features-slider-single-content bg-two">
                                                <div class="features-slider-thumb">
                                                    <img src={appdevelopment} alt="Icon" />
                                                </div>
                                                <h5>App Development</h5>
                                                <p>Le matériel de cours pour chaque sujet est conçu par des experts</p>
                                            </div>
                                       </div>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item  p-3">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div class="features-slider-single slick-slide slick-active">
                                            <div class="features-slider-single-content bg-two">
                                                <div class="features-slider-thumb">
                                                    <img src={uiux} alt="Icon" />
                                                </div>
                                                <h5>UI/UX Design</h5>
                                                <p>Le matériel de cours pour chaque sujet est conçu par des experts</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div class="features-slider-single slick-slide slick-active">
                                            <div class="features-slider-single-content bg-one">
                                                <div class="features-slider-thumb">
                                                    <img src={appdevelopment} alt="Icon" />
                                                </div>
                                                <h5>App Development</h5>
                                                <p>Le matériel de cours pour chaque sujet est conçu par des experts</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                       <div class="features-slider-single slick-slide">
                                            <div class="features-slider-single-content bg-two">
                                                <div class="features-slider-thumb">
                                                    <img src={digitalmarketing} alt="Icon" />
                                                </div>
                                                <h5>Digital Marketing</h5>
                                                <p>Le matériel de cours pour chaque sujet est conçu par des experts</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                         <div className="features-slider-single slick-slide slick-active">
                                            <div class="features-slider-single-content bg-one">
                                                <div class="features-slider-thumb">
                                                    <img src={robotics} alt="Icon" />
                                                </div>
                                                <h5>Robotics Automation</h5>
                                                <p>Le matériel de cours pour chaque sujet est conçu par des experts</p>
                                            </div>
                                         </div>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item  p-3">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="features-slider-single slick-slide slick-cloned">
                                            <div class="features-slider-single-content bg-two">
                                                <div class="features-slider-thumb">
                                                    <img src={robotics} alt="Icon" />
                                                </div>
                                                <h5>Robotics Automation</h5>
                                                <p>Course material for each subject is designed by experts</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                         <div className="features-slider-single slick-slide slick-active">
                                            <div class="features-slider-single-content bg-one">
                                                <div class="features-slider-thumb">
                                                    <img src={graphics} alt="Icon" />
                                                </div>
                                                <h5>Graphic Design</h5>
                                                <p>Course material for each subject is designed by experts</p>
                                            </div>
                                         </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div class="features-slider-single slick-slide slick-cloned">
                                            <div class="features-slider-single-content bg-two">
                                                <div class="features-slider-thumb">
                                                    <img src={webdevelopment} alt="Icon" />
                                                </div>
                                                <h5>Web Development</h5>
                                                <p>Le matériel de cours pour chaque sujet est conçu par des experts</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                       <div className="features-slider-single slick-slide slick-active">
                                        <div class="features-slider-single-content bg-one">
                                                <div class="features-slider-thumb">
                                                    <img src={appdevelopment} alt="Icon" />
                                                </div>
                                                <h5>App Development</h5>
                                                <p>Le matériel de cours pour chaque sujet est conçu par des experts</p>
                                            </div>
                                       </div>
                                    </div>
                                </div>
                            </div>
                            
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Section-FEATURE-END */}

           {/* --APROPOS DE NOUS START -- */}
           <section class="about section overflow-hidden py-5">
                <div class="container">
                    <div class="row row-margin align-items-center">
                        <div class="col-lg-8 col-xxl-6">
                            <div class="about-content col-margin justify-content-start text-start">
                                <img src={aboutthumb} alt="Image" />
                                <h2 class="section-title text-start">Connaître toutes les informations À propos de nous</h2>
                                <p className="text-start">E-learning est une entreprise de confiance qui se consacre à la création de percées dans le domaine de l'informatique. Depuis sa création, Elearning a connu un succès multiforme en 6 longues années. Contribuer à la construction du monde numérique. L'une des principales sociétés informatiques au monde joue un rôle important dans l'élimination du problème du chômage depuis 2016.</p>
                                <a href="/cours" class="cmn-button text-decoration-none">Parcourir le cours</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-xxl-6 order-first order-lg-last">
                            <div class="about-thumb col-margin">
                                <img src={aboutillustration} alt="Image" class="width-unset" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        {/* --APROPOS DE NOUS END -- */}
       
        {/* --SECTION -SERVICES-- */}
        <div className="lg-carrousel">
            <div className="container-fluid  section-4 py-5">
                <div className="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-11 col-xl-8">
                            <div class="section-header justify-content-center">
                                <h2 class="section-title text-center mb-3">Nous avons des services <br/> spéciaux dont vous serez satisfait</h2>
                                <p class="section-sub-title tex-center mb-3">Notre liste de cours est organisée en fonction des compétences les plus demandées actuellement dans le pays et à l'extérieur du pays. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item  p-3 active">
                                <div className="row align-items-center d-flex">
                                    <div className="col-lg-3 col-sm-3 rounded">
                                        <div class="service-slider-single slick-slide slick-cloned">
                                            <div class="service-slider-thumb">
                                                <img src={virtual} alt="Icon" />
                                            </div>
                                            <h5>Virtual Internship</h5>
                                            <p>After completing the course, you will get an</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-3 rounded">
                                        <div class="service-slider-single slick-slide slick-cloned">
                                            <div class="service-slider-thumb">
                                                <img src={language} alt="Icon" />
                                            </div>
                                            <h5>English language</h5>
                                            <p>Along with teaching basic English, we emphasize...</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-3 rounded">
                                        <div className="service-slider-single">
                                            <div class=" slick-slide slick-cloned">
                                                <div class="service-slider-thumb">
                                                    <img src={support} alt="Icon" />
                                                </div>
                                                <h5>24/7 online support</h5>
                                                <p>Our organization Creative IT Institute's</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div class="service-slider-single slick-slide">
                                            <div class="service-slider-thumb">
                                                <img src={language} alt="Icon" />
                                            </div>
                                            <h5>English language</h5>
                                            <p>Along with teaching basic English, we emphasize...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="carousel-item  p-3">
                                <div className="row align-items-center d-flex">
                                    <div className="col-lg-3 col-sm-3 rounded">
                                        <div class="service-slider-single slick-slide slick-current slick-active slick-center">
                                            <div class="service-slider-thumb">
                                                <img src={virtual} alt="Icon" />
                                            </div>
                                            <h5>Virtual Internship</h5>
                                            <p>After completing the course, you will get an</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-3 rounded">
                                        <div class="service-slider-single slick-slide">
                                            <div class="service-slider-thumb">
                                                <img src={language} alt="Icon" />
                                            </div>
                                            <h5>English language</h5>
                                            <p>Along with teaching basic English, we emphasize...</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-3 rounded">
                                        <div class="service-slider-single slick-slide" >
                                            <div class="service-slider-thumb">
                                                <img src={support} alt="Icon" />
                                            </div>
                                            <h5>24/7 online support</h5>
                                            <p>Our organization Creative IT Institute's</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-3 rounded">
                                        <div class="service-slider-single slick-slide">
                                            <div class="service-slider-thumb">
                                                <img src={virtual} alt="Icon" />
                                            </div>
                                            <h5>Virtual Internship</h5>
                                            <p>After completing the course, you will get an</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item  p-3">
                                <div className="row align-items-center d-flex">
                                    <div className="col-lg-3 col-sm-3 rounded">
                                       <div class="service-slider-single slick-slide">
                                            <div class="service-slider-thumb">
                                                <img src={language} alt="Icon" />
                                            </div>
                                            <h5>English language</h5>
                                            <p>Along with teaching basic English, we emphasize...</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-3 rounded">
                                       <div class="service-slider-single slick-slide">
                                            <div class="service-slider-thumb">
                                                <img src={support} alt="Icon" />
                                            </div>
                                            <h5>24/7 online support</h5>
                                            <p>Our organization Creative IT Institute's</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-3 rounded">
                                        <div class="service-slider-single slick-slide">
                                            <div class="service-slider-thumb">
                                                <img src={language} alt="Icon" />
                                            </div>
                                            <h5>English language</h5>
                                            <p>Along with teaching basic English, we emphasize...</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-sm-3 rounded">
                                        <div class="service-slider-single slick-slide">
                                            <div class="service-slider-thumb">
                                                <img src={virtual} alt="Icon" />
                                            </div>
                                            <h5>Virtual Internship</h5>
                                            <p>After completing the course, you will get an</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        {/* --SECTION -SERVICES END-- */}
         
         {/* --SECTION-SEMINAIRE-START -- */}

        <section className="seminar section overflow-hidden py-5">
            <div className="container">
                <div className="row row-margin align-items-center">
                    <div className="col-lg-8 col-xl-6">
                        <div className="seminar-content text-start col-margin">
                            <h2 className="section-title text-start">
                            Participez à des séminaires gratuits
                            </h2>
                            <p className="text-start">Vous ne savez pas quel cours suivre pour devenir freelance ? Rejoignez notre séminaire gratuit. Dans ces séminaires thématiques, vous découvrirez les possibilités de chaque cours. De plus, en discutant avec le conseiller expert présent au séminaire, vous pourrez facilement décider de choisir le cours approprié.</p>
                            <h4 className="text-start">Séminaires gratuits à venir</h4>
                            <div className="seminar-content-single">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="seminar-content-single-item justify-content-start text-start">
                                            <div className="seminar-date text-start">
                                                <h5 className="text-white">19 <br/> juillet, 22</h5>
                                            </div>
                                            <h5 className="text-start">Cybersécurité</h5>
                                            <p className="text-start">En ligne, heure : 20h00</p>
                                            <a href="/contact" className="cmn-button cmn-button--secondary text-decoration-none" onClick={() => Navigate("/users")}>Rejoignez-nous</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="seminar-content-single-item justify-content-start text-start">
                                            <div className="seminar-date text-start">
                                                <h5 className="text-white">19 <br/> juillet, 22</h5>
                                            </div>
                                            <h5 className="text-start">Montage vidéo</h5>
                                            <p className="text-start">En ligne, heure : 20h00</p>
                                            <a href="/contact" className="cmn-button cmn-button--secondary text-decoration-none" onClick={() => Navigate("/users")}>Rejoignez-nous</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="/contact" className="cmn-button text-decoration-none" onClick={() => Navigate("/users")}>Tous les séminaires</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-5 offset-xl-1 order-first order-lg-last">
                        <div className="seminar-thumb col-margin">
                            <img src={seminarillustration} alt="Image" className="width-unset" />
                        </div>
                    </div>
                </div>
            </div>
       </section>

        {/* --SECTION-SEMINAIRE-END-- */}   

        {/* --SECTION-PROCES-START-- */}
        <section className="section process bg-img py-5">
            <div className="container">
                <div className="row align-items-center row-margin">
                    <div className="col-lg-5 col-sm-12 col-xl-6">
                        <div className="process-content col-margin text-start">
                            <h2 className="section-title text-start">Processus d'initiation au cours</h2>
                            <p className="text-start">Le design est un travail très créatif. Le travail créatif requiert des compétences. Et ces compétences s'acquièrent par une pratique régulière et des conseils d'experts. Chez Elearning, il est possible d'obtenir des conseils d'experts ainsi que des idées de projets à mettre en pratique.</p>
                            <a href="/cours" className="cmn-button text-decoration-none" type="button" onClick={() => Navigate("/Cours")}>Parcourir les Cours</a>
                        </div>
                    </div>
                    <div className="col-lg-7 col-sm-12 col-xl-6">
                        <div className="process-items col-margin">
                            <div className="process-items-single mb-3 me-3 text-center">
                                <div className="process-items-single-thumb">
                                    <img src={account} alt="Icon" />
                                </div>
                                <h5 className="mb-2">Créer un compte</h5>
                                <p>Faites passer votre carrière à des sommets uniques dans ce tournoi compétitif...</p>
                            </div>
                            <div className="process-items-single mb-3 text-center">
                                <div className="process-items-single-thumb">
                                    <img src={course} alt="Icon" />
                                </div>
                                <h5 className="mb-2">Sélectionnez le cours</h5>
                                <p>Faites passer votre carrière à des sommets uniques dans ce tournoi compétitif...</p>
                            </div>
                            <div className="process-items-single me-3 text-center">
                                <div className="process-items-single-thumb">
                                    <img src={buy} alt="Icon" />
                               </div>
                                <h5 className="mb-2">Acheter le cours</h5>
                                 <p>Faites passer votre carrière à des sommets uniques dans ce tournoi compétitif...</p>
                            </div>
                            <div className="process-items-single text-center">
                                <div className="process-items-single-thumb">
                                    <img src={skill} alt="Icon" />
                                </div>
                                <h5 className="mb-2">Commencer à acquérir des compétences</h5>
                                <p>Faites passer votre carrière à des sommets uniques dans ce tournoi compétitif...</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
       </section>
    {/* SECTION-PROCES-END */}
       
        {/* --SECTION-SPECIAL-COURS-START -- */}  
        <div className="section-2">
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-11 col-xl-8">
                            <div class="section-header justify-content-center">
                                <h2 class="section-title text-center mb-3">Cours Spécial</h2>
                                <p class="section-sub-title tex-center mb-3">Notre liste de cours est organisée en fonction des compétences les plus demandées actuellement dans le pays et à l'extérieur du pays. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item  p-3 active">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="course-single col-margin">
                                                <div className="course-single-thumb">
                                                    <img src={courseone} alt="Image" className="rounded w-100"/>
                                                    <span className="tag"><i className="fa-solid fa-video"></i>25+ VIDEOS</span>
                                                </div>
                                                <div className="course-single-content p-3">
                                                    <div className="course-single-content-meta">
                                                        <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye"></i>3.5k Views</a>
                                                        <span><i className="fa-solid fa-clock"></i>7 hr 27 min</span>
                                                    </div>
                                                    <div className="course-single-content-title">
                                                        <h5>Graphic Design</h5>
                                                        <span><i className="fa-solid fa-star"></i>4.5</span>
                                                    </div>
                                                    <p className="text-start">Master Course</p>
                                                    <div className="course-single-content-cta">
                                                        <h5>$15.00 <span  className='text-decoration-line-through'>$20.00</span></h5>
                                                        <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="course-single col-margin">
                                                <div className="course-single-thumb">
                                                    <img src={coursetwo} alt="Image" className="rounded w-100" />
                                                    <span className="tag"><i className="fa-solid fa-video"></i>22+ VIDEOS</span>
                                                </div>
                                                <div className="course-single-content p-3">
                                                    <div className="course-single-content-meta">
                                                        <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>2.5k Views</a>
                                                        <span><i className="fa-solid fa-clock"></i>6 hr 07 min</span>
                                                    </div>
                                                    <div className="course-single-content-title">
                                                        <h5>UI/UX Design</h5>
                                                        <span><i className="fa-solid fa-star"></i>4.7</span>
                                                    </div>
                                                    <p className="text-start">Creative Course</p>
                                                    <div className="course-single-content-cta">
                                                        <h5>$25.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                                        <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="course-single col-margin">
                                                <div className="course-single-thumb">
                                                    <img src={coursethree} alt="Image" className="rounded w-100" />
                                                    <span className="tag"><i className="fa-solid fa-video"></i>32+ VIDEOS</span>
                                                </div>
                                                <div className="course-single-content p-3">
                                                    <div className="course-single-content-meta">
                                                        <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>4.5k Views</a>
                                                        <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                                    </div>
                                                    <div className="course-single-content-title">
                                                        <h5>Web Design</h5>
                                                        <span><i className="fa-solid fa-star"></i>4.2</span>
                                                    </div>
                                                    <p className="text-start">Web Design</p>
                                                    <div className="course-single-content-cta">
                                                        <h5>$22.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                                        <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="carousel-item  p-3 ">
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="course-single col-margin">
                                                <div className="course-single-thumb">
                                                    <img src={special1} alt="Image" className="rounded w-100" />
                                                    <span className="tag"><i className="fa-solid fa-video"></i>25+ VIDEOS</span>
                                                </div>
                                                <div className="course-single-content p-3">
                                                    <div className="course-single-content-meta">
                                                        <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye text-decoration-none"></i>9.5k Views</a>
                                                        <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                                    </div>
                                                    <div className="course-single-content-title">
                                                        <h5>Learning Holy Quran</h5>
                                                        <span><i className="fa-solid fa-star"></i>4.5</span>
                                                    </div>
                                                    <p className="text-start">With Arabic Language</p>
                                                    <div className="course-single-content-cta">
                                                        <h5>$55.00 <span  className='text-decoration-line-through'>$60.00</span></h5>
                                                        <a href="/cours" className="cmn-button  text-decoration-none">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                           <div className="course-single col-margin">
                                                <div className="course-single-thumb">
                                                    <img src={special2} alt="Image" className="rounded w-100" />
                                                    <span className="tag"><i className="fa-solid fa-video"></i>22+ VIDEOS</span>
                                                </div>
                                                <div className="course-single-content p-3">
                                                    <div className="course-single-content-meta">
                                                        <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye text-decoration-none"></i>2.5k Views</a>
                                                        <span><i className="fa-solid fa-clock"></i>6 hr 07 min</span>
                                                    </div>
                                                    <div className="course-single-content-title">
                                                        <h5>Spoken English</h5>
                                                        <span><i className="fa-solid fa-star"></i>4.7</span>
                                                    </div>
                                                    <p className="text-start">International English</p>
                                                    <div className="course-single-content-cta">
                                                        <h5>$25.00 <span className='text-decoration-line-through'>$30.00</span></h5>
                                                        <a href="/cours" className="cmn-button  text-decoration-none">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="course-single col-margin">
                                                <div className="course-single-thumb">
                                                    <img src={special3} alt="Image" className=" rounded w-100" />
                                                    <span className="tag"><i className="fa-solid fa-video"></i>32+ VIDEOS</span>
                                                </div>
                                                <div className="course-single-content p-3">
                                                    <div className="course-single-content-meta">
                                                        <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye text-decoration-none"></i>4.5k Views</a>
                                                        <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                                    </div>
                                                    <div className="course-single-content-title">
                                                        <h5>Learning Japanese</h5>
                                                        <span><i className="fa-solid fa-star"></i>4.2</span>
                                                    </div>
                                                    <p className="text-start">Learning Language</p>
                                                    <div className="course-single-content-cta">
                                                        <h5>$22.00 <span   className='text-decoration-line-through'>$30.00</span></h5>
                                                        <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="carousel-item  p-3 ">
                                    <div className="row">
                                    <div className="col-lg-4 col-sm-4">
                                            <div className="course-single col-margin">
                                                <div className="course-single-thumb">
                                                    <img src={courseone} alt="Image" className="rounded w-100"/>
                                                    <span className="tag"><i className="fa-solid fa-video"></i>25+ VIDEOS</span>
                                                </div>
                                                <div className="course-single-content p-3">
                                                    <div className="course-single-content-meta">
                                                        <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye"></i>3.5k Views</a>
                                                        <span><i className="fa-solid fa-clock"></i>7 hr 27 min</span>
                                                    </div>
                                                    <div className="course-single-content-title">
                                                        <h5>Graphic Design</h5>
                                                        <span><i className="fa-solid fa-star"></i>4.5</span>
                                                    </div>
                                                    <p className="text-start">Master Course</p>
                                                    <div className="course-single-content-cta">
                                                        <h5>$15.00 <span  className='text-decoration-line-through'>$20.00</span></h5>
                                                        <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="course-single col-margin">
                                                <div className="course-single-thumb">
                                                    <img src={coursetwo} alt="Image" className="rounded w-100" />
                                                    <span className="tag"><i className="fa-solid fa-video"></i>22+ VIDEOS</span>
                                                </div>
                                                <div className="course-single-content p-3">
                                                    <div className="course-single-content-meta">
                                                        <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>2.5k Views</a>
                                                        <span><i className="fa-solid fa-clock"></i>6 hr 07 min</span>
                                                    </div>
                                                    <div className="course-single-content-title">
                                                        <h5>UI/UX Design</h5>
                                                        <span><i className="fa-solid fa-star"></i>4.7</span>
                                                    </div>
                                                    <p className="text-start">Creative Course</p>
                                                    <div className="course-single-content-cta">
                                                        <h5>$25.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                                        <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="course-single col-margin">
                                                <div className="course-single-thumb">
                                                    <img src={coursethree} alt="Image" className="rounded w-100" />
                                                    <span className="tag"><i className="fa-solid fa-video"></i>32+ VIDEOS</span>
                                                </div>
                                                <div className="course-single-content p-3">
                                                    <div className="course-single-content-meta">
                                                        <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>4.5k Views</a>
                                                        <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                                    </div>
                                                    <div className="course-single-content-title">
                                                        <h5>Web Design</h5>
                                                        <span><i className="fa-solid fa-star"></i>4.2</span>
                                                    </div>
                                                    <p className="text-start">Web Design</p>
                                                    <div className="course-single-content-cta">
                                                        <h5>$22.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                                        <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* --SECTION-SPECIAL-COURS-START -- */}

        {/* SECTION-COUNTER */}
        <section class="counter section py-5">
            <div class="container py-5">
                <div class="row row-margin align-items-start">
                    <div class="col-sm-6 col-lg-3">
                        <div class="counter-single col-margin text-center">
                            <img src={mentor} alt="Icon" />
                            <h2 class="section-title"><span class="counter-number">555</span>+</h2>
                            <p>Our Mentor</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="counter-single col-margin text-center">
                            <img src={students} alt="Icon" />
                            <h2 class="section-title"><span class="counter-number">99</span>k+</h2>
                            <p>All Students</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="counter-single col-margin text-center">
                            <img src={course} alt="Icon" />
                            <h2 class="section-title"><span class="counter-number">250</span>+</h2>
                            <p>All Course</p>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="counter-single col-margin text-center">
                            <img src={award} alt="Icon" />
                            <h2 class="section-title"><span class="counter-number">66</span>+</h2>
                            <p>Winning Award</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* SECTION-TESTIMONIAL  */}
    <section class="section testimonials section-5 bg-img py-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-11 col-sm-12 col-xl-8">
                    <div class="section-header justify-content-center">
                        <h2 class="section-title text-center mb-3">Voyons <br/> ce que disent nos étudiants ?</h2>
                        <p class="section-sub-title tex-center mb-3">Faites progresser votre carrière vers des sommets uniques dans ce marché du travail  <br/> compétitif. Toutes les catégories dont vous avez besoin sont ici.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 col-sm-12">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                     <div className="row">
                                        <div className="col-lg-4">
                                            <div class="testimonials-slider-item-content p-3">
                                                <div class="rating">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                                <p className='justify-content-center'>J'ai suivi des cours sur quelques plateformes d'apprentissage qui se concentraient trop sur des sujets pertinents et s'éloignaient du point principal, mais les cours d'Elearning </p>
                                                <div class="testimonials-slider-item-content-author">
                                                    <img src={jiniya} alt="Image"/>
                                                    <div class="testimonials-slider-item-content-author-meta">
                                                        <p>Jiniya Rahman</p>
                                                        <p class="designation">Developpeur Font End</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                   <i class="fa-sharp fa-solid fa-quote-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div class="testimonials-slider-item-content p-3">
                                                <div class="rating">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                                <p className='justify-content-center'>Je ne savais pas grand-chose sur le travail indépendant. Mettez-vous au travail en matière de conception et de projets en suivant le cours Freelancing with Adobe Illustrator d'Elearning.</p>
                                                <div class="testimonials-slider-item-content-author">
                                                    <img src={jakaria} alt="Image" />
                                                    <div class="testimonials-slider-item-content-author-meta">
                                                        <p>Mr Jakariya Hossen</p>
                                                        <p class="designation">Designer graphique</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                   <i class="fa-sharp fa-solid fa-quote-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div class="testimonials-slider-item-content p-3">
                                                <div class="rating">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                                <p className='justify-content-center'>Nous trouvons généralement divers tutoriels en ligne en anglais. Mais maintenant, sur la plateforme Elearning, je peux facilement apprendre des cours de niveau international.</p>
                                                <div class="testimonials-slider-item-content-author">
                                                    <img src={huya} alt="Image" />
                                                    <div class="testimonials-slider-item-content-author-meta">
                                                        <p>Huye Alvira</p>
                                                        <p class="designation">Étudiant</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                   <i class="fa-sharp fa-solid fa-quote-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                </div>

                                <div class="carousel-item">
                                <div className="row">
                                        <div className="col-lg-4">
                                            <div class="testimonials-slider-item-content p-3">
                                                <div className="text-start">
                                                    <i class="fa-sharp fa-solid fa-quote-left"></i>
                                                </div>
                                                <div class="rating">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                                <p className='justify-content-center mb-2'>J'ai suivi des cours sur quelques plateformes d'apprentissage qui se concentraient trop sur des sujets pertinents et s'éloignaient du point principal, mais les cours d'Elearning</p>
                                                <div class="testimonials-slider-item-content-author">
                                                    <img src={jiniya} alt="Image"/>
                                                    <div class="testimonials-slider-item-content-author-meta">
                                                        <p>Jiniya Rahman</p>
                                                        <p class="designation">Developpeur Font End</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                   <i class="fa-sharp fa-solid fa-quote-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div class="testimonials-slider-item-content  p-3">
                                                <div className="text-start">
                                                    <i class="fa-sharp fa-solid fa-quote-left"></i>
                                                </div>
                                                <div class="rating">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                                <p className='justify-content-center'>Je ne savais pas grand-chose sur le travail indépendant. Mettez-vous au travail en matière de conception et de projets en suivant le cours Freelancing with Adobe Illustrator d'Elearning.</p>
                                                <div class="testimonials-slider-item-content-author">
                                                    <img src={jakaria} alt="Image" />
                                                    <div class="testimonials-slider-item-content-author-meta">
                                                        <p>Mr Jakariya Hossen</p>
                                                        <p class="designation">Designer graphique</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                   <i class="fa-sharp fa-solid fa-quote-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div class="testimonials-slider-item-content  p-3">
                                                <div className="text-start">
                                                    <i class="fa-sharp fa-solid fa-quote-left"></i>
                                                </div>
                                                <div class="rating">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                                <p className='justify-content-center'>Nous trouvons généralement divers tutoriels en ligne en anglais. Mais maintenant, sur la plateforme Elearning, je peux facilement apprendre des cours de niveau international.</p>
                                                <div class="testimonials-slider-item-content-author">
                                                    <img src={huya} alt="Image" />
                                                    <div class="testimonials-slider-item-content-author-meta">
                                                        <p>Huye Alvira</p>
                                                        <p class="designation">Étudiant</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                   <i class="fa-sharp fa-solid fa-quote-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                </div>

                                <div class="carousel-item">
                                <div className="row">
                                        <div className="col-lg-4">
                                            <div class="testimonials-slider-item-content  p-3">
                                                <div className="text-start">
                                                    <i class="fa-sharp fa-solid fa-quote-left"></i>
                                                </div>
                                                <div class="rating">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                                <p className='justify-content-center'>J'ai suivi des cours sur quelques plateformes d'apprentissage qui se concentraient trop sur des sujets pertinents et s'éloignaient du point principal, mais les cours d'Elearning</p>
                                                <div class="testimonials-slider-item-content-author">
                                                    <img src={jiniya} alt="Image"/>
                                                    <div class="testimonials-slider-item-content-author-meta">
                                                        <p>Jiniya Rahman</p>
                                                        <p class="designation">Developpeur Font End</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                   <i class="fa-sharp fa-solid fa-quote-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div class="testimonials-slider-item-content p-3">
                                                <div className="text-start">
                                                    <i class="fa-sharp fa-solid fa-quote-left"></i>
                                                </div>
                                                <div class="rating">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                                <p className='justify-contentt-center'>Je ne savais pas grand-chose sur le travail indépendant. Mettez-vous au travail en matière de conception et de projets en suivant le cours Freelancing with Adobe Illustrator d'Elearning.</p>
                                                <div class="testimonials-slider-item-content-author">
                                                    <img src={jakaria} alt="Image" />
                                                    <div class="testimonials-slider-item-content-author-meta">
                                                        <p>Mr Jakariya Hossen</p>
                                                        <p class="designation">Designer graphique</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                   <i class="fa-sharp fa-solid fa-quote-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div class="testimonials-slider-item-content p-3">
                                                <div className="text-start">
                                                    <i class="fa-sharp fa-solid fa-quote-left"></i>
                                                </div>
                                                <div class="rating">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </div>
                                                <p className='justify-content-center'>Nous trouvons généralement divers tutoriels en ligne en anglais. Mais maintenant, sur la plateforme Elearning, je peux facilement apprendre des cours de niveau international.</p>
                                                <div class="testimonials-slider-item-content-author">
                                                    <img src={huya} alt="Image" />
                                                    <div class="testimonials-slider-item-content-author-meta">
                                                        <p>Huye Alvira</p>
                                                        <p class="designation">Étudiant</p>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                   <i class="fa-sharp fa-solid fa-quote-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                </div> 
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         
        {/*SECTION-TESTIMONDIAL-END */}

        {/*  --SECTION-NEWSLETTERER--  */}
        <section class="newsletter section bg-img py-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10 col-sm-12 col-xxl-8">
                        <div class="newsletter-content">
                            <div class="section-header text-center">
                                <h2 class="section-title text-center mb-3">Restez connecté avec Elearning pour rester à jour</h2>
                                <p className="mb-3">Abonnez-vous à notre newsletter pour recevoir des offres et des mises à jour exceptionnelles !</p>
                            </div>
                            <form action="#" method="post" autocomplete="off">
                                <div class="newsletter-inputs">
                                    <input type="email" name="newsletter-mail" id="newsletterMail" placeholder="Your Email Address" required="required" />
                                    <button type="submit" class="cmn-button">Subscribe</button>
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

export default Accueil;