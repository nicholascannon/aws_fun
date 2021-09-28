import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import axios from "axios";
import { env } from "./env";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  console.log(`event: ${JSON.stringify(event, null, 2)}`);
  console.log(`environment: ${JSON.stringify(env)}`);

  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

  return {
    statusCode: 200,
    body: JSON.stringify({
      items: res.data,
    }),
  };
};
