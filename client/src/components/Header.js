import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    // const location = useLocation();

    return ( <header className="sticky-shrinknav-header">
    <h1 className="sticky-shrinknav-header-title open-sans">derekbardini.com</h1>
    <ul className="menu align-center sticky-shrinknav-menu">
      <li><Link to="/">
          Home
        </Link></li>
      <li><Link to="/portfolio">
          Portfolio
        </Link></li>
      <li><Link to="/contact">
          Contact
        </Link></li>
    </ul>
  </header> );
}
 
export default Header;