import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav} from 'react-bootstrap';

function NavBar() {
  return (
 <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">David Tran</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#contact">Contact</Nav.Link>
      <Nav.Link href="#portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#link">LinkedIn</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavBar;