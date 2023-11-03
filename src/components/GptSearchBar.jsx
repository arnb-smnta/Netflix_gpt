import React, { useRef } from "react";
import { lang } from "./utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "./utils/openai";
import { APIoptions } from "./utils/constants";
import { gptAddMovies } from "./utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const pLang = useSelector((store) => store.config.languagepreferance);
  const search_text = useRef();
  const getMovies = async (movie_name) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie_name +
        "&include_adult=false&language=en-US&page=1",
      APIoptions
    );
    const json = await data.json();
    return json;
  };
  const handleGptSearch = async (e) => {
    e.preventDefault();
    const gptPrompt =
      "Generate a list of 5 movie suggestions (only name without numbering) in one line separated by comma like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya based on the user's input:" +
      search_text.current.value +
      "movies";
    //make an api call to gpt api
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptPrompt }],
      model: "gpt-3.5-turbo",
    });

    const gptmovies = chatCompletion.choices[0].message.content.split(",");

    console.log(gptmovies);
    const moviePromises = gptmovies.map((movie) => getMovies(movie));
    const movieResults = await Promise.all(moviePromises);

    dispatch(
      gptAddMovies({ moviename: gptmovies, movieresults: movieResults })
    );
  };

  return (
    <div className="pt-[20%] flex justify-center">
      <form
        className="bg-black  m-6 w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={search_text}
          type="text"
          className="col-span-8 p-4 m-4"
          placeholder={lang[pLang].gptPlaceHolder}
        />
        <button
          onClick={handleGptSearch}
          className="py-2 px-4 m-4 bg-red-800 text-white rounded-lg col-span-4"
        >
          {lang[pLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
