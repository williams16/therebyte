import React from 'react'
import listExp from './listExp'
import  ListaExp from './ListaExp'

const Experiencia = () => {
  return (
    <div className="container-fluid">
      <div className="list-group">
        <div className="list-group-item list-group-item-action flex-column align-items-start ">
          {listExp.map((item,i) => <ListaExp key={i} itemExp={item} /> )}
        </div>
      </div>
    </div>

  );
}

export default Experiencia;