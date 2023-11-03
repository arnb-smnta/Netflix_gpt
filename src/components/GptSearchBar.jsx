import React from "react";
import { lang } from "./utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const pLang = useSelector((store) => store.config.languagepreferance);
  return (
    <div className="pt-[20%] flex justify-center">
      <form className="bg-black  m-6 w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="col-span-8 p-4 m-4"
          placeholder={lang[pLang].gptPlaceHolder}
        />
        <button className="py-2 px-4 m-4 bg-red-800 text-white rounded-lg col-span-4">
          {lang[pLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
