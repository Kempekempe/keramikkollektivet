import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import '../styles/_footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>&copy; 2025 Keramikkollektivet</p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} className="footer__email-icon" />
        keramikkollektivetmalmo@gmail.com
      </p>
      <div className='footer__curve'></div>
    </footer>
  );
};

export default Footer;
