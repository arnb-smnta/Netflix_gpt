import { APIoptions } from "../components/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../components/utils/movieSlice";
import { useEffect } from "react";

const useTrailer = (movie_id) => {
  const trailerdata = useSelector((store) => store.movie.newtrailer);
  const dispatch = useDispatch();
  const fetchTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
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
    if (!trailerdata) {
      fetchTrailer();
    }
  }, []);
};

export default useTrailer;
