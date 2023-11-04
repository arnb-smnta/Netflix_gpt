export const APIoptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDBKEY,
  },
};
export const posterPath = "https://image.tmdb.org/t/p/w780";
export const imgurl =
  "https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const Supported_languages = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "japanese", name: "Japanese" },
  { identifier: "vietnamese", name: "Vietnamese" },
];

export const GPTAPI_KEY = "" + process.env.REACT_APP_GPTAPI_KEY;
