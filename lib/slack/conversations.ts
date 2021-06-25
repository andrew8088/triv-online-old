import axios from "axios";
import { stringify } from "querystring";
import { BASE_URL, API_TOKEN } from "./config";

export const info = (channel: string) => {
  return axios({
    method: "GET",
    url: `${BASE_URL}/conversations.info?${stringify({ channel })}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
};
