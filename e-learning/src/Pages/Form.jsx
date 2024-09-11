import { useState } from "react";
import formulaire from "../assets/formulaire.jpeg";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase.js";

const Form = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Connexion réussie !");
    } catch (error) {
      console.error("Erreur de connexion : ", error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 bg-primary form">
          <img className="mt-5 formulaire" src={formulaire} />
          <div className="text-center fw-bold txte py-5">
            <div className="txte"> Help You Switch Careers </div>
            <div className="txte">to Become a Programmer </div>
          </div>
          <div className="text-center txte1 ">
            <div className="txte"> Additional classes that you can learn </div>
            <div className="txte">anywhere and anytime! </div>
          </div>
        </div>
        <div className="col-lg-6 py-5">
          <div className="text-center text-primary display-5 fw-bold">
            E-LEARNING
          </div>
          <div className="text-center py-5">
            <h4>Welcome, Back!</h4>
            <p>Please enter your email and password to enter the application</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="text-center">
              <input
                className="rounded me-md-2 btn-lg px-4"
                type="text"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="text-center position-relative py-3">
              <input
                type={showPassword ? "text" : "password"}
                className="rounded input me-md-2 btn-lg px-4"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
              <div
                className="input-group-append visibilite"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                <span className="input-group-text classe">
                  <i
                    className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                  />
                </span>
              </div>
            </div>
            <div className="text-end txt">
              <a href="#" className="text-decoration-none">
                {" "}
                Forgot PassWord?
              </a>
            </div>
            <div className="text-center Btn ">
              <Button
                type="submit"
                className="btn-login btn-primary btn-lg rounded me-md-2 btn-lg px-4 "
                onClick={() => Navigate("/Users")}
              >
                Login{" "}
              </Button>
            </div>
            <div className="text-center">
              <p>
                don't nave account?{" "}
                <a
                  className="fw-bold text-decoration-none"
                  onClick={() => Navigate("/Sign")}
                >
                  {" "}
                  Sign in
                </a>
              </p>
            </div>

            <div className="row d-inline">
              <div className="col-lg-12 px-5">
                <div className="divider">
                  <span className="line"></span>
                  <span className="separator">Or</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className="row ms-5">
              <div className="col-lg-12 text-center">
                <a href="" className="me-3 text-decoration-none">
                  {" "}
                  <i class="icon bi bi-facebook"></i>
                </a>
                <a href="" className="me-3 text-decoration-none">
                  {" "}
                  <i class="icon bi bi-google"></i>
                </a>
                <a href="" className="me-3 text-decoration-none">
                  {" "}
                  <i class="icon bi bi-twitter"></i>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
