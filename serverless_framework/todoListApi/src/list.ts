import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import axios from "axios";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  console.log(`Recieved event: ${JSON.stringify(event, null, 2)}`);
  console.log(`Is running locally: ${process.env.IS_OFFLINE}`);

  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

  return {
    statusCode: 200,
    body: JSON.stringify({
      items: res.data,
    }),
  };
};
