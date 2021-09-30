import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import S3 from "aws-sdk/clients/s3";
import { env } from "./env";
import { Response } from "./shared/response";

const s3Client = new S3({ region: "ap-south-east-2" });

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  console.log(`event: ${JSON.stringify(event, null, 2)}`);
  console.log(`environment: ${JSON.stringify(env)}`);

  const buckets = await s3Client.listBuckets().promise();
  return Response({ buckets });
};
