import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';


const Layout = ({ children }) => {
  return (
      <div>
          <Navbar />
            <main>
                {children}
                <Footer />
            </main>
      </div>
  );
};


export default Layout;