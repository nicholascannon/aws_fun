import { APIGatewayProxyHandlerV2 } from 'aws-lambda';

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
    console.log(JSON.stringify(event, undefined, 2));

    return {
        body: JSON.stringify({ hello: 'world' }),
        statusCode: 200,
    };
};
