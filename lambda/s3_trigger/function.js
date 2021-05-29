const AWS = require("aws-sdk");
const s3 = new AWS.S3();

exports.handler = async (event, context) => {
  console.log(`Recieved event: ${JSON.stringify(event)}`);

  const bucket = event.Records[0].s3.bucket.name;
  const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, " "));

  try {
    const obj = await s3.getObject({
      Bucket: bucket,
      Key: key
    }).promise();

    console.log(`Object body: ${obj.Body}`);
  } catch (e) {
    console.error(e);
  }
};
