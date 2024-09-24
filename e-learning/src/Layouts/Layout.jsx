import Navbar from 'Components/navbar/Navbar'
import Sidebar from 'Components/sidebar/Sidebar'
import React from 'react'
import './Layout.css'; // CSS pour structurer la mise en page
import Logo from 'Components/Logo';

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
    <Sidebar />
  
      <div className="main-panel">
        <div className="main-header">
          <div className="main-header-logo">
         <Logo />
          </div>
        <Navbar />
        </div>
      </div>
        {children}
  
    
    </div>
  );
};


export default Layout
