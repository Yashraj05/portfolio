import React, { useState } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color,setColor] = useState(false);
  const changeColor = ()=>{
    if(window.scrollY>=100)
    {
      setColor(true);
    }
    else{
      setColor(false);
    }
  }
  window.addEventListener('scroll',changeColor);
  return (
    <div className={color?'header header-bg':'header'}>
      <Link to="/portfolio">
        <h1>Portfolio </h1>
      </Link>
      <ul className={click ? "nav-menu active":"nav-menu"}>
        <li>
          <Link to="/portfolio">Home</Link>
        </li>
        <li>
          <Link to="/portfolio/project">Project</Link>
        </li>
        <li>
          <Link to="/portfolio/about">About me</Link>
        </li>
        <li>
          <Link to="/portfolio/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }}></FaTimes>
        ) : (
          <FaBars size={20} style={{ color: "#fff" }}></FaBars>
        )}
      </div>
    </div>
  );
}
