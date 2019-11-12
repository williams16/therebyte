import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props)=>{
  const navOptions = [
    "Portafolio",
    "Habilidades",
    "Experiencia",
    "Sobre mí",
    "Contacto"
  ];

  const linkOptions = navOptions.map((opc,i)=>
   <Link to={`/${opc}`} key={i} className="nav-link py-4">{opc}</Link>
  );
  return(
    <header className="sticky-top">
      <nav className="nav navbar navbar-expand-lg">
        <Link to="/" className="navbar-brand px-2">
          <img 
            className="logoHeader"
            src="/img/brand.png"
            srcSet="/img/brand@2x.png 2x,
              /img/brand@3x.png 3x"
            alt="ThereByte"
              
          />
        </Link>

        <button 
          className="navbar-toggler navbar-light " 
          style={{borderColor:'#09121c'}}
          type="button" 
          dataToggle="collapse" 
          dataTarget="#navbarNavDropdown" 
          ariaControls="navbarNavDropdown" 
          ariaExpanded="false" 
          ariaLabel="Toggle navigation">

          <span className="navbar-toggler-icon" style={{color:'red'}}></span>
        </button>
       
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {linkOptions}
        </div>
      </nav>
    </header>
  );
}

export default Header;
