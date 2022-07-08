import React from "react";
import logo2 from "./logo2.jpg";
import { Link } from 'react-router-dom';
import"./Navbar.css";


function Navbar() {
  return (
      <div className="navbar">
        <div className="leftSide">
        <img src={logo2} alt='logo'/>
    </div>
    <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/about">AboutUs</Link>
        <Link to="/service">Service</Link>
    </div>
    </div>
  );
}

export default Navbar;