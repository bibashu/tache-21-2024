import React from 'react';
import {useNavigate} from "react-router-dom";
import Button from "../Components/Button";
import learning from "../assets/imgs/learning.png";
import Navbar from "../Navbar";
import { Link } from 'react-router-dom';
import recentone from "../assets/imgs/recentone.png";
import recenttwo from "../assets/imgs/recenttwo.png";
import recentthree from "../assets/imgs/recentthree.png";

const Faq = () => {
    
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
                            <h2 class="section-title">Faq</h2>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="banner-breadcrumb d-flex justify-content-start justify-content-lg-end">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/" className='text-decoration-none'>Accueil</Link></li>
                                    <li class="breadcrumb-item active" aria-current="faq" onClick={() => Navigate("/Faq")}>Faq</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
       </div>
        {/* BREADCRUMB*/}

        <section className="faq section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="section-header justify-content-center">
                        <h2 className="section-title text-center">Frequently asked question</h2>
                        <p className="section-sub-title text-center">In this age of 'everything is possible', why are you calling
                            yourself 'impossible'? Develop your skills at home now - from the best experts!</p>
                    </div>
                </div>
            </div>
            <div className="row row-margin">
                <div className="col-lg-6">
                    <div className="faq-content col-margin">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        What should be included on a E-learning website?
                                    </button>
                                </h5>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p> If you forget your RQA login details please go to the RQA website and click
                                            on 'My Account', My Details then change password.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h5 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How do I purchase a course?
                                    </button>
                                </h5>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <p> If you forget your RQA login details please go to the RQA website and click
                                            on 'My Account', My Details then change password.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Do I have to pay VAT?
                                    </button>
                                </h5>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p> If you forget your RQA login details please go to the RQA website and click
                                            on 'My Account', My Details then change password.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        How do I access the courses I have paid for?
                                    </button>
                                </h5>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p> If you forget your RQA login details please go to the RQA website and click
                                            on 'My Account', My Details then change password.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="faq-content col-margin">
                        <div className="accordion" id="accordionExampleTwo">
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingTwoOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoOne" aria-expanded="true" aria-controls="collapseTwoOne">
                                        What should be included on a E-learning website?
                                    </button>
                                </h5>
                                <div id="collapseTwoOne" className="accordion-collapse collapse show" aria-labelledby="headingTwoOne" data-bs-parent="#accordionExampleTwo">
                                    <div className="accordion-body">
                                        <p> If you forget your RQA login details please go to the RQA website and click
                                            on 'My Account', My Details then change password.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingTwoTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoTwo" aria-expanded="false" aria-controls="collapseTwoTwo">
                                        How do I purchase a course?
                                    </button>
                                </h5>
                                <div id="collapseTwoTwo" className="accordion-collapse collapse" aria-labelledby="headingTwoTwo" data-bs-parent="#accordionExampleTwo">
                                    <div className="accordion-body">
                                        <p> If you forget your RQA login details please go to the RQA website and click
                                            on 'My Account', My Details then change password.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingTwoThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoThree" aria-expanded="false" aria-controls="collapseTwoThree">
                                        Do I have to pay VAT?
                                    </button>
                                </h5>
                                <div id="collapseTwoThree" className="accordion-collapse collapse" aria-labelledby="headingTwoThree" data-bs-parent="#accordionExampleTwo">
                                    <div className="accordion-body">
                                        <p> If you forget your RQA login details please go to the RQA website and click
                                            on 'My Account', My Details then change password.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h5 className="accordion-header" id="headingTwoFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoFour" aria-expanded="false" aria-controls="collapseTwoFour">
                                        How do I access the courses I have paid for?
                                    </button>
                                </h5>
                                <div id="collapseTwoFour" className="accordion-collapse collapse" aria-labelledby="headingTwoFour" data-bs-parent="#accordionExampleTwo">
                                    <div class="accordion-body">
                                        <p> If you forget your RQA login details please go to the RQA website and click
                                            on 'My Account', My Details then change password.
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
 
export default Faq;
