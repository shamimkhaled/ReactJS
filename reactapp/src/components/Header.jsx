import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Header.css'
function Header() {
  return (
    <>
         <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>

         </nav>
    
    </>
  )
}

export default Header