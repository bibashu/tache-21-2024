import React from 'react';
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';
import Button from "../Components/Button";
import learning from "../assets/imgs/learning.png";
import recentone from "../assets/imgs/recentone.png";
import recenttwo from "../assets/imgs/recenttwo.png";
import recentthree from "../assets/imgs/recentthree.png";

import aboutthumb from "../assets/imgs/aboutthumb.png";
import aboutillustration from "../assets/imgs/aboutillustration.png";
import mile from "../assets/imgs/mile.png";
import milestoneillustration from "../assets/imgs/milestoneillustration.png";
import students from "../assets/imgs/students.png";
import jakaria from "../assets/imgs/jakaria.png";
import jiniya from "../assets/imgs/jiniya.png";
import course from "../assets/imgs/course.png";
import mentor from "../assets/imgs/mentor.png";
import award from "../assets/imgs/award.png";
import huya from "../assets/imgs/huya.png";


const Apropos = () => {
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
                            <h2 class="section-title">A propos</h2>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="banner-breadcrumb d-flex justify-content-start justify-content-lg-end">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/" className='text-decoration-none'>Accueil</Link></li>
                                    <li class="breadcrumb-item active" aria-current="apropos" onClick={() => Navigate("/Apropos")}>A propos</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>              
        {/* BREADCRUMB*/}
        <section class="about section overflow-hidden py-5">
        <div class="container">
            <div class="row row-margin align-items-center">
                <div class="col-lg-8 col-xxl-6">
                    <div class="about-content col-margin">
                        <img src={aboutthumb} alt="Image" />
                        <h2 class="section-itle">Connaître toutes les informations À propos de nous</h2>
                        <p>Elearning est une entreprise de confiance qui se consacre à la création de percées dans le domaine de l'informatique. Depuis sa création, Elearning a connu un succès multiforme en 6 longues années. Contribuer à la construction du monde numérique. L'une des principales sociétés informatiques au monde joue un rôle important dans l'élimination du problème du chômage depuis 2016.</p>
                        <a href="/course" class="cmn-button text-decoration-none">Parcourir le cours</a>
                    </div>
                </div>
                <div class="col-lg-4 col-xxl-6 order-first order-lg-last">
                    <div class="about-thumb col-margin">
                        <img src={aboutillustration} class="width-unset" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* SECTION-MILESTONE */}
    <section class="section milestone py-5">
        <div class="container">
            <div class="row align-items-center row-margin">
                <div class="col-lg-6">
                    <div class="milestone-thumb col-margin text-start text-lg-center">
                        <img src={milestoneillustration} alt="Images"/>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="milestone-content section-content col-margin">
                        <img src={mile} alt="Image" />
                        <h2>Notre étape importante</h2>
                        <p>E-learning a fourni une formation informatique à plus de 99 000 personnes en plus de fournir une formation de qualité en technologies de l'information à des personnes de tous horizons dans le pays pendant 6 ans.</p>
                        <a href="course.html" class="cmn-button text-decoration-none">Parcourir le cours</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

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
    <section class="section testimonials bg-img py-5">
        <div class="container">
            <div class="row justify-content-center mb-3">
                <div class="col-lg-6">
                    <div class="section-header justify-content-center">
                        <h2 class="section-title text-center mb-3">Voyons <br/> ce que disent nos étudiants ?</h2>
                        <p class="section-sub-title text-center mb-3">Faites progresser votre carrière vers des sommets uniques dans ce marché du travail compétitif. Toutes les catégories dont vous avez besoin sont ici.</p>
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="col-xl-12">
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
        {/* --SECTION-TESTIMONDIAL-END-- */}
        

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
 
export default Apropos;