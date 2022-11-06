import React from 'react'
import Header from './Header';
import Footer from './Footer';
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <>
        <Header/>
        <main style={{minHeight:"890px"}} id="Body">
            {children}
        </main>

        <Footer/>
    </>
  )
}

export default Layout
