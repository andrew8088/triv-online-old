import { ok, strictEqual as equal } from "assert";
import * as slack from "../../lib/slack";
import { channels } from "../fixtures";

const { public1 } = channels;

describe("conversations", () => {
  describe("info", () => {
    it("200s", async () => {
      const { data, status } = await slack.conversations.info(public1.id);

      equal(status, 200);
      ok(data.ok);
      equal(data.channel.id, public1.id);
      equal(data.channel.name, public1.name);
    });
  });

  describe("members", () => {
    it("200s", async () => {
      const { data, status } = await slack.conversations.members(public1.id);

      equal(status, 200);
      ok(data.ok);
      ok(data.members.length > 0);
    });
  });
});
