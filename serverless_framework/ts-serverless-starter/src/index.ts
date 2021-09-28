import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { env } from "./env";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  console.log(`event: ${JSON.stringify(event, null, 2)}`);
  console.log(`environment: ${JSON.stringify(env)}`);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Serverless TypeScript Starter",
    }),
  };
};
