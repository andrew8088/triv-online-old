import { VercelRequest, VercelResponse } from "@vercel/node";

export default (request: VercelRequest, response: VercelResponse) => {
  const { body, headers, query } = request;

  console.log(body);
  console.log(headers);
  console.log(query);

  response.status(200).send("ok, let's get started!");
};
