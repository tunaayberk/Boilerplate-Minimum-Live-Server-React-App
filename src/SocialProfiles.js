import React, { Component } from "react";
import SOCIAL_PROFILES from "./data/socialProfiles";
import SocialProfile from "./components/SocialProfile";

class SocialProfiles extends Component {
  render() {
    return (
      <div>
        <h2>Connect with me!</h2>
        <div>
          {SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
            return (
              <SocialProfile
                key={SOCIAL_PROFILE.id}
                socialProfile={SOCIAL_PROFILE}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default SocialProfiles;
