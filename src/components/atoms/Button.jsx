import React from 'react';

const Button = ({ className, disabled, type="submit", ariaLabel, children, ...others}) => {
    return <button
    aria-label={ariaLabel || null}
    className={`button ${className}`}
    disabled={disabled}
    type={type}
    {...others}
  >
    {children}
  </button>

}

export default Button;