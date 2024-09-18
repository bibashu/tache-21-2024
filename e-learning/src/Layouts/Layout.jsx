import Navbar from 'Components/navbar/Navbar'
import Sidebar from 'Components/sidebar/Sidebar'
import React from 'react'

// const Layout = ({children}) => {
//   return (
//     <>
//       <Navbar />
//       <Sidebar />
//       {children}
//     </>
//   )
// }
const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar className="navbar" />
      <div className="container-fluid flex-grow-1">
        <div className="row h-100">
          <div className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
            <Sidebar />
          </div>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout
