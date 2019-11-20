import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  cols,
  onChange
}) => {
  return (
    <div className="form-group">
      <textarea
      className={classnames("form-control form-control-lg",
      {'is-invalid':error})} 
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}/>

      {info && <small className="form-text text-muted">{info}</small> }
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default TextAreaFieldGroup;

