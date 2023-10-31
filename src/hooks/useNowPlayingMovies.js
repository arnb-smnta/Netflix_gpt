import { APIoptions } from "../components/utils/constants";
import { useDispatch } from "react-redux";
import { addPlayingmovie } from "../components/utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
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
    fetchmovieapi();
  }, []);
};

export default useNowPlayingMovies;
