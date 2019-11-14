import React from 'react'

const ItemExp = ({descripcion}) => {
  return(
    descripcion.map((item,i) =>{
      return(
        <div key={i} className="text-justify">
         <p className="mt-1">{item}</p>
        </div>
      );
    })
  ) 
} 

export default ItemExp;