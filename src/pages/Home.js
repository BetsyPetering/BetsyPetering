import React from 'react';
import '../reset.css';
import '../App.css';
import languages from './languages.png';

const Home = () => (
  <div>
    <h1 className='cont'>Coding Experience</h1>
    <img src={languages} id='langImg' alt='coding languages' />
  </div>
);

export default Home;
