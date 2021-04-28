# AWS Lambda Typescript function example
Example showing how to use Typescript with Lambda. Important info:
* the npm package for the lambda types can be seen [here](https://www.npmjs.com/package/aws-lambda) (its not offical)
* The build process should be run in a CI pipeline, not locally. This is to allow for prod only deps to be put into the artefact
* The handler is set as `dist/index.handler` (NOT `dist.index.handler`), this is because tsc builds into the `dist/` folder

## How to bootstrap and run this example

1. Bootstrap the infra with `./scripts/bootstrap-infra.sh` (creates iam roles)

2. Build the artefact with `./scripts/build.sh` (creates function.zip)

3. Run the following:

Create function:
```bash
aws lambda create-function \
    --function-name ts-function \
    --zip-file fileb://function.zip \
    --handler dist/index.handler \
    --runtime nodejs14.x \
    --role <ROLE_ARN>
```

Update function code:
```bash
aws lambda update-function-code \
    --function-name ts-function \
    --zip-file fileb://function.zip
```

Invoke function:
```bash
aws lambda invoke \
    --function-name ts-function \
    --payload '{"id": 5}' out \
    --log-type Tail \
    --query 'LogResult' \
    --output text | base64 -d
```

4. Clean up with `./scripts/cleanup.sh`