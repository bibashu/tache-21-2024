import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { GearFill, HouseFill } from "react-bootstrap-icons";
import s from "./style.module.css";
 // Ensure to apply styles from the CSS module
 import logo from "../../assets/imgs/learning.png"
 
const Sidebar = ({ currentPage }) => {

  return (
    <div className="sidebar" data-background-color="dark">
      <div className="sidebar-logo">
        <div className="logo-header" data-background-color="dark">
          <Link to="/" className="logo">
            <img
              src={logo}
              alt="navbar brand"
              className="navbar-brand w-75 mt-0 mt-lg-5 img-fluid"
              
            />
          </Link>
          <div className="nav-toggle">
            <button className="btn btn-toggle toggle-sidebar">
              <i className="gg-menu-right"></i>
            </button>
            <button className="btn btn-toggle sidenav-toggler">
              <i className="gg-menu-left"></i>
            </button>
          </div>
          <button className="topbar-toggler more" aria-label="More options">
            <i className="gg-more-vertical-alt"></i>
          </button>
        </div>
      </div>
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-secondary">
            <li className={`nav-item ${currentPage === '/dash' ? 'active' : ''} mt-5`}>
              <Link to="/Dashboard">
                <i className="fa fa-home"></i>
                <span className="sub-item">Dashboard</span>
              </Link>
            </li>

            <li className="nav-section">
              <span className="sidebar-mini-icon">
                <i className="fa fa-ellipsis-h"></i>
              </span>
              <h4 className="text-section">Modules</h4>
            </li>

            {[
             
              { path: '/coursdash', label: 'Cours', icon: 'fas fa-book' },
              { path: '/Quiz', label: 'Quizzes', icon: 'fas fa-question-circle' },
              { path: '/projet', label: 'Projects', icon: 'fas fa-folder-open' },
              { path: '/livraison', label: 'Livraisons', icon: 'fas fa-paper-plane' }
            ].map((item) => (
              <li key={item.path} className={`nav-item ${currentPage === item.path ? 'active' : ''}`}>
                <Link to={item.path}>
                  <i className={item.icon}></i>
                  <p>{item.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;