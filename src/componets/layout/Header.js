import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';

const Header = (props) => {
  const navOptions = [
    "Portafolio",
    "Habilidades",
    "Experiencia",
    "About",
    "Contacto"
  ];

  const linkOptions = navOptions.map((opc, i) =>
    <Link to={`/${opc}`} key={i} className="nav-link py-4">{opc==="About"?"Sobre mi":opc}</Link>
  );
  return (
    <header className="sticky-top">
      <Navbar expand="lg">
        <Navbar.Brand href="/">
        <img 
          className="logoHeader"
          src="/img/brand.png"
          alt="ThereByte"
        />
        </Navbar.Brand>
        <Navbar.Toggle 
          style={{borderColor:'#09121c'}} 
          aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
           {linkOptions} 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
