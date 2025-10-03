import React from 'react';
import '../styles/_button.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Button = ({ children, onClick, className, icon, title, ...props  }) => {
  return (
    <button className={`button ${className}`} onClick={onClick} {...props}>
      {children}
      {icon && <FontAwesomeIcon icon={icon} className="button-icon" />}
    </button>
  );
};

export default Button;