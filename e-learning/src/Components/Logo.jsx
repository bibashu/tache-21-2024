import React from 'react'

const Logo = () => {
  return (
    <div className="logo-header" data-background-color="dark">
    <a href="/" className="logo">
      <img
        src="../../public/assets/img/learning.png"
        // alt="navbar brand"
        className="navbar-brand"
        height="150"
      />
    </a>
    <div className="nav-toggle">
      <button className="btn btn-toggle toggle-sidebar">
        <i className="gg-menu-right"></i>
      </button>
      <button className="btn btn-toggle sidenav-toggler">
        <i className="gg-menu-left"></i>
      </button>
    </div>
    <button className="topbar-toggler more">
      <i className="gg-more-vertical-alt"></i>
    </button>
  </div>
  )
}

export default Logo
