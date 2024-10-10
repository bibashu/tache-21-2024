import recentone from "./footer-img/recentone.png";
import recenttwo from "./footer-img/recenttwo.png";
import recentthree from "./footer-img/recentthree.png";
import learning from "./footer-img/learning.png";
import  {useNavigate} from "react-router-dom";

const Footer = () => {
    const Navigate = useNavigate();
  return (
    <footer className="footer py-5">
      <div className="container-fluid py-5 border-bottom">
        <div className="container">
          <div class="row align-items-center g-5 mb-3">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="footer-item text-start">
                <img
                  src={learning}
                  className="img-fluid mb-1 logo"
                  alt="logo"
                />
                <p class="mb-3 text-start">
                  Elearning est l'une des principales plateformes de
                  développement des compétences en e-learning au monde. Nous
                  nous engageons à éradiquer le chômage dans le monde et à créer
                  des ressources humaines mondiales grâce au développement des
                  compétences.
                </p>
                <div class="d-flex justify-content-start">
                  <a className="me-3" hover href="">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a className="me-3" href="">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a className="me-3" href="">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="">
                    <i class="bi bi-globe"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 mb-5">
              <div class="d-flex flex-column text-start footer-item mb-5">
                <h2 class="mb-4">Bureau</h2>
                <a class="btn-link text-decoration-none mb-2" href="">
                  +221778952500
                </a>
                <a class="btn-link text-decoration-none mb-2" href="">
                  +221772555521
                </a>
                <a class="btn-link text-decoration-none mb-2" href="">
                  info@example.com
                </a>
                <a class="btn-link text-decoration-none mb-2" href="">
                  nfo@example.com
                </a>
                <a class="btn-link text-decoration-none mb-2" href="">
                  2231 Redbud Drive
                </a>
                <a class="btn-link text-decoration-none mb-2" href="">
                  MON – FRI: 9 AM – 7 PM
                </a>
                <a class="btn-link text-decoration-none" href="">
                  SAT – SUN: CLOSED
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 mb-5">
              <div class="d-flex flex-column text-start footer-item mb-5">
                <h2 class="mb-4">Liens rapides</h2>
                <a class="btn-link text-decoration-none mb-2" href=""   onClick={() => Navigate("/Accueil")}>
                  Home
                </a>
                <a class="btn-link text-decoration-none mb-2" href=""   onClick={() => Navigate("/apropos")}>
                  A propos
                </a>
                <a class="btn-link text-decoration-none mb-2" href=""   onClick={() => Navigate("/cours")}>
                  Cours
                </a>
                <a class="btn-link text-decoration-none mb-2" href=""   onClick={() => Navigate("/instructeurs")}>
                  Instructeur
                </a>
                <a class="btn-link text-decoration-none mb-2" href=""   onClick={() => Navigate("/faq")}>
                  FAQ
                </a>
                <a class="btn-link text-decoration-none mb-4" href=""   onClick={() => Navigate("/contact")}>
                  Contact
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 mb-5">
              <div class="footer-item mb-5">
                <h2 class="text-start mb-4">Cours récents</h2>
                <div className="d-flex mb-3 align-items-center">
                  <div className="section-img">
                    <img src={recentone} className="img-fluid" alt="recent-1" />
                  </div>
                  <div className="section-title1 text-start ms-3">
                    <a>Design Graphique</a>
                
                  </div>
                </div>
                <div className="d-flex mb-3 align-items-center">
                  <div className="section-img">
                    <img src={recenttwo} className="img-fluid" alt="recent-1" />
                  </div>
                  <div className="section-title1 text-start ms-3">
                    <a>Developpement Web </a>
                   
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="section-img">
                    <img
                      src={recentthree}
                      className="img-fluid"
                      alt="recent-1"
                    />
                  </div>
                  <div className="section-title1 text-start ms-3">
                    <a>UI/UX Design</a>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid-footer py-3">
        <div className="container">
          <div class="row justify-content-between copyright">
            <div class="col-lg-6 col-md-12 col-sm-12">
              <p className="text-lead">
                Copyright<i class="bi bi-c-circle me-2 ms-2"></i>
                <a href="#index.html" className="text-decoration-none">
                  2024 E-learning
                </a>
                , All right reserved.
              </p>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
              <p className="text-lead">
                Designed By{" "}
                <a href="#" class="text-white text-decoration-none ms-2 me-2">
                  elearning.teaching2024@gmail.com
                </a>{" "}
               
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;