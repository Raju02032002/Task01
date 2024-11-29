import React from "react";
import "./Navbar.css";
import { FaChevronDown } from "react-icons/fa";
import image from'./Images/Screenshot 2024-11-29 125428.png'
import img2 from './Images/Screenshot 2024-11-29 125749.png'
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <img
          src={image}
        />
        <span id="cp">Untitled UI    </span>
      </div>
      <ul className="nav-links">
        <li className="nav-item">Home</li>
        <li className="nav-item">
          Products <FaChevronDown className="icon" />
        </li>
        <li className="nav-item">
          Resources <FaChevronDown className="icon" />
        </li>
        <li className="nav-item">Pricing</li>
      </ul>
      <div className="logo2">
            <img src={img2}  height='40px'/>
      </div>
    </nav>
  );
};

export default Navbar;
