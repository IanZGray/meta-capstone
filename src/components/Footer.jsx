import React from 'react'
import logo from '../images/logo-vertical-white.png'

function Footer() {
  return (
    <div className='footer' >
        <img src={logo} alt='little lemon logo' />
        <ul className='footerList' >
            <li><h4>Doormat Navigation</h4></li>
            <li><p>Home</p></li>
            <li><p>About</p></li>
            <li><p>Menu</p></li>
            <li><p>Reservations</p></li>
            <li><p>Order Online</p></li>
            <li><p>Login</p></li>
        </ul>
        <ul className='footerList' >
            <li><h4>Contact</h4></li>
            <li><p>Address</p></li>
            <li><p>Phone Number</p></li>
            <li><p>Email</p></li>
        </ul>
        <ul className='footerList' >
            <li><h4>Social Media Links</h4></li>
            <li><p>Address</p></li>
            <li><p>Phone Number</p></li>
            <li><p>Email</p></li>
        </ul>
    </div>
  )
}

export default Footer