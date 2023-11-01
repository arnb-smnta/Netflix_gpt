import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const Maincontainer = () => {
  const movies = useSelector((store) => store.movie?.newmovie);
  if (!movies) return;

  const mainmovie = movies[0];

  const { original_title, overview, id } = mainmovie;

  return (
    <div>
      <VideoTitle title={original_title} details={overview} />
      <VideoBackground movie_id={id} />
    </div>
  );
};

export default Maincontainer;
