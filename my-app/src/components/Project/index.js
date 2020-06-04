import React, { Text } from 'react';
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
            <scdtrong>Project:</scdtrong> {props.name}
          </li>
          <li>
            <strong>Languages:</strong> {props.language}
          </li>
          <li>
            <strong>View Project:</strong>{' '}
            <a href={props.url} target='_blank'>
              {' '}
              {props.title}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
