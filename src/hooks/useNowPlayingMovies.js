import { APIoptions } from "../components/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPlayingmovie } from "../components/utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const moviedata = useSelector((store) => store.movie.newmovie);
  const dispatch = useDispatch();
  const fetchmovieapi = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      APIoptions
    );

    const json = await data.json();

    dispatch(addPlayingmovie(json.results));
  };
  useEffect(() => {
    if (!moviedata) {
      fetchmovieapi();
    }
  }, []);
};

export default useNowPlayingMovies;
