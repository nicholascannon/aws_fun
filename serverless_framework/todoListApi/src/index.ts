import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  console.log(`Recieved event: ${JSON.stringify(event, null, 2)}`);
  console.log(`Is running locally: ${process.env.IS_OFFLINE}`);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Serverless Todo list API",
    }),
  };
};
