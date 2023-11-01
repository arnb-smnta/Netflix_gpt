import React from "react";

const VideoTitle = ({ title, details }) => {
  return (
    <div className="pt-36">
      <div>
        <h1 className="py-8">{title}</h1>
        <p className="w-4/12 py-8">{details}</p>
      </div>

      <div className="w-3/12 h-12px flex">
        <button className="bg-gray-400 text-white rounded-sm text-xl w-1/2 h-8px">
          Play
        </button>
        <button className="bg-gray-400 text-white rounded-sm text-xl w-1/2 h-8px mx-3">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
