import React, { Component } from 'react';
import Wrapper from '../components/Wrapper';
import Title from '../components/Title';
import Project from '../components/Project';
import data from '../projects.json';

class Projectcards extends Component {
  state = {
    data,
  };

  render() {
    return (
      <Wrapper>
        <Title>Betsy's Projects</Title>
        {this.state.data.map((project) => (
          <Project
            id={project.id}
            name={project.name}
            language={project.langs}
            image={project.image}
            url={project.addr}
            key={project.id}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Projectcards;
