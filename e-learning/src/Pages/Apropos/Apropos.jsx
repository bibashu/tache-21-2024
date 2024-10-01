import React from 'react';
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';
import Button from "../../Components/Button";
import aboutthumb from "./apropos-img/aboutthumb.png";
import aboutillustration from "./apropos-img/aboutillustration.png";
import mile from "./apropos-img/mile.png";
import milestoneillustration from "./apropos-img/milestoneillustration.png";
import students from "./apropos-img/students.png";
import jakaria from "./apropos-img/jakaria.png";
import jiniya from "./apropos-img/jiniya.png";
import course from "./apropos-img/course.png";
import mentor from "./apropos-img/mentor.png";
import award from "./apropos-img/award.png";
import huya from "./apropos-img/huya.png";
import Layout from "../../Components/Layout";


const Apropos = () => {
    const Navigate = useNavigate();

    return ( 
        <Layout>
        {/* BREADCRUMB*/}
        <div className="py-5">
            <div class="container pt-5">
                <div class="row pt-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="banner-content">
                            <h2 class="section-title">A propos</h2>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="banner-breadcrumb d-flex justify-content-start justify-content-lg-end justify-content-sm-end">
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

        </Layout>
     );
}
 
export default Apropos;