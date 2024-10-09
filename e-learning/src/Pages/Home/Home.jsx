import React from "react";
import hero from "./hero.png";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import "../Home/Home.css";
import Layout from "../../Components/Layout";
import courseone from "./course-one.png";
import coursetwo from "./course-two.png";
import coursethree from "./course-three.png";
import thumb from "./thumb.png";
import about from "./about.png";
import seminar from "./seminar.png";
import account from "./account.png";
import course from "./course.png";
import buy from "./buy.png";
import skill from "./skill.png";
import mentor from "./mentor.png";
import students from "./students.png";
import Course from "./course (1).png";
import award from "./award.png";
import course1 from "./course1.png";
import course2 from "./course2.png";
import course3 from "./course3.png";
import specialOne from "./special-one.png";
import specialTwo from "./special-two.png";
import specialThree from "./special-three.png";
import robotics from "./robotics.png";
import graphics from "./graphics.png";
import uiux from "./ui-ux.png";
import developpement from "./web-development.png";
import appp from "./app-development.png";
import marketing from "./digital-marketing.png";
import virtual1 from "./virtual1.png";
import language1 from "./language1.png";
import onlinesupport1 from "./online-support1.png";
import support1 from "./support1.png";
import jiniya from "./jiniya.png";
import jakaria from "./jakaria.png";

