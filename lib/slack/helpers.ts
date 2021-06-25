import SlackSuccessPayload from "./models/SlackSuccessPayload";
import SlackErrorPayload from "./models/SlackErrorPayload";

export function isSuccess<T extends SlackSuccessPayload>(payload: T | SlackErrorPayload): payload is T {
  return payload.ok;
}
