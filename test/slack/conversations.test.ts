import { strictEqual as equal } from "assert";
import * as slack from "../../lib/slack";
import { channels } from "../fixtures";

describe("conversations", () => {
  describe("info", () => {
    it("should succeed", async () => {
      const { public1 } = channels;
      const { data, status } = await slack.conversations.info(public1.id);

      equal(status, 200);
      equal(data.channel.id, public1.id);
      equal(data.channel.name, public1.name);
    });
  });
});
