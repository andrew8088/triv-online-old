import { App } from "@slack/bolt";

import { API_TOKEN, SIGNING_SECRET } from "./config";

const SLACK = new App({
  token: API_TOKEN,
  signingSecret: SIGNING_SECRET,
});

const client = SLACK.client;

export default client;
