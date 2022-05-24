import React from "react";
import { FaBars, FaTwitter,FaFacebook,FaInstagram } from "react-icons/fa";
import logo from "./imgg.jpeg";
// import { NavLink } from "react-router-dom";




const Navbar = () => {
 




  return (
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" style={{ height: "48px", width: "50px",paddingBottom:"6px"}}/>
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className = "nav-centerb">
        <div className="link-container show-container"></div>
          <div className="buttons">
            
            <a className="button" href='/'>Home</a>
           
            <a className="button"  href='/Login'>login</a>
           
            <a className="button" href='/Profile'>profile</a>  
           
            <a className="button" href='/Signup'>sign up</a>
            
            </div>
            </div>
           <ul className = 'social-icons' >
           <li>
             <a href='https://www.twitter.com'>
               <FaTwitter/>
               </a>


          </li>
              <li>
             <a href='https://www.facebook.com'>
               <FaFacebook/>
               </a>


          </li>
              <li>
             <a href='https://www.instagram.com'>
               <FaInstagram/>
               </a>


          </li>
        </ul>
      </div>
    
  );
};


export default Navbar;
  
