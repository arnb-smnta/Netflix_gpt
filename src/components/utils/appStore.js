import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import GptReducer from "./gptSlice";
import ConfigReducer from "./configSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gpt: GptReducer,
    config: ConfigReducer,
  },
});

export default appStore;
