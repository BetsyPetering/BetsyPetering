import React from 'react';
import './style.css';
import linkedIn from './linkedIn.png';
import github from './github.png';

function Footer() {
  return (
    <div className='d-flex flex-row-reverse bd-highlight'>
      <a
        href='https://www.linkedin.com/in/betsy-petering-28251a167/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img id='footImg' src={linkedIn} alt='betsys linkedIn page' />
      </a>
      <a
        href='https://github.com/BetsyPetering'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img id='footImg' src={github} alt='betsys github page' />
      </a>
    </div>
  );
}

export default Footer;