const Home = () => {
  const Navigate = useNavigate();
  return (
    <Layout>
      <div>
        <div className="container-fluid bg-light py-2">
          <div className="section-1 py-5">
            <div className="container py-5">
              <div className="row py-5">
                <div className="col-lg-6 col-sm-12 col-md-12">
                  <div className="text-start">
                    <h1 className="display-4 fw-bold ">
                      Apprenez une nouvelle compétence chaque jour, à tout
                      moment et n’importe où.
                    </h1>
                    <p className="pe-4 mb-3">
                      Plus de <span className="fw-bold">1000+</span> cours
                      couvrant tous les domaines technologiques pour vous
                      permettre d' apprendre et d'explorer de nouvelles
                      opportunités. Apprenez auprès d'experts du secteur et
                      décrochez l'emploi de vos rêves.
                    </p>
                  </div>
                  <form action="" method="post">
                    <div className="bouton-search input-group bg-none ">
                      <input
                        type="password"
                        className="bg-none"
                        placeholder="Rechercher votre cours"
                      />
                      <button className="btn" type="submit" id="search">
                        <i className="bi bi-search text text-white fw-bold"></i>
                      </button>
                    </div>
                  </form>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start py-3">
                    <Button
                      className="btn bouton-1 text-white btn-lg rounded px-3 me-2 "
                      type="button"
                      onClick={() => Navigate("/login")}
                    >
                      Commencer l'essai
                    </Button>
                    <Button
                      onClick={() => Navigate("/login")}
                      className="btn bouton-2 rounde me-md-1 btn-lg px-3 "
                      type="button"
                    >
                      Comment ça marche
                    </Button>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-12 col-md-12">
                  <img className="mt-5 hero img-fluid" src={hero} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --SLIDES-- */}
        <div className="section-2 py-5 p-0">
          <div className="container-fluid bg-white ">
            <div className="container text-center">
              <div className="row ustify-content-center  mb-3">
                <div className="col-lg-12 col-sm-12 col-md-12 p-0">
                  <h1 className="display-4 fw-bold mb-2">Cours populaires</h1>
                  <p className="mb-4">
                    Notre liste de cours est organisée en fonction des
                    compétences les plus <br />
                    demandées actuellement dans le pays et à l'extérieur du
                    pays.
                  </p>
                </div>
              </div>
              <div className="row">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-lg-4 col-sm-12  col-md-6">
                          <div className="shadow-box rounded">
                            <img
                              src={courseone}
                              className="d-block w-100 img-fluid rounded"
                              alt=""
                            />
                            <div className="row px-3 pt-3">
                              <div className="col-lg-6 col-sm-12 col-md-12 col-sm-12">
                                <p className="text-start">
                                  <i className="bi bi-eye-fill"></i> 3.5k Views
                                </p>
                              </div>
                              <div className="col-lg-6  col-sm-12 col-md-12">
                                <p className="text-end">
                                  <i className="fa-solid fa-clock"></i> 7H 20Min
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h2 className="text-start"> Graphic Design</h2>
                                <p className="text-start">Master course</p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="bi bi-star-fill text-warning me-2"></i>
                                  4.2
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h3 className="text-start">
                                  $15.000{" "}
                                  <span className="text-secondary">
                                    {" "}
                                    $22.00
                                  </span>
                                </h3>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <button
                                  className="btn btn-sm button-buy"
                                  type="button"
                                  onClick={() => Navigate("/login")}
                                >
                                  <h5>Acheter maintenant</h5>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="shadow-box rounded">
                            <img
                              src={coursetwo}
                              className="d-block w-100 img-fluid rounded"
                              alt=""
                            />
                            <div className="row px-3 pt-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-start">
                                  <i className="bi bi-eye-fill"></i> 2.5k Views
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="fa-solid fa-clock"></i> 6H 20Min
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h2 className="text-start"> UI/UX Design</h2>
                                <p className="text-start">Creative Course</p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="bi bi-star-fill text-warning me-2"></i>
                                  4.2
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h3 className="text-start">
                                  $25.000{" "}
                                  <span className="text-secondary">
                                    {" "}
                                    $30.00
                                  </span>
                                </h3>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <button
                                  className="btn btn-sm button-buy"
                                  type="button"
                                  onClick={() => Navigate("/login")}
                                >
                                  <h5>Acheter maintenant</h5>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="shadow-box hg rounded">
                            <img
                              src={coursethree}
                              class="d-block w-100 img-fluid rounded"
                              alt=""
                            />
                            <div className="row px-3 pt-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-start">
                                  <i className="bi bi-eye-fill"></i> 4.5k Views
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="fa-solid fa-clock"></i> 9H 20Min
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center py-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h2 className="text-start">Web Design</h2>
                                <p className="text-start">Web Programming</p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="bi bi-star-fill text-warning me-2"></i>
                                  4.2
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h3 className="text-start">
                                  $22.000{" "}
                                  <span className="text-secondary">
                                    {" "}
                                    $30.00
                                  </span>
                                </h3>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <button
                                  className="btn btn-sm button-buy"
                                  type="button"
                                  onClick={() => Navigate("/login")}
                                >
                                  <h5>Acheter maintenant</h5>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="shadow-box rounded">
                            <img
                              src={courseone}
                              className="d-block w-100 img-fluid rounded"
                              alt=""
                            />
                            <div className="row px-3 pt-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-start">
                                  <i className="bi bi-eye-fill"></i> 3.5k Views
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="fa-solid fa-clock"></i> 7H 20Min
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h2 className="text-start"> Graphic Design</h2>
                                <p className="text-start">Master course</p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="bi bi-star-fill text-warning me-2"></i>
                                  4.2
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h3 className="text-start">
                                  $15.000{" "}
                                  <span className="text-secondary">
                                    {" "}
                                    $22.00
                                  </span>
                                </h3>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <button
                                  className="btn btn-sm button-buy"
                                  type="button"
                                  onClick={() => Navigate("/login")}
                                >
                                  <h5>Acheter maintenant</h5>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="shadow-box rounded">
                            <img
                              src={coursetwo}
                              className="d-block w-100 img-fluid rounded"
                              alt=""
                            />
                            <div className="row px-3 pt-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-start">
                                  <i className="bi bi-eye-fill"></i> 2.5k Views
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="fa-solid fa-clock"></i> 6H 20Min
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h2 className="text-start"> UI/UX Design</h2>
                                <p className="text-start">Creative Course</p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="bi bi-star-fill text-warning me-2"></i>
                                  4.2
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h3 className="text-start">
                                  $25.000{" "}
                                  <span className="text-secondary">
                                    {" "}
                                    $30.00
                                  </span>
                                </h3>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <button
                                  className="btn btn-sm button-buy"
                                  type="button"
                                  onClick={() => Navigate("/login")}
                                >
                                  <h5>Acheter maintenant</h5>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="shadow-box hg rounded">
                            <img
                              src={coursethree}
                              class="d-block w-100 img-fluid rounded"
                              alt=""
                            />
                            <div className="row px-3 pt-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-start">
                                  <i className="bi bi-eye-fill"></i> 4.5k Views
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="fa-solid fa-clock"></i> 9H 20Min
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center py-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h2 className="text-start">Web Design</h2>
                                <p className="text-start">Web Programming</p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="bi bi-star-fill text-warning me-2"></i>
                                  4.2
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h3 className="text-start">
                                  $22.000{" "}
                                  <span className="text-secondary">
                                    {" "}
                                    $30.00
                                  </span>
                                </h3>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <button
                                  className="btn btn-sm button-buy"
                                  type="button"
                                  onClick={() => Navigate("/login")}
                                >
                                  <h5>Acheter maintenant</h5>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="shadow-box rounded">
                            <img
                              src={courseone}
                              className="d-block w-100 img-fluid rounded"
                              alt=""
                            />
                            <div className="row px-3 pt-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-start">
                                  <i className="bi bi-eye-fill"></i> 3.5k Views
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="fa-solid fa-clock"></i> 7H 20Min
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h2 className="text-start"> Graphic Design</h2>
                                <p className="text-start">Master course</p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="bi bi-star-fill text-warning me-2"></i>
                                  4.2
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h3 className="text-start">
                                  $15.000{" "}
                                  <span className="text-secondary">
                                    {" "}
                                    $22.00
                                  </span>
                                </h3>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <button
                                  className="btn btn-sm button-buy"
                                  type="button"
                                  onClick={() => Navigate("/login")}
                                >
                                  <h5>Acheter maintenant</h5>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="shadow-box rounded">
                            <img
                              src={coursetwo}
                              className="d-block w-100 img-fluid rounded"
                              alt=""
                            />
                            <div className="row px-3 pt-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-start">
                                  <i className="bi bi-eye-fill"></i> 2.5k Views
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="fa-solid fa-clock"></i> 6H 20Min
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h2 className="text-start"> UI/UX Design</h2>
                                <p className="text-start">Creative Course</p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="bi bi-star-fill text-warning me-2"></i>
                                  4.2
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h3 className="text-start">
                                  $25.000{" "}
                                  <span className="text-secondary">
                                    {" "}
                                    $30.00
                                  </span>
                                </h3>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <button
                                  className="btn btn-sm button-buy"
                                  type="button"
                                  onClick={() => Navigate("/login")}
                                >
                                  <h5>Acheter maintenant</h5>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="shadow-box hg rounded">
                            <img
                              src={coursethree}
                              class="d-block w-100 img-fluid rounded"
                              alt=""
                            />
                            <div className="row px-3 pt-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-start">
                                  <i className="bi bi-eye-fill"></i> 4.5k Views
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="fa-solid fa-clock"></i> 9H 20Min
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center py-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h2 className="text-start">Web Design</h2>
                                <p className="text-start">Web Programming</p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="bi bi-star-fill text-warning me-2"></i>
                                  4.2
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h3 className="text-start">
                                  $22.000{" "}
                                  <span className="text-secondary">
                                    {" "}
                                    $30.00
                                  </span>
                                </h3>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <button
                                  className="btn btn-sm button-buy"
                                  type="button"
                                  onClick={() => Navigate("/login")}
                                >
                                  <h5>Acheter maintenant</h5>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --SLIDES-- */}
        <div className="section-2 py-5 p-0">
          <div className="container-fluid  ">
            <div className="container-fluid start">
              <div className="row">
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 feactures">
                          <div className="process">
                            <img
                              className="robotics img-fluid"
                              src={robotics}
                            />
                          </div>
                          <h5 className="py-3">Robotique Automatique</h5>
                          <p>
                            Le matériel de cours pour chaque matière est conçu
                            par des experts
                          </p>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 feactures1 mx-3">
                          <div className="process">
                            <img
                              className="graphics img-fluid"
                              src={graphics}
                            />
                          </div>
                          <h5 className="py-3">Conception Graphique</h5>
                          <p>
                            Le matériel de cours pour chaque matière est conçu
                            par des experts
                          </p>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 feactures mx-3">
                          <div className="process">
                            <img className="uiux img-fluid" src={uiux} />
                          </div>
                          <h5 className="py-3">Conception UI/UX</h5>
                          <p>
                            Le matériel de cours pour chaque matière est conçu
                            par des experts
                          </p>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 feactures1 mx-3">
                          <div className="process">
                            <img
                              className="developpement img-fluid"
                              src={developpement}
                            />
                          </div>
                          <h5 className="py-3">Développement Web</h5>
                          <p>
                            Le matériel de cours pour chaque matière est conçu
                            par des experts
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="carousel-item">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 feactures mx-3">
                          <div className="process">
                            <img className="appp img-fluid" src={appp} />
                          </div>
                          <h5 className="py-3">Développement d'applications</h5>
                          <p>
                            Le matériel de cours pour chaque matière est conçu
                            par des experts
                          </p>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 feactures1 mx-3">
                          <div className="process">
                            <img
                              className="marketing img-fluid"
                              src={marketing}
                            />
                          </div>
                          <h5 className="py-3">Développement d'applications</h5>
                          <p>
                            Le matériel de cours pour chaque matière est conçu
                            par des experts
                          </p>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 feactures">
                          <div className="process">
                            <img
                              className="robotics img-fluid"
                              src={robotics}
                            />
                          </div>
                          <h5 className="py-3">Robotique Automatique</h5>
                          <p>
                            Le matériel de cours pour chaque matière est conçu
                            par des experts
                          </p>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 feactures1 mx-3">
                          <div className="process">
                            <img
                              className="graphics img-fluid"
                              src={graphics}
                            />
                          </div>
                          <h5 className="py-3">Conception Graphique</h5>
                          <p>
                            Le matériel de cours pour chaque matière est conçu
                            par des experts
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="carousel-item">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 feactures mx-3">
                          <div className="process">
                            <img className="uiux img-fluid" src={uiux} />
                          </div>
                          <h5 className="py-3">Conception UI/UX</h5>
                          <p>
                            Le matériel de cours pour chaque matière est conçu
                            par des experts
                          </p>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 feactures1 mx-3">
                          <div className="process">
                            <img
                              className="developpement img-fluid"
                              src={developpement}
                            />
                          </div>
                          <h5 className="py-3">Développement Web</h5>
                          <p>
                            Le matériel de cours pour chaque matière est conçu
                            par des experts
                          </p>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 feactures mx-3">
                          <div className="process">
                            <img className="appp img-fluid" src={appp} />
                          </div>
                          <h5 className="py-3">Développement d'applications</h5>
                          <p>
                            Le matériel de cours pour chaque matière est conçu
                            par des experts
                          </p>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 feactures1 mx-3">
                          <div className="process">
                            <img
                              className="marketing img-fluid"
                              src={marketing}
                            />
                          </div>
                          <h5 className="py-3">Développement d'applications</h5>
                          <p>
                            Le matériel de cours pour chaque matière est conçu
                            par des experts
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-8 col-xxl-6 col-md-12 col-sm-12 text-start">
              <div className="about__content">
                <img className="thumb img-fluid" src={thumb} />
                <div className="py-2">
                  <h1 className="fw">
                    Connaître toutes les informations À propos de nous
                  </h1>
                  <p className="para">
                    Elearning est une entreprise de confiance qui se consacre à
                    la création de percées dans le domaine de l'informatique.
                    Depuis sa création, Elearning a connu un succès multiforme
                    en 6 longues années. Contribuer à la construction du monde
                    numérique. L'une des principales sociétés informatiques au
                    monde joue un rôle important dans l'élimination du problème
                    du chômage depuis 2016.
                  </p>

                  <Button
                    className="BTN text-white btn-lg rounded px-3 me-2 "
                    type="button"
                    onClick={() => Navigate("/login")}
                  >
                    Cours sur navigateur
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xxl-6 col-md-6 col-sm-12">
              <img className="about img-fluid" src={about} />
            </div>
          </div>
        </div>

        {/* --SLIDES-- */}
        <div className="section-2 py-5 p-0">
          <div className="container-fluid  SCT">
            <div className="container text-center SCT1">
              <div class="row ustify-content-center  mb-3">
                <div class="col-lg-12 col-md-12 col-sm-12 p-0">
                  <h1 className="display-4 fw-bold mb-2">
                    Nous avons des services spéciaux <br />
                    dont vous serez satisfait
                  </h1>
                  <p class="mb-4">
                    Notre liste de cours est organisée avec les compétences
                    actuellement disponibles <br />
                    les plus demandés dans le pays et à l'extérieur du pays.
                  </p>
                </div>
              </div>
              <div className="row">
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 Feactures1 mx-3">
                          <div className="process">
                            <img
                              className="virtual1 img-fluid"
                              src={virtual1}
                            />
                          </div>
                          <h5 className="py-3">Virtual Internship</h5>
                          <p>
                            Après avoir terminé le cours, vous obtiendrez un
                          </p>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 Feactures1 mx-3">
                          <div className="process">
                            <img
                              className="language1 img-fluid"
                              src={language1}
                            />
                          </div>
                          <h5 className="py-3">Langue Anglaise</h5>
                          <p>
                            En plus d'enseigner l'anglais de base, nous
                            insistons sur...
                          </p>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 Feactures1 mx-3">
                          <div className="process">
                            <img
                              className="onlinesupport1 img-fluid"
                              src={onlinesupport1}
                            />
                          </div>
                          <h5 className="py-3">
                            Assistance en ligne 24h/24 et 7j/7
                          </h5>
                          <p>
                            Notre organisation institut informatique créatif
                          </p>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 Feactures1 mx-3">
                          <div className="process">
                            <img
                              className="support1 img-fluid"
                              src={support1}
                            />
                          </div>
                          <h5 className="py-3">Assistance à vie</h5>
                          <p>
                            Même si la formation est terminée, la relation...
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="carousel-item">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 Feactures1 mx-3">
                          <div className="process">
                            <img
                              className="virtual1 img-fluid"
                              src={virtual1}
                            />
                          </div>
                          <h5 className="py-3">Virtual Internship</h5>
                          <p>
                            Après avoir terminé le cours, vous obtiendrez un
                          </p>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 Feactures1 mx-3">
                          <div className="process">
                            <img
                              className="language1 img-fluid"
                              src={language1}
                            />
                          </div>
                          <h5 className="py-3">Langue Anglaise</h5>
                          <p>
                            En plus d'enseigner l'anglais de base, nous
                            insistons sur...
                          </p>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 Feactures1 mx-3">
                          <div className="process">
                            <img
                              className="onlinesupport1 img-fluid"
                              src={onlinesupport1}
                            />
                          </div>
                          <h5 className="py-3">
                            Assistance en ligne 24h/24 et 7j/7
                          </h5>
                          <p>
                            Notre organisation institut informatique créatif
                          </p>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 Feactures1 mx-3">
                          <div className="process">
                            <img
                              className="support1 img-fluid"
                              src={support1}
                            />
                          </div>
                          <h5 className="py-3">Assistance à vie</h5>
                          <p>
                            Même si la formation est terminée, la relation...
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="carousel-item">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 Feactures1 mx-3">
                          <div className="process">
                            <img
                              className="virtual1 img-fluid"
                              src={virtual1}
                            />
                          </div>
                          <h5 className="py-3">Virtual Internship</h5>
                          <p>
                            Après avoir terminé le cours, vous obtiendrez un
                          </p>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 Feactures1 mx-3">
                          <div className="process">
                            <img
                              className="language1 img-fluid"
                              src={language1}
                            />
                          </div>
                          <h5 className="py-3">Langue Anglaise</h5>
                          <p>
                            En plus d'enseigner l'anglais de base, nous
                            insistons sur...
                          </p>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 Feactures1 mx-3">
                          <div className="process">
                            <img
                              className="onlinesupport1 img-fluid"
                              src={onlinesupport1}
                            />
                          </div>
                          <h5 className="py-3">
                            Assistance en ligne 24h/24 et 7j/7
                          </h5>
                          <p>
                            Notre organisation institut informatique créatif
                          </p>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 Feactures1 mx-3">
                          <div className="process">
                            <img
                              className="support1 img-fluid"
                              src={support1}
                            />
                          </div>
                          <h5 className="py-3">Assistance à vie</h5>
                          <p>
                            Même si la formation est terminée, la relation...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row  align-items-center">
            <div className="col-lg-8 col-xl-6 text-start">
              <div className="seminar__content">
                <h1 className="section__title">
                  Participer à des séminaires gratuits
                </h1>
                <p>
                  Vous n'arrivez pas à décider quel cours suivre pour travailler
                  en freelance ? Rejoignez notre séminaire gratuit. Dans ces
                  séminaires thématiques, vous connaîtrez les possibilités de
                  chaque cours. De plus, en discutant avec le conseiller expert
                  présent au séminaire, vous pourrez facilement décider de
                  choisir le cours approprié.
                </p>
                <h1>Séminaires gratuits à venir</h1>
                <div className="seminar__content-single d-flex text-center py-4">
                  <div className="seminar-content mx-3 py-4">
                    <div className="seminar__date py-3 text-center">
                      <h5 className="text-white">
                        19 <br /> Juillet, 22
                      </h5>
                    </div>
                    <h5 className="py-4">Cybersécurité</h5>
                    <p className="py-3">En ligne, heure : 20h00</p>
                    <Button
                      className="Btn text-black btn-lg rounded px-3 me-2 "
                      type="button"
                      onClick={() => Navigate("/login")}
                    >
                      Rejoignez-nous
                    </Button>
                  </div>

                  <div className="seminar-content mx-3 py-4">
                    <div className="seminar__date  text-center py-3">
                      <h5 className="text-white">
                        19 <br /> Juillet, 22
                      </h5>
                    </div>
                    <h5 className="py-4">Montage Vidéo</h5>
                    <p className="py-3">En ligne, heure : 20h00</p>
                    <Button
                      className="Btn text-black btn-lg rounded px-3 me-2 "
                      type="button"
                      onClick={() => Navigate("/login")}
                    >
                      Rejoignez-nous
                    </Button>
                  </div>
                </div>
                <div className="py-2">
                  <Button
                    className="BTN text-white btn-lg rounded px-3 me-2"
                    type="button"
                    onClick={() => Navigate("/login")}
                  >
                    Tous les séminaires
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-5 col-sm-12">
              <div className="seminar">
                <img className="seminar img-fluid " src={seminar} />
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-xl-6 col-sm-12 text-start">
                <div className="process__content ">
                  <h2 className="section__title">
                    Processus d'initiation au cours
                  </h2>
                  <p>
                    Le design est un travail très créatif. Le travail créatif
                    nécessite des compétences. Et la compétence s’acquiert grâce
                    à une pratique régulière et aux conseils d’experts. Chez
                    Elearning, il est possible d'obtenir des conseils d'experts
                    ainsi que des idées de projets à mettre en pratique.
                  </p>
                  <div className="py-5">
                    <Button
                      className="BTN text-white btn-lg rounded px-3 me-2"
                      type="button"
                      onClick={() => Navigate("/login")}
                    >
                      Cours sur navigateur
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-xl-6 col-sm-12">
                <div className="row">
                  <div className="col-lg-6 col-sm-12 text-center context ">
                    <div className="process">
                      <img className="account img-fluid" src={account} />
                    </div>
                    <h5 className="py-3">Créer un compte</h5>
                    <p>
                      Amenez votre carrière à des sommets uniques dans ce
                      concours...
                    </p>
                  </div>
                  <div className="col-lg-6 col-sm-12 text-center context2">
                    <div className="process">
                      <img className="course img-fluid" src={course} />
                    </div>
                    <h5 className="py-3">Sélectionnez le cours</h5>
                    <p>
                      Amenez votre carrière à des sommets uniques dans ce
                      concours...
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-sm-12 text-center context1 ">
                      <div className="process1">
                        <img className="buy img-fluid" src={buy} />
                      </div>
                      <h5 className="py-3">Acheter le cours</h5>
                      <p>
                        Amenez votre carrière à des sommets uniques dans ce
                        concours...
                      </p>
                    </div>
                    <div className="col-lg-6 col-sm-12 text-center context3 ">
                      <div className="process1">
                        <img className="skill img-fluid" src={skill} />
                      </div>
                      <h5 className="py-3">
                        Commencez à acquérir des compétences
                      </h5>
                      <p>
                        Amenez votre carrière à des sommets uniques dans ce
                        concours...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --SLIDES-- */}
        <div className="section-2 py-5 p-0">
          <div className="container-fluid bg-white ">
            <div className="container text-center">
              <div className="row ustify-content-center  mb-3">
                <div className="col-lg-12 col-md-12 col-sm-12 p-0">
                  <h1 className="display-4 fw-bold mb-2">Cours Spécial</h1>
                  <p className="mb-4">
                    Notre liste de cours est organisée en fonction des
                    compétences les plus <br />
                    demandées actuellement dans le pays et à l'extérieur du
                    pays.
                  </p>
                </div>
              </div>
              <div className="row">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                          <div className="shadow-box rounded">
                            <img
                              src={course1}
                              className="d-block w-100 img-fluid rounded"
                              alt=""
                            />
                            <div className="row px-3 pt-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-start">
                                  <i className="bi bi-eye-fill"></i> 3.5k Views
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="fa-solid fa-clock"></i> 7H 20Min
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h2 className="text-start"> Graphic Design</h2>
                                <p className="text-start">Master course</p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="bi bi-star-fill text-warning me-2"></i>
                                  4.2
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h3 className="text-start">
                                  $15.000{" "}
                                  <span className="text-secondary">
                                    {" "}
                                    $22.00
                                  </span>
                                </h3>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <button
                                  className="btn btn-sm button-buy"
                                  type="button"
                                  onClick={() => Navigate("/login")}
                                >
                                  <h5>Acheter maintenant</h5>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="shadow-box rounded">
                            <img
                              src={course2}
                              className="d-block w-100 img-fluid rounded"
                              alt=""
                            />
                            <div className="row px-3 pt-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-start">
                                  <i className="bi bi-eye-fill"></i> 2.5k Views
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="fa-solid fa-clock"></i> 6H 20Min
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h2 className="text-start"> UI/UX Design</h2>
                                <p className="text-start">Creative Course</p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="bi bi-star-fill text-warning me-2"></i>
                                  4.2
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h3 className="text-start">
                                  $25.000{" "}
                                  <span className="text-secondary">
                                    {" "}
                                    $30.00
                                  </span>
                                </h3>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <button
                                  className="btn btn-sm button-buy"
                                  type="button"
                                  onClick={() => Navigate("/login")}
                                >
                                  <h5>Acheter maintenant</h5>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="shadow-box hg rounded">
                            <img
                              src={course3}
                              class="d-block w-100 img-fluid rounded"
                              alt=""
                            />
                            <div className="row px-3 pt-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-start">
                                  <i className="bi bi-eye-fill"></i> 4.5k Views
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="fa-solid fa-clock"></i> 9H 20Min
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center py-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h2 className="text-start">Web Design</h2>
                                <p className="text-start">Web Programming</p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="bi bi-star-fill text-warning me-2"></i>
                                  4.2
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h3 className="text-start">
                                  $22.000{" "}
                                  <span className="text-secondary">
                                    {" "}
                                    $30.00
                                  </span>
                                </h3>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <button
                                  className="btn btn-sm button-buy"
                                  type="button"
                                  onClick={() => Navigate("/login")}
                                >
                                  <h5>Acheter maintenant</h5>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="shadow-box rounded">
                            <img
                              src={specialOne}
                              className="d-block w-100 img-fluid rounded"
                              alt=""
                            />
                            <div className="row px-3 pt-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-start">
                                  <i className="bi bi-eye-fill"></i> 9.5k Views
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="fa-solid fa-clock"></i> 9 H
                                  27Min
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h2 className="text-start">
                                  {" "}
                                  Learning Holy Quran
                                </h2>
                                <p className="text-start">
                                  With Arabic Language
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="bi bi-star-fill text-warning me-2"></i>
                                  4.5
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h3 className="text-start">
                                  $55.000{" "}
                                  <span className="text-secondary">
                                    {" "}
                                    $60.00
                                  </span>
                                </h3>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <button
                                  className="btn btn-sm button-buy"
                                  type="button"
                                  onClick={() => Navigate("/login")}
                                >
                                  <h5>Acheter maintenant</h5>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="shadow-box rounded">
                            <img
                              src={specialTwo}
                              className="d-block w-100 img-fluid rounded"
                              alt=""
                            />
                            <div className="row px-3 pt-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-start">
                                  <i className="bi bi-eye-fill"></i> 2.5k Views
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="fa-solid fa-clock"></i> 6H 07Min
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h2 className="text-start"> Spoken English</h2>
                                <p className="text-start">
                                  International English
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="bi bi-star-fill text-warning me-2"></i>
                                  4.7
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h3 className="text-start">
                                  $25.000{" "}
                                  <span className="text-secondary">
                                    {" "}
                                    $30.00
                                  </span>
                                </h3>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <button
                                  className="btn btn-sm button-buy"
                                  type="button"
                                  onClick={() => Navigate("/login")}
                                >
                                  <h5>Acheter maintenant</h5>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="shadow-box rounded">
                            <img
                              src={specialThree}
                              class="d-block w-100 img-fluid rounded"
                              alt=""
                            />
                            <div className="row px-3 pt-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-start">
                                  <i className="bi bi-eye-fill"></i> 4.5k Views
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="fa-solid fa-clock"></i> 9H 27Min
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h2 className="text-start">
                                  Learning Japanese
                                </h2>
                                <p className="text-start">Web Programming</p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="bi bi-star-fill text-warning me-2"></i>
                                  4.2
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h3 className="text-start">
                                  $22.000{" "}
                                  <span className="text-secondary">
                                    {" "}
                                    $30.00
                                  </span>
                                </h3>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <button
                                  className="btn btn-sm button-buy"
                                  type="button"
                                  onClick={() => Navigate("/login")}
                                >
                                  <h5>Acheter maintenant</h5>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="shadow-box rounded">
                            <img
                              src={course1}
                              className="d-block w-100 img-fluid rounded"
                              alt=""
                            />
                            <div className="row px-3 pt-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-start">
                                  <i className="bi bi-eye-fill"></i> 3.5k Views
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="fa-solid fa-clock"></i> 7H 20Min
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h2 className="text-start"> Graphic Design</h2>
                                <p className="text-start">Master course</p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="bi bi-star-fill text-warning me-2"></i>
                                  4.2
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h3 className="text-start">
                                  $15.000{" "}
                                  <span className="text-secondary">
                                    {" "}
                                    $22.00
                                  </span>
                                </h3>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <button
                                  className="btn btn-sm button-buy"
                                  type="button"
                                  onClick={() => Navigate("/login")}
                                >
                                  <h5>Acheter maintenant</h5>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="shadow-box rounded">
                            <img
                              src={course2}
                              className="d-block w-100 img-fluid rounded"
                              alt=""
                            />
                            <div className="row px-3 pt-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-start">
                                  <i className="bi bi-eye-fill"></i> 2.5k Views
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="fa-solid fa-clock"></i> 6H 20Min
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h2 className="text-start"> UI/UX Design</h2>
                                <p className="text-start">Creative Course</p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="bi bi-star-fill text-warning me-2"></i>
                                  4.2
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h3 className="text-start">
                                  $25.000{" "}
                                  <span className="text-secondary">
                                    {" "}
                                    $30.00
                                  </span>
                                </h3>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <button
                                  className="btn btn-sm button-buy"
                                  type="button"
                                  onClick={() => Navigate("/login")}
                                >
                                  <h5>Acheter maintenant</h5>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="shadow-box hg rounded">
                            <img
                              src={course3}
                              class="d-block w-100 img-fluid rounded"
                              alt=""
                            />
                            <div className="row px-3 pt-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-start">
                                  <i className="bi bi-eye-fill"></i> 4.5k Views
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="fa-solid fa-clock"></i> 9H 20Min
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center py-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h2 className="text-start">Web Design</h2>
                                <p className="text-start">Web Programming</p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="bi bi-star-fill text-warning me-2"></i>
                                  4.2
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h3 className="text-start">
                                  $22.000{" "}
                                  <span className="text-secondary">
                                    {" "}
                                    $30.00
                                  </span>
                                </h3>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <button
                                  className="btn btn-sm button-buy"
                                  type="button"
                                  onClick={() => Navigate("/login")}
                                >
                                  <h5>Acheter maintenant</h5>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="shadow-box rounded">
                            <img
                              src={specialOne}
                              className="d-block w-100 img-fluid rounded"
                              alt=""
                            />
                            <div className="row px-3 pt-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-start">
                                  <i className="bi bi-eye-fill"></i> 9.5k Views
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="fa-solid fa-clock"></i> 9 H
                                  27Min
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h2 className="text-start">
                                  {" "}
                                  Learning Holy Quran
                                </h2>
                                <p className="text-start">
                                  With Arabic Language
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="bi bi-star-fill text-warning me-2"></i>
                                  4.5
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h3 className="text-start">
                                  $55.000{" "}
                                  <span className="text-secondary">
                                    {" "}
                                    $60.00
                                  </span>
                                </h3>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <button
                                  className="btn btn-sm button-buy"
                                  type="button"
                                  onClick={() => Navigate("/login")}
                                >
                                  <h5>Acheter maintenant</h5>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="shadow-box rounded">
                            <img
                              src={specialTwo}
                              className="d-block w-100 img-fluid rounded"
                              alt=""
                            />
                            <div className="row px-3 pt-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-start">
                                  <i className="bi bi-eye-fill"></i> 2.5k Views
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="fa-solid fa-clock"></i> 6H 07Min
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h2 className="text-start"> Spoken English</h2>
                                <p className="text-start">
                                  International English
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="bi bi-star-fill text-warning me-2"></i>
                                  4.7
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h3 className="text-start">
                                  $25.000{" "}
                                  <span className="text-secondary">
                                    {" "}
                                    $30.00
                                  </span>
                                </h3>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <button
                                  className="btn btn-sm button-buy"
                                  type="button"
                                  onClick={() => Navigate("/login")}
                                >
                                  <h5>Acheter maintenant</h5>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="shadow-box rounded">
                            <img
                              src={specialThree}
                              class="d-block w-100 img-fluid rounded"
                              alt=""
                            />
                            <div className="row px-3 pt-3">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-start">
                                  <i className="bi bi-eye-fill"></i> 4.5k Views
                                </p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="fa-solid fa-clock"></i> 9H 27Min
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h2 className="text-start">
                                  Learning Japanese
                                </h2>
                                <p className="text-start">Web Programming</p>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <p className="text-end">
                                  <i className="bi bi-star-fill text-warning me-2"></i>
                                  4.2
                                </p>
                              </div>
                            </div>
                            <div className="row px-3 align-items-center">
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <h3 className="text-start">
                                  $22.000{" "}
                                  <span className="text-secondary">
                                    {" "}
                                    $30.00
                                  </span>
                                </h3>
                              </div>
                              <div className="col-lg-6 col-md-12 col-sm-12">
                                <button
                                  className="btn btn-sm button-buy"
                                  type="button"
                                  onClick={() => Navigate("/login")}
                                >
                                  <h5>Acheter maintenant</h5>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="counter-section">
          <div className="container">
            <div className="row align-items-start py-5 iCon">
              <div className="col-sm-6 col-lg-3 col-sm-12">
                <div className="counter__single  text-center">
                  <img className="mentor img-fluid" src={mentor} />
                  <h2 className="section__title text-white">
                    <span className="counter-number text-white">555</span>+
                  </h2>
                  <p className="text-white PG">Nos mentor</p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 col-sm-12">
                <div className="counter__single  text-center">
                  <img className="students img-fluid" src={students} />
                  <h2 className="section__title text-white">
                    <span className="counter-number text-white">99</span>k+
                  </h2>
                  <p className="text-white PG">Nos étudiants</p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 col-sm-12">
                <div className="counter__single  text-center">
                  <img className="Course img-fluid" src={Course} />
                  <h2 className="section__title text-white">
                    <span className="counter-number text-white">107</span>+
                  </h2>
                  <p className="text-white PG">Nos cours</p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3 col-sm-12">
                <div className="counter__single  text-center">
                  <img className="award img-fluid" src={award} />
                  <h2 className="section__title text-white">
                    <span className="counter-number text-white">28</span>+
                  </h2>
                  <p className="text-white PG">Nos Primes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --SLIDES-- */}
        <div className="section-2  p-0">
          <div className="container-fluid  SCT">
            <div className="container text-center SCT1">
              <div class="row ustify-content-center  mb-3">
                <div class="col-lg-12 col-md-12 col-sm-12 p-0">
                  <h1 className="display-4 fw-bold mb-2">
                    Voyons ce que notre <br />
                    disent les étudiants ?
                  </h1>
                  <p class="mb-4">
                    Amenez votre carrière à des sommets uniques dans ce marché
                    du travail compétitif. Tout le <br />
                    les catégories dont vous avez besoin sont ici.
                  </p>
                </div>
              </div>
              <div className="row">
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 testimonials ">
                          <div className="py-3">
                            <div className="testimonials-slider text-start">
                              <i class="bi bi-quote Slider"></i>
                            </div>
                            <div className="rating">
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                            </div>
                            <p className="py-2">
                              J'ai suivi des cours sur quelques plateformes
                              d'apprentissage qui se concentraient trop sur des
                              sujets pertinents sujets et détournés de
                              l'essentiel, mais les cours d'Elearning
                            </p>
                            <div className="testimonials__slider-item__content-author d-flex  mx-2 py-4">
                              <img
                                className="jiniya img-fluid jin"
                                src={jiniya}
                              />
                              <div className="testimonials__slider mx-2 ">
                                <p>Jiniya Rahman</p>
                                <p className="designation">
                                  Font End Developer
                                </p>
                                <div className="testimonials-slider text-end">
                                  <i class="bi bi-quote Slider1"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 testimonials mx-3">
                          <div className="py-3">
                            <div className="testimonials-slider text-start">
                              <i class="bi bi-quote Slider"></i>
                            </div>
                            <div className="rating">
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                            </div>
                            <p className="py-2">
                              Je ne connaissais pas grand chose en freelance.
                              Familiarisez-vous avec la conception et les
                              projets en prenant Cours Elearning Freelancing
                              avec Adobe Illustrator. À la fin
                            </p>
                            <div className="testimonials__slider-item__content-author d-flex  mx-2 py-4">
                              <img
                                className="jakaria img-fluid jin"
                                src={jakaria}
                              />
                              <div className="testimonials__slider mx-2 ">
                                <p>Mr Jakariya Hossen</p>
                                <p className="designation">Graphic Designer</p>
                                <div className="testimonials-slider text-end">
                                  <i class="bi bi-quote Slider1"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 testimonials ">
                          <div className="py-3">
                            <div className="testimonials-slider text-start">
                              <i class="bi bi-quote Slider"></i>
                            </div>
                            <div className="rating">
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                            </div>
                            <p className="py-4">
                              Nous trouvons généralement divers tutoriels en
                              ligne en anglais. Mais maintenant, sur la
                              plateforme Elearning, je peux apprenez facilement
                              des cours standards internationaux. Et à la fin du
                              cours,
                            </p>
                            <div className="testimonials__slider-item__content-author d-flex  mx-2">
                              <img
                                className="jiniya img-fluid jin"
                                src={jiniya}
                              />
                              <div className="testimonials__slider mx-2">
                                <p>Huye Alvira</p>
                                <p className="designation">Student</p>
                                <div className="testimonials-slider text-end">
                                  <i class="bi bi-quote Slider2"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="carousel-item">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 testimonials ">
                          <div className="py-3">
                            <div className="testimonials-slider text-start">
                              <i class="bi bi-quote Slider"></i>
                            </div>
                            <div className="rating">
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                            </div>
                            <p className="py-2">
                              J'ai suivi des cours sur quelques plateformes
                              d'apprentissage qui se concentraient trop sur des
                              sujets pertinents sujets et détournés de
                              l'essentiel, mais les cours d'Elearning
                            </p>
                            <div className="testimonials__slider-item__content-author d-flex  mx-2 py-4">
                              <img
                                className="jiniya img-fluid jin"
                                src={jiniya}
                              />
                              <div className="testimonials__slider mx-2 ">
                                <p>Jiniya Rahman</p>
                                <p className="designation">
                                  Font End Developer
                                </p>
                                <div className="testimonials-slider text-end">
                                  <i class="bi bi-quote Slider1"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 testimonials mx-3">
                          <div className="py-3">
                            <div className="testimonials-slider text-start">
                              <i class="bi bi-quote Slider"></i>
                            </div>
                            <div className="rating">
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                            </div>
                            <p className="py-2">
                              Je ne connaissais pas grand chose en freelance.
                              Familiarisez-vous avec la conception et les
                              projets en prenant Cours Elearning Freelancing
                              avec Adobe Illustrator. À la fin
                            </p>
                            <div className="testimonials__slider-item__content-author d-flex  mx-2 py-4">
                              <img
                                className="jakaria img-fluid jin"
                                src={jakaria}
                              />
                              <div className="testimonials__slider mx-2 ">
                                <p>Mr Jakariya Hossen</p>
                                <p className="designation">Graphic Designer</p>
                                <div className="testimonials-slider text-end">
                                  <i class="bi bi-quote Slider1"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 testimonials">
                          <div className="py-3">
                            <div className="testimonials-slider text-start">
                              <i class="bi bi-quote Slider"></i>
                            </div>
                            <div className="rating">
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                            </div>
                            <p className="py-4">
                              Nous trouvons généralement divers tutoriels en
                              ligne en anglais. Mais maintenant, sur la
                              plateforme Elearning, je peux apprenez facilement
                              des cours standards internationaux. Et à la fin du
                              cours,
                            </p>
                            <div className="testimonials__slider-item__content-author d-flex  mx-2">
                              <img
                                className="jiniya img-fluid jin"
                                src={jiniya}
                              />
                              <div className="testimonials__slider mx-2">
                                <p>Huye Alvira</p>
                                <p className="designation">Student</p>
                                <div className="testimonials-slider text-end">
                                  <i class="bi bi-quote Slider2"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="carousel-item">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 testimonials">
                          <div className="py-3">
                            <div className="testimonials-slider text-start">
                              <i class="bi bi-quote Slider"></i>
                            </div>
                            <div className="rating">
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                            </div>
                            <p className="py-2">
                              J'ai suivi des cours sur quelques plateformes
                              d'apprentissage qui se concentraient trop sur des
                              sujets pertinents sujets et détournés de
                              l'essentiel, mais les cours d'Elearning
                            </p>
                            <div className="testimonials__slider-item__content-author d-flex  mx-2 py-4">
                              <img
                                className="jiniya img-fluid jin"
                                src={jiniya}
                              />
                              <div className="testimonials__slider mx-2 ">
                                <p>Jiniya Rahman</p>
                                <p className="designation">
                                  Font End Developer
                                </p>
                                <div className="testimonials-slider text-end">
                                  <i class="bi bi-quote Slider1"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 testimonials mx-3">
                          <div className="py-3">
                            <div className="testimonials-slider text-start">
                              <i class="bi bi-quote Slider"></i>
                            </div>
                            <div className="rating">
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                            </div>
                            <p className="py-2">
                              Je ne connaissais pas grand chose en freelance.
                              Familiarisez-vous avec la conception et les
                              projets en prenant Cours Elearning Freelancing
                              avec Adobe Illustrator. À la fin
                            </p>
                            <div className="testimonials__slider-item__content-author d-flex  mx-2 py-4">
                              <img
                                className="jakaria img-fluid jin"
                                src={jakaria}
                              />
                              <div className="testimonials__slider mx-2 ">
                                <p>Mr Jakariya Hossen</p>
                                <p className="designation">Graphic Designer</p>
                                <div className="testimonials-slider text-end">
                                  <i class="bi bi-quote Slider1"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 testimonials ">
                          <div className="py-3">
                            <div className="testimonials-slider text-start">
                              <i class="bi bi-quote Slider"></i>
                            </div>
                            <div className="rating">
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                              <i class="bi bi-star-fill"></i>
                            </div>
                            <p className="py-4">
                              Nous trouvons généralement divers tutoriels en
                              ligne en anglais. Mais maintenant, sur la
                              plateforme Elearning, je peux apprenez facilement
                              des cours standards internationaux. Et à la fin du
                              cours,
                            </p>
                            <div className="testimonials__slider-item__content-author d-flex  mx-2">
                              <img
                                className="jiniya img-fluid jin"
                                src={jiniya}
                              />
                              <div className="testimonials__slider mx-2">
                                <p>Huye Alvira</p>
                                <p className="designation">Student</p>
                                <div className="testimonials-slider text-end">
                                  <i class="bi bi-quote Slider2"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="newsletter section bg-img">
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
      </div>
    </Layout>
  );
};

export default Home;
