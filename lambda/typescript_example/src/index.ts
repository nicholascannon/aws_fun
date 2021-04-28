import { Handler } from "aws-lambda";
import axios from "axios";

interface Event {
  id: number;
}

interface Response {
  message: string;
}

export const handler: Handler<Event, Response> = async (event, context) => {
  console.log(context);

  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${event.id}`);
  console.log(res.data);

  return {
    message: 'Hello from typescript lambda!'
  };
};