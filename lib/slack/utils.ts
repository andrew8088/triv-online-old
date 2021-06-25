export const channel = (text: string) => ({
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
