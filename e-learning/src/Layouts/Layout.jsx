import Navbar from 'Components/navbar/Navbar'
import Sidebar from 'Components/sidebar/Sidebar'
import React from 'react'
import './Layout.css'; // CSS pour structurer la mise en page

const Layout = ({ children }) => {
  return (
      <>
          <Navbar />
          <div className="layout-container">
              <Sidebar />
              <main className="main-content">
                  {children}
              </main>
          </div>
      </>
  );
};


export default Layout
