import React from 'react';
import './navbar.css';
import logo2 from "./logo2.jpg";

import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div class="banner">
           <div class="navbar" id="navb">
              <ul>
               
               <img src={logo2} alt='logo'/>
                
              </ul>
           
               <ul>
                   <Link to='/Home'><li>Home</li></Link>
                   <Link to='/About'><li>AboutUs</li></Link>
                   <Link to='/Service'><li>Service</li></Link>
                   <Link to='/ContactUs'><li>ContactUs</li></Link>
               </ul>
           </div>
       </div>
  );
}

export default Navbar;