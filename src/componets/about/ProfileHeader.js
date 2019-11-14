import React from 'react'
import isEmpty from '../../validation/is_empty'
import perfil from './perfil'

const perfilHeader = () => {
    return (
      <div className="row">
        <div className="card card-body text-white mb-3">
      <div className="col-md-12">
        <div className="card card-body text-white mb-3">
          <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img src={perfil.avatar} alt="" className="rounded-circle"/>
              </div>
          </div>
          <div className="text-center"> 
            <h1 className="display-4 text-center">{perfil.name}</h1>
            <p>
              {isEmpty(perfil.location)?null:(<span>at {perfil.location}</span>)}
            </p>
            <p>
                {isEmpty(perfil  && perfil.linkedin)
                ?null
                :(<a href={perfil && perfil.linkedin} 
                  className="text-white p-2"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>)}
              </p>
          </div>
        </div>
      </div>
      </div>
      </div>
    )
}

export default perfilHeader;
