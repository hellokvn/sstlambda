import { Handler } from "aws-lambda";
import { v4 } from "uuid";

export const handler: Handler = async (_event) => {
  return {
    statusCode: 200,
    body: `Hello World! ${v4()}`,
  };
};
