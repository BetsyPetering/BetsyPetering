import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

function NavTabs() {
  const location = useLocation();
  return (
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
        <Link
          to='/'
          className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
        >
          About Betsy
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/portfolio'
          className={
            location.pathname === '/projects' ? 'nav-link active' : 'nav-link'
          }
        >
          Projects
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/home'
          className={
            location.pathname === '/home' ? 'nav-link active' : 'nav-link'
          }
        >
          Languages
        </Link>
      </li>
      <li className='nav-item'>
        <Link
          to='/contact'
          className={
            location.pathname === '/contact' ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
