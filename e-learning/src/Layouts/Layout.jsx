import Navbar from 'Components/navbar/Navbar'
import Sidebar from 'Components/sidebar/Sidebar'
import React from 'react'

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      {children}
    </>
  )
}

export default Layout
