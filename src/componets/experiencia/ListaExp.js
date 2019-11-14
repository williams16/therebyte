import React from 'react'
import ItemExp from './ItemExp'

const ListaExp = ({itemExp:{rol,empresa,desde,hasta,descripcion}}) =>{
  return(
    <>
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{rol}</h5>
      <small>{`${empresa}|${desde}-${hasta}`}</small>
    </div>
    <ItemExp descripcion={descripcion} />
    </>
  );
}

export default ListaExp;