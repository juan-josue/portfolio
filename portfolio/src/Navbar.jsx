import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <Link to="/">Home</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
    </>
  )
}

export default Navbar