import SlackSlashCommand from "../models/SlackSlashCommand";
import { VercelRequest, VercelResponse } from "@vercel/node";

export default (request: VercelRequest, response: VercelResponse) => {
  const body: SlackSlashCommand = request.body;

  console.log(body);

  response
    .status(200)
    .send({ response_type: "in_channel", text: "ok, let's get started!" });
};
