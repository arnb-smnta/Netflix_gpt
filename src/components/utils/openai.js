import OpenAI from "openai";
import { GPTAPI_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: GPTAPI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
