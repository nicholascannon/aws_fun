import * as cdk from "@aws-cdk/core";
import * as apigateway from "@aws-cdk/aws-apigateway";
import * as path from "path";
import { Runtime } from "@aws-cdk/aws-lambda";
import { NodejsFunction } from "@aws-cdk/aws-lambda-nodejs";

export class TsCdkExampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const handler = new NodejsFunction(this, "hello-function", {
      runtime: Runtime.NODEJS_14_X,
      handler: "handler",
      entry: path.join(__dirname, "../functions/src/hello.ts"),
      environment: {
        MY_VAR: "my-value",
      },
      bundling: {
        minify: true,
      },
    });

    const api = new apigateway.RestApi(this, "api", {
      restApiName: "CDK TS Example API",
      description: "An example rest api",
    });

    const lambdaIntegration = new apigateway.LambdaIntegration(handler);
    api.root.addMethod("GET", lambdaIntegration);
  }
}
