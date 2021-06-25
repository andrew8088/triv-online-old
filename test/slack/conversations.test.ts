import { ok, strictEqual as equal } from "assert";
import slack from "../../lib/slack";
import { channels } from "../fixtures";

const { public1 } = channels;

describe("conversations", () => {
  describe("info", () => {
    it("200s", async () => {
      const data = await slack.conversations.info({ channel: public1.id });

      ok(data.ok);
      equal(data.channel.id, public1.id);
      equal(data.channel.name, public1.name);
    });
  });

  describe("members", () => {
    it("200s", async () => {
      const data = await slack.conversations.members({ channel: public1.id });

      ok(data.ok);
      ok(data.members.length > 0);
    });
  });
});
