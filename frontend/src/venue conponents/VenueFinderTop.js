import React from 'react';
import './venuefindertop.css';

const VenueFinderTop = () => {
  return (
    <div className="vftop-section">
      <div className="vfoverlay">
        <div className="vfhero-content_service">
          <h2>Welcome to</h2>
          <h1>VENUE FINDER</h1>
          <div className="vfdivider_service"></div>
          <p>FIND YOUR PERFECT VENUE</p>
        </div>
        {/* <div className="scroll-icon">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCHo0BGKexnTV_dgf4N3sga_Fs1vK-8nm6w&s" alt="Scroll Down" />
        </div> */}
      </div>
    </div>
  );
};

export default VenueFinderTop;
