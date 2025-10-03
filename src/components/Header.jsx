import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cx from 'classnames';
import Pappe from '../utils/images/pappe.gif';


const Header = () => {
  const location = useLocation();

  const baseClass = 'navigation';

  // A helper function to determine if the current link is active
  const getLinkClass = (path) => {
    const linkClass = 'navigation__list-link';

    return cx(
      linkClass,
      location.pathname === path && `${linkClass}--active`
    );
  };

  return (
    <header className='header'>
      <nav className={baseClass}>
        <p className='navigation__home'>keramikkollektivet</p>
{/*         <ul className='navigation__list'>
          <li className={getLinkClass('/')}>
            <Link to="/">HEM</Link>
          </li>
          <li className={getLinkClass('/about')}>
            <Link to="/about">OM</Link>
          </li>
          <li className={getLinkClass('/contact')}>
            <Link to="/contact">KONTAKT</Link>
          </li> 
        </ul> */}
      </nav> 
    </header>
  );
};

export default Header;
