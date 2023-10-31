import React from "react";

const VideoTitle = ({ title, details }) => {
  return (
    <div className="pt-36">
      <div>
        <h1>{title}</h1>
        <p>{details}</p>
      </div>

      <div>
        <button>Play</button>
        <button>More info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
