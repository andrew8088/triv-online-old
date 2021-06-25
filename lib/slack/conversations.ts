import axios, { AxiosResponse } from "axios";
import { stringify } from "querystring";
import { BASE_URL, API_TOKEN } from "./config";
import SlackConverstionsMembersPayload from "./models/SlackConverstionsMembersPayload";
import SlackErrorPayload from "./models/SlackErrorPayload";

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

type MembersResponse = AxiosResponse<SlackConverstionsMembersPayload | SlackErrorPayload>;

export const members = (channel: string, cursor?: string, limit?: string): Promise<MembersResponse> => {
  const params: Record<string, any> = { channel };

  if (cursor) params.cursor = cursor;
  if (limit) params.limit = limit;

  return axios.request({
    method: "GET",
    url: `${BASE_URL}/conversations.members?${stringify({ channel })}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
};
