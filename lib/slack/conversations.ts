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

export const members = (channel: string, cursor?: string, limit?: string) => {
  const params: Record<string, any> = { channel };

  if (cursor) params.cursor = cursor;
  if (limit) params.limit = limit;

  return axios({
    method: "GET",
    url: `${BASE_URL}/conversations.members?${stringify({ channel })}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
};
