import { Bell, Envelope, Search } from 'react-bootstrap-icons';
import {  useNavigate } from 'react-router-dom'; // Importer useHistory
import s from './style.module.css';
import profil from "../../assets/profil.jpeg";

const Navbar = ({ userDatas }) => {
  const navigate = useNavigate(); // Créer un objet history

  // Optional: Handle cases where userDatas might be null or undefined
  const nom = userDatas?.nom || ''; // Fallback to '' if not available
  const prenom = userDatas?.prenom || ''; // Fallback to '' if not available
  const email = userDatas?.email || 'email@example.com'; // Fallback email
  
  const handleLogout = () => {
    // Supprimer le token d'authentification du stockage local
    localStorage.removeItem("authToken");

    // Rediriger l'utilisateur vers la page de connexion
    navigate("/login",  { replace: true });

    console.log("Déconnexion réussie");
  };

  return (
    <nav className="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
      <div className="container-fluid">
        <nav className="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
          <div className="input-group">
            <div className="input-group-prepend">
              <button type="submit" className="btn btn-search pe-1">
                <i className="fa fa-search search-icon"></i>
              </button>
            </div>
            <input type="text" placeholder="Search ..." className="form-control" />
          </div>
        </nav>

        <ul className="navbar-nav topbar-nav ms-md-auto align-items-center">
          <li className="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" aria-haspopup="true">
              <i className="fa fa-search"></i>
            </a>
            <ul className="dropdown-menu dropdown-search animated fadeIn">
              <form className="navbar-left navbar-form nav-search">
                <div className="input-group">
                  <input type="text" placeholder="Search ..." className="form-control" />
                </div>
              </form>
            </ul>
          </li>
          <li className="nav-item topbar-icon dropdown hidden-caret">
            <a className="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-envelope"></i>
            </a>
            <ul className="dropdown-menu messages-notif-box animated fadeIn" aria-labelledby="messageDropdown">
              <li>
                <div className="dropdown-title d-flex justify-content-between align-items-center">
                  Messages
                  <a href="#" className="small">Mark all as read</a>
                </div>
              </li>
              <li>
                <div className="message-notif-scroll scrollbar-outer">
                  <div className="notif-center">
                    {/* Sample messages (You can fetch real messages here) */}
                    <a href="#">
                      <div className="notif-img">
                        <img src="assets/img/jm_denis.jpg" alt="Img Profile" />
                      </div>
                      <div className="notif-content">
                        <span className="subject">Jimmy Denis</span>
                        <span className="block"> How are you ? </span>
                        <span className="time">5 minutes ago</span>
                      </div>
                    </a>
                    {/* More messages... */}
                  </div>
                </div>
              </li>
              <li>
                <a className="see-all" href="">See all messages<i className="fa fa-angle-right"></i></a>
              </li>
            </ul>
          </li>
          <li className="nav-item topbar-icon dropdown hidden-caret">
            <a className="nav-link dropdown-toggle" href="#" id="notifDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-bell"></i>
              <span className="notification"></span>
            </a>
            <ul className="dropdown-menu notif-box animated fadeIn" aria-labelledby="notifDropdown">
              <li>
                <div className="dropdown-title">
                  You have 4 new notifications
                </div>
              </li>
              <li>
                <div className="notif-scroll scrollbar-outer">
                  <div className="notif-center">
                    <a href="#">
                      <div className="notif-icon notif-primary">
                        <i className="fa fa-user-plus"></i>
                      </div>
                      <div className="notif-content">
                        <span className="block">Livraison sur le projet: "</span>
                        <span className="time">5 minutes ago</span>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a className="see-all" href="">See all notifications<i className="fa fa-angle-right"></i></a>
              </li>
            </ul>
          </li>

          <li className="nav-item topbar-user dropdown hidden-caret">
            <a className="dropdown-toggle profile-pic" data-bs-toggle="dropdown" href="#" aria-expanded="false">
              <div className="avatar-sm">
                <img id="profile-picture-nav" src={profil} alt="..." className="avatar-img rounded-circle" />
              </div>
              <span className="profile-username">
                <span className="op-7"> {prenom} </span>
                <span className="fw-bold" id="username">{nom}</span>
              </span>
            </a>
            <ul className="dropdown-menu dropdown-user animated fadeIn">
              <div className="dropdown-user-scroll scrollbar-outer">
                <li>
                  <div className="user-box">
                    <div className="avatar-lg">
                      <img id="profile-picture-large" src={profil}  alt="image profile" className="avatar-img rounded" />
                    </div>
                    <div className="u-text">
                      <h4 id="username-big">{prenom + " " + nom}</h4>
                      <p className="text-muted" id="email">{email}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#" id="logout" onClick={handleLogout}>Deconnexion</a> {/* Lien de déconnexion avec gestion de l'événement */}
                </li>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
