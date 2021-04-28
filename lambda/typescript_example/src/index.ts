import { Handler } from "aws-lambda";
import axios from "axios";

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

  console.log("Results from API:");
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
  console.log(res.data);

  return {
    message: 'Hello from typescript lambda!'
  };
};