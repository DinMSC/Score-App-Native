import axios from "axios";
import { config } from "./config";

const Api = axios.create({
  baseURL: config.API_URL,
});

Api.interceptors.request.use((conf) => {
  conf.params = { ...conf.params, api_token: config.API_KEY };

  return conf;
});

export default Api;
