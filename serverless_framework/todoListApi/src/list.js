'use strict';

module.exports.handler = async (event) => {
  console.log(`Recieved event: ${JSON.stringify(event, null, 2)}`);
  console.log(`Is running locally: ${process.env.IS_OFFLINE}`);

  return {
    statusCode: 200,
    body: JSON.stringify({
      items: [],
    }),
  };
};
