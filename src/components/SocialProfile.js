import React, { Component } from "react";

class SocialProfile extends Component {
  render() {
    const { link, image } = this.props.socialProfile;

    return (
      <span>
        <a href={link}>
          <img
            src={image}
            alt="social-profile"
            style={{ width: 35, height: 35, margin: 10 }}
          />
        </a>
      </span>
    );
  }
}

export default SocialProfile;
