import React from 'react'
import classnames from 'classnames'

const SelectGroup = ({cols,name,options}) => {

 const selectOptions = options.map( (option, i) => {
  return(<option
    key={i}
    selected={i===0?true:false}
    value={option.value}>
      {option.label}
  </option>);
 })
  return (
    <div className={classnames("form-group",cols)}>
      <select 
        className="custom-select" 
        name={name}>
        {selectOptions}
      </select>
      <div className="invalid-feedback">Ingrese asunto</div>
    </div>
  );
};

export default SelectGroup;



