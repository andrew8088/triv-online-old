import { SlashCommand } from "@slack/bolt/dist/types/command";
import { VercelRequest, VercelResponse } from "@vercel/node";
import slack from "../lib/slack";
import { channel } from "../lib/slack/utils";

export default async (request: VercelRequest, response: VercelResponse) => {
  const body: SlashCommand = request.body;

  const { command, text, channel_id, trigger_id } = body;

  if (command.trim() !== "/triv") {
    return response.status(200).send(channel("Sorry, the `" + command + "` command is not supported yet"));
  }

  if (text.trim() !== "start") {
    return response.status(200).send(channel("Sorry, the `" + text + "` command is not supported yet"));
  }

  const data = await slack.conversations.members({ channel: channel_id });

  if (data.ok) {
    response.status(200).send(channel(`Okay, preparing your trivia game!`));

    const result = await slack.views.open({
      trigger_id,
      view: {
        type: "modal",
        title: {
          type: "plain_text",
          text: "Triv.Online",
        },
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "Welcome to _Triv.Online_",
            },
            accessory: {
              type: "button",
              text: {
                type: "plain_text",
                text: "Click me!",
              },
              action_id: "button_abc",
            },
          },
          {
            type: "input",
            block_id: "input_c",
            label: {
              type: "plain_text",
              text: "Players",
            },
            element: {
              type: "plain_text_input",
              action_id: "dreamy_input",
              multiline: true,
            },
          },
        ],
      },
    });
    console.log(result);
    return;
  }

  return response.status(200).send(channel("Sorry, something went wrong."));
};
