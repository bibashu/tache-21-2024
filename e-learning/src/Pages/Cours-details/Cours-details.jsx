import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import instructor from "./cours-detail-img/instructor.png";
import aboutcourse from "./cours-detail-img/aboutcourse.png";
import alvira from "./cours-detail-img/alvira.png";
import jiniya from "./cours-detail-img/jiniya.png";
import user from "./cours-detail-img/user.png";
import special2 from "./cours-detail-img/special2.png";
import camera from "./cours-detail-img/camera.png";
import stickers from "./cours-detail-img/stickers.png";
import gif from "./cours-detail-img/gif.png";
import documents from "./cours-detail-img/documents.png";
import Layout from "../../Components/Layout";

const CoursDetails = () => {
  const Navigate = useNavigate();

  return (
    <Layout>
      {/* BREADCRUMB*/}
      <div className="breadcrumb py-5">
        <div class="container pt-5">
          <div class="row  pt-5 align-items-center">
            <div class="col-lg-6">
              <div class="banner-content">
                <h1 class="section-title">Cours Detailes</h1>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="banner-breadcrumb d-flex justify-content-sm-end  justify-content-lg-end">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/" className="text-decoration-none">
                        Accueil
                      </Link>
                    </li>
                    <li class="breadcrumb-item">
                      <Link
                        to="/cours"
                        className="text-decoration-none"
                        onClick={() => Navigate("/cours")}
                      >
                        Cours
                      </Link>
                    </li>
                    <li
                      class="breadcrumb-item active"
                      aria-current="cours-details"
                      onClick={() => Navigate("/CoursDetails")}
                    >
                      Cours Detailes
                    </li>
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
                    Devenez compétent et confiant en anglais parlé dans la vie
                    de tous les jours. Inscrivez-vous au cours « Spoken English
                    at Home » pour devenir compétent en anglais parlé.
                  </p>
                </div>
                <div className="course-details-instructor group">
                  <h4>Instructeur</h4>
                  <div className="course-instructor-meta group">
                    <div className="thumb">
                      <img src={instructor} alt="Image" />
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
                    <li>
                      Parlez anglais avec une prononciation correcte sans effort
                      à l'école, au collège ou au bureau.
                    </li>
                    <li>
                      TParler anglais intelligemment dans différentes situations
                      de la vie quotidienne.
                    </li>
                    <li>
                      Surmontez rapidement la timidité et l’inertie de parler en
                      anglais.
                    </li>
                    <li>
                      La prononciation correcte de nombreux mots anglais qui
                      étaient jusqu'à présent connus comme erronés. Parler
                      anglais pour les entretiens d'embauche, les présentations,
                      les soutenances, les
                    </li>
                    <li>
                      réunions avec des clients nationaux et étrangers,
                      interagir avec des collègues, parler en public, entamer
                      une conversation avec un inconnu, etc.
                    </li>
                  </ul>
                </div>
                <div className="course-about group">
                  <h4>À propos du cours</h4>
                  <div className="course-about-meta">
                    <img src={aboutcourse} alt="Image" className="w-100" />
                  </div>
                  <div className="course-about-content">
                    <p>
                      arler couramment l'anglais est une compétence importante à
                      cet âge. Posséder des compétences en anglais parlé peut
                      vous aider à progresser à chaque étape de la vie.
                      L'acquisition de compétences en anglais parlé ou d'une
                      prononciation correcte de l'anglais est très importante
                      pour les études, la carrière, les examens, l'enseignement
                      supérieur à l'étranger et même les voyages à l'étranger.
                    </p>
                    <p>
                      De nombreuses personnes maîtrisent bien l'anglais, mais
                      hésitent à le parler par manque de confiance en soi. Le
                      cours en ligne « Spoken English at Home » vous aide à
                      améliorer vos compétences en anglais et à renforcer votre
                      confiance en vous.
                    </p>
                    <p>
                      Aron Finch, qui a étudié à l'Université d'Oxford, vous
                      apprendra à parler anglais avec assurance dans différentes
                      situations de la vie réelle. L'ensemble du cours est
                      enseigné dans plusieurs langues. La plupart des étudiants
                      qui ont suivi ce cours d'anglais parlé déclarent que la
                      langue du cours est facile à comprendre et à mémoriser.
                    </p>
                    <p>
                      En apprenant des manières simples de parler anglais avec
                      une prononciation correcte dans des situations réelles,
                      vous acquerrez les compétences et la confiance nécessaires
                      pour parler anglais intelligemment sans aucune inertie.
                    </p>
                  </div>
                </div>
                <div className="course-syllabus group">
                  <h4>Programme du cours</h4>
                  <div className="course-faq">
                    <div className="accordion" id="accordionExampleCollapse">
                      <div className="accordion-item">
                        <h5
                          className="accordion-header"
                          id="headingCollapseOne"
                        >
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseCollapseOne"
                            aria-expanded="true"
                            aria-controls="collapseCollapseOne"
                          >
                            Basique
                          </button>
                        </h5>
                        <div
                          id="collapseCollapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingCollapseOne"
                          data-bs-parent="#accordionExampleCollapse"
                        >
                          <div className="accordion-body">
                            <p>
                              {" "}
                              Si vous oubliez vos informations de connexion RQA,
                              veuillez vous rendre sur le site Web RQA et
                              cliquer sur « Mon compte », Mes informations, puis
                              modifier votre mot de passe.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-header"
                          id="headingCollapseTwo"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseCollapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseCollapseTwo"
                          >
                            Intermediaire
                          </button>
                        </h5>
                        <div
                          id="collapseCollapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingCollapseTwo"
                          data-bs-parent="#accordionExampleCollapse"
                        >
                          <div className="accordion-body">
                            <p>
                              {" "}
                              Si vous oubliez vos informations de connexion RQA,
                              veuillez vous rendre sur le site Web RQA et
                              cliquer sur « Mon compte », Mes informations, puis
                              modifier votre mot de passe.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-header"
                          id="headingCollapseThree"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseCollapseThree"
                            aria-expanded="false"
                            aria-controls="collapseCollapseThree"
                          >
                            Advancé
                          </button>
                        </h5>
                        <div
                          id="collapseCollapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingCollapseThree"
                          data-bs-parent="#accordionExampleCollapse"
                        >
                          <div className="accordion-body">
                            <p>
                              {" "}
                              Si vous oubliez vos informations de connexion RQA,
                              veuillez vous rendre sur le site Web RQA et
                              cliquer sur « Mon compte », Mes informations, puis
                              modifier votre mot de passe.
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
                    <a
                      className="hero-popup"
                      className="text-decoration-none"
                      href="https://www.youtube.com/watch?v=RvreULjnzFo"
                      target="_blank"
                      title="YouTube video player"
                    >
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <p>
                      <strong className="text-bg">
                        Regardez cette vidéo pour plus de détails sur la façon
                        de payer
                      </strong>{" "}
                      pour plus de détails sur la façon de payer
                    </p>
                  </div>
                </div>
                <div className="course-certificate group">
                  <h4>
                    Commencez à apprendre aujourd'hui pour obtenir une
                    certification
                  </h4>
                  <p>
                    À la fin du cours, vous recevrez un certificat qui vous
                    permettra de :
                  </p>
                  <ul>
                    <li>Peut être ajouté à votre CV</li>
                    <li>
                      Vous pouvez partager directement sur votre profil LinkedIn
                    </li>
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
                      <p>
                        En suivant le cours « Spoken English » à la maison, j'ai
                        réalisé qu'il n'était pas nécessaire d'apprendre des
                        centaines de grammaires, mais qu'il fallait des
                        techniques. J'ai appris à parler anglais très facilement
                        après avoir surmonté ma peur dans différentes
                        situations. Apprendre des techniques de maîtrise de la
                        grammaire est possible avec un professeur compétent
                        comme Aaron Finch. Et le mettre en pratique.
                      </p>
                      <div className="course-share">
                        <a href="javascript:void(0)">
                          <i className="fa-solid fa-thumbs-up"></i>Like
                        </a>
                        <a href="javascript:void(0)">
                          <i className="fa-solid fa-comment-dots"></i>
                          Commentaire
                        </a>
                        <a href="javascript:void(0)">
                          <i className="fa-solid fa-share-nodes"></i>Partager
                        </a>
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
                      <p>
                        Je me sens chanceuse de pouvoir suivre le cours
                        d'anglais parlé à la maison. Ce cours m'aide beaucoup
                        dans ma vie professionnelle.
                      </p>
                      <div className="course-share">
                        <a
                          href="javascript:void(0)"
                          className="text-decoration-none"
                        >
                          <i className="fa-solid fa-thumbs-up"></i>Like
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="text-decoration-none"
                        >
                          <i className="fa-solid fa-comment-dots"></i>
                          Commentaire
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="text-decoration-none"
                        >
                          <i className="fa-solid fa-share-nodes"></i>Partager
                        </a>
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
                        <input
                          type="text"
                          name="course-review"
                          id="courseReview"
                          placeholder="Ecrire un commentaire"
                          required="required"
                        />
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
                    <button type="submit" className="cmn-button">
                      Commentaire
                    </button>
                  </form>
                </div>
                <div className="row py-5">
                  <div className="col-lg-12">
                    <div className="pagination-wrapper">
                      <nav aria-label="...">
                        <ul className="pagination justify-content-center">
                          <li className="page-item">
                            <a className="page-link" href="#">
                              <i className="fa-solid fa-angles-left"></i>
                            </a>
                          </li>
                          <li className="page-item">
                            <a
                              className="page-link active"
                              href="#"
                              tabindex="-1"
                            >
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
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
            <div className="col-md-8 col-lg-7 col-xl-5">
              <div className="course-details-sidebar col-margin">
                <div className="course-single">
                  <div className="course-single-thumb">
                    <img src={special2} alt="Image" className="rounded w-100" />
                    <span className="tag">
                      <i className="fa-solid fa-video"></i>25+ VIDEOS
                    </span>
                  </div>
                  <div className="course-single-content p-3">
                    <div className="course-single-content-title">
                      <h5>Anglais parlé</h5>
                      <span>
                        <i className="fa-solid fa-star"></i>4.5
                      </span>
                    </div>
                    <p className="text-start">Anglais international</p>

                    <div className="course-single-content-meta">
                      <a href="#" className="text-decoration-none">
                        <i className="fa-solid fa-eye"></i>9.5k Views
                      </a>
                      <span>
                        <i className="fa-solid fa-clock"></i>9 hr 27 min
                      </span>
                    </div>
                    <ul className=" py-3">
                      <li>22 Videos</li>
                      <li>22 sets of quizzes</li>
                      <li>22 notes</li>
                      <li>22 transcripts</li>
                    </ul>
                  </div>
                </div>
                <p className="details py-3">
                  For details about the course{" "}
                  <span className="text-bg">Call: 5659595</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION-NEWSLETTERS*/}
      {/*  --SECTION-NEWSLETTERER--  */}
      <section className="newsletter section bg-img py-5">
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
    </Layout>
  );
};

export default CoursDetails;
