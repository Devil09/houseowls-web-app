import React from 'react'
import navbar from './navbar.css'
import img9 from '../image/img9.png'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <div className="navbar_top">
        <div className="navbar_left">
          <img src={img9} alt="" />
        </div>
        <div className="navbar_right">
          <NavLink to='/' style={{ textDecoration: 'none', color: 'black' }}><h2>Home</h2></NavLink>
          <NavLink to='/Contact-us' style={{ textDecoration: 'none' }}> <button>Contact Us</button></NavLink>

        </div>
      </div>
    </div>
  )
}

export default NavBar;