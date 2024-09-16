import React from "react";
import monimage from "../assets/monimage.png";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import learning from "../assets/imgs/learning.png";
import recentone from "../assets/imgs/recentone.png";
import recenttwo from "../assets/imgs/recenttwo.png";
import recentthree from "../assets/imgs/recentthree.png";
import courseone from "../assets/imgs/courseone.png";
import coursetwo from "../assets/imgs/coursetwo.png";
import coursethree from "../assets/imgs/coursethree.png";
import specialone from "../assets/imgs/specialone.png";
import specialtwo from "../assets/imgs/specialtwo.png";
import specialthree from "../assets/imgs/specialthree.png";
import aboutillustration from "../assets/imgs/aboutillustration.png";

const Accueil = () => {
  const Navigate = useNavigate();
  return (
        <div>
            <div className="container-fluid bg-light py-5">
               <div className="section-1 py-5">
                  <div className="container py-5">
                      <div className="row py-5">
                          <div className="col-lg-6 col-sm-12">
                            <div className="text-start">
                              <h1 className="display-4 fw-bold ">
                              Apprenez une nouvelle compétence chaque jour, à tout moment et n’importe où.
                              </h1>
                              <p className="pe-4 mb-3">
                                Plus de <span className="fw-bold">1000+</span> cours couvrant tous les domaines technologiques pour vous permettre d'
                                apprendre et d'explorer de nouvelles opportunités. Apprenez auprès
                                d'experts du secteur et décrochez l'emploi de vos rêves.
                              </p>
                            </div>
                            <form action="" method="post">
                                <div class="boutou-search input-group bg-none ">
                                    <input type="password" class="bg-none" placeholder="Rechercher votre cours"/>
                                    <button class="btn" type="submit" id="search"><i class="bi bi-search text text-white fw-bold"></i></button>
                                </div>
                            </form>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start py-3">
                              <Button
                                className="btn bouton-1 text-white btn-lg rounded px-3 me-2 "
                                type="button"
                                onClick={() => Navigate("/users")}
                              >
                                Commencer l'essai
                              </Button>
                              <Button
                                onClick={() => Navigate("/users")}
                                className="btn bouton-2 rounde me-md-1 btn-lg px-3 "
                                type="button"
                              >
                                Comment ça marche
                              </Button>
                            </div>
                          </div>

                          <div className="col-lg-6 col-sm-12">
                            <img className="mt-5 monimage img-fluid" src={monimage} />
                          </div>
                      </div>
                  </div>
               </div>
           </div>
           {/* --SLIDES-- */}
           <div className="section-2 py-5 p-0">
              <div className="container-fluid bg-white ">
                  <div className="container text-center">
                      <div class="row ustify-content-center  mb-3">
                          <div class="col-lg-12 p-0">
                              <h1 className="display-4 fw-bold mb-2">Cours populaires</h1>
                              <p class="mb-4">Notre liste de cours est organisée en fonction des compétences les plus <br/>demandées actuellement dans le pays et à l'extérieur du pays.</p>
                          </div>
                      </div>
                      <div className="row">
                          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                              <div class="carousel-item  p-3 active">
                                <div className="row">
                                    <div className="col-lg-6">
                                         <div className="shadow-box rounded">
                                         <img src={courseone} class="d-block w-100 img-fluid rounded" alt=""/>
                                        <div className="row px-3 pt-3">
                                            <div className="col-lg-6">
                                              <p className="text-start hover-text"><i class="bi bi-eye-fill  hover-text">3.5k Views</i></p> 
                                            </div>
                                            <div className="col-lg-6">
                                              <p className="text-end"><i class="fa-solid fa-clock"></i> 7H 20Min</p>
                                            </div>
                                        </div>
                                            <div className="row px-3 align-items-center">
                                                <div className="col-lg-6">
                                                    <h2 className="text-start"> Graphic Design</h2> 
                                                    <p className="text-start">Master course</p>
                                                </div>
                                                <div className="col-lg-6">
                                                   <p className="text-end"><i class="bi bi-star-fill text-warning me-2"></i>4.2</p>
                                                </div>
                                            </div>
                                        <div className="row px-3 pb-4 align-items-center">
                                            <div className="col-lg-6">
                                              <h3 className="text-start">$15.000 <span className="text-secondary text-decoration-line-through"> $22.00</span></h3>
                                            </div>
                                            <div className="col-lg-6">
                                            <button className="btn btn-sm button-buy" type="button"><h5>Buy Now</h5></button> 
                                            </div>
                                        </div>
                                         </div>
                                    </div>
                                    <div className="col-lg-6">
                                         <div className="shadow-box rounded">
                                         <img src={coursetwo} class="d-block w-100 img-fluid rounded" alt=""/>
                                         <div className="row px-3 pt-3">
                                            <div className="col-lg-6">
                                              <p className="text-start  hover-text"><i class="bi bi-eye-fill  hover-text"></i> 3.5k Views</p> 
                                            </div>
                                            <div className="col-lg-6">
                                              <p className="text-end"><i class="fa-solid fa-clock"></i> 7H 20Min</p>
                                            </div>
                                        </div>
                                        <div className="row px-3 align-items-center">
                                            <div className="col-lg-6">
                                                <h2 className="text-start">UI/UX Design</h2> 
                                                <p className="text-start">Creative course</p>
                                            </div>
                                            <div className="col-lg-6">
                                                <p className="text-end"><i class="bi bi-star-fill text-warning me-2"></i>4.2</p>
                                            </div>
                                        </div>
                                        <div className="row px-3 pb-4 align-items-center">
                                            <div className="col-lg-6">
                                              <h3 className="text-start">$15.000 <span className="text-secondary text-decoration-line-through"> $22.00</span></h3>
                                            </div>
                                            <div className="col-lg-6">
                                            <button className="btn btn-sm button-buy" type="button"><h5>Buy Now</h5></button>
                                            </div>
                                        </div>
                                         </div>
                                    </div>
                                </div>
                              </div>
                              <div class="carousel-item p-3">
                                <div className="row">
                                      <div className="col-lg-6">
                                           <div className="shadow-box rounded">
                                           <img src={coursetwo} class="d-block w-100 img-fluid rounded" alt=""/>
                                           <div className="row px-3 pt-3">
                                            <div className="col-lg-6">
                                              <p className="text-start  hover-text"><i class="bi bi-eye-fill  hover-text"></i> 3.5k Views</p> 
                                            </div>
                                            <div className="col-lg-6">
                                              <p className="text-end"><i class="fa-solid fa-clock"></i> 7H 20Min</p>
                                            </div>
                                        </div>
                                        <div className="row px-3 align-items-center">
                                            <div className="col-lg-6">
                                              <h2 className="text-start">UI/UX Design</h2> 
                                              <p className="text-start">Creative course</p>
                                            </div>
                                            <div className="col-lg-6">
                                              <p className="text-end"><i class="bi bi-star-fill text-warning me-2"></i>4.2</p>
                                            </div>
                                        </div>
                                        <div className="row px-3 pb-4 align-items-center">
                                            <div className="col-lg-6">
                                              <h3 className="text-start">$15.000 <span className="text-secondary text-decoration-line-through"> $22.00</span></h3>
                                            </div>
                                            <div className="col-lg-6">
                                            <button className="btn btn-sm button-buy" type="button"><h5>Buy Now</h5></button>
                                            </div>
                                        </div>
                                           </div>
                                      </div>
                                      <div className="col-lg-6">
                                          <div className="shadow-box rounded">
                                              <img src={coursethree} class="d-block w-100 img-fluid rounded" alt=""/>
                                                <div className="row px-3 pt-3">
                                                    <div className="col-lg-6">
                                                      <p className="text-start  hover-text"><i class="bi bi-eye-fill  hover-text"></i> 3.5k Views</p> 
                                                    </div>
                                                    <div className="col-lg-6">
                                                      <p className="text-end"><i class="fa-solid fa-clock"></i> 7H 20Min</p>
                                                    </div>
                                                </div>
                                                <div className="row px-3 align-items-center">
                                                    <div className="col-lg-6">
                                                        <h2 className="text-start">Web Design</h2> 
                                                        <p className="text-start">Web Programming</p>
                                                    </div>
                                                    <div className="col-lg-6">
                                                      <p className="text-end"><i class="bi bi-star-fill text-warning me-2"></i>4.2</p>
                                                    </div>
                                                </div>
                                                <div className="row px-3 pb-4 align-items-center">
                                                    <div className="col-lg-6">
                                                      <h3 className="text-start">$15.000 <span className="text-secondary text-decoration-line-through"> $22.00</span></h3>
                                                    </div>
                                                    <div className="col-lg-6">
                                                    <button className="btn btn-sm button-buy" type="button"><h5>Buy Now</h5></button>
                                                    </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="carousel-item p-3">
                                 <div className="row">
                                    <div className="col-lg-6">
                                        <div className="shadow-box rounded">
                                            <img src={coursethree} class="d-block w-100 img-fluid rounded" alt=""/>
                                            <div className="row px-3 pt-3">
                                                <div className="col-lg-6">
                                                  <p className="text-start hover-text"><i class="bi bi-eye-fill  hover-text"></i> 3.5k Views</p> 
                                                </div>
                                                <div className="col-lg-6">
                                                  <p className="text-end"><i class="fa-solid fa-clock"></i> 7H 20Min</p>
                                                </div>
                                            </div>
                                            <div className="row px-3 align-items-center">
                                                <div className="col-lg-6">
                                                    <h2 className="text-start">Web Design</h2> 
                                                    <p className="text-start">Web Programming</p>
                                                </div>
                                                <div className="col-lg-6">
                                                   <p className="text-end"><i class="bi bi-star-fill text-warning me-2"></i>4.2</p>
                                                </div>
                                            </div>
                                            <div className="row px-3 pb-4 align-items-center">
                                                <div className="col-lg-6">
                                                  <h3 className="text-start">$15.000 <span className="text-secondary text-decoration-line-through"> $22.00</span></h3>
                                                </div>
                                                <div className="col-lg-6">
                                                <button className="btn btn-sm button-buy" type="button"><h5>Buy Now</h5></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="shadow-box rounded">
                                            <img src={courseone} class="d-block w-100 img-fluid rounded" alt=""/>
                                            <div className="row px-3 pt-3">
                                                <div className="col-lg-6">
                                                  <p className="text-start hover-text"><i class="bi bi-eye-fill  hover-text"></i> 3.5k Views</p> 
                                                </div>
                                                <div className="col-lg-6">
                                                  <p className="text-end"><i class="fa-solid fa-clock"></i> 7H 20Min</p>
                                                </div>
                                            </div>
                                            <div className="row px-3 align-items-center">
                                                <div className="col-lg-6">
                                                    <h2 className="text-start"> Graphic Design</h2> 
                                                    <p className="text-start">Master course</p>
                                                </div>
                                                <div className="col-lg-6">
                                                   <p className="text-end"><i class="bi bi-star-fill text-warning me-2"></i>4.2</p>
                                                </div>
                                            </div>
                                            <div className="row px-3 pb-4 align-items-center">
                                                <div className="col-lg-6">
                                                  <h3 className="text-start">$15.000 <span className="text-secondary text-decoration-line-through"> $22.00</span></h3>
                                                </div>
                                                <div className="col-lg-6">
                                                <button className="btn btn-sm button-buy"><h5>Buy Now</h5></button>
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
           {/*   --INFORMATION SUR NOUS --   */}
           {/*<div className="section-3">
                <div className="container-fluide bg-image py-5">
                    <div className="container py-5">
                        <div className="row py-5">
                            <div className="col-lg-12 col-sm-12">
                                <div className="text-start">
                                    <h1 className="display-6 fw-bold">Connaître toutes les <br/>informations À propos de nous</h1>
                                    <p className="text-start">Elearning est une entreprise de confiance qui se consacre à la création de percées dans le domaine de l'informatique. Depuis sa création, Elearning a connu un succès multiforme en 6 longues années. Contribuer à la construction du monde numérique. L'une des principales sociétés informatiques au monde joue un rôle important dans l'élimination du problème du chômage depuis 2016.</p>
                                    <button className="btn button-buy btn-sm"><h5>Parcourir Cours</h5></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>*/}
           
           {/*   --FOOTER--   */}

           <footer className="footer py-5">
                <div className="container">
                <div class="row align-items-center g-5 mb-5">
                   <div class="col-lg-3 col-sm-3">
                       <div class="footer-item text-start">
                           <img src={learning} className="img-fluid mb-1 logo" alt="logo" />
                           <p class="mb-3 text-start">Elearning est l'une des principales plateformes de développement des compétences en e-learning au monde. Nous nous engageons à éradiquer le chômage dans le monde et à créer des ressources humaines mondiales grâce au développement des compétences.</p>
                           <div class="d-flex justify-content-end">
                               <a class="btn me-2 hover" href=""><i class="fab fa-twitter"></i></a>
                               <a class="btn me-2" href=""><i class="fab fa-facebook-f"></i></a>
                               <a class="btn me-2" href=""><i class="fab fa-youtube"></i></a>
                               <a class="btn" href=""><i class="fab fa-linkedin-in"></i></a>
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
               <div class="row justify-content-between">
                <div class="col-lg-6">
                    <p>Copyright<i class="bi bi-c-circle"></i><a href="#index.html" class="text-decoration-none">2024 Elearning</a>, All right reserved.</p>
                </div>
                <div class="col-lg-6">
                    <p>Designed By <a href="#"class="text-decoration-under-line">HTML Codex</a> Distributed By <a href="" class="text-decoration-under-line">ThemeWagon</a></p>
                </div>
               </div>
                </div>
           </footer>
      </div>
    
  );
};

export default Accueil;
