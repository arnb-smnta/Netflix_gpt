import React, { useEffect } from "react";

import useTrailer from "../hooks/useTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movie_id }) => {
  useTrailer(movie_id);
  const trailerVideo = useSelector((store) => store.movie?.newtrailer);

  return (
    <div className="w-screen ">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&controls=0&rel=0"
        }
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
