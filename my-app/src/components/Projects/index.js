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
            <strong>Languages:</strong> {props.langs}
          </li>
          <li>
            <strong>url:</strong> {props.addr}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
