import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const stack = pulumi.getStack();
const project = pulumi.getProject();
const prefix = `${project}-${stack}`;

const myFunc = new aws.lambda.CallbackFunction(`${prefix}-function`, {
  runtime: 'nodejs14.x',
  policies: [aws.iam.ManagedPolicies.AWSLambdaBasicExecutionRole],
  callback: (event, context) => {
    console.log(event);
    console.log(context);
  }
});

export const functionName = myFunc.name;
