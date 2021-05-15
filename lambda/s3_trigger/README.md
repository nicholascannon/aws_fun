# AWS Lambda S3 trigger example

Trigger a lambda function when an object is created in an s3 bucket. AWS tutorial reference can be found [here](https://docs.aws.amazon.com/lambda/latest/dg/with-s3-tutorial.html#with-s3-tutorial-create-policy).

The lambda function recieves info on the object that has landed and the bucket it's in, the notification event does not contain the actual data, you must use boto3 to get the object data. In this lambda, it gets the bucket name and key for the object created and uses boto to fetch its contents.

## How to run

Run the scripts in the `scripts` folder in order, run the `cleanup` script to delete all resources.

## Notes

- You need to allow s3 to invoke the lambda function, it's also a good idea to only allow your account to trigger the lambda too. This is done using this command:
```bash
# allow the s3 bucket to invoke lambda
aws lambda add-permission \
    --function-name s3-py-example \
    --principal s3.amazonaws.com \
    --statement-id s3invoke \
    --action "lambda:InvokeFunction" \
    --source-arn arn:aws:s3:::aws-fun-s3-trigger-123 \
    --source-account 696091413426 # important!
```

- You need to setup s3 notifications that invoke the lambda. Can also hook up SNS and SQS the same way. Do this with:
```bash
aws s3api put-bucket-notification-configuration \
    --bucket aws-fun-s3-trigger-123 \
    --notification-configuration file://notification.json
```

- If the lambda is reading data from s3, don't forget to give it's execution role permissions to s3!

Everything else is largely the same as setting up a regular lambda.
