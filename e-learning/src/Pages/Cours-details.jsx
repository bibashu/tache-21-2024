import React from 'react';
import {useNavigate} from "react-router-dom";
import Button from "../Components/Button";
import learning from "../assets/imgs/learning.png";
import { Link } from 'react-router-dom';
import recentone from "../assets/imgs/recentone.png";
import recenttwo from "../assets/imgs/recenttwo.png";
import recentthree from "../assets/imgs/recentthree.png";
import instructor from "../assets/imgs/instructor.png";
import aboutcourse from "../assets/imgs/aboutcourse.png";
import alvira from "../assets/imgs/alvira.png";
import jiniya from "../assets/imgs/jiniya.png";
import user from "../assets/imgs/user.png";
import special2 from "../assets/imgs/special2.png";
import camera from "../assets/imgs/camera.png";
import stickers from "../assets/imgs/stickers.png";
import gif from '../assets/imgs/gif.png';
import documents from "../assets/imgs/documents.png";



const CoursDetails = () => {
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
                <div class="row  pt-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="banner-content">
                            <h2 class="section-title">Cours Detailes</h2>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="banner-breadcrumb d-flex justify-content-start justify-content-lg-end">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/" className='text-decoration-none'>Accueil</Link></li>
                                    <li class="breadcrumb-item"><Link to="/course" className='text-decoration-none' onClick={() => Navigate("/Course")}>Course</Link></li>
                                    <li class="breadcrumb-item active" aria-current="cours-details" onClick={() => Navigate("/CoursDetails")}>Cours Detailes</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
       </div>
        {/* BREADCRUMB*/}


        <div className="course course-details section">
            <div className="container">
                <div className="row row-margin">
                    <div className="col-12 col-xl-7">
                        <div className="course-details-content col-margin">
                            <div className="course-details-intro group">
                                <h2>Anglais parlé</h2>
                                <p>
                                Devenez compétent et confiant en anglais parlé dans la vie de tous les jours. Inscrivez-vous au cours « Spoken English at Home » pour devenir compétent en anglais parlé.</p>
                                </div>
                            <div className="course-details-instructor group">
                                <h4>Instructeur</h4>
                                <div className="course-instructor-meta group">
                                    <div className="thumb">
                                        <img src={instructor}  alt="Image" />
                                    </div>
                                    <div className="instructor-meta">
                                        <h5>Aron Finch</h5>
                                        <p>MS (anglais), UUniversité d'Oxford (Royaume-Uni);</p>
                                    </div>
                                </div>
                            </div>
                            <div className="course-destination group">
                                <h4>Ce que vous apprendrez de ce cours</h4>
                                <ul>
                                    <li>Parlez anglais avec une prononciation correcte sans effort à l'école, au collège ou au bureau.</li>
                                    <li>TParler anglais intelligemment dans différentes situations de la vie quotidienne.</li>
                                    <li>Surmontez rapidement la timidité et l’inertie de parler en anglais.</li>
                                    <li>La prononciation correcte de nombreux mots anglais qui étaient jusqu'à présent connus comme erronés.
                                    Parler anglais pour les entretiens d'embauche, les présentations, les soutenances, les
                                    </li>
                                    <li>réunions avec des clients nationaux et étrangers, interagir avec des collègues, parler en public, entamer une conversation avec un inconnu, etc.</li>
                                </ul>
                            </div>
                            <div className="course-about group">
                                <h4>À propos du cours
                                </h4>
                                <div className="course-about-meta">
                                    <img src={aboutcourse} alt="Image" className="w-100" />
                                </div>
                                <div className="course-about-content">
                                    <p>arler couramment l'anglais est une compétence importante à cet âge. Posséder 
                                       des compétences en anglais parlé peut vous aider à progresser à chaque étape
                                       de la vie. L'acquisition de compétences en anglais parlé ou d'une prononciation
                                       correcte de l'anglais est très importante pour les études, la carrière, les examens,
                                       l'enseignement supérieur à l'étranger et même les voyages à l'étranger.
                                    </p>
                                    <p>De nombreuses personnes maîtrisent bien l'anglais, mais hésitent à le parler
                                        par manque de confiance en soi. Le cours en ligne « Spoken English at Home »
                                        vous aide à améliorer vos compétences en anglais et à renforcer votre
                                        confiance en vous.</p>
                                    <p>Aron Finch, qui a étudié à l'Université d'Oxford, vous apprendra à parler
                                        anglais avec assurance dans différentes situations de la vie réelle. 
                                        L'ensemble du cours est enseigné dans plusieurs langues. La plupart des 
                                        étudiants qui ont suivi ce cours d'anglais parlé déclarent que la langue du
                                        cours est facile à comprendre et à mémoriser.</p>
                                    <p>En apprenant des manières simples de parler anglais avec une prononciation
                                        correcte dans des situations réelles, vous acquerrez les compétences et
                                        la confiance nécessaires pour parler anglais intelligemment sans aucune
                                        inertie.</p>
                                </div>
                            </div>
                            <div className="course-syllabus group">
                                <h4>Programme du cours</h4>
                                <div className="course-faq">
                                    <div className="accordion" id="accordionExampleCollapse">
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="headingCollapseOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCollapseOne" aria-expanded="true" aria-controls="collapseCollapseOne">
                                                    Basique
                                                </button>
                                            </h5>
                                            <div id="collapseCollapseOne" className="accordion-collapse collapse show" aria-labelledby="headingCollapseOne" data-bs-parent="#accordionExampleCollapse">
                                                <div className="accordion-body">
                                                    <p> Si vous oubliez vos informations de connexion RQA, veuillez vous rendre sur le site Web RQA et cliquer sur « Mon compte », Mes informations, puis modifier votre mot de passe.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="headingCollapseTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCollapseTwo" aria-expanded="false" aria-controls="collapseCollapseTwo">
                                                    Intermediaire
                                                </button>
                                            </h5>
                                            <div id="collapseCollapseTwo" className="accordion-collapse collapse" aria-labelledby="headingCollapseTwo" data-bs-parent="#accordionExampleCollapse">
                                                <div className="accordion-body">
                                                    <p> Si vous oubliez vos informations de connexion RQA, veuillez vous rendre sur le site Web RQA et cliquer sur « Mon compte », Mes informations, puis modifier votre mot de passe.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h5 className="accordion-header" id="headingCollapseThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCollapseThree" aria-expanded="false" aria-controls="collapseCollapseThree">
                                                    Advancé
                                                </button>
                                            </h5>
                                            <div id="collapseCollapseThree" className="accordion-collapse collapse" aria-labelledby="headingCollapseThree" data-bs-parent="#accordionExampleCollapse">
                                                <div className="accordion-body">
                                                    <p> Si vous oubliez vos informations de connexion RQA, veuillez vous rendre sur le site Web RQA et cliquer sur « Mon compte », Mes informations, puis modifier votre mot de passe.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="course-pay group">
                                <h4>Comment payer</h4>
                                <div className="course-pay-thumb">
                                    <a className="hero-popup" className="text-decoration-none" href="https://www.youtube.com/watch?v=RvreULjnzFo" target="_blank" title="YouTube video player">
                                        <i className="fa-solid fa-play"></i>
                                    </a>
                                    <p><strong className="text-bg">Regardez cette vidéo pour plus de détails sur la façon de payer</strong> pour plus de détails sur la façon de payer</p>
                                </div>
                            </div>
                            <div className="course-certificate group">
                                <h4>Commencez à apprendre aujourd'hui pour obtenir une certification</h4>
                                <p>À la fin du cours, vous recevrez un certificat qui vous permettra de :
                                   </p>
                                <ul>
                                    <li>Peut être ajouté à votre CV</li>
                                    <li>Vous pouvez partager directement sur votre profil LinkedIn</li>
                                    <li>Vous pouvez partager sur Facebook en un clic</li>
                                </ul>
                            </div>
                            <div className="course-feedback-wrapper group">
                                <h4>Ce que disent les étudiants</h4>
                                <div className="course-feedback">
                                    <div className="course-user">
                                        <div className="thumb">
                                            <img src={alvira} alt="Image" />
                                        </div>
                                        <div className="content">
                                            <h5>Anika Islam</h5>
                                            <p>Étudiant</p>
                                        </div>
                                    </div>
                                    <div className="course-feedback-content">
                                        <p>En suivant le cours « Spoken English » à la maison, j'ai réalisé qu'il n'était pas nécessaire d'apprendre des centaines de grammaires, mais qu'il fallait des techniques. J'ai appris à parler anglais très facilement après avoir surmonté ma peur dans différentes situations. Apprendre des techniques de maîtrise de la grammaire est possible avec un professeur compétent comme Aaron Finch. Et le mettre en pratique.</p>
                                        <div className="course-share">
                                            <a href="javascript:void(0)"><i className="fa-solid fa-thumbs-up"></i>Like</a>
                                            <a href="javascript:void(0)"><i className="fa-solid fa-comment-dots"></i>Commentaire</a>
                                            <a href="javascript:void(0)"><i className="fa-solid fa-share-nodes"></i>Partager</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-feedback">
                                    <div className="course-user">
                                        <div className="thumb">
                                            <img src={jiniya} alt="Image" />
                                        </div>
                                        <div className="content">
                                            <h5>Sonam Kapoor</h5>
                                            <p>Étudiant</p>
                                        </div>
                                    </div>
                                    <div className="course-feedback-content">
                                        <p>Je me sens chanceuse de pouvoir suivre le cours d'anglais parlé à la maison. Ce cours m'aide beaucoup dans ma vie professionnelle.</p>
                                        <div className="course-share">
                                            <a href="javascript:void(0)" className='text-decoration-none'><i className="fa-solid fa-thumbs-up"></i>Like</a>
                                            <a href="javascript:void(0)" className='text-decoration-none'><i className="fa-solid fa-comment-dots"></i>Commentaire</a>
                                            <a href="javascript:void(0)" className='text-decoration-none'><i className="fa-solid fa-share-nodes"></i>Partager</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="course-review">
                                <form action="#" method="post" autocomplete="off">
                                    <div className="course-review-inner">
                                        <div className="avatar">
                                            <img src={user} alt="Image" />
                                        </div>
                                        <div className="input">
                                            <input type="text" name="course-review" id="courseReview" placeholder="Ecrire un commentaire" required="required" />
                                        </div>
                                        <div className="stickers">
                                            <a href="javascript:void(0)">
                                                <img src={stickers} alt="Icon" />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={camera} alt="Icon" />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={gif} alt="Icon" />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <img src={documents} alt="Icon" />
                                            </a>
                                        </div>
                                    </div>
                                    <button type="submit" className="cmn-button">Commentaire</button>
                                </form>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="pagination-wrapper">
                                        <nav aria-label="...">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item">
                                                    <a className="page-link" href="#"><i className="fa-solid fa-angles-left"></i></a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link active" href="#" tabindex="-1">1</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">2</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">3</a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#"><i className="fa-solid fa-angles-right"></i></a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-7 col-xl-5">
                        <div className="course-details-sidebar col-margin">
                            <div className="course-single">
                                <div className="course-single-thumb">
                                    <img src={special2} alt="Image" className="rounded w-100" />
                                    <span className="tag"><i className="fa-solid fa-video"></i>25+ VIDEOS</span>
                                </div>
                                <div className="course-single-content p-3">
                                    <div className="course-single-content-title">
                                        <h5>Spoken English</h5>
                                        <span><i className="fa-solid fa-star"></i>4.5</span>
                                    </div>
                                    <p className='text-start'>International English</p>
                                    <div className="course-single-content-cta">
                                        <h5>$55.00 <span className='text-decoration-line-through'>$60.00</span></h5>
                                        <a href="/cours-detail" className="cmn-button text-decoration-none">Buy Now</a>
                                    </div>
                                    <div className="course-single-content-meta">
                                        <a href="#" className='text-decoration-none'><i className="fa-solid fa-eye"></i>9.5k Views</a>
                                        <span><i className="fa-solid fa-clock"></i>9 hr 27 min</span>
                                    </div>
                                    <ul className=" py-3">
                                        <li>22 Videos</li>
                                        <li>22 sets of quizzes</li>
                                        <li>22 notes</li>
                                        <li>22 transcripts</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="details py-3">For details about the course <span className="text-bg">Call: 5659595</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* SECTION-NEWSLETTERS*/}
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
 
export default CoursDetails;