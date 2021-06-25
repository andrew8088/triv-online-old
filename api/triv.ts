import { SlashCommand } from "@slack/bolt/dist/types/command";
import { VercelRequest, VercelResponse } from "@vercel/node";
import slack from "../lib/slack";
import { channel } from "../lib/slack/utils";

export default async (request: VercelRequest, response: VercelResponse) => {
  const body: SlashCommand = request.body;

  const { command, text, channel_id } = body;

  if (command.trim() !== "/triv") {
    return response.status(200).send(channel("Sorry, the `" + command + "` command is not supported yet"));
  }

  if (text.trim() !== "start") {
    return response.status(200).send(channel("Sorry, the `" + text + "` command is not supported yet"));
  }

  const data = await slack.conversations.members({ channel: channel_id });

  if (data.ok) {
    return response.status(200).send(channel(`Okay, preparing your trivia game!`));
  }

  return response.status(200).send(channel("Sorry, something went wrong."));
};
