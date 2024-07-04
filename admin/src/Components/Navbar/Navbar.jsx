import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='nav_logo' src={navlogo} alt="" />
      <img className='nav_profile' src={navProfile} alt="" />
    </div>
  )
}

export default Navbar
