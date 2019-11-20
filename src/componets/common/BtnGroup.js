import React from 'react'
import classnames from 'classnames'

const BtnGroup = ({
  cols,
  label,
  id,
  type,
  className
})=>{
  console.log(className)
  return(
    <div className={classnames("form-group",{cols})}>
      <button 
        id={id} 
        type={type}
        className={classnames(className)}>
          {label}
      </button>
    </div>
  );
}

export default BtnGroup;