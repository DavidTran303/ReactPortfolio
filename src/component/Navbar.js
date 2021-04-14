import React from 'react';
import logo from '../logo.png';
//Font Awesome from React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import{ faBars } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
   <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
      <div className= "container">
    <a className="navbar-brand" href="#" ><img className='logo' src={logo} alt ='logo'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color:"blue"}}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
      <li className="nav-item">
          <Link  to="/Aboutme">About Me</Link>
      </li>
      <li className="nav-item">
        <Link to="/Portfolio">Portfolio</Link>
      </li>
      <li className="nav-item">
          <Link to="/Contact">Contact</Link>
      </li>
    </ul>
    </div>
  </div>
</div>
</nav>
        </>
    )
}

export default Navbar;
