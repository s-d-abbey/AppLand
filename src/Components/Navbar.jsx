import React, {useState}from 'react';

import { Link } from "react-scroll";
import logo from '../images/logo.png';
function Navbar() {
  const [nav,setnav] = useState(false);
  const changeBackground = () =>{
    if(window.scrollY >= 50){
        setnav(true);
    }
    else{
        setnav(false)
    }
  }
  window.addEventListener('scroll', changeBackground);
  return (
    <nav className={nav ? 'nav active' : 'nav'}>
        <a href="#" className='logo'>
            <img src={logo} alt="" />
        </a>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label className='menu-icon' for="menu-btn">
            <span className="nav-icon"></span>
        </label>
        <ul className="menu">
            <li><Link activeClass="active" to="main" spy={true} smooth={true} offset={-70} duration={500}>Home</Link></li>
            <li><Link activeClass="active" to="features" spy={true} smooth={true} offset={-70} duration={500}>Features</Link></li>
            <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link></li>
            <li><Link activeClass="active" to="presentation" spy={true} smooth={true} offset={-70} duration={500}>UI SS</Link></li>
            <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar;