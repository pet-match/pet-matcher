import React from 'react';
import { Link } from 'react-router-dom';
import landingStyles from '../../landingStyles.css';

const LandingComp = () => {
  return (
    <div>
      <div id="landing-header">
        <h1>Welcome to Pet-Match&copy;</h1>
        <Link className="getStartedButton" to="/signin">
          Get Started
        </Link>
      </div>
      {/* UL That displays our transitioning photos from landinStyles.css */}
      {/* Each LI corresponds to a photo with specific keyframe transitions */}
      <ul className="slideshow">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default LandingComp;
