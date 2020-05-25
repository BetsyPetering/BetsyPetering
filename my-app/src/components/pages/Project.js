import React from "react";
import Projects from "./components/Projects";

function Portfolio() {
  return (
    <div>
      <h2>Betsy's Projects</h2>
      {this.state.Projects.map((project) => (
        <Projects
          id={project.id}
          name={project.name}
          language={project.languages}
          image={project.image}
          extra={project.extra}
        />
      ))}
    </div>
  );
}

export default Portfolio;
