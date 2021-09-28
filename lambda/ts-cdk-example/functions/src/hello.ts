import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { env } from "./env";

export const handler: APIGatewayProxyHandlerV2 = async (event, _context) => {
  console.log(`Recieved event: ${JSON.stringify(event)}`);
  console.log(`env: ${JSON.stringify(env)}`);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello, world!",
    }),
  };
};
