import React from "react";
import "./style.css";

function Projects(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
        <li>
            <strong>Project:</strong> {props.name}
          </li>
          <li>
            <strong>Languages:</strong> {props.languages}
          </li>
          <li>
            <strong>url:</strong> {props.address}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
