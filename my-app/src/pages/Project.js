import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Projects from "../components/Projects";
import project from "../projects.json";

class Projectcards extends Component {
  state = {
    project
  };
 
  render() {
    return(
      <Wrapper>
        <Title>Betsy's Projects</Title>
        {this.state.project.map(project => (
          <Projects
            id={project.id}
            name={project.name}
            language={project.languages}
            image={project.image}
            url={project.address}
          />
        ))}
      </Wrapper>
    );    
  }
}

export default Projectcards;
