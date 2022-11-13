import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

export const Header = () => {
  return (
      <nav>
        <h1>TechUx.</h1>
        <main>
            <HashLink to={"/#home"} >Home</HashLink>
            <HashLink to={"/#about"} >About</HashLink>
            <Link to={"/services"} >Services</Link>
            <HashLink to={"/#brands"} >Brands</HashLink>
            <Link to={"/contact"} >Contact</Link>
        </main>
      </nav>
  )
}
