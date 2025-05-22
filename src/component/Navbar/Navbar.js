import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  return (
    <>
    <nav className='navbar'>
      <div className='div1'>
      <NavLink className='search-bar'>Search</NavLink>
      <NavLink to ='/' className='nav-item'>Home</NavLink>
      <NavLink  to ='/About' className='nav-item'>About</NavLink>
      <NavLink  to ='/Cart' className='nav-item'>Cart</NavLink>
      <NavLink to ='/Login' className='nav-item'>Login</NavLink>
      <NavLink to ='/SignUp' className='nav-item'>SignUp</NavLink>
      </div>

    </nav>
    </>
  )
}

export default Navbar