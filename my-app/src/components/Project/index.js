import React from 'react';
import './style.css';

function Project(props) {
  return (
    <div className='card'>
      <div className='img-container'>
        <img alt={props.name} src={props.image} />
      </div>
      <div className='content'>
        <ul>
          <li>
            <strong>Project:</strong> {props.name}
          </li>
          <li>
            <strong>Languages:</strong> {props.language}
          </li>
          <li>
            <strong>url:</strong> {props.url}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
