import { Handler } from "aws-lambda";

interface Event {
  key1: string;
  key2: string;
  key3: string;
}

interface Response {
  message: string;
}

export const handler: Handler<Event, Response> = async (event, context) => {
  console.log(context);
  console.log(event);

  return {
    message: 'Hello from typescript lambda!'
  };
};