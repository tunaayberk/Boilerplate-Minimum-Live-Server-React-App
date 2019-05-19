import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from "./assets/profile.png";

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <img src={profile} alt="profile" className="profile" />
        <h1>Hello</h1>
        <p>My name is Tuna. I'm a programmer</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Barrie and code every day</p>
            <p>I love JS-JAM</p>
            <p>
              I am from Turkey and love swimming, reading, exploring the
              universe
            </p>
            <button onClick={this.toggleDisplayBio}>Read Less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read More</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
