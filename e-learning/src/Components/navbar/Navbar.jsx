import React from "react";
import logo from "../../assets/imgs/file.png";

const Navbar = () => {
  return (
    <div className="shadow-lg border w-25 vh-100">
      <div className="d-flex justify-content-center p-0">
        <img src={logo} className="w-50 img-fluid" alt="" />
      </div>
      <hr />
      <div>
        <ul className="d-flex flex-column list-unstyled gap-3 fs-5 pe-2">
          <li className="d-flex border">
            <p> Dashboard</p>
            <i className="fa fas-plane"></i>
          </li>
          <li className="d-flex">
            <p> Cours</p>
            <i className="fa fas-plane"></i>
          </li>
          <li className="d-flex">
            <p> Quizzes</p>
            <i className="fa fas-plane"></i>
          </li>
          <li className="d-flex">
            <p> Livraisons</p>
            <i className="fa fas-plane"></i>
          </li>
        </ul>
      </div>
      je suis un navbar
    </div>
  );
};

export default Navbar;
