import React from 'react'
import aboutInfo from './aboutInfo'
import perfil from './perfil'
import isEmpty from '../../validation/is_empty'

const About = () => {
  return (
    <div 
      className="container m-3"
      style={{backgroundColor:"#f8f9fa"}}>
      <div 
        className="row aboutMe justify-content-md-center"
        style= {{paddingTop: "10px"}}>
        <div className="col-8 m-auto">
          <div 
            className="card card-body text-center m-auto"
            style={{backgroundColor:"aliceblue"}}>
          <figure className="text-center imgAbout">
          <img src={perfil.avatar} alt="" className="rounded-circle"/>
              <figcaption>Rudy Thereze</figcaption>
          </figure>
          <p>{isEmpty(perfil.location)?null:(<span>{perfil.location}</span>)}</p>
          <p>
            {isEmpty(perfil  && perfil.linkedin)
            ?null
            :(<a href={perfil && perfil.linkedin} 
              className="p-2"
              target="_blank"
              rel="noopener noreferrer">
              <img 
                src = "/img/icon/linkedin_icon.png"
                alt = "Linkedin"
                style ={{ maxWidth: "16px", height: "auto"}}/>
            </a>)}
          </p>
          </div>
        </div>
          <div className="col-12 text-justify p-4 mt-3 txtAbout">
            <p>{aboutInfo}</p>
          </div>
        </div>
      </div>
      );
    }
    
export default About;