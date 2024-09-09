import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import  {useNavigate} from "react-router-dom";
import Button from "./Components/Button";
import elearning from "./assets/elearning.png";

const Navbar = () => {

  const Navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-white small shadow">
      <div className="container">
        <a className="navbar-brand" href="#"> 
        <img className="elearning img-fluid" src={elearning} />
        </a>
        <button
          className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
            <li className="nav-item mx-lg-3">
              <a className="nav-link active"aria-current="page"href="#" >Home</a>
            </li>
            <li className="nav-item mx-lg-3">
               <a className="nav-link" href="#">Classes</a>
            </li>
            <li className="nav-item mx-lg-3">
              <a className="nav-link" href="#">Plans</a>
            </li>
            <li className="nav-item mx-lg-3">
              <a className="nav-link" href="#">About-us</a>
            </li>
          </ul>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Button
              className="btn Login-button border-primary rounded-pill me-2 btn-lg px-4"
              onClick={() => Navigate("/login")}
            >
              Login{" "}
            </Button>
            <Button className="btn btn-primary btn-lg rounded-pill px-4" onClick={() => Navigate("/Sign")}>
            Sign in{" "}</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;