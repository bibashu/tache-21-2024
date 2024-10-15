import { useState } from "react";
import photoLogin from "./login_images.jpg";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";


import Input from "../../Components/input/Input.jsx";
import "../Form/Form.css";
import logo from "./learning.png";
import axios from "axios";
import Swal from "sweetalert2";
// import "bootstrap-icons/font/bootstrap-icons.css";

const Form = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://tache-21-2024.onrender.com/apprenant/login",
        { email, password }
      );
      const { token, user } = response.data;

      // Stocker le token dans localStorage
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Utiliser les données utilisateur
      console.log("Nom:", user.nom);
      console.log("Prénom:", user.prenom);
      Swal.fire({
        title: "Connexion reussi!",
        text: `Bienvenue ${user.prenom}  ${user.nom} `,
        icon: "success",
      });

       window.location.href = "./Dashboard"
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        // setError(error.response.data.message);
        // setMessage(null);
        Swal.fire({
          icon: "error",
          title: "Connexion échoué",
          text: "Mot de passe ou email invalide",
        });
        window.location.href = "./login";
      } else {
        setError("Une erreur s'est produite. Veuillez réessayer.");
        Swal.fire({
          icon: "error",
          title: "Connexion échoué",
          text: "Reeasayer plus tard",
        });
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 p-0 p-md-5 contain">
      <div className="  rounded-5 shadow-lg box ">
        <div className="row ">
          <div className="col-md-6 col-12 col-lg-6 d-flex p-0 justify-content-center  rounded-5 ">
            <img className="img-fluid rounded-start-5" src={photoLogin} />
          </div>
          <div className="col-md-6 bg-white rounded-end-5 col-12 col-lg-6 d-flex p-0 flex-column align-items-center">
            <img src={logo} className="logo  img-fluid " alt="" />
            <h6 className="pb-1 fw-bold connect ">CONNECTEZ-VOUS</h6>
            <form
              action=""
              className=" w-100  d-flex flex-column gap-2 p-5"
              onSubmit={handleSubmit}
            >
              <div className="flex-column">
                <label>Email </label>
              </div>
              <div className="inputForm w-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  viewBox="0 0 32 32"
                  height="20"
                >
                  <g data-name="Layer 3" id="Layer_3">
                    <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"></path>
                  </g>
                </svg>
                <input
                  placeholder="Entrer votre Email"
                  className="input"
                  type="text"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="true"
                />
              </div>
              <div className="flex-column">
                <label>Password </label>
              </div>
              <div className="inputForm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  viewBox="-64 0 512 512"
                  height="20"
                >
                  <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path>
                  <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path>
                </svg>
                <input
                  placeholder="Password"
                  className="input"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="true"
                />
              </div>
             
              <button
                className="button-submit"
                type="submit"
                onClick={() => Navigate("")}
              >
                Connexion
              </button>

              <div className="text-end House">
                <a
                  href=""
                  className="text-decoration-none "
                  onClick={() => Navigate("/")}
                >
                  <i class="bi bi-house"></i>
                  Accueil
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
