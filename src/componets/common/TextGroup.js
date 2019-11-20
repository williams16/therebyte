import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const TextGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled,
  cols
}) => { 
  return (
    <div className={`form-group ${cols?cols:''}`}>
      <input 
      type={type} 
      className={classnames("form-control ",
      {'is-invalid':error})} 
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      disabled={disabled}
      value={value}/>

      {info && <small className="form-text text-muted">{info}</small> }
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
}

TextGroup.defaulProps = {
  type: 'text'
}

export default TextGroup;

