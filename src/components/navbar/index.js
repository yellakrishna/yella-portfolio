import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <div className="nav-container">
      <img
        src="yellakrishna.jpg"
        alt="fish2"
        style={{ height: 40, width: 50, borderRadius:50 }}
      />
      <nav ref={navRef}>
        <NavLink to="/">Home</NavLink>
        
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="*"></NavLink>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      
    </div>
    
  );
};

export default Navbar;
