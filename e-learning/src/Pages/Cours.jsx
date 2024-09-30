import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import learning from "../assets/imgs/learning.png";
import React from "react";
import { Link } from 'react-router-dom';
import recentone from "../assets/imgs/recentone.png";
import recenttwo from "../assets/imgs/recenttwo.png";
import recentthree from "../assets/imgs/recentthree.png";
import courseone from "../assets/imgs/courseone.png";
import coursetwo from "../assets/imgs/coursetwo.png";
import coursethree from "../assets/imgs/coursethree.png";
import coursethree3 from "../assets/imgs/coursethree3.png";
import special1 from "../assets/imgs/special1.png";
import special2 from "../assets/imgs/special2.png";
import special3 from "../assets/imgs/special3.png";
import laravel from "../assets/imgs/laravel.png";
import  wordpress  from "../assets/imgs/wordpress.png"
import facebook from "../assets/imgs/facebook.png";
import motion from "../assets/imgs/motion.png";
import seo from "../assets/imgs/seo.png";
import microsoft from "../assets/imgs/microsoft.png";
import marketing from "../assets/imgs/marketing.png";


const Cours = () => {

    const Navigate = useNavigate();

    return ( 
        <div>
             {/* NAVBAR */}
            <div className="container-fluid container-fluid-1 fixed-top bg-white  px-0">
                <nav class="navbar navbar-expand-lg shadow bg-white px-5">
                    <div class="container-fluid">
                    <a class="navbar-brand me-auto " href="#"><img src={learning}  className="learning img-fluid" alt="logo"/></a>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img src={learning}  className="learning img-fluid" alt="logo"/></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                            <li class="nav-item">
                                <Link class="nav-link mx-lg-3 active" aria-current="page" to="/">Accueil</Link>
                            </li>
                            <div class="nav-item dropdown mx-lg-3">
                                    <Link to="accueil" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Cous</Link>
                                <div class="dropdown-menu m-0 bg-secondary rounded-0">
                                        <Link class="nav-item nav-link" to="/cours" >Cours</Link>
                                        <Link class="nav-item nav-link" to="/cours-details">Cours details</Link>
                                    </div>
                            </div>
                            <div class="nav-item dropdown mx-lg-3">
                                    <Link href="accueil" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Instructeurs</Link>
                                <div class="dropdown-menu m-0 bg-secondary rounded-0">
                                        <Link class="nav-item nav-link" to="/instructeurs">Instructeurs</Link>
                                        <Link class="nav-item nav-link" to="/inst-details">Instructeurs details</Link>
                                </div>
                            </div>
                            <li class="nav-item">
                                <Link class="nav-link mx-lg-3" to="/apropos" >A propos</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link mx-lg-3" to="/faq">FAQ</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link mx-lg-3" to="/contact">Contact</Link>
                            </li>
                            
                            </ul>
                            <div class="m-3 me-3">
                            <Button class="btn login-button border btn-sm rounded bg-white me-4"
                            type="button" onClick={() => Navigate("/contact")}>
                                Connexion
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div class="m-3 me-3 bouton-dn">
                            <Button class="btn login-button border btn-sm rounded bg-white me-4" type="button" onClick={() => Navigate("/login")}>Connexion</Button>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    </div>
                </nav>
            
            </div>
            {/* NAVBAR END*/}
         {/* BREADCRUMB*/}
        <div className="breadcrumb py-5">
            <div class="container pt-5">
                <div class="row pt-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="banner-content">
                            <h2 class="section-title">Cours</h2>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="banner-breadcrumb d-flex justify-content-start justify-content-lg-end">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/" className="text-decoration-none">Accueil</Link></li>
                                    <li class="breadcrumb-item active" aria-current="cours" onClick={() => Navigate("/Courst")}>Courst</li>
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
                    <div className="row align-items-center row-margin">
                        <div className="col-lg-9 col-xl-8 col-xxl-6">
                            <div className="section-header text-start col-margin">
                                <h2 className="section-title text-start">Cours sur le design</h2>
                                <p className="section-sub-title text-start">Notre liste de cours est organisée en fonction des compétences les plus demandées actuellement dans le pays et à l'extérieur du pays. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xl-4 col-xxl-6">
                            <div className="course-more text-start text-lg-end col-margin">
                                <a href="/cours" className="cmn-button text-decoration-none">Voir plus</a>
                            </div>
                        </div>
                    </div>
                </div>
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
                                <p>Master Course</p>
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
                                <p>Creative Course</p>
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
                                <img src={motion} alt="Image" className="rounded w-100" />
                                <span className="tag"><i className="fa-solid fa-video"></i>32+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>4.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>Motion Design</h5>
                                    <span><i className="fa-solid fa-star"></i>4.2</span>
                                </div>
                                <p>Animation Video</p>
                                <div className="course-single-content-cta">
                                    <h5>$22.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section course py-5 pb-0">
            <div className="container">
                <div className="course-intro">
                    <div className="row align-items-center row-margin">
                        <div className="col-lg-9 col-xl-8 col-xxl-6">
                            <div className="section-header text-start col-margin">
                                <h2 className="section-title">Web Programming</h2>
                                <p className="section-sub-title">Our course list is arranged with those skills which are
                                    currently
                                    in most demand in the country and outside the country. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xl-4 col-xxl-6">
                            <div className="course-more text-start text-lg-end col-margin">
                                <a href="/cours" className="cmn-button text-decoration-none">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-margin">
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={coursethree3} alt="Image" className="rounded w-100"/>
                                <span className="tag"><i className="fa-solid fa-video"></i>25+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>3.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>7 hr 27 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>Web Design</h5>
                                    <span><i className="fa-solid fa-star"></i>4.5</span>
                                </div>
                                <p>Web Programming</p>
                                <div className="course-single-content-cta">
                                    <h5>$15.00 <span>$20.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={wordpress} alt="Image" className=" rounded w-100" />
                                <span className="tag"><i className="fa-solid fa-video"></i>22+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>2.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>6 hr 07 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>Wordpress Theme</h5>
                                    <span><i className="fa-solid fa-star"></i>4.7</span>
                                </div>
                                <p>Coading Mastar</p>
                                <div className="course-single-content-cta">
                                    <h5>$25.00 <span>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-4 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={laravel} alt="Image" className="rounded w-100"/>
                                <span className="tag"><i className="fa-solid fa-video"></i>32+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>4.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>PHP &amp; Laravel</h5>
                                    <span><i className="fa-solid fa-star"></i>4.2</span>
                                </div>
                                <p>Software Design</p>
                                <div className="course-single-content-cta">
                                    <h5>$22.00 <span>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section course py-5 pb-0">
            <div className="container">
                <div className="course-intro">
                    <div className="row align-items-center row-margin">
                        <div className="col-lg-9 col-xl-8 col-xxl-6">
                            <div className="section-header text-start  col-margin">
                                <h2 className="section-title">Digital Marketing</h2>
                                <p className="section-sub-title text-start">Our course list is arranged with those skills which are
                                    currently
                                    in most demand in the country and outside the country. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xl-4 col-xxl-6">
                            <div className="course-more text-start text-lg-end col-margin">
                                <a href="/cours" className="cmn-button text-decoration-none">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-margin">
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={facebook} alt="Image" className=" rounded w-100"/>
                                <span className="tag"><i className="fa-solid fa-video"></i>25+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>3.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>7 hr 27 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>Facebook Marketing</h5>
                                    <span><i className="fa-solid fa-star"></i>4.5</span>
                                </div>
                                <p>Social Media</p>
                                <div className="course-single-content-cta">
                                    <h5>$15.00 <span>$20.00</span></h5>
                                    <a href="/cours" className="cmn-buttonn text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={seo} alt="Image" className="roundedw-100" />
                                <span className="tag"><i className="fa-solid fa-video"></i>22+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>2.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>6 hr 07 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>SEO for E-commerce</h5>
                                    <span><i className="fa-solid fa-star"></i>4.7</span>
                                </div>
                                <p>Digital Marketplace</p>
                                <div className="course-single-content-cta">
                                    <h5>$25.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={marketing} alt="Image" className="rounded w-100" />
                                <span className="tag"><i className="fa-solid fa-video"></i>32+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#"  className="text-decoration-none"><i className="fa-solid fa-eye"></i>4.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>Digital Marketing</h5>
                                    <span><i className="fa-solid fa-star"></i>4.2</span>
                                </div>
                                <p>With Fiverr &amp; Up Work</p>
                                <div className="course-single-content-cta">
                                    <h5>$22.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section course py-5 pb-0">
            <div className="container">
                <div className="course-intro">
                    <div className="row align-items-center row-margin">
                        <div className="col-lg-9 col-xl-8 col-xxl-6">
                            <div className="section-header text-start col-margin">
                                <h2 className="section-title">Microsoft Office</h2>
                                <p className="section-sub-title text-start">Our course list is arranged with those skills which are
                                    currently
                                    in most demand in the country and outside the country. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xl-4 col-xxl-6">
                            <div className="course-more text-start text-lg-end col-margin">
                                <a href="/cours" className="cmn-button text-decoration-none">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-margin">
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={microsoft} alt="Image" className="rounded w-100"/>
                                <span className="tag"><i className="fa-solid fa-video"></i>25+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye"></i>3.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>7 hr 27 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>Microsoft Word</h5>
                                    <span><i className="fa-solid fa-star"></i>4.5</span>
                                </div>
                                <p>Microsoft Office</p>
                                <div className="course-single-content-cta">
                                    <h5>$15.00 <span  className='text-decoration-line-through'>$20.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={seo} alt="Image" className="rounded w-100" />
                                <span className="tag"><i className="fa-solid fa-video"></i>22+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye"></i>2.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>6 hr 07 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>SEO for E-commerce</h5>
                                    <span><i className="fa-solid fa-star"></i>4.7</span>
                                </div>
                                <p>Digital Marketplace</p>
                                <div className="course-single-content-cta">
                                    <h5>$25.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoartio-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={marketing} alt="Image" className="rounded w-100" />
                                <span className="tag"><i className="fa-solid fa-video"></i>32+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye"></i>4.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>Digital Marketing</h5>
                                    <span><i className="fa-solid fa-star"></i>4.2</span>
                                </div>
                                <p>With Fiverr &amp; Up Work</p>
                                <div className="course-single-content-cta">
                                    <h5>$22.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section course py-5 pb-0">
            <div className="container">
                <div className="course-intro">
                    <div className="row align-items-center row-margin">
                        <div className="col-lg-9 col-xl-8 col-xxl-6">
                            <div className="section-header text-start col-margin">
                                <h2 className="section-title">Robotics Automation</h2>
                                <p className="section-sub-title text-start">Our course list is arranged with those skills which are
                                    currently
                                    in most demand in the country and outside the country. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xl-4 col-xxl-6">
                            <div className="course-more text-start text-lg-end col-margin">
                                <a href="/cours" className="cmn-button text-decoration-none">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-margin">
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={microsoft} alt="Image" className="rounded w-100" />
                                <span className="tag"><i className="fa-solid fa-video"></i>25+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#" className="text-decoartion-none"><i className="fa-solid fa-eye"></i>3.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>7 hr 27 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>Microsoft Word</h5>
                                    <span><i className="fa-solid fa-star"></i>4.5</span>
                                </div>
                                <p>Microsoft Office</p>
                                <div className="course-single-content-cta">
                                    <h5>$15.00 <span  className='text-decoration-line-through'>$20.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={seo} alt="Image" className="rounded w-100" />
                                <span className="tag"><i className="fa-solid fa-video"></i>22+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3 ">
                                <div className="course-single-content-meta">
                                    <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye"></i>2.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>6 hr 07 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>SEO for E-commerce</h5>
                                    <span><i className="fa-solid fa-star"></i>4.7</span>
                                </div>
                                <p>Digital Marketplace</p>
                                <div className="course-single-content-cta">
                                    <h5>$25.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
                        <div className="course-single col-margin">
                            <div className="course-single-thumb">
                                <img src={marketing} alt="Image" className="rounded w-100"/>
                                <span className="tag"><i className="fa-solid fa-video"></i>32+ VIDEOS</span>
                            </div>
                            <div className="course-single-content p-3">
                                <div className="course-single-content-meta">
                                    <a href="#" className="text-decoration-none"><i className="fa-solid fa-eye etxt-decoartion-none"></i>4.5k Views</a>
                                    <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                </div>
                                <div className="course-single-content-title">
                                    <h5>Digital Marketing</h5>
                                    <span><i className="fa-solid fa-star"></i>4.2</span>
                                </div>
                                <p>With Fiverr &amp; Up Work</p>
                                <div className="course-single-content-cta">
                                    <h5>$22.00 <span  className='text-decoration-line-through'>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section course py-5 pb-0">
            <div className="container">
                <div className="course-intro">
                    <div className="row align-items-center row-margin">
                        <div className="col-lg-9 col-xl-8 col-xxl-6">
                            <div className="section-header text-start col-margin">
                                <h2 className="section-title">Learning Language</h2>
                                <p className="section-sub-title text-start">Our course list is arranged with those skills which are
                                    currently
                                    in most demand in the country and outside the country. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-xl-4 col-xxl-6">
                            <div className="course-more text-start text-lg-end col-margin">
                                <a href="/cours" className="cmn-button text-decoration-none">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-margin">
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
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
                                <p>With Arabic Language</p>
                                <div className="course-single-content-cta">
                                    <h5>$55.00 <span  className='text-decoration-line-through'>$60.00</span></h5>
                                    <a href="/cours" className="cmn-button  text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
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
                                <p>International English</p>
                                <div className="course-single-content-cta">
                                    <h5>$25.00 <span className='text-decoration-line-through'>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button  text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-sm-12 col-xxl-4">
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
                                <p>Learning Language</p>
                                <div className="course-single-content-cta">
                                    <h5>$22.00 <span   className='text-decoration-line-through'>$30.00</span></h5>
                                    <a href="/cours" className="cmn-button text-decoration-none">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="pagination-wrapper">
                        <nav aria-label="...">
                            <ul class="pagination justify-content-center">
                                <li class="page-item me-2">
                                    <a class="page-link" href="#"><i class="fa-solid fa-angles-left"></i></a>
                                </li>
                                <li class="page-item me-2">
                                    <a class="page-link active" href="#" tabindex="-1">1</a>
                                </li>
                                <li class="page-item me-2">
                                    <a class="page-link" href="#">2</a>
                                </li>
                                <li class="page-item me-2 ">
                                    <a class="page-link" href="#">3</a>
                                </li>
                                <li class="page-item ms-2">
                                    <a class="page-link" href="#"><i class="fa-solid fa-angles-right"></i></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>

         {/*  --SECTION-NEWSLETTERER--  */}
         <section class="newsletter section bg-img py-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10 col-sm-12 col-xxl-8">
                        <div class="newsletter-content">
                            <div class="section-header text-center">
                                <h2 class="section-title">Restez connecté avec Elearning pour rester à jour</h2>
                                <p>Abonnez-vous à notre newsletter pour recevoir des offres et des mises à jour exceptionnelles !</p>
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

             {/* --FOOTER--  */}

        <footer className="footer py-5">
            <div className="container-fluid  border-bottom">
                <div className="container">
                    <div class="row align-items-center g-5 mb-3">
                        <div class="col-lg-3 col-sm-3">
                            <div class="footer-item text-start">
                                <img src={learning} className="img-fluid mb-1 logo" alt="logo" />
                                <p class="mb-3 text-start">Elearning est l'une des principales plateformes de développement des compétences en e-learning au monde. Nous nous engageons à éradiquer le chômage dans le monde et à créer des ressources humaines mondiales grâce au développement des compétences.</p>
                                <div class="d-flex justify-content-start">
                                    <a className="me-3"  hover href=""><i class="fa-brands fa-facebook-f"></i></a>
                                    <a className="me-3" href=""><i class="fa-brands fa-instagram"></i></a>
                                    <a className="me-3" href=""><i class="fab fa-twitter"></i></a>
                                    <a  href=""><i class="bi bi-globe"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-3 mb-5">
                            <div class="d-flex flex-column text-start footer-item mb-5">
                                <h2 class="mb-4">Office</h2>
                                <a class="btn-link text-decoration-none mb-2" href="">+221778952500</a>
                                <a class="btn-link text-decoration-none mb-2" href="">+221772555521</a>
                                <a class="btn-link text-decoration-none mb-2" href="">info@example.com</a>
                                <a class="btn-link text-decoration-none mb-2" href="">nfo@example.com</a>
                                <a class="btn-link text-decoration-none mb-2" href="">2231 Redbud Drive</a>
                                <a class="btn-link text-decoration-none mb-2" href="">MON – FRI: 9 AM – 7 PM</a>
                                <a class="btn-link text-decoration-none" href="">SAT – SUN: CLOSED</a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-3 mb-5">
                            <div class="d-flex flex-column text-start footer-item mb-5">
                                <h2 class="mb-4">Quick Links</h2>
                                <a class="btn-link text-decoration-none mb-2" href="">Home</a>
                                <a class="btn-link text-decoration-none mb-2" href="">About Us</a>
                                <a class="btn-link text-decoration-none mb-2" href="">Course</a>
                                <a class="btn-link text-decoration-none mb-2" href="">Instructor</a>
                                <a class="btn-link text-decoration-none mb-2" href="">FAQ</a>
                                <a class="btn-link text-decoration-none mb-4" href="">Contact</a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-3 mb-5">
                            <div class="footer-item mb-5">
                                <h2 class="mb-4">Recent Courses</h2>
                                    <div className="d-flex mb-3 align-items-center">
                                    <div className="section-img">
                                        <img src={recentone} className="img-fluid" alt="recent-1" />
                                    </div>
                                    <div className="section-title text-start ms-3">
                                        <a>Design Graphique</a>
                                        <p><span className="me-2">$22</span> $30</p>
                                    </div>
                                    </div>
                                    <div className="d-flex mb-3 align-items-center">
                                    <div className="section-img">
                                        <img src={recenttwo} className="img-fluid" alt="recent-1" />
                                    </div>
                                    <div className="section-title text-start ms-3">
                                        <a>Developpement Web </a>
                                        <p><span className="me-2">$30</span>$35</p>
                                    </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                    <div className="section-img">
                                        <img src={recentthree} className="img-fluid" alt="recent-1" />
                                    </div>
                                    <div className="section-title text-start ms-3">
                                        <a>UI/UX Design</a>
                                        <p><span className="me-3">$$25</span>$32</p>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="container-fluid py-3">
                <div className="container">
                    <div class="row justify-content-between copyright">
                        <div class="col-lg-6">
                            <p  className="text-lead">Copyright<i class="bi bi-c-circle me-2 ms-2"></i><a href="#index.html" className="text-decoration-none">2024 E-learning</a>, All right reserved.</p>
                        </div>
                        <div class="col-lg-6">
                            <p className="text-lead">Designed By <a href="#"class="text-white text-decoration-none ms-2 me-2">HTML Codex</a> Distributed By <a href="" className="text-decoration-none ms-2">ThemeWagon</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        </div>
     );
}
 
export default Cours;