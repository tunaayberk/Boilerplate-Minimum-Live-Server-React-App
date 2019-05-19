import React, { Component } from "react";
import PROJECTS from "./data/projects";
import Project from "./components/Project";

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Highlighted Projects</h2>
        <div>
          {PROJECTS.map(PROJECT => {
            return <Project key={PROJECT.id} project={PROJECT} />;
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
