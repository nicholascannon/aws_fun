import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { env } from "./env";
import { Response } from "./shared/response";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  console.log(`event: ${JSON.stringify(event, null, 2)}`);
  console.log(`environment: ${JSON.stringify(env)}`);

  return Response({ message: "sls ts starter", custom: env.customVar });
};
