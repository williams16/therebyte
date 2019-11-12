import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ()=>{
  const redes = [
    /*"Twitter",
    "Instagram",  
    "Facebook",
    "Youtube",
    "GitHub",*/
    {
      nombre:"Linkedin",
      url:"https://www.linkedin.com/in/rudy-thereze-19092a93/"
    }
  ];
  
  const socialNetWork = redes.map((red,i)=><Link key={i} className="nav-link py-4" to={red.url}>{red.nombre}</Link>);
  return(
    <footer className="container-fluid mt-4">
      <nav className="nav justify-content-center" >
        {socialNetWork}  
      </nav>
      <div 
        className="footer-copyright text-center py-3" 
        style={{backgroundColor: '#09121c', opacity: '0.5', color: 'white'}}>
          copyright &copy; {new Date().getFullYear()} ThereByte
      </div>
    </footer>
  );
}

export default Footer;