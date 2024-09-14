import React from "react";
import logo from "../../assets/imgs/file.png";
import { GearFill, HouseFill } from "react-bootstrap-icons";
import s from "./style.module.css"
const Sidebar = () => {
  return (
    <div className="container-fluid position-absolute z-5">
      <div className="row">
        <div className=" col-auto col-md-3 min-vh-100 shadow">
          <a
            href=""
            className="text-decoration-none d-flex align-item-center justify-content-center text-black ms-3 mt-2"
          >
            <img src={logo} className="w-50" alt="" />
            {/* <span className="ms-1 fs-4">Brand</span> */}
          </a>
          <hr className="text-secondary" />
          <ul className="nav nav-pills flex-column">
            <li className="nav-item text-black fs-4 my-1">
              <a
                href="#"
                className="nav-link text-black fs-5 "
                aria-current="page"
              >
                <GearFill className="" />
                <span className="ms-2">Dashboaard</span>
              </a>
            </li>
            <li className="nav-item text-black fs-4 my-1">
              <a
                href="#"
                className="nav-link text-black fs-5 "
                aria-current="page"
              >
                <GearFill className="" />
                <span className="ms-2">Cours</span>
              </a>
            </li>
            <li className="nav-item text-black fs-4 my-1">
              <a
                href="#"
                className="nav-link text-black fs-5 "
                aria-current="page"
              >
                <GearFill className="" />
                <span className="ms-2">Quizzes</span>
              </a>
            </li>
            <li className="nav-item text-black fs-4 my-1">
              <a
                href="#"
                className="nav-link text-black fs-5 "
                aria-current="page"
              >
                <GearFill className="" />
                <span className="ms-2">Livraison</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
