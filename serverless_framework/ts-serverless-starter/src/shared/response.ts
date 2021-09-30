import { APIGatewayProxyResultV2 } from "aws-lambda";

export const Response = (body: Record<string, unknown>, statusCode = 200): APIGatewayProxyResultV2 => ({
  statusCode,
  body: JSON.stringify(body),
  headers: {
    "Content-Type": "application/json",
  },
});
