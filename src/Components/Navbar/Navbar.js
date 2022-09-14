// -- React-Router-Dom Imports
// import {navLink} from 'react-router-dom'

// -- Hooks
import { useRef } from 'react'

// -- icons
import {FaBars , FaTimes} from 'react-icons/fa'

// -- Styling file
import './Style.css'

const Navbar = () => {

  const navRef = useRef();
  
  const showNavbar=()=>{
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <h3>Life Fitness Gym</h3>
      <nav ref={navRef}>
        <a href="#programs">programs</a>
        <a href="#about">About us</a>
        <a href="/">Contact Us</a>
        <button className='nav-btn nav-close-btn' onClick={showNavbar} ><FaTimes size={24}/></button>
      </nav>
        <button className='nav-btn ' onClick={showNavbar} ><FaBars size={24}/></button>
    </header>
  )
}

export default Navbar