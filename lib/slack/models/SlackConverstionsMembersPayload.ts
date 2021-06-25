import SlackSuccessPayload from "./SlackSuccessPayload";

export default interface SlackConverstionsMembersPayload extends SlackSuccessPayload {
  members: Array<string>;
  response_metadata: {
    next_cursor: string;
  };
}
