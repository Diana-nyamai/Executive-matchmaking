import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div>
        Navbar
        <Link to='/'>home</Link>
        <Link to='/Contact'>contact</Link>
    </div>
  )
}

export default NavBar