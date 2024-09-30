import React from 'react';
import {useNavigate} from "react-router-dom";
import Button from "../Components/Button";
import learning from "../assets/imgs/learning.png";
import { Link } from 'react-router-dom';
import recentone from "../assets/imgs/recentone.png";
import recenttwo from "../assets/imgs/recenttwo.png";
import recentthree from "../assets/imgs/recentthree.png";
import one from "../assets/imgs/one.png";
import one1 from "../assets/imgs/one1.png";
import two2 from "../assets/imgs/two2.png";
import three3 from "../assets/imgs/three3.png";
import facebook from "../assets/imgs/facebook.png";

const InstDetails = () => {
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
                            <h2 class="section-title">Instructeurs details</h2>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="banner-breadcrumb d-flex justify-content-start justify-content-lg-end">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/" className="text-decoration-none" >Accueil</Link></li>
                                    <li class="breadcrumb-item active" aria-current="/instructeurs" onClick={() => Navigate("/InstDetails")}>Instructeurs</li>
                                    <li class="breadcrumb-item active" aria-current="/inst-details" onClick={() => Navigate("/Instdetails")}>Instructeurs detailes</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* BREADCRUMB*/}
         
        {/* SECTION-INSTRUCTEURS-DETAILS*/}
        
        <div className="container">
            <div className="row row-margin">
                <div className="col-xl-8 col-lg-8 col-sm-12">
                    <div className="instructor-details-content col-margin">
                        <div className="row row-margin">
                            <div className="col-md-6">
                                <div className="course-single col-margin">
                                    <div className="course-single-thumb">
                                        <img src={three3} alt="Image" className="rounded w-100" />
                                        <span className="tag"><i className="fa-solid fa-video"></i>25+ VIDEOS</span>
                                    </div>
                                    <div className="course-single-content p-3">
                                        <div className="course-single-content-meta">
                                            <a href="#" className='text-decoration-none'><i className="fa-solid fa-eye"></i>9.5k Views</a>
                                            <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                        </div>
                                        <div className="course-single-content-title">
                                            <h5><a href="/inst-details">Graphic Design</a></h5>
                                            <span><i className="fa-solid fa-star"></i>4.5</span>
                                        </div>
                                        <p>Master Course</p>
                                        <div className="course-single-content-cta">
                                            <h5>$55.00 <span className='text-decoration-line-through'>$60.00</span></h5>
                                            <a href="/course" className="cmn-button text-decoration-none">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="course-single col-margin">
                                    <div className="course-single-thumb">
                                        <img src={facebook} alt="Image" className="rounded w-100" />
                                        <span className="tag"><i className="fa-solid fa-video"></i>25+ VIDEOS</span>
                                    </div>
                                    <div className="course-single-content p-3">
                                        <div className="course-single-content-meta">
                                            <a href="#"  className='text-decoration-none'><i className="fa-solid fa-eye"></i>9.5k Views</a>
                                            <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                        </div>
                                        <div className="course-single-content-title">
                                            <h5>Facebook Marketing</h5>
                                            <span><i className="fa-solid fa-star"></i>4.5</span>
                                        </div>
                                        <p>Social Media</p>
                                        <div className="course-single-content-cta">
                                            <h5>$55.00 <span className='text-decoration-line-through'>$60.00</span></h5>
                                            <a href="/course" className="cmn-button text-decoration-none">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="course-single col-margin">
                                    <div className="course-single-thumb">
                                        <img src={one1} alt="Image" className="rounded w-100" />
                                        <span className="tag"><i className="fa-solid fa-video"></i>25+ VIDEOS</span>
                                    </div>
                                    <div className="course-single-content p-3">
                                        <div className="course-single-content-meta">
                                            <a href="#" className='text-decoration-none'><i className="fa-solid fa-eye"></i>9.5k Views</a>
                                            <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                        </div>
                                        <div className="course-single-content-title">
                                            <h5><a href="/inst-details">Microsoft Word</a></h5>
                                            <span><i className="fa-solid fa-star"></i>4.5</span>
                                        </div>
                                        <p>Microsoft Office</p>
                                        <div className="course-single-content-cta">
                                            <h5>$55.00 <span className='text-decoration-line-through'>$60.00</span></h5>
                                            <a href="/course" className="cmn-button text-decoration-none">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="course-single col-margin">
                                    <div className="course-single-thumb">
                                        <img src={two2} alt="Image" className="rounded w-100" />
                                        <span className="tag"><i className="fa-solid fa-video"></i>25+ VIDEOS</span>
                                    </div>
                                    <div className="course-single-content p-3">
                                        <div className="course-single-content-meta">
                                            <a href="#"  className='text-decoration-none'><i className="fa-solid fa-eye"></i>9.5k Views</a>
                                            <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                        </div>
                                        <div className="course-single-content-title">
                                            <h5>PCB Design</h5>
                                            <span><i className="fa-solid fa-star"></i>4.5</span>
                                        </div>
                                        <p>Robotics Automation</p>
                                        <div className="course-single-content-cta">
                                            <h5>$55.00 <span className='text-decoration-line-through'>$60.00</span></h5>
                                            <a href="/course" className="cmn-button text-decoration-none">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <div className="pagination-wrapper">
                                    <nav aria-label="...">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item text-center">
                                                <a className="page-link" href="#"><i className="fa-solid fa-angles-left"></i></a>
                                            </li>
                                            <li className="page-item text-center">
                                                <a className="page-link active" href="#" tabindex="-1">1</a>
                                            </li>
                                            <li className="page-item text-center">
                                                <a className="page-link" href="#">2</a>
                                            </li>
                                            <li className="page-item text-center">
                                                <a className="page-link" href="#">3</a>
                                            </li>
                                            <li className="page-item text-center">
                                                <a className="page-link" href="#"><i className="fa-solid fa-angles-right"></i></a>
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
                            <p><i className="fa-solid fa-location-dot"></i>Warszawa, Poland</p>
                            <a href="/" className="cmn-button btn btn-lg">Follow</a>
                            <a href="/" className="cmn-button message btn btn-lg">Message</a>
                        </div>
                        <div className="instructor-sidebar-meta mb-5">
                            <p><span>Project Views</span> <span>294,711</span></p>
                            <p><span>Appreciations</span> <span>30,097</span></p>
                            <p><span>Followers</span> <span>7811</span></p>
                            <p><span>Following</span> <span>605</span></p>
                            <a href="index.html" className="cmn-button btn btn-lg message">Facebook</a>
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
         {/*SECTION-NEWSLETTERS*/}
        
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
 
export default InstDetails;