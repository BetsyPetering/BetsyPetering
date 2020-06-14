import React from 'react';
import '../../reset.css';
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
            <strong>Project:</strong>{' '}
            <a href={props.github} target='_blank' rel='noopener noreferrer'>
              {' '}
              {props.name}
            </a>
          </li>
          <li>
            <strong>Languages:</strong> {props.language}
          </li>
          <li>
            <strong>View Project:</strong>{' '}
            <a href={props.url} target='_blank' rel='noopener noreferrer'>
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
