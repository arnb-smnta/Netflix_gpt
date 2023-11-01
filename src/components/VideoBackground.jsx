import React, { useEffect } from "react";
import { APIoptions } from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "./utils/movieSlice";

const VideoBackground = ({ movie_id }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movie?.newtrailer);

  const fetchTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/507089/videos?language=en-US",
      APIoptions
    );

    const json = await data.json();

    const trailer = json.results.filter((videos) =>
      videos.type.includes("Trailer")
    );

    const finaltrailer = trailer.length ? trailer[0] : json.results[0];
    dispatch(addTrailer(finaltrailer));
  };

  useEffect(() => {
    fetchTrailer();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
