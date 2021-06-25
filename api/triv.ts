import SlackSlashCommand from "../models/SlackSlashCommand";
import { VercelRequest, VercelResponse } from "@vercel/node";
import slack from "../lib/slack";

function toChannel(res: VercelResponse, text: string): VercelResponse {
  return res.status(200).send({
    response_type: "in_channel",

    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text,
        },
      },
    ],
  });
}

export default async (request: VercelRequest, response: VercelResponse) => {
  const body: SlackSlashCommand = request.body;

  const { command, text, channel_id } = body;

  if (command.trim() !== "/triv") {
    return toChannel(response, "Sorry, the `" + command + "` command is not supported yet");
  }

  if (text.trim() !== "start") {
    return toChannel(response, "Sorry, the `" + text + "` command is not supported yet");
  }

  const data = await slack.conversations.members({ channel: channel_id });

  if (data.ok) {
    return toChannel(response, `Ready to play with ${data.members.map((memberId) => `<@${memberId}>`).join(",")}?`);
  }

  return toChannel(response, "Sorry, something went wrong.");
};
